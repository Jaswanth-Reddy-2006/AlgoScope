import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Split from 'react-split';
import { problems } from '../data/problems';
import { Problem } from '../types';
import { CodeEditor } from './CodeEditor';
import { ProblemPanel } from './ProblemPanel';
import { TestCasePanel } from './TestCasePanel';
import { TestResultPanel } from './TestResultPanel';
import { useEditorStore } from '../store/useEditorStore';
import { codeExecutor, TestResult } from '../lib/codeExecutor';

type Language = 'python' | 'javascript' | 'cpp';

const languageMap: Record<Language, { label: string; monacoLang: string }> = {
    python: { label: 'Python', monacoLang: 'python' },
    javascript: { label: 'JavaScript', monacoLang: 'javascript' },
    cpp: { label: 'C++', monacoLang: 'cpp' }
};

export function ProblemSolver() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const { setActiveProblem } = useEditorStore();

    const [problem, setProblem] = useState<Problem | null>(null);
    const [language, setLanguage] = useState<Language>('python');
    const [code, setCode] = useState('');
    const [activeTab, setActiveTab] = useState<'testcase' | 'result'>('testcase');
    const [testResults, setTestResults] = useState<TestResult[]>([]);
    const [isRunning, setIsRunning] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // New: Mode state
    const [mode, setMode] = useState<'beginner' | 'optimal'>('optimal');

    useEffect(() => {
        const foundProblem = problems.find(p => p.slug === slug);
        if (foundProblem) {
            setProblem(foundProblem);
            setActiveProblem(foundProblem.id);
            // Default to optimal code on load
            const starterCode = getStarterCodeForLanguage(foundProblem, language, 'optimal');
            setCode(starterCode);
        } else {
            navigate('/practice');
        }
    }, [slug, navigate, setActiveProblem, language]); // Added language to dep, but logic below handles language change better

    // Handle Language or Mode change
    useEffect(() => {
        if (problem) {
            const starterCode = getStarterCodeForLanguage(problem, language, mode);
            setCode(starterCode);
        }
    }, [language, problem, mode]);

    const handleRun = async () => {
        if (!problem || !problem.testCases || problem.testCases.length === 0) {
            alert('No test cases available for this problem');
            return;
        }

        setIsRunning(true);
        setActiveTab('result');
        setTestResults([]);

        const visibleTestCases = problem.testCases.filter(tc => !tc.isHidden);
        const results: TestResult[] = [];

        for (const testCase of visibleTestCases) {
            const result = await codeExecutor.runTestCase(code, testCase, language);
            results.push(result);
        }

        setTestResults(results);
        setIsRunning(false);
    };

    const handleSubmit = async () => {
        if (!problem || !problem.testCases || problem.testCases.length === 0) {
            alert('No test cases available for this problem');
            return;
        }

        setIsSubmitting(true);
        setActiveTab('result');
        setTestResults([]);

        const results: TestResult[] = [];

        for (const testCase of problem.testCases) {
            const result = await codeExecutor.runTestCase(code, testCase, language);
            results.push(result);
        }

        setTestResults(results);
        setIsSubmitting(false);

        const allPassed = results.every(r => r.passed);
        if (allPassed) {
            setTimeout(() => {
                alert('🎉 Accepted! All test cases passed!');
            }, 500);
        }
    };

    if (!problem) {
        return (
            <div className="h-screen flex items-center justify-center bg-background-dark text-slate-500">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-neon mx-auto mb-4"></div>
                    <p>Loading problem...</p>
                </div>
            </div>
        );
    }

    // Determine current complexity to display
    const currentComplexity = mode === 'beginner'
        ? (problem.beginnerComplexity || { time: '?', space: '?' })
        : (problem.optimalComplexity || problem.complexity || { time: '?', space: '?' });

    return (
        <div className="h-screen flex flex-col bg-background-dark text-slate-300">
            {/* Header */}
            <header className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-slate-900/50 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate('/practice')}
                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                        <span className="text-sm font-medium">Back to Problems</span>
                    </button>
                    <div className="h-6 w-px bg-white/10"></div>
                    <h1 className="text-lg font-bold text-white">{problem.title}</h1>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${problem.diffClass}`}>
                        {problem.difficulty}
                    </span>

                    {/* Complexity Display */}
                    <div className="flex items-center gap-3 ml-4 text-xs font-mono bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                        <div className="flex items-center gap-1.5">
                            <span className="text-slate-500">Time:</span>
                            <span className={mode === 'optimal' ? 'text-emerald-400' : 'text-amber-400'}>{currentComplexity.time}</span>
                        </div>
                        <div className="w-px h-3 bg-slate-800" />
                        <div className="flex items-center gap-1.5">
                            <span className="text-slate-500">Space:</span>
                            <span className={mode === 'optimal' ? 'text-emerald-400' : 'text-amber-400'}>{currentComplexity.space}</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    {/* Mode Toggle */}
                    <div className="flex items-center gap-1 bg-slate-950 rounded-lg p-1 border border-white/10">
                        <button
                            onClick={() => setMode('beginner')}
                            className={`px-3 py-1.5 text-xs font-bold rounded transition-all ${mode === 'beginner'
                                ? 'bg-amber-500/20 text-amber-500'
                                : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            Brute Force
                        </button>
                        <button
                            onClick={() => setMode('optimal')}
                            className={`px-3 py-1.5 text-xs font-bold rounded transition-all ${mode === 'optimal'
                                ? 'bg-emerald-500/20 text-emerald-500'
                                : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            Optimal
                        </button>
                    </div>

                    {/* Language Selector */}
                    <div className="flex items-center gap-1 bg-slate-950 rounded-lg p-1 border border-white/10">
                        {Object.entries(languageMap).map(([key, { label }]) => (
                            <button
                                key={key}
                                onClick={() => setLanguage(key as Language)}
                                className={`px-3 py-1.5 text-xs font-bold rounded transition-all ${language === key
                                    ? 'bg-accent-neon text-background-dark'
                                    : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="flex-1 overflow-hidden">
                <Split
                    className="flex h-full"
                    sizes={[40, 60]}
                    minSize={300}
                    gutterSize={8}
                    gutterStyle={() => ({
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        cursor: 'col-resize'
                    })}
                >
                    {/* Left: Problem Description */}
                    <div className="overflow-y-auto">
                        <ProblemPanel />
                    </div>

                    {/* Right: Code Editor + Test Cases */}
                    <div className="flex flex-col">
                        {/* Code Editor */}
                        <div className="flex-1 border-b border-white/5 relative">
                            {/* Mode Badge in Editor */}
                            <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
                                <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded bg-slate-900 border ${mode === 'beginner' ? 'text-amber-500 border-amber-500/20' : 'text-emerald-500 border-emerald-500/20'}`}>
                                    {mode === 'beginner' ? 'Brute Force Approach' : 'Optimal Solution'}
                                </span>
                            </div>

                            <CodeEditor
                                language={languageMap[language].monacoLang}
                                value={code}
                                onChange={(value) => setCode(value || '')}
                            />
                        </div>

                        {/* Bottom Panel: Test Cases / Results */}
                        <div className="h-64 flex flex-col bg-slate-950 border-t border-white/5">
                            {/* Tabs */}
                            <div className="flex items-center gap-4 px-4 py-2 border-b border-white/10">
                                <button
                                    onClick={() => setActiveTab('testcase')}
                                    className={`text-sm font-medium px-3 py-1.5 rounded transition-colors ${activeTab === 'testcase'
                                        ? 'bg-accent-neon/10 text-accent-neon'
                                        : 'text-slate-400 hover:text-white'
                                        }`}
                                >
                                    Testcase
                                </button>
                                <button
                                    onClick={() => setActiveTab('result')}
                                    className={`text-sm font-medium px-3 py-1.5 rounded transition-colors ${activeTab === 'result'
                                        ? 'bg-accent-neon/10 text-accent-neon'
                                        : 'text-slate-400 hover:text-white'
                                        }`}
                                >
                                    Test Result
                                </button>
                            </div>

                            {/* Tab Content */}
                            <div className="flex-1 overflow-hidden">
                                {activeTab === 'testcase' ? (
                                    problem.testCases && problem.testCases.length > 0 ? (
                                        <TestCasePanel
                                            testCases={problem.testCases}
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-slate-500">
                                            <p>No test cases available</p>
                                        </div>
                                    )
                                ) : (
                                    <TestResultPanel results={testResults} isLoading={isRunning || isSubmitting} />
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center justify-end gap-3 px-4 py-3 border-t border-white/10">
                                <button
                                    onClick={handleRun}
                                    disabled={isRunning || isSubmitting}
                                    className="px-6 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 font-medium text-sm transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span className="material-symbols-outlined text-base">play_arrow</span>
                                    {isRunning ? 'Running...' : 'Run'}
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    disabled={isRunning || isSubmitting}
                                    className="px-6 py-2 rounded-lg bg-accent-neon text-background-dark font-bold text-sm transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,255,102,0.3)] flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span className="material-symbols-outlined text-base">check_circle</span>
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </div>
                    </div>
                </Split>
            </div>
        </div>
    );
}

const getDefaultStarterCode = (lang: Language): string => {
    if (lang === 'python') return `class Solution:\n    def solve(self):\n        pass`;
    if (lang === 'javascript') return `var solve = function() {\n    // Your code here\n};`;
    return `class Solution {\npublic:\n    void solve() {\n        // Your code here\n    }\n};`;
};

const getStarterCodeForLanguage = (prob: Problem, lang: Language, mode: 'beginner' | 'optimal'): string => {
    // 1. Check for specific mode code first
    if (mode === 'beginner' && prob.beginnerCode) {
        if (typeof prob.beginnerCode === 'string') return prob.beginnerCode; // Should not happen based on new type but safe check
        if (prob.beginnerCode[lang]) return prob.beginnerCode[lang]!;
    }

    if (mode === 'optimal' && prob.codes) {
        if (prob.codes[lang]) return prob.codes[lang]!;
    }

    // 2. Fallbacks
    if (lang === 'python' && prob.starterCode) return prob.starterCode;

    // Partial construction for JS/CPP from Codes if starterCode missing
    if (lang === 'javascript' && prob.codes?.javascript) {
        return `// Starter code\n${prob.codes.javascript.split('\\n').slice(0, 3).join('\\n')}\n    // Your code here\n};`;
    }
    if (lang === 'cpp' && prob.codes?.cpp) {
        return `// Starter code\n${prob.codes.cpp.split('\\n').slice(0, 5).join('\\n')}\n        // Your code here\n    }\n};`;
    }

    return getDefaultStarterCode(lang);
};

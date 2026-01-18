import { TestCase } from '../types';

interface TestCasePanelProps {
    testCases: TestCase[];
}

export function TestCasePanel({ testCases }: TestCasePanelProps) {
    const visibleTestCases = testCases.filter(tc => !tc.isHidden);

    return (
        <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {visibleTestCases.map((testCase, index) => (
                    <div key={index} className="bg-slate-900 rounded-lg p-3 border border-white/10">
                        <div className="text-xs font-bold text-slate-400 mb-2">Case {index + 1}</div>
                        <div className="space-y-2 font-mono text-xs">
                            <div>
                                <span className="text-slate-500">Input:</span>
                                <div className="text-slate-300 mt-1 bg-slate-950 p-2 rounded">
                                    {JSON.stringify(testCase.input, null, 2)}
                                </div>
                            </div>
                            <div>
                                <span className="text-slate-500">Expected Output:</span>
                                <div className="text-emerald-400 mt-1 bg-slate-950 p-2 rounded">
                                    {JSON.stringify(testCase.expectedOutput, null, 2)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

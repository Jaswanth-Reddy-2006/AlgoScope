import { TestResult } from '../lib/codeExecutor';

interface TestResultPanelProps {
    results: TestResult[];
    isLoading: boolean;
}

export function TestResultPanel({ results, isLoading }: TestResultPanelProps) {
    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-full">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-neon mx-auto mb-2"></div>
                    <p className="text-sm text-slate-400">Running tests...</p>
                </div>
            </div>
        );
    }

    if (results.length === 0) {
        return (
            <div className="flex items-center justify-center h-full text-slate-500">
                <p>Run your code to see results</p>
            </div>
        );
    }

    const passedCount = results.filter(r => r.passed).length;
    const totalCount = results.length;
    const allPassed = passedCount === totalCount;

    return (
        <div className="h-full flex flex-col">
            {/* Summary */}
            <div className={`px-4 py-3 border-b border-white/10 ${allPassed ? 'bg-emerald-500/10' : 'bg-rose-500/10'}`}>
                <div className="flex items-center gap-2">
                    <span className={`material-symbols-outlined ${allPassed ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {allPassed ? 'check_circle' : 'cancel'}
                    </span>
                    <span className={`font-bold ${allPassed ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {allPassed ? 'All Tests Passed!' : `${passedCount}/${totalCount} Tests Passed`}
                    </span>
                </div>
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {results.map((result, index) => (
                    <div
                        key={index}
                        className={`rounded-lg p-3 border ${result.passed
                                ? 'bg-emerald-500/5 border-emerald-500/20'
                                : 'bg-rose-500/5 border-rose-500/20'
                            }`}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <span className={`material-symbols-outlined text-sm ${result.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                                    {result.passed ? 'check_circle' : 'cancel'}
                                </span>
                                <span className="text-xs font-bold text-slate-300">Test Case {index + 1}</span>
                            </div>
                            <span className="text-[10px] text-slate-500">{result.runtime}ms</span>
                        </div>

                        <div className="space-y-2 font-mono text-xs">
                            <div>
                                <span className="text-slate-500">Input:</span>
                                <div className="text-slate-300 mt-1 bg-slate-950 p-2 rounded">
                                    {JSON.stringify(result.input, null, 2)}
                                </div>
                            </div>

                            {result.error ? (
                                <div>
                                    <span className="text-rose-400">Error:</span>
                                    <div className="text-rose-300 mt-1 bg-slate-950 p-2 rounded">
                                        {result.error}
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div>
                                        <span className="text-slate-500">Expected:</span>
                                        <div className="text-emerald-400 mt-1 bg-slate-950 p-2 rounded">
                                            {JSON.stringify(result.expectedOutput, null, 2)}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-slate-500">Output:</span>
                                        <div className={`mt-1 bg-slate-950 p-2 rounded ${result.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                                            {JSON.stringify(result.actualOutput, null, 2)}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

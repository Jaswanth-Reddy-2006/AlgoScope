import { TestCase } from '../types';

export interface ExecutionResult {
    success: boolean;
    output?: any;
    error?: string;
    runtime: number;
    memory: number;
}

export interface TestResult {
    passed: boolean;
    input: any;
    expectedOutput: any;
    actualOutput?: any;
    error?: string;
    runtime: number;
}

class CodeExecutor {
    private worker: Worker | null = null;
    private pyodide: any = null;

    async executeJavaScript(code: string, testCase: TestCase): Promise<ExecutionResult> {
        return new Promise((resolve) => {
            if (!this.worker) {
                this.worker = new Worker('/codeExecutor.worker.js');
            }

            const timeout = setTimeout(() => {
                this.worker?.terminate();
                this.worker = null;
                resolve({
                    success: false,
                    error: 'Time Limit Exceeded',
                    runtime: 5000,
                    memory: 0
                });
            }, 5000);

            this.worker.onmessage = (e) => {
                clearTimeout(timeout);
                resolve(e.data);
            };

            this.worker.onerror = (error) => {
                clearTimeout(timeout);
                resolve({
                    success: false,
                    error: error.message,
                    runtime: 0,
                    memory: 0
                });
            };

            this.worker.postMessage({ code, testCase, timeout: 5000 });
        });
    }

    async executePython(code: string, testCase: TestCase): Promise<ExecutionResult> {
        try {
            if (!this.pyodide) {
                const { loadPyodide } = await import('pyodide');
                this.pyodide = await loadPyodide({
                    indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'
                });
            }

            const startTime = performance.now();

            // Prepare the test input
            const inputStr = JSON.stringify(testCase.input);

            // Wrap the code to execute it
            const wrappedCode = `
${code}

# Execute the solution
import json
test_input = json.loads('${inputStr.replace(/'/g, "\\'")}')
solution = Solution()

# Call the appropriate method based on available inputs
if hasattr(test_input, '__iter__') and not isinstance(test_input, str):
    if 'nums' in test_input and 'target' in test_input:
        result = solution.twoSum(test_input['nums'], test_input['target'])
    elif 'nums' in test_input:
        result = solution.solve(test_input['nums'])
    else:
        result = solution.solve(test_input)
else:
    result = solution.solve(test_input)

json.dumps(result)
`;

            const result = await this.pyodide.runPythonAsync(wrappedCode);
            const endTime = performance.now();
            const runtime = Math.round(endTime - startTime);

            return {
                success: true,
                output: JSON.parse(result),
                runtime,
                memory: 0
            };
        } catch (error: any) {
            return {
                success: false,
                error: error.message,
                runtime: 0,
                memory: 0
            };
        }
    }

    async executeCpp(): Promise<ExecutionResult> {
        // C++ execution would require a backend API or WASM compiler
        // For now, return a placeholder
        return {
            success: false,
            error: 'C++ execution not yet implemented. Use Python or JavaScript.',
            runtime: 0,
            memory: 0
        };
    }

    async runTestCase(
        code: string,
        testCase: TestCase,
        language: 'python' | 'javascript' | 'cpp'
    ): Promise<TestResult> {
        let result: ExecutionResult;

        switch (language) {
            case 'javascript':
                result = await this.executeJavaScript(code, testCase);
                break;
            case 'python':
                result = await this.executePython(code, testCase);
                break;
            case 'cpp':
                result = await this.executeCpp();
                break;
            default:
                result = {
                    success: false,
                    error: 'Unsupported language',
                    runtime: 0,
                    memory: 0
                };
        }

        if (!result.success) {
            return {
                passed: false,
                input: testCase.input,
                expectedOutput: testCase.expectedOutput,
                error: result.error,
                runtime: result.runtime
            };
        }

        const passed = this.compareOutputs(result.output, testCase.expectedOutput);

        return {
            passed,
            input: testCase.input,
            expectedOutput: testCase.expectedOutput,
            actualOutput: result.output,
            runtime: result.runtime
        };
    }

    private compareOutputs(actual: any, expected: any): boolean {
        // Deep equality check
        return JSON.stringify(actual) === JSON.stringify(expected);
    }

    cleanup() {
        if (this.worker) {
            this.worker.terminate();
            this.worker = null;
        }
    }
}

export const codeExecutor = new CodeExecutor();

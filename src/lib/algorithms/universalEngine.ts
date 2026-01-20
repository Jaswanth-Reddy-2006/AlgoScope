import { VisualizationStep, Problem } from "../../types";

export function generateUniversalSteps(problem: Problem, input: any): VisualizationStep[] {
    const steps: VisualizationStep[] = [];
    const category = problem.category;
    const { mainData, secondaryData, dataType } = extractData(input);

    // 1. Initial State
    steps.push({
        id: 'init',
        description: `Initializing ${problem.title} logic...`,
        state: getInitialState(category, mainData, dataType),
        explanation: {
            goal: 'Prepare Workspace',
            decision: 'Setup memory structures',
            reason: `Allocate space for ${category} processing.`,
            invariant: 'Memory ready'
        },
        insights: { timeComplexity: 'N/A', spaceComplexity: 'N/A', operations: 0, status: 'Ready' }
    });

    // 2. Select Simulation Strategy based on Category AND Data Type
    try {
        switch (category) {
            case 'Arrays':
            case 'Hash Table':
                simulateGenericArray(steps, mainData);
                break;
            case 'Two Pointers':
                simulateTwoPointers(steps, mainData, secondaryData);
                break;
            case 'Sliding Window':
                simulateSlidingWindow(steps, mainData, secondaryData);
                break;
            case 'Binary Search':
                simulateBinarySearch(steps, mainData, secondaryData);
                break;
            case 'Linked List':
                simulateLinkedList(steps, mainData);
                break;
            case 'Stack':
            case 'Queue':
                simulateStackLogic(steps, mainData);
                break;
            case 'Heap':
            case 'Priority Queue':
                simulateHeapLogic(steps, mainData);
                break;
            case 'Graphs':
            case 'Matrix':
                simulateGraphGrid(steps, mainData);
                break;
            case 'Trees':
                simulateTreeTraversal(steps, mainData);
                break;
            case 'Dynamic Programming':
                simulateDP(steps, mainData);
                break;
            case 'Backtracking':
                simulateBacktracking(steps, mainData);
                break;
            case 'Bit Manipulation':
                simulateBitLogic(steps, mainData);
                break;
            case 'Tries':
                simulateTrie(steps, mainData);
                break;
            case 'Greedy':
                simulateGreedy(steps, mainData);
                break;
            case 'Math':
                simulateMath(steps, mainData);
                break;
            default:
                simulateGenericArray(steps, mainData);
        }
    } catch (e) {
        // Fallback if simulation crashes due to bad data
        console.error("Simulation error", e);
        simulateGenericArray(steps, mainData);
    }

    return steps;
}

// --- Helper: Data Extractor ---
function extractData(input: any): { mainData: any, secondaryData: any, dataType: string } {
    // Priority keys for main data
    const arrayKeys = ['nums', 'nums1', 'height', 'prices', 'weights', 'piles', 'asteroids', 'temperatures', 'arr', 'dictionary', 'stones', 'tasks', 'profits', 'capital'];
    const stringKeys = ['s', 't', 'path', 'pattern', 's1', 'sentence', 'query', 'word'];
    const matrixKeys = ['matrix', 'grid', 'board'];
    const listKeys = ['head', 'nodes', 'l1Nodes']; // Modified to match EnhancedVisualizer fallback
    const treeKeys = ['root', 'treeLevels'];

    let mainData: any = null;
    let secondaryData: any = null;
    let dataType = 'unknown';

    // 1. Check Arrays
    for (const key of arrayKeys) {
        if (Array.isArray(input[key])) {
            mainData = input[key];
            dataType = 'array';
            break;
        }
    }

    // 2. Check Strings (if no array found OR if category prefers string like 'String')
    if (!mainData) {
        for (const key of stringKeys) {
            if (typeof input[key] === 'string') {
                mainData = input[key].split(''); // Convert to char array for visualization
                dataType = 'string';
                break;
            }
        }
    }

    // 3. Check Matrices
    if (!mainData) {
        for (const key of matrixKeys) {
            if (Array.isArray(input[key]) && Array.isArray(input[key][0])) {
                mainData = input[key];
                dataType = 'matrix';
                break;
            }
        }
    }

    // 4. Linked Lists
    if (!mainData) {
        for (const key of listKeys) {
            if (input[key]) { // Enhanced check using listKeys
                const val = input[key];
                mainData = val;
                if (Array.isArray(val)) dataType = 'linkedlist';
                // If it's a head object (not array), we might need to serialize it, but for now assume array or simple object
                else if (typeof val === 'object') dataType = 'linkedlist';
                break;
            }
        }
    }

    // 5. Trees
    if (!mainData) {
        for (const key of treeKeys) {
            if (input[key]) {
                mainData = input[key];
                dataType = 'tree';
                break;
            }
        }
    }

    // 6. Numbers/Math
    if (!mainData) {
        if (typeof input.n === 'number') {
            mainData = input.n;
            dataType = 'number';
        }
    }

    // Fallback
    if (!mainData) {
        // Try to find ANY array
        const anyArray = Object.values(input).find(v => Array.isArray(v));
        if (anyArray) {
            mainData = anyArray;
            dataType = 'array';
        } else {
            mainData = [1, 2, 3, 4, 5]; // Ultimate fallback
            dataType = 'array';
        }
    }

    // Find Secondary (Scalar target, k, days, etc.)
    const secondaryKeys = ['target', 'k', 'val', 'days', 'success'];
    for (const key of secondaryKeys) {
        if (input[key] !== undefined) {
            secondaryData = input[key];
            break;
        }
    }

    return { mainData, secondaryData, dataType };
}

function getInitialState(category: string, data: any, type: string) {
    const state: any = { activeIndices: [] };

    if (type === 'array' || type === 'string') {
        state.nums = type === 'string' ? undefined : data;
        state.chars = type === 'string' ? data : undefined;
    } else if (type === 'matrix') {
        state.grid = data;
    } else if (type === 'linkedlist') {
        state.nodes = data;
    } else if (type === 'tree') {
        state.treeLevels = data;
    } else if (type === 'number') {
        state.binary = (data as number).toString(2).padStart(8, '0');
        state.nodes = [data];
    }

    // Category specific inits
    if (category === 'Two Pointers') { state.l = 0; state.r = (data.length || 0) - 1; }
    if (category === 'Binary Search') { state.l = 0; state.r = (data.length || 0) - 1; state.mid = -1; }

    return state;
}


// --- Simulations ---

function simulateGenericArray(steps: VisualizationStep[], data: any[]) {
    // Handle if data is not array
    if (!Array.isArray(data)) data = [String(data)];

    const isChar = typeof data[0] === 'string' && data[0].length === 1;
    const arrayName = isChar ? 'chars' : 'nums';

    for (let i = 0; i < Math.min(data.length, 10); i++) {
        steps.push({
            id: `gen-${i}`,
            description: `Processing element at index ${i}: ${data[i]}`,
            state: { [arrayName]: data, activeIndices: [i] },
            explanation: {
                goal: 'Iterate Data',
                decision: `Visit index ${i}`,
                reason: 'Linear scan of the input.',
                invariant: `Index ${i} processed`
            },
            insights: { timeComplexity: 'O(N)', spaceComplexity: 'O(1)', operations: i + 1, status: 'Running' }
        });
    }
    steps.push({
        id: 'gen-end',
        description: 'Completed iteration of the data.',
        state: { [arrayName]: data, activeIndices: [] },
        insights: { timeComplexity: 'O(N)', spaceComplexity: 'O(1)', operations: data.length, status: 'Success' },
        result: 'Done'
    });
}

function simulateTwoPointers(steps: VisualizationStep[], data: any[], target: any) {
    if (!Array.isArray(data)) { simulateGenericArray(steps, data); return; }

    const isChar = typeof data[0] === 'string';
    const arrayName = isChar ? 'chars' : 'nums';
    let l = 0, r = data.length - 1;

    // Simulate max 5 steps or until cross
    let ops = 0;
    while (l <= r && ops < 10) {
        ops++;
        const leftVal = data[l];
        const rightVal = data[r];
        let currentSum = 0;

        if (typeof leftVal === 'number' && typeof rightVal === 'number') {
            currentSum = leftVal + rightVal;
        }

        steps.push({
            id: `tp-${ops}`,
            description: `Checking pointers: Left(${l}) and Right(${r}).${target !== undefined ? ` Sum: ${currentSum}` : ''}`,
            state: { [arrayName]: data, l, r, activeIndices: [l, r] },
            explanation: {
                goal: 'Converge/Analyze',
                decision: 'Move pointers',
                reason: 'Standard two-pointer approach reduces search space.',
                invariant: `Range [${l}, ${r}]`
            },
            insights: { timeComplexity: 'O(N)', spaceComplexity: 'O(1)', operations: ops, status: 'Running' }
        });

        // Smart logic: move based on target if available
        if (target !== undefined && typeof target === 'number') {
            if (currentSum === target) {
                steps.push({
                    id: `tp-found-${ops}`,
                    description: `Target ${target} found with sum ${currentSum}!`,
                    state: { [arrayName]: data, l, r, activeIndices: [l, r], foundIndices: [l, r] },
                    insights: { timeComplexity: 'O(N)', spaceComplexity: 'O(1)', operations: ops, status: 'Success' },
                    result: [l, r]
                });
                return;
            }
            if (currentSum < target) l++; else r--;
        } else {
            if (ops % 2 === 0) l++; else r--;
        }
    }

    // Fallback if loop ends without finding target
    if (target !== undefined) {
        steps.push({
            id: `tp-not-found`,
            description: `Target ${target} not found after checking possible pairs.`,
            state: { [arrayName]: data, l, r, activeIndices: [] },
            insights: { timeComplexity: 'O(N)', spaceComplexity: 'O(1)', operations: ops, status: 'Failure' },
            result: [] // Return valid empty array or null indicating failure
        });
    }
}

function simulateSlidingWindow(steps: VisualizationStep[], data: any[], k: any) {
    if (!Array.isArray(data)) { simulateGenericArray(steps, data); return; }

    const isChar = typeof data[0] === 'string';
    const arrayName = isChar ? 'chars' : 'nums';
    const winSize = typeof k === 'number' ? k : 3;

    for (let i = 0; i < Math.min(data.length, 8); i++) {
        const start = Math.max(0, i - winSize + 1);
        steps.push({
            id: `sw-${i}`,
            description: `Window [${start} ... ${i}]`,
            state: { [arrayName]: data, activeIndices: [i], l: start, r: i },
            explanation: {
                goal: 'Expand/Contract Window',
                decision: `Include index ${i}`,
                reason: `Satisfying window constraint (size/condition).`,
                invariant: `Window size ${i - start + 1}`
            },
            insights: { timeComplexity: 'O(N)', spaceComplexity: 'O(1)', operations: i + 1, status: 'Running' }
        });
    }
}

function simulateBinarySearch(steps: VisualizationStep[], data: any[], target: any) {
    if (!Array.isArray(data)) { simulateGenericArray(steps, data); return; }

    // Only works if sorted, but we visualize indices anyway
    let l = 0, r = data.length - 1;
    let ops = 0;
    while (l <= r && ops < 6) {
        ops++;
        const mid = Math.floor((l + r) / 2);
        steps.push({
            id: `bs-${ops}`,
            description: `Checking mid index ${mid} (Value: ${data[mid]})`,
            state: { nums: data, l, r, mid, activeIndices: [mid] },
            insights: { timeComplexity: 'O(log N)', spaceComplexity: 'O(1)', operations: ops, status: 'Running' }
        });

        if (typeof target === 'number') {
            if (data[mid] === target) {
                steps.push({
                    id: `bs-found`,
                    description: `Target ${target} found at index ${mid}!`,
                    state: { nums: data, l: mid, r: mid, mid, activeIndices: [mid], foundIndices: [mid] },
                    insights: { timeComplexity: 'O(log N)', spaceComplexity: 'O(1)', operations: ops, status: 'Success' },
                    result: mid
                });
                return;
            } else if (data[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        } else {
            // Random moves if no target
            if (Math.random() > 0.5) l = mid + 1; else r = mid - 1;
        }
    }

    // Fallback if loop ends without finding target
    if (target !== undefined) {
        steps.push({
            id: `bs-not-found`,
            description: `Target ${target} not found in the array.`,
            state: { nums: data, l, r, activeIndices: [] },
            insights: { timeComplexity: 'O(log N)', spaceComplexity: 'O(1)', operations: ops, status: 'Failure' },
            result: -1 // Standard "not found" return
        });
    }
}

function simulateLinkedList(steps: VisualizationStep[], nodes: any[]) {
    // If input is not array of values, try to extract values
    if (!Array.isArray(nodes)) nodes = [1, 2, 3, 4, 5];

    for (let i = 0; i < nodes.length; i++) {
        steps.push({
            id: `ll-${i}`,
            description: `Traversing node with value ${nodes[i]}`,
            state: { nodes, curr: i, prev: i - 1, next: i + 1 },
            explanation: { goal: 'Traverse List', decision: 'ptr = ptr.next', reason: 'Moving to next node', invariant: `At index ${i}` },
            insights: { timeComplexity: 'O(N)', spaceComplexity: 'O(1)', operations: i + 1, status: 'Running' }
        });
    }
    steps.push({
        id: `ll-end`,
        description: `Traversal Complete`,
        state: { nodes, curr: -1, prev: nodes.length - 1 },
        insights: { timeComplexity: 'O(N)', spaceComplexity: 'O(1)', operations: nodes.length, status: 'Success' },
        result: 'End of List'
    });
}

function simulateStackLogic(steps: VisualizationStep[], data: any[]) {
    if (!Array.isArray(data)) data = [1, 2, 3];
    const stack: any[] = [];

    data.forEach((val, i) => {
        stack.push(val);
        steps.push({
            id: `st-push-${i}`,
            description: `Push ${val} to stack`,
            state: { nums: [...stack], activeIndices: [stack.length - 1] }, // Reusing nums visualizer for stack
            insights: { timeComplexity: 'O(1)', spaceComplexity: 'O(N)', operations: i + 1, status: 'Running' }
        });
    });
    steps.push({
        id: `st-end`,
        description: `Stack Populated`,
        state: { nums: stack, activeIndices: [] },
        insights: { timeComplexity: 'O(N)', spaceComplexity: 'O(N)', operations: data.length, status: 'Success' }
    });
}

function simulateHeapLogic(steps: VisualizationStep[], data: any[]) {
    simulateStackLogic(steps, data); // Visualize as array build for now
}

function simulateGraphGrid(steps: VisualizationStep[], grid: any[][]) {
    if (!Array.isArray(grid) || !Array.isArray(grid[0])) {
        // Fallback grid
        grid = [["1", "0", "1"], ["1", "1", "0"], ["0", "1", "1"]];
    }

    const visited: any[] = [];
    let count = 0;
    // BFS-like simulation
    const q = [[0, 0]];
    const R = grid.length, C = grid[0].length;

    while (q.length > 0 && count < 10) {
        const [r, c] = q.shift()!;
        if (visited.some(v => v[0] === r && v[1] === c)) continue;

        visited.push([r, c]);
        count++;

        steps.push({
            id: `gr-${count}`,
            description: `Visiting cell [${r}, ${c}]`,
            state: { grid, activeCell: [r, c], visitedCells: [...visited] },
            insights: { timeComplexity: 'O(V+E)', spaceComplexity: 'O(V)', operations: count, status: 'Running' }
        });

        // Add neighbors
        [[0, 1], [1, 0]].forEach(([dr, dc]) => {
            const nr = r + dr, nc = c + dc;
            if (nr < R && nc < C) q.push([nr, nc]);
        });
    }
}

function simulateTreeTraversal(steps: VisualizationStep[], data: any) {
    // If extracted data is treeLevels? 
    const treeLevels = Array.isArray(data) && Array.isArray(data[0]) ? data : [[{ val: 'Root', isActive: true }]];

    steps.push({
        id: 'tree-bfs',
        description: 'Traversing Tree Levels...',
        state: { treeLevels },
        insights: { timeComplexity: 'O(N)', spaceComplexity: 'O(W)', operations: 1, status: 'Success' }
    });
}

function simulateDP(steps: VisualizationStep[], data: any[]) {
    // 1D DP array build
    if (!Array.isArray(data)) data = [1, 2, 3, 4];
    const dp: number[] = [];

    for (let i = 0; i < data.length; i++) {
        // Mock DP logic: accumulation
        const val = typeof data[i] === 'number' ? data[i] : 1;
        const prev = i > 0 ? dp[i - 1] : 0;
        dp.push(val + prev);

        steps.push({
            id: `dp-${i}`,
            description: `DP State at index ${i}: ${dp[i]}`,
            state: { nums: data, activeIndices: [i], map: { DP_Table: [...dp] } },
            insights: { timeComplexity: 'O(N)', spaceComplexity: 'O(N)', operations: i + 1, status: 'Running' }
        });
    }
}

function simulateBacktracking(steps: VisualizationStep[], data: any) {
    // Generic path exploration
    steps.push({
        id: 'bt-start',
        description: `Starting Backtracking Search on ${Array.isArray(data) ? `array of size ${data.length}` : 'input'}...`,
        state: { recursionStack: [{ name: 'explore', depth: 0 }] },
        insights: { timeComplexity: 'O(b^d)', spaceComplexity: 'O(d)', operations: 1, status: 'Running' }
    });
}

function simulateBitLogic(steps: VisualizationStep[], data: any) {
    const num = typeof data === 'number' ? data : 42;
    steps.push({
        id: 'bit-1',
        description: `Bitwise representation of ${num}`,
        state: { binary: num.toString(2).padStart(8, '0'), nodes: [num] },
        insights: { timeComplexity: 'O(1)', spaceComplexity: 'O(1)', operations: 1, status: 'Success' }
    });
}

function simulateTrie(steps: VisualizationStep[], data: any) {
    const wordCount = Array.isArray(data) ? data.length : 0;
    steps.push({
        id: 'trie-1',
        description: `Building Trie from dictionary with ${wordCount} words...`,
        state: { map: { Trie_Root: '{}' } }, // Placeholder
        insights: { timeComplexity: 'O(L)', spaceComplexity: 'O(N*L)', operations: 1, status: 'Success' }
    });
}

function simulateGreedy(steps: VisualizationStep[], data: any[]) {
    simulateGenericArray(steps, data);
}

function simulateMath(steps: VisualizationStep[], data: any) {
    steps.push({
        id: 'math-1',
        description: `Calculating for input ${data}...`,
        state: { n: data },
        insights: { timeComplexity: 'O(1)', spaceComplexity: 'O(1)', operations: 1, status: 'Success' }
    });
}

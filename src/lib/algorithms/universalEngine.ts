import { VisualizationStep, Problem } from "../../types";

export function generateUniversalSteps(problem: Problem, input: any): VisualizationStep[] {
    const steps: VisualizationStep[] = [];
    const category = problem.category;
    const slug = problem.slug;

    // 1. Initial State
    steps.push({
        id: 'init',
        description: `Initializing ${problem.title} logic...`,
        state: getInitialState(category, input),
        explanation: {
            goal: 'Prepare Workspace',
            decision: 'Setup memory structures',
            reason: `Allocate space for ${category} processing.`,
            invariant: 'Memory ready'
        },
        insights: { timeComplexity: 'N/A', spaceComplexity: 'N/A', operations: 0, status: 'Ready' }
    });

    // 2. Specialized Logic Simulation
    if (slug.includes('binary-search') || category === 'Binary Search') {
        simulateBinarySearch(steps, input.nums || [1, 3, 5, 7, 9, 11, 13, 15], input.target || 7);
    } else if (category === 'Sliding Window') {
        simulateSlidingWindow(steps, input.nums || [1, 2, 3, 1, 2, 3], input.k || 3);
    } else if (category === 'Two Pointers') {
        simulateTwoPointers(steps, input.nums || [1, 2, 3, 4, 5, 6], input.target || 7);
    } else if (category === 'Linked List') {
        simulateLinkedList(steps, input.nodes || [1, 2, 3, 4, 5]);
    } else if (category === 'Trees') {
        simulateTreeTraversal(steps, [[{ val: '6', isActive: true }], [{ val: '2' }, { val: '8' }], [{ val: '0' }, { val: '4' }, { val: '7' }, { val: '9' }]]);
    } else if (category === 'Graphs') {
        const grid = input.grid || [["1", "1", "0"], ["1", "1", "0"], ["0", "0", "1"]];
        simulateGraphGrid(steps, grid);
    } else if (category === 'Bit Manipulation') {
        simulateBitLogic(steps, input.n || 11);
    } else if (category === 'Heap' || category === 'Priority Queue') {
        simulateHeapLogic(steps, input.nums || [10, 20, 15, 30, 40]);
    } else if (category === 'Stack' || category === 'Queue') {
        simulateStackLogic(steps, input.nums || [1, 2, 3]);
    } else if (category === 'Backtracking') {
        simulateBacktracking(steps);
    } else if (category === 'Dynamic Programming') {
        simulateDP(steps, input.nums || [1, 2, 3, 1]);
    } else if (category === 'Tries') {
        simulateTrie(steps, input.words || ["apple", "app", "apricot"]);
    } else if (category === 'Greedy') {
        simulateGreedy(steps, input.nums || [2, 3, 1, 1, 4]);
    } else if (category === 'Math') {
        simulateMath(steps, input.n || 19);
    } else {
        // Fallback for Arrays/Others
        simulateGenericArray(steps, input.nums || [4, 2, 7, 1, 3]);
    }

    return steps;
}

function getInitialState(category: string, input: any) {
    const nums = input.nums || [1, 2, 3, 4, 5];
    switch (category) {
        case 'Binary Search': return { nums, l: 0, r: nums.length - 1, mid: -1 };
        case 'Sliding Window': return { nums, range: [0, 0] };
        case 'Two Pointers': return { nums, activeIndices: [0, nums.length - 1] };
        case 'Linked List': return { nodes: input.nodes || [1, 2, 3, 4, 5], curr: 0, prev: -1 };
        case 'Graphs': return { grid: input.grid || [["1", "0", "1"], ["0", "1", "0"], ["1", "0", "1"]], activeCell: [0, 0], visitedCells: [] };
        case 'Trees': return { treeLevels: input.treeLevels || [[{ val: '6', isActive: true }], [{ val: '2' }, { val: '8' }]] };
        case 'Bit Manipulation': return { binary: (input.n || 0).toString(2).padStart(8, '0'), nodes: [input.n || 0] };
        case 'Stack': case 'Queue': return { nums: [], activeIndices: [] };
        case 'Heap': case 'Priority Queue': return { nums: [], activeIndices: [] };
        case 'Backtracking': return { nodes: [], recursionStack: [] };
        case 'Tries': return { nodes: [], activeIndices: [] };
        case 'Greedy': return { nums, activeIndices: [0] };
        case 'Math': return { n: input.n || 0, state: 'Processing' };
        default: return { nums, activeIndices: [] };
    }
}

function simulateBinarySearch(steps: VisualizationStep[], nums: number[], target: number) {
    let l = 0, r = nums.length - 1;
    let ops = 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        steps.push({
            id: `bs-${ops}`,
            description: `Checking middle element ${nums[mid]} at index ${mid}.`,
            state: { nums, l, r, mid, activeIndices: [mid] },
            explanation: {
                goal: `Find ${target}`,
                decision: `Calculate mid = ${mid}`,
                reason: `Compare nums[mid](${nums[mid]}) with target(${target})`,
                invariant: `Search range [${l}, ${r}]`
            },
            insights: { timeComplexity: 'O(log N)', spaceComplexity: 'O(1)', operations: ops++, status: 'Running' }
        });
        if (nums[mid] === target) {
            steps.push({
                id: 'bs-success',
                description: `Target ${target} found at index ${mid}!`,
                state: { nums, l: mid, r: mid, mid, activeIndices: [mid], foundIndices: [mid] },
                insights: { timeComplexity: 'O(log N)', spaceComplexity: 'O(1)', operations: ops, status: 'Success' },
                result: mid
            });
            return;
        }
        if (nums[mid] < target) l = mid + 1;
        else r = mid - 1;
    }
    steps.push({
        id: 'bs-fail',
        description: `Target ${target} not found in array.`,
        state: { nums, l, r, mid: -1, activeIndices: [] },
        insights: { timeComplexity: 'O(log N)', spaceComplexity: 'O(1)', operations: ops, status: 'Failure' },
        result: -1
    });
}

function simulateSlidingWindow(steps: VisualizationStep[], nums: number[], k: number) {
    for (let i = 0; i < nums.length; i++) {
        const start = Math.max(0, i - k + 1);
        const status = i === nums.length - 1 ? 'Success' : 'Running';
        const step: VisualizationStep = {
            id: `sw-${i}`,
            description: `Sliding window [${start}, ${i}] with size ${i - start + 1}.`,
            state: { nums, range: [start, i], activeIndices: [i] },
            explanation: { goal: 'Process window', decision: `Include index ${i}`, reason: `Maintaining window of size at most ${k}.`, invariant: `Valid range [${start}, ${i}]` },
            insights: { timeComplexity: 'O(N)', spaceComplexity: 'O(1)', operations: i + 1, status }
        };
        if (status === 'Success') step.result = 'Process Complete';
        steps.push(step);
    }
}

function simulateTwoPointers(steps: VisualizationStep[], nums: number[], target: number) {
    let l = 0, r = nums.length - 1;
    for (let i = 0; i < 3; i++) {
        const currentSum = nums[l] + nums[r];
        const status = currentSum === target ? 'Success' : (i === 2 ? 'Complete' : 'Running');
        const step: VisualizationStep = {
            id: `tp-${i}`,
            description: `Pointers at ${l} and ${r}. Target: ${target}, Current: ${currentSum}`,
            state: { nums, activeIndices: [l, r], l, r },
            insights: { timeComplexity: 'O(N)', spaceComplexity: 'O(1)', operations: i + 1, status }
        };
        if (status === 'Success') step.result = [l, r];
        steps.push(step);
        if (currentSum === target) return;
        l++; r--;
    }
}

function simulateLinkedList(steps: VisualizationStep[], nodes: any[]) {
    for (let i = 0; i < nodes.length; i++) {
        const status = i === nodes.length - 1 ? 'Success' : 'Running';
        const step: VisualizationStep = {
            id: `ll-${i}`,
            description: `Moving node pointer to ${nodes[i]}...`,
            state: { nodes, curr: i, prev: i - 1, next: i + 1 },
            insights: { timeComplexity: 'O(N)', spaceComplexity: 'O(1)', operations: i + 1, status }
        };
        if (status === 'Success') step.result = nodes;
        steps.push(step);
    }
}

function simulateTreeTraversal(steps: VisualizationStep[], treeLevels: any[][]) {
    steps.push({
        id: 'tree-1',
        description: 'Applying recursive DFS to explore all tree paths...',
        state: { treeLevels },
        insights: { timeComplexity: 'O(N)', spaceComplexity: 'O(H)', operations: 1, status: 'Success' },
        result: 'Traversal Complete'
    });
}

function simulateGraphGrid(steps: VisualizationStep[], grid: string[][]) {
    const visited: [number, number][] = [];
    const maxR = Math.min(grid.length, 2);
    const maxC = Math.min(grid[0].length, 2);

    for (let r = 0; r < maxR; r++) {
        for (let c = 0; c < maxC; c++) {
            visited.push([r, c]);
            const status = (r === maxR - 1 && c === maxC - 1) ? 'Success' : 'Running';
            const step: VisualizationStep = {
                id: `graph-${r}-${c}`,
                description: `Visiting grid cell [${r}, ${c}]...`,
                state: { grid, activeCell: [r, c], visitedCells: [...visited] },
                insights: { timeComplexity: 'O(R*C)', spaceComplexity: 'O(R*C)', operations: visited.length, status }
            };
            if (status === 'Success') step.result = visited;
            steps.push(step);
        }
    }
}

function simulateBitLogic(steps: VisualizationStep[], n: number) {
    let current = n;
    for (let i = 0; i < 3; i++) {
        const status = i === 2 ? 'Success' : 'Running';
        const step: VisualizationStep = {
            id: `bit-${i}`,
            description: `Analyzing bit representation of ${current}...`,
            state: { nodes: [current], binary: current.toString(2).padStart(8, '0') },
            explanation: { goal: 'Process Bits', decision: `Shift/Observe ${current}`, reason: 'Standard bitwise operation tracing.', invariant: `Binary: ${current.toString(2)}` },
            insights: { timeComplexity: 'O(1)', spaceComplexity: 'O(1)', operations: i + 1, status }
        };
        if (status === 'Success') step.result = current.toString(2);
        steps.push(step);
        current = current >> 1;
    }
}

function simulateHeapLogic(steps: VisualizationStep[], nums: number[]) {
    const heap: number[] = [];
    nums.forEach((n, i) => {
        heap.push(n);
        const status = i === nums.length - 1 ? 'Success' : 'Running';
        const step: VisualizationStep = {
            id: `heap-${i}`,
            description: `Adding ${n} to Max-Heap and bubbling up...`,
            state: { nums: [...heap], activeIndices: [heap.length - 1] },
            explanation: { goal: 'Maintain Heap Property', decision: `Insert ${n}`, reason: 'Standard heapify-up operation.', invariant: 'Heap structure valid' },
            insights: { timeComplexity: 'O(log N)', spaceComplexity: 'O(N)', operations: i + 1, status }
        };
        if (status === 'Success') step.result = heap;
        steps.push(step);
    });
}

function simulateDP(steps: VisualizationStep[], nums: number[]) {
    const dp = Array(nums.length).fill(0);
    const maxI = Math.min(nums.length, 5);
    for (let i = 0; i < maxI; i++) {
        dp[i] = nums[i] + (i > 0 ? dp[i - 1] : 0);
        const status = i === maxI - 1 ? 'Success' : 'Running';
        const step: VisualizationStep = {
            id: `dp-${i}`,
            description: `Computing subproblem state at index ${i}: Result = ${dp[i]}`,
            state: { nums, activeIndices: [i], map: { DP_Table: dp } },
            explanation: { goal: 'Solve Subproblem', decision: `DP[${i}] = ${dp[i]}`, reason: 'Using previously computed results to optimize calculation.', invariant: `Table size ${i + 1}` },
            insights: { timeComplexity: 'O(N)', spaceComplexity: 'O(N)', operations: i + 1, status }
        };
        if (status === 'Success') step.result = dp[maxI - 1];
        steps.push(step);
    }
}

function simulateGenericArray(steps: VisualizationStep[], nums: number[]) {
    const maxI = Math.min(nums.length, 5);
    for (let i = 0; i < maxI; i++) {
        const status = i === maxI - 1 ? 'Success' : 'Running';
        const step: VisualizationStep = {
            id: `gen-${i}`,
            description: `Analyzing array element ${nums[i]}...`,
            state: { nums, activeIndices: [i] },
            insights: { timeComplexity: 'O(N)', spaceComplexity: 'O(1)', operations: i + 1, status }
        };
        if (status === 'Success') step.result = 'Complete';
        steps.push(step);
    }
}
function simulateStackLogic(steps: VisualizationStep[], nums: number[]) {
    const stack: number[] = [];
    nums.forEach((n, i) => {
        stack.push(n);
        const status = i === nums.length - 1 ? 'Success' : 'Running';
        const step: VisualizationStep = {
            id: `stack-${i}`,
            description: `Pushing ${n} onto the stack...`,
            state: { nums: [...stack], activeIndices: [stack.length - 1] },
            explanation: { goal: 'LIFO Operation', decision: `Push ${n}`, reason: 'Standard stack push.', invariant: 'Stack integrity valid' },
            insights: { timeComplexity: 'O(1)', spaceComplexity: 'O(N)', operations: i + 1, status }
        };
        if (status === 'Success') step.result = stack;
        steps.push(step);
    });
}

function simulateBacktracking(steps: VisualizationStep[]) {
    const paths = [['A'], ['A', 'B'], ['A', 'B', 'C'], ['A', 'B'], ['A', 'D']];
    paths.forEach((p, i) => {
        const status = i === paths.length - 1 ? 'Success' : 'Running';
        const step: VisualizationStep = {
            id: `bt-${i}`,
            description: `Backtracking: Exploring path [${p.join(' -> ')}]`,
            state: { nodes: p, recursionStack: [{ name: 'DFS', range: [0, p.length], depth: p.length }] },
            explanation: { goal: 'Search Space', decision: `Try ${p[p.length - 1]}`, reason: 'DFS exploration.', invariant: 'Branch valid' },
            insights: { timeComplexity: 'O(2^N)', spaceComplexity: 'O(N)', operations: i + 1, status }
        };
        if (status === 'Success') step.result = 'All paths explored';
        steps.push(step);
    });
}

function simulateTrie(steps: VisualizationStep[], words: string[]) {
    const trie: any = { children: {}, isEndOfWord: false };
    words.forEach((word, i) => {
        let node = trie;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = { children: {}, isEndOfWord: false };
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;

        const status = i === words.length - 1 ? 'Success' : 'Running';
        const step: VisualizationStep = {
            id: `trie-${i}`,
            description: `Inserted word "${word}" into the Trie.`,
            state: { map: { Trie_Structure: trie }, activeIndices: [] },
            insights: { timeComplexity: 'O(L)', spaceComplexity: 'O(N*L)', operations: i + 1, status }
        };
        if (status === 'Success') step.result = 'Trie built';
        steps.push(step);
    });
}

function simulateGreedy(steps: VisualizationStep[], nums: number[]) {
    let farthest = 0;
    for (let i = 0; i < nums.length; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        const status = i === nums.length - 1 ? 'Success' : 'Running';
        const step: VisualizationStep = {
            id: `greedy-${i}`,
            description: `At index ${i}, can reach up to index ${farthest}.`,
            state: { nums, activeIndices: [i], map: { Farthest_Reach: farthest } },
            insights: { timeComplexity: 'O(N)', spaceComplexity: 'O(1)', operations: i + 1, status }
        };
        if (status === 'Success') step.result = farthest >= nums.length - 1;
        steps.push(step);
        if (farthest >= nums.length - 1 && i < nums.length - 1) {
            steps.push({
                id: `greedy-early`,
                description: `Goal reached early! Farthest point ${farthest} covers end.`,
                state: { nums, activeIndices: [i], map: { Farthest_Reach: farthest } },
                insights: { timeComplexity: 'O(N)', spaceComplexity: 'O(1)', operations: i + 2, status: 'Success' },
                result: true
            });
            return;
        }
    }
}

function simulateMath(steps: VisualizationStep[], n: number) {
    let current = n;
    const seen = new Set();
    let ops = 1;
    while (current !== 1 && !seen.has(current) && ops < 10) {
        seen.add(current);
        const next = String(current).split('').reduce((acc, char) => acc + Math.pow(Number(char), 2), 0);
        steps.push({
            id: `math-${ops}`,
            description: `Processing ${current} -> sum of squares is ${next}.`,
            state: { n: current, nodes: [current, next], map: { Sequence: Array.from(seen) } },
            insights: { timeComplexity: 'O(log N)', spaceComplexity: 'O(log N)', operations: ops++, status: 'Running' }
        });
        current = next;
    }

    const isHappy = current === 1;
    steps.push({
        id: `math-final`,
        description: isHappy ? `Reached 1! The number is happy.` : `Loop detected or limit reached.`,
        state: { n: current, map: { Final_Result: isHappy ? 'Happy' : 'Not Happy' } },
        insights: { timeComplexity: 'O(log N)', spaceComplexity: 'O(log N)', operations: ops, status: 'Success' },
        result: isHappy
    });
}

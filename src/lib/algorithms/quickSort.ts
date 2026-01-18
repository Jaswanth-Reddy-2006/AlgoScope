import { VisualizationStep } from "../../types";

export function getQuickSortSteps(nums: number[], _mode: string = 'interview'): VisualizationStep[] {
    const steps: VisualizationStep[] = [];
    const arr = [...nums];
    let ops = 0;
    let callStack: { id: string, range: [number, number], depth: number }[] = [];

    // Helper to create a step
    const addStep = (
        description: string,
        highlight: any | null,
        explanation: any,
        extraState: any = {},
        status: string = 'Running'
    ) => {
        steps.push({
            id: `step-${steps.length}`,
            description,
            state: {
                nums: [...arr],
                sortedIndices: [],
                ...extraState,
                recursionStack: [...callStack]
            },
            lineHighlights: highlight,
            explanation,
            insights: {
                timeComplexity: 'O(n log n)',
                spaceComplexity: 'O(log n)',
                operations: ++ops,
                status
            }
        });
    };

    addStep(
        'Start Quick Sort',
        null,
        {
            goal: 'Sort the array',
            decision: 'Call quick sort on the full array',
            reason: 'Divide and conquer strategy',
            invariant: 'Array is unsorted'
        }
    );

    function partition(low: number, high: number): number {
        const pivot = arr[high];
        let i = low - 1;

        addStep(
            `Partitioning range [${low}, ${high}] with pivot ${pivot}`,
            { python: 10, javascript: 11, cpp: 13, java: 13 },
            {
                goal: `Partition [${low}, ${high}]`,
                decision: `Chosen pivot: ${pivot} (last element)`,
                reason: 'Elements smaller than pivot go left, larger go right',
                invariant: `Pivot is ${pivot}`
            },
            { pivotIndex: high, range: [low, high] }
        );

        for (let j = low; j < high; j++) {
            addStep(
                `Comparing arr[${j}] (${arr[j]}) with pivot (${pivot})`,
                { python: 12, javascript: 13, cpp: 15, java: 15 },
                {
                    goal: 'Compare element with pivot',
                    decision: `Is ${arr[j]} < ${pivot}?`,
                    reason: 'Determine if element belongs to left partition',
                    invariant: `Checking index ${j}`
                },
                { pivotIndex: high, compareIndices: [j, high], range: [low, high], activeIndices: [i + 1] }
            );

            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                addStep(
                    `Swapping ${arr[i]} and ${arr[j]}`,
                    { python: 14, javascript: 14, cpp: 17, java: 17 },
                    {
                        goal: 'Move smaller element to left',
                        decision: `Swap index ${i} and ${j}`,
                        reason: `${arr[i]} (was ${arr[j]}) is smaller than pivot`,
                        invariant: `Elements 0 to ${i} are < pivot`
                    },
                    { pivotIndex: high, swapIndices: [i, j], range: [low, high] }
                );
            }
        }

        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        addStep(
            `Placing pivot ${pivot} at correct position ${i + 1}`,
            { python: 15, javascript: 15, cpp: 18, java: 18 },
            {
                goal: 'Finalize pivot position',
                decision: `Swap pivot to ${i + 1}`,
                reason: 'Pivot is now in its sorted position',
                invariant: `Index ${i + 1} is sorted`
            },
            { pivotIndex: i + 1, swapIndices: [i + 1, high], range: [low, high], sortedIndex: i + 1 }
        );

        return i + 1;
    }

    function sort(low: number, high: number, depth: number) {
        if (low < high) {
            callStack.push({ id: `call-${low}-${high}`, range: [low, high], depth });

            addStep(
                `Recursively sorting range [${low}, ${high}]`,
                { python: 5, javascript: 5, cpp: 6, java: 6 },
                {
                    goal: 'Divide',
                    decision: `Process subarray [${low}, ${high}]`,
                    reason: 'Array segment needs sorting',
                    invariant: `Depth: ${depth}`
                },
                { range: [low, high] }
            );

            const pi = partition(low, high);

            sort(low, pi - 1, depth + 1);
            sort(pi + 1, high, depth + 1);

            callStack.pop();
        }
    }

    sort(0, arr.length - 1, 0);

    const finalStep: VisualizationStep = {
        id: `step-${steps.length}`,
        description: 'Sorting Complete',
        state: {
            nums: [...arr],
            sortedIndices: arr.map((_, i) => i),
            recursionStack: []
        },
        explanation: {
            goal: 'Finished',
            decision: 'Return result',
            reason: 'All partitions processed',
            invariant: 'Array is sorted'
        },
        insights: {
            timeComplexity: 'O(n log n)',
            spaceComplexity: 'O(log n)',
            operations: ++ops,
            status: 'Success'
        },
        result: [...arr]
    };
    steps.push(finalStep);

    return steps;
}

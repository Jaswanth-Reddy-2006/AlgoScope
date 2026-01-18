import { VisualizationStep } from "../../types";

export function getThreeSumSteps(nums: number[], _mode: string = 'interview'): VisualizationStep[] {
    const steps: VisualizationStep[] = [];
    let ops = 0;

    // Initial state (unsorted)
    steps.push({
        id: `step-${steps.length}`,
        description: 'Initial array.',
        state: { nums: [...nums], activeIndices: [], foundTriplets: [] },
        lineHighlights: { python: 1, javascript: 1, cpp: 1, java: 1 },
        explanation: {
            goal: 'Prepare input',
            decision: 'Need to find three numbers that sum to 0',
            reason: 'Starting with the raw input array.',
            invariant: 'Array is unsorted'
        },
        insights: { timeComplexity: 'O(n²)', spaceComplexity: 'O(1)', operations: ++ops, status: 'Starting' }
    });

    // Step 1: Sort
    const sortedNums = [...nums].sort((a, b) => a - b);
    steps.push({
        id: `step-${steps.length}`,
        description: 'Sort the array to use two-pointer technique.',
        state: { nums: [...sortedNums], activeIndices: [], foundTriplets: [] },
        lineHighlights: { python: 3, javascript: 2, cpp: 4, java: 2 },
        explanation: {
            goal: 'Sort array',
            decision: 'nums.sort()',
            reason: 'Sorting allows us to use two pointers to find pairs efficiently and handle duplicates.',
            invariant: 'Array is sorted'
        },
        insights: { timeComplexity: 'O(n log n)', spaceComplexity: 'O(log n)', operations: ++ops, status: 'Running' }
    });

    const res: number[][] = [];
    for (let i = 0; i < sortedNums.length; i++) {
        // Skip duplicates for i
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
            steps.push({
                id: `step-${steps.length}`,
                description: `Skip duplicate value ${sortedNums[i]} at index ${i}.`,
                state: { nums: [...sortedNums], activeIndices: [i], foundTriplets: [...res] },
                lineHighlights: { python: 6, javascript: 5, cpp: 7, java: 5 },
                explanation: {
                    goal: 'Avoid duplicates',
                    decision: 'continue',
                    reason: 'We already processed this value in the previous iteration.',
                    invariant: `i = ${i}, nums[i] = ${sortedNums[i]}`
                },
                insights: { timeComplexity: 'O(n²)', spaceComplexity: 'O(1)', operations: ++ops, status: 'Running' }
            });
            continue;
        }

        let l = i + 1;
        let r = sortedNums.length - 1;

        while (l < r) {
            const sum = sortedNums[i] + sortedNums[l] + sortedNums[r];

            steps.push({
                id: `step-${steps.length}`,
                description: `Checking triplet: ${sortedNums[i]}, ${sortedNums[l]}, ${sortedNums[r]} (sum: ${sum})`,
                state: { nums: [...sortedNums], activeIndices: [i, l, r], foundTriplets: [...res] },
                lineHighlights: { python: 10, javascript: 8, cpp: 11, java: 8 },
                explanation: {
                    goal: 'Find triplet',
                    decision: `i=${i}, l=${l}, r=${r}`,
                    reason: `Sum is ${sum}. Target is 0.`,
                    invariant: `i < l < r`
                },
                insights: { timeComplexity: 'O(n²)', spaceComplexity: 'O(1)', operations: ++ops, status: 'Running' }
            });

            if (sum === 0) {
                res.push([sortedNums[i], sortedNums[l], sortedNums[r]]);
                steps.push({
                    id: `step-${steps.length}`,
                    description: `Found triplet: ${sortedNums[i]}, ${sortedNums[l]}, ${sortedNums[r]}!`,
                    state: { nums: [...sortedNums], activeIndices: [i, l, r], foundTriplets: [...res] },
                    lineHighlights: { python: 14, javascript: 10, cpp: 15, java: 12 },
                    explanation: {
                        goal: 'Record triplet',
                        decision: 'Push to results',
                        reason: 'The sum of the three numbers is exactly 0.',
                        invariant: 'Triplet found'
                    },
                    insights: { timeComplexity: 'O(n²)', spaceComplexity: 'O(1)', operations: ++ops, status: 'Success' }
                });

                l++;
                r--;
                while (l < r && sortedNums[l] === sortedNums[l - 1]) l++;
                while (l < r && sortedNums[r] === sortedNums[r + 1]) r--;
            } else if (sum < 0) {
                l++;
            } else {
                r--;
            }
        }
    }

    steps.push({
        id: `step-${steps.length}`,
        description: 'Finished searching all possibilities.',
        state: { nums: [...sortedNums], activeIndices: [], foundTriplets: [...res] },
        lineHighlights: { python: 18, javascript: 18, cpp: 20, java: 18 },
        explanation: {
            goal: 'Complete',
            decision: 'Return res',
            reason: 'Algorithm finished execution.',
            invariant: 'All unique triplets found'
        },
        insights: { timeComplexity: 'O(n²)', spaceComplexity: 'O(1)', operations: ++ops, status: 'Complete' },
        result: res
    });

    return steps;
}

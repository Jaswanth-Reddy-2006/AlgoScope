import { VisualizationStep } from "../../types";

export function getTwoSumSteps(nums: number[], target: number, mode: string = 'interview'): VisualizationStep[] {
    const steps: VisualizationStep[] = [];
    let ops = 0;

    if (mode === 'beginner') {
        // BRUTE FORCE IMPLEMENTATION
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                const sum = nums[i] + nums[j];

                steps.push({
                    id: `step-${steps.length}`,
                    description: `Checking pair: nums[${i}]=${nums[i]} and nums[${j}]=${nums[j]} (sum: ${sum})`,
                    state: {
                        nums,
                        target,
                        activeIndices: [i, j],
                        foundIndices: sum === target ? [i, j] : [],
                        i,
                        j,
                        sum
                    },
                    lineHighlights: {
                        python: 4,
                        javascript: 4,
                        cpp: 5,
                        java: 5
                    },
                    explanation: {
                        goal: `Evaluate pair at indices ${i} and ${j}`,
                        decision: `${nums[i]} + ${nums[j]} = ${sum}`,
                        reason: 'Brute force checks every possible pair to see if they add up to the target.',
                        invariant: `i=${i}, j=${j}`
                    },
                    insights: {
                        timeComplexity: 'O(n²)',
                        spaceComplexity: 'O(1)',
                        operations: ++ops,
                        status: sum === target ? 'Success' : 'Running'
                    }
                });

                if (sum === target) return steps;
            }
        }
        return steps;
    }

    // OPTIMAL IMPLEMENTATION (Interview Mode)
    const map: Record<number, number> = {};

    // Initial state
    steps.push({
        id: `step-${steps.length}`,
        description: 'Initialize empty hash map to store seen values.',
        state: { nums, target, map: { ...map }, activeIndices: [], foundIndices: [] },
        lineHighlights: {
            python: 3,
            javascript: 2,
            cpp: 5,
            java: 5
        },
        explanation: {
            goal: 'Setup storage',
            decision: 'Create a Hash Map',
            reason: 'Allows for O(1) average time complexity lookups.',
            invariant: 'Map is empty'
        },
        insights: {
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(n)',
            operations: ++ops,
            status: 'Running'
        }
    });

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const diff = target - n;

        // Highlighting current element
        steps.push({
            id: `step-${steps.length}`,
            description: `Checking element ${n} at index ${i}.`,
            state: { nums, target, map: { ...map }, activeIndices: [i], foundIndices: [], i, n, diff },
            lineHighlights: {
                python: 5,
                javascript: 4,
                cpp: 7,
                java: 7
            },
            explanation: {
                goal: `Process element at index ${i}`,
                decision: `Calculate complement: ${target} - ${n} = ${diff}`,
                reason: 'We need to find if this complement was already seen.',
                invariant: `i = ${i}, n = ${n}, diff = ${diff}`
            },
            insights: {
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                operations: ++ops,
                status: 'Running'
            }
        });

        if (diff in map) {
            // Found it!
            steps.push({
                id: `step-${steps.length}`,
                description: `Found complement ${diff} in map at index ${map[diff]}!`,
                state: { nums, target, map: { ...map }, activeIndices: [i, map[diff]], foundIndices: [i, map[diff]], i, n, diff },
                lineHighlights: {
                    python: 8,
                    javascript: 8,
                    cpp: 10,
                    java: 10
                },
                explanation: {
                    goal: 'Verify match',
                    decision: `Return indices [${map[diff]}, ${i}]`,
                    reason: `${nums[map[diff]]} + ${nums[i]} = ${target}`,
                    invariant: 'Match found'
                },
                insights: {
                    timeComplexity: 'O(n)',
                    spaceComplexity: 'O(n)',
                    operations: ++ops,
                    status: 'Success'
                },
                result: [map[diff], i]
            });
            return steps;
        }

        // Add to map
        map[n] = i;
        steps.push({
            id: `step-${steps.length}`,
            description: `${diff} not in map. Adding ${n} to map.`,
            state: { nums, target, map: { ...map }, activeIndices: [i], foundIndices: [], i, n, diff },
            lineHighlights: {
                python: 9,
                javascript: 10,
                cpp: 12,
                java: 12
            },
            explanation: {
                goal: 'Record observation',
                decision: `Store ${n} with index ${i}`,
                reason: 'So future elements can find this as a potential complement.',
                invariant: `Map now contains ${Object.keys(map).length} elements`
            },
            insights: {
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(n)',
                operations: ++ops,
                status: 'Running'
            }
        });
    }

    return steps;
}

import { VisualizationStep } from "../../types"

export const getContainerWithMostWaterSteps = (height: number[], mode: string = 'interview'): VisualizationStep[] => {
    const steps: VisualizationStep[] = []
    let maxArea = 0

    if (mode === 'beginner') {
        // BRUTE FORCE: O(n^2)
        for (let i = 0; i < height.length; i++) {
            for (let j = i + 1; j < height.length; j++) {
                const w = j - i
                const h = Math.min(height[i], height[j])
                const area = w * h

                steps.push({
                    id: `calc-${i}-${j}`,
                    description: `Checking lines at index ${i} and ${j}: Area = ${w} * ${h} = ${area}`,
                    state: { height, i, j, maxArea, currentArea: area, activeLines: [i, j] },
                    explanation: {
                        goal: "Calculate area for all possible pairs.",
                        decision: `Compute area for indices (${i}, ${j}).`,
                        reason: "Brute force approach checks every single combination to find the maximum.",
                        invariant: `Current Max Area: ${maxArea}`
                    },
                    lineHighlights: {
                        python: 4,
                        javascript: 4,
                        cpp: 5,
                        java: 5
                    }
                })

                if (area > maxArea) {
                    maxArea = area
                    steps.push({
                        id: `update-${i}-${j}`,
                        description: `New Max Area Found: ${maxArea}`,
                        state: { height, i, j, maxArea, currentArea: area, activeLines: [i, j], isNewMax: true },
                        explanation: {
                            goal: "Update result.",
                            decision: "Store the new maximum area.",
                            reason: `Found a larger container (${area} > ${maxArea}).`,
                            invariant: `New Max Area: ${maxArea}`
                        },
                        insights: {
                            timeComplexity: "O(n²)",
                            spaceComplexity: "O(1)",
                            operations: steps.length,
                            status: "Running"
                        }
                    })
                }
            }
        }

        steps.push({
            id: "done",
            description: "Algorithm Finished",
            state: { height, i: -1, j: -1, maxArea, currentArea: 0, activeLines: [] },
            explanation: {
                goal: "Return the result.",
                decision: "All pairs checked.",
                reason: "Nested loops completed.",
                invariant: `Final Max Area: ${maxArea}`
            },
            insights: {
                timeComplexity: "O(n²)",
                spaceComplexity: "O(1)",
                operations: steps.length,
                status: "Complete"
            }
        })
        return steps
    }

    // OPTIMAL: O(n)
    let l = 0
    let r = height.length - 1

    steps.push({
        id: `init`,
        description: "Initialize pointers",
        state: { height, l, r, maxArea, currentArea: 0, activeLines: [] },
        explanation: {
            goal: "Find two lines that form a container with most water.",
            decision: "Start with the widest container using pointers at both ends.",
            reason: "Width is maximized at the start, giving us a good baseline.",
            invariant: "Max area found so far is 0."
        }
    })

    while (l < r) {
        const w = r - l
        const h = Math.min(height[l], height[r])
        const area = w * h

        // Step: Calculation
        steps.push({
            id: `calc-${l}-${r}`,
            description: `Calculate Area: ${w} * ${h} = ${area}`,
            state: { height, l, r, maxArea, currentArea: area, activeLines: [l, r] },
            explanation: {
                goal: "Calculate area for current container.",
                decision: "Compute (right - left) * min(height[left], height[right]).",
                reason: `Width is ${w} and limiting height is ${h}.`,
                invariant: `Current Max Area: ${maxArea}`
            },
            lineHighlights: {
                python: 5,
                javascript: 5,
                cpp: 5,
                java: 5
            }
        })

        if (area > maxArea) {
            maxArea = area
            // Step: Update Max
            steps.push({
                id: `update-${l}-${r}`,
                description: `New Max Area Found: ${maxArea}`,
                state: { height, l, r, maxArea, currentArea: area, activeLines: [l, r], isNewMax: true },
                explanation: {
                    goal: "Update result.",
                    decision: "Store the new maximum area.",
                    reason: `Found a larger container (${area} > ${maxArea}).`,
                    invariant: `New Max Area: ${maxArea}`
                },
                lineHighlights: {
                    python: 6,
                    javascript: 6,
                    cpp: 6,
                    java: 6
                },
                insights: {
                    timeComplexity: "O(n)",
                    spaceComplexity: "O(1)",
                    operations: steps.length,
                    status: "Running"
                }
            })
        }

        if (height[l] < height[r]) {
            // Move Left
            steps.push({
                id: `move-left-${l}`,
                description: `Move Left Pointer: Height ${height[l]} < ${height[r]}`,
                state: { height, l, r, maxArea, currentArea: area, activeLines: [l, r], moving: 'l' },
                explanation: {
                    goal: "Try to find a taller line.",
                    decision: "Move the left pointer inward.",
                    reason: "The left line is shorter, so it limits the area. Moving it might help find a taller line to compensate for reduced width.",
                    invariant: `Max Area: ${maxArea}`
                },
                lineHighlights: {
                    python: 7,
                    javascript: 9,
                    cpp: 10,
                    java: 10
                }
            })
            l++
        } else {
            // Move Right
            steps.push({
                id: `move-right-${r}`,
                description: `Move Right Pointer: Height ${height[r]} <= ${height[l]}`,
                state: { height, l, r, maxArea, currentArea: area, activeLines: [l, r], moving: 'r' },
                explanation: {
                    goal: "Try to find a taller line.",
                    decision: "Move the right pointer inward.",
                    reason: "The right line is shorter (or equal), so it limits the area. Moving it maximizes our chance of improving.",
                    invariant: `Max Area: ${maxArea}`
                },
                lineHighlights: {
                    python: 9,
                    javascript: 10,
                    cpp: 11,
                    java: 11
                }
            })
            r--
        }
    }

    // Final step
    steps.push({
        id: "done",
        description: "Algorithm Finished",
        state: { height, l: -1, r: -1, maxArea, currentArea: 0, activeLines: [] },
        explanation: {
            goal: "Return the result.",
            decision: "No more pairs to check.",
            reason: "Pointers have met.",
            invariant: `Final Max Area: ${maxArea}`
        },
        insights: {
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)",
            operations: steps.length,
            status: "Success"
        },
        result: maxArea
    })

    return steps
}

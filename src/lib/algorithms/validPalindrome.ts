import { VisualizationStep } from "../../types";

export function getValidPalindromeSteps(s: string, mode: string = 'interview'): VisualizationStep[] {
    const steps: VisualizationStep[] = [];
    let ops = 0;

    const isAlnum = (char: string) => /^[a-z0-9]$/i.test(char);

    if (mode === 'beginner') {
        // MULTI-PASS: O(n) Time, O(n) Space
        const chars = s.split('');

        // Step 1: Filter
        const filtered: string[] = [];
        steps.push({
            id: `filter-init`,
            description: "Step 1: Filter non-alphanumeric characters.",
            state: { s, chars, filtered: [], phase: 'filtering' },
            explanation: {
                goal: "Clean the input string.",
                decision: "Iterate and keep only letters and numbers.",
                reason: "Simplifies the problem by removing noise (spaces, punctuation).",
                invariant: "Filtered array is empty"
            }
        });

        for (let i = 0; i < chars.length; i++) {
            if (isAlnum(chars[i])) {
                filtered.push(chars[i].toLowerCase());
                steps.push({
                    id: `filter-${i}`,
                    description: `Keep '${chars[i]}'`,
                    state: { s, chars, filtered: [...filtered], activeIndex: i, phase: 'filtering' },
                    explanation: {
                        goal: "Filtering...",
                        decision: `Add ${chars[i]} to filtered list.`,
                        reason: "It's an alphanumeric character.",
                        invariant: `Filtered length: ${filtered.length}`
                    }
                });
            }
        }

        // Step 2: Reverse
        const reversed = [...filtered].reverse();
        steps.push({
            id: `reverse`,
            description: "Step 2: Create a reversed version of the filtered characters.",
            state: { s, filtered: [...filtered], reversed: [...reversed], phase: 'reversing' },
            explanation: {
                goal: "Prepare for comparison.",
                decision: "Reverse the cleaned character array.",
                reason: "A palindrome reads the same backwards as forwards.",
                invariant: "Reversed array created"
            }
        });

        // Step 3: Compare
        steps.push({
            id: `compare-init`,
            description: "Step 3: Compare filtered characters with reversed characters.",
            state: { s, filtered: [...filtered], reversed: [...reversed], phase: 'comparing' },
            explanation: {
                goal: "Check for equality.",
                decision: "Compare each index in both arrays.",
                reason: "If all characters match, it's a palindrome.",
                invariant: "Comparison starting"
            }
        });

        for (let i = 0; i < filtered.length; i++) {
            const match = filtered[i] === reversed[i];
            steps.push({
                id: `compare-${i}`,
                description: `Compare: filtered[${i}]='${filtered[i]}' vs reversed[${i}]='${reversed[i]}'`,
                state: { s, filtered: [...filtered], reversed: [...reversed], activeIndex: i, phase: 'comparing', match },
                explanation: {
                    goal: "Check index " + i,
                    decision: match ? "Continue" : "Stop and return False",
                    reason: match ? "Characters match." : "Characters do not match!",
                    invariant: match ? "Still a potential palindrome" : "Not a palindrome"
                }
            });

            if (!match) return steps;
        }

        steps.push({
            id: "done",
            description: "All characters matched! It is a palindrome.",
            state: { s, filtered, reversed, success: true, phase: 'complete' },
            explanation: {
                goal: "Return result.",
                decision: "Return True.",
                reason: "Filtered and Reversed are identical.",
                invariant: "Verification complete"
            },
            insights: {
                timeComplexity: "O(n)",
                spaceComplexity: "O(n)",
                operations: steps.length,
                status: "Success"
            }
        });
        return steps;
    }

    // OPTIMAL IMPLEMENTATION (Interview Mode)
    // Convert to array of characters for easier visualization
    const chars = s.split('');
    let l = 0;
    let r = s.length - 1;

    // Initial state
    steps.push({
        id: `step-${steps.length}`,
        description: 'Initialize left and right pointers at both ends of the string.',
        state: { s, chars, l, r, activeIndices: [l, r] },
        lineHighlights: {
            python: 3,
            javascript: 2,
            cpp: 4,
            java: 3
        },
        explanation: {
            goal: 'Setup pointers',
            decision: 'l = 0, r = n - 1',
            reason: 'We compare characters from outside-in to verify symmetry.',
            invariant: 'l is at the start, r is at the end'
        },
        insights: {
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            operations: ++ops,
            status: 'Running'
        }
    });

    while (l < r) {
        // Highlighting current pointers
        steps.push({
            id: `step-${steps.length}`,
            description: `Check characters at l=${l} ('${chars[l]}') and r=${r} ('${chars[r]}').`,
            state: { s, chars, l, r, activeIndices: [l, r] },
            lineHighlights: {
                python: 4,
                javascript: 3,
                cpp: 5,
                java: 5
            },
            explanation: {
                goal: 'Evaluate pointers',
                decision: `Compare ${chars[l]} and ${chars[r]}`,
                reason: 'Determine if we need to skip non-alphanumeric characters or compare values.',
                invariant: `l < r (${l} < ${r})`
            },
            insights: {
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                operations: ++ops,
                status: 'Running'
            }
        });

        if (!isAlnum(chars[l])) {
            l++;
            steps.push({
                id: `step-${steps.length}`,
                description: `'${chars[l - 1]}' is not alphanumeric. Incrementing l.`,
                state: { s, chars, l, r, activeIndices: [l] },
                lineHighlights: {
                    python: 6,
                    javascript: 5,
                    cpp: 7,
                    java: 7
                },
                explanation: {
                    goal: 'Skip non-alphanumeric',
                    decision: 'l++',
                    reason: 'Problem states we should only consider letters and numbers.',
                    invariant: 'l has moved forward'
                },
                insights: {
                    timeComplexity: 'O(n)',
                    spaceComplexity: 'O(1)',
                    operations: ++ops,
                    status: 'Running'
                }
            });
            continue;
        }

        if (!isAlnum(chars[r])) {
            r--;
            steps.push({
                id: `step-${steps.length}`,
                description: `'${chars[r + 1]}' is not alphanumeric. Decrementing r.`,
                state: { s, chars, l, r, activeIndices: [r] },
                lineHighlights: {
                    python: 8,
                    javascript: 7,
                    cpp: 9,
                    java: 9
                },
                explanation: {
                    goal: 'Skip non-alphanumeric',
                    decision: 'r--',
                    reason: 'Problem states we should only consider letters and numbers.',
                    invariant: 'r has moved backward'
                },
                insights: {
                    timeComplexity: 'O(n)',
                    spaceComplexity: 'O(1)',
                    operations: ++ops,
                    status: 'Running'
                }
            });
            continue;
        }

        if (chars[l].toLowerCase() !== chars[r].toLowerCase()) {
            steps.push({
                id: `step-${steps.length}`,
                description: `'${chars[l]}' does not match '${chars[r]}'. Not a palindrome!`,
                state: { s, chars, l, r, activeIndices: [l, r], mismatch: true },
                lineHighlights: {
                    python: 11,
                    javascript: 10,
                    cpp: 12,
                    java: 12
                },
                explanation: {
                    goal: 'Verify equality',
                    decision: 'Return False',
                    reason: `Mismatch detected at indices ${l} and ${r}.`,
                    invariant: 'Characters are not symmetric'
                },
                insights: {
                    timeComplexity: 'O(n)',
                    spaceComplexity: 'O(1)',
                    operations: ++ops,
                    status: 'Failure'
                }
            });
            return steps;
        }

        l++;
        r--;
        steps.push({
            id: `step-${steps.length}`,
            description: `'${chars[l - 1]}' matches '${chars[r + 1]}'. Moving pointers inward.`,
            state: { s, chars, l, r, activeIndices: [l, r] },
            lineHighlights: {
                python: 13,
                javascript: 12,
                cpp: 15,
                java: 15
            },
            explanation: {
                goal: 'Continue validation',
                decision: 'l++, r--',
                reason: 'Current pair matches, check the next inner pair.',
                invariant: 'Symmetry holds so far'
            },
            insights: {
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                operations: ++ops,
                status: 'Running'
            }
        });
    }

    steps.push({
        id: `step-${steps.length}`,
        description: 'All characters compared successfully. It is a palindrome!',
        state: { s, chars, l, r, activeIndices: [], success: true },
        lineHighlights: {
            python: 14,
            javascript: 17,
            cpp: 18,
            java: 18
        },
        explanation: {
            goal: 'Finish validation',
            decision: 'Return True',
            reason: 'No mismatches were found across the entire string.',
            invariant: 'Symmetry verified'
        },
        insights: {
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            operations: ++ops,
            status: 'Success'
        },
        result: true
    });

    return steps;
}

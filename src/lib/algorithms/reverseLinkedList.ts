import { VisualizationStep } from "../../types";

export function getReverseLinkedListSteps(nodes: any[], mode: string = 'interview'): VisualizationStep[] {
    const steps: VisualizationStep[] = [];
    let ops = 0;

    if (mode === 'beginner') {
        // Brute Force: Store in array and reconstruct (Educational approach)
        const values = [...nodes];
        steps.push({
            id: `step-${steps.length}`,
            description: 'Beginner Approach: Extract all node values into an array.',
            state: { nodes, values, activeIndices: nodes.map((_, i) => i) },
            lineHighlights: { python: 1, javascript: 1, cpp: 1, java: 1 },
            explanation: {
                goal: 'Extract values',
                decision: 'arr = collect_values(head)',
                reason: 'It is often easier for beginners to think about arrays than in-place pointer manipulation.',
                invariant: 'Array contains all values'
            },
            insights: { timeComplexity: 'O(n)', spaceComplexity: 'O(n)', operations: ++ops, status: 'Running' }
        });

        const reversed = [...values].reverse();
        steps.push({
            id: `step-${steps.length}`,
            description: 'Reverse the array of values.',
            state: { nodes, values: reversed, activeIndices: nodes.map((_, i) => i) },
            lineHighlights: { python: 2, javascript: 2, cpp: 2, java: 2 },
            explanation: {
                goal: 'Reverse values',
                decision: 'arr.reverse()',
                reason: 'Simple array reversal logic.',
                invariant: 'Values are in reverse order'
            },
            insights: { timeComplexity: 'O(n)', spaceComplexity: 'O(n)', operations: ++ops, status: 'Running' }
        });

        steps.push({
            id: `step-${steps.length}`,
            description: 'Create new nodes or update values in-place using the reversed array.',
            state: { nodes: reversed, activeIndices: reversed.map((_, i) => i) },
            lineHighlights: { python: 3, javascript: 3, cpp: 3, java: 3 },
            explanation: {
                goal: 'Reconstruct list',
                decision: 'new_head = reconstruct(arr)',
                reason: 'Final step to return a linked list structure.',
                invariant: 'List is reversed'
            },
            insights: { timeComplexity: 'O(n)', spaceComplexity: 'O(n)', operations: ++ops, status: 'Success' }
        });

        return steps;
    }

    // Initial state (Optimal)
    steps.push({
        id: `step-${steps.length}`,
        description: 'Initialize prev to null and curr to head.',
        state: { nodes, prev: null, curr: 0, next: null },
        lineHighlights: {
            python: 3,
            javascript: 2,
            cpp: 4,
            java: 3
        },
        explanation: {
            goal: 'Setup pointers',
            decision: 'prev = null, curr = head',
            reason: 'The new tail of the reversed list will point to null.',
            invariant: 'prev is null, curr is the first node'
        },
        insights: {
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            operations: ++ops,
            status: 'Running'
        }
    });

    let prev = null;
    let curr = 0;

    while (curr < nodes.length) {
        // Step 1: next = curr.next
        steps.push({
            id: `step-${steps.length}`,
            description: `Store reference to next node: ${nodes[curr + 1] || 'null'}`,
            state: { nodes, prev, curr, next: curr + 1 },
            lineHighlights: {
                python: 5,
                javascript: 5,
                cpp: 6,
                java: 5
            },
            explanation: {
                goal: 'Save the rest of the list',
                decision: 'nxt = curr.next',
                reason: 'We are about to overwrite curr.next, so we must save it first.',
                invariant: 'next points to the node after curr'
            },
            insights: {
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                operations: ++ops,
                status: 'Running'
            }
        });

        // Step 2: curr.next = prev
        steps.push({
            id: `step-${steps.length}`,
            description: `Point ${nodes[curr]}'s next to ${prev !== null ? nodes[prev] : 'null'}.`,
            state: { nodes, prev, curr, next: curr + 1, reversedConnection: [curr, prev] },
            lineHighlights: {
                python: 6,
                javascript: 6,
                cpp: 7,
                java: 6
            },
            explanation: {
                goal: 'Reverse the connection',
                decision: 'curr.next = prev',
                reason: 'This is the core of the reversal process.',
                invariant: 'The node at curr now points backwards'
            },
            insights: {
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                operations: ++ops,
                status: 'Running'
            }
        });

        // Step 3: prev = curr
        prev = curr;
        steps.push({
            id: `step-${steps.length}`,
            description: `Move prev pointer to current node: ${nodes[curr]}`,
            state: { nodes, prev, curr, next: curr + 1 },
            lineHighlights: {
                python: 7,
                javascript: 7,
                cpp: 8,
                java: 7
            },
            explanation: {
                goal: 'Advance prev pointer',
                decision: 'prev = curr',
                reason: 'Prepare for the next iteration.',
                invariant: 'prev is now at the last processed node'
            },
            insights: {
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                operations: ++ops,
                status: 'Running'
            }
        });

        // Step 4: curr = nxt
        curr = curr + 1;
        steps.push({
            id: `step-${steps.length}`,
            description: `Move curr pointer to next node: ${nodes[curr] || 'null'}`,
            state: { nodes, prev, curr, next: curr },
            lineHighlights: {
                python: 8,
                javascript: 8,
                cpp: 9,
                java: 8
            },
            explanation: {
                goal: 'Advance curr pointer',
                decision: 'curr = nxt',
                reason: 'Move to the next node to be reversed.',
                invariant: 'curr has moved forward'
            },
            insights: {
                timeComplexity: 'O(n)',
                spaceComplexity: 'O(1)',
                operations: ++ops,
                status: 'Running'
            }
        });
    }

    // Final step
    steps.push({
        id: `step-${steps.length}`,
        description: 'Reverse complete! Returning new head.',
        state: { nodes, prev, curr: null, next: null },
        lineHighlights: {
            python: 9,
            javascript: 10,
            cpp: 11,
            java: 10
        },
        explanation: {
            goal: 'Return result',
            decision: 'return prev',
            reason: 'prev now points to the original tail, which is the new head.',
            invariant: 'The list is fully reversed'
        },
        insights: {
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            operations: ++ops,
            status: 'Success'
        },
        result: nodes.slice().reverse()
    });

    return steps;
}

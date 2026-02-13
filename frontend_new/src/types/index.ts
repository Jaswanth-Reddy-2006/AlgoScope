export type AlgorithmType = 'two_pointer' | 'sliding_window' | 'stack' | 'linked_list' | 'tree' | 'graph'

export interface Step {
    step: number
    description: string
    activeLine?: number
    state: {
        pointers?: Array<{ id: string, index: number, color: string }>
        windowRange?: [number, number]
        mapState?: Record<string, any>
        found?: boolean
        customState?: Record<string, any>
        finalAnswer?: any
        explanation?: string
    }
}

export interface Problem {
    id: number
    title: string
    slug: string
    difficulty: 'Easy' | 'Medium' | 'Hard'
    algorithmType: AlgorithmType
    status: 'complete' | 'coming_soon'
    tags: string[]
    problem_statement: string
    constraints: string[]
    examples: any[]
    brute_force_explanation: string
    optimal_explanation: string
    brute_force_steps: Step[]
    optimal_steps: Step[]
    complexity: {
        brute: string
        optimal: string
        space: string
    }
    thinking_guide?: {
        first_principles: string[]
        pattern_signals: string[]
        naive_approach: string[]
        approach_blueprint: string[]
    }
}

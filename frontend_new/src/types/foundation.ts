export type FoundationFamily = 'Sorting' | 'Searching' | 'Traversal' | 'Recursion' | 'Graph' | 'DP'
export type FoundationDifficulty = 'Novice' | 'Adept' | 'Expert' | 'Master'
export type VisualizerType = 'array' | 'tree' | 'graph' | 'grid' | 'custom'

export interface FoundationDrill {
    id: string
    type:
    | 'invariant_identification'
    | 'mistake_detection'
    | 'signal_recognition'
    | 'prediction'
    | 'complexity_analysis'
    | 'tradeoff_analysis'
    | 'edge_case_construction' // New
    | 'stability_detection' // New
    question: string
    scenario: string
    options: string[]
    correctAnswer: string
    explanation: string
    codeSnippet?: string
}

export interface AcademicLayer {
    formalInvariant: string
    proofIntuition: string
    stability: string // "Stable" | "Unstable" | "Context Dependent"
    inPlace: string // "Yes" | "No" | "Stack Only"
    recurrence?: string
    spaceModel: string
}

export interface CompetitiveLayer {
    constraints: string // e.g., "N <= 10^5"
    optimizationTricks: string[]
    tleRisk: string[] // Scenarios causing Time Limit Exceeded
    template?: string // Logic skeleton
}

export interface InterviewLayer {
    edgeCases: string[]
    trapSimulation: string // Description of a common trap
    wrongAssumptions: string[]
    duplicateHandling?: string
}

export interface PerformanceData {
    complexityGraph: { inputSize: number, time: number }[] // For visualization
    memoryGraph?: { inputSize: number, memory: number }[]
    bestCase: string
    averageCase: string
    worstCase: string
}

export interface FoundationModule {
    id: string
    title: string
    family: FoundationFamily
    difficulty: FoundationDifficulty
    description: string

    // Curriculum Logic
    prerequisites: string[] // IDs of required modules
    unlocks: string[] // IDs validation unlocks

    // Legacy Content (Keep for backward compat or migrate)
    // We will migrate 'invariant', 'signals', etc. to specific layers, 
    // but might keep 'why' and 'realWorldUses' at top level
    why: string
    realWorldUses: string[]

    // New Tri-Layer Structure
    academic: AcademicLayer
    competitive: CompetitiveLayer
    interview: InterviewLayer

    // Performance
    performance: PerformanceData

    // Visualization
    visualizerType: VisualizerType
    visualizerConfig?: any

    // Mastery
    drill: FoundationDrill[]
}

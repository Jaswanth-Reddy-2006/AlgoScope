export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Hint {
  id: string;
  text: string;
  isUnlocked: boolean;
}

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export interface TestCase {
  input: any;
  expectedOutput: any;
  isHidden?: boolean;
}

export interface AlgorithmEvent {
  type: 'compare' | 'swap' | 'pointerMove' | 'insert' | 'delete' | 'visit' | 'recurse' | 'return' | 'setMap' | 'highlight';
  params: any;
  description: string;
  line?: number;
}

export interface VisualizationStep {
  id: string;
  description: string;
  state: any;
  lineHighlight?: number;
  lineHighlights?: {
    python?: number;
    javascript?: number;
    cpp?: number;
    java?: number;
  };
  explanation?: {
    goal: string;
    decision: string;
    reason: string;
    invariant: string;
  };
  insights?: {
    timeComplexity: string;
    spaceComplexity: string;
    operations: number;
    status: string;
  };
  result?: any;
}

export interface Complexity {
  time: string;
  space: string;
}

export interface Problem {
  id: string;
  slug: string; // Used for URL
  title: string;
  difficulty: Difficulty;
  diffClass: string;
  category: string;
  description: string;
  realWorldApp?: string;
  examples: Example[];
  constraints?: string[];
  complexity?: Complexity;
  starterCode?: string;
  beginnerCode?: string | {
    python?: string;
    javascript?: string;
    cpp?: string;
    java?: string;
  };
  codes?: {
    python?: string;
    javascript?: string;
    cpp?: string;
    java?: string;
  };
  hints?: Hint[];
  acceptance?: string;
  topics?: string[];
  tags?: string;
  detailedExplanation?: string;
  edgeCases?: string[];
  algorithmSteps?: string[]; // New: Step-by-step logic
  defaultInput?: any;
  testCases?: TestCase[];

  // Complexity & Code toggles
  beginnerComplexity?: Complexity;
  optimalComplexity?: Complexity;
}

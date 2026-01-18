import { create } from 'zustand';
import { Problem, VisualizationStep } from '../types';
import { problems } from '../data/problems';

interface EditorState {
  code: string;
  language: string;
  theme: 'vs-dark' | 'light';
  activeProblem: Problem | null;
  visualizationSteps: VisualizationStep[];
  currentStepIndex: number;
  isPlaying: boolean;
  mode: 'beginner' | 'interview';
  speed: number;

  setCode: (code: string) => void;
  setLanguage: (language: string) => void;
  setTheme: (theme: 'vs-dark' | 'light') => void;
  setActiveProblem: (id: string | null) => void;
  setVisualizationSteps: (steps: VisualizationStep[]) => void;
  setCurrentStepIndex: (index: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setIsPlaying: (isPlaying: boolean) => void;
  unlockHint: (hintId: string) => void;
  setMode: (mode: 'beginner' | 'interview') => void;
  setSpeed: (speed: number) => void;
}

export const useEditorStore = create<EditorState>((set, get) => ({
  code: "",
  language: 'javascript',
  theme: 'vs-dark',
  activeProblem: null,
  visualizationSteps: [],
  currentStepIndex: -1,
  isPlaying: false,
  mode: 'beginner',
  speed: 1,

  setCode: (code) => set({ code }),
  setLanguage: (language) => set({ language }),
  setTheme: (theme) => set({ theme }),

  setActiveProblem: (id) => {
    if (!id) {
      set({ activeProblem: null, code: "", visualizationSteps: [], currentStepIndex: -1, isPlaying: false });
      return;
    }
    const problem = problems.find(p => p.id === id) || null;
    set({
      activeProblem: problem,
      code: problem?.starterCode || "",
      visualizationSteps: [],
      currentStepIndex: -1,
      isPlaying: false
    });
  },

  setVisualizationSteps: (steps) => set({
    visualizationSteps: steps,
    currentStepIndex: steps.length > 0 ? 0 : -1
  }),

  setCurrentStepIndex: (index) => set({ currentStepIndex: index }),

  nextStep: () => {
    const { currentStepIndex, visualizationSteps } = get();
    if (currentStepIndex < visualizationSteps.length - 1) {
      set({ currentStepIndex: currentStepIndex + 1 });
    }
  },

  prevStep: () => {
    const { currentStepIndex } = get();
    if (currentStepIndex > 0) {
      set({ currentStepIndex: currentStepIndex - 1 });
    }
  },

  setIsPlaying: (isPlaying) => set({ isPlaying }),

  unlockHint: (hintId) => set((state) => {
    if (!state.activeProblem) return state;
    return {
      activeProblem: {
        ...state.activeProblem,
        hints: state.activeProblem.hints?.map(h =>
          h.id === hintId ? { ...h, isUnlocked: true } : h
        ) || []
      }
    };
  }),

  setMode: (mode) => set({ mode }),
  setSpeed: (speed) => set({ speed }),
}));

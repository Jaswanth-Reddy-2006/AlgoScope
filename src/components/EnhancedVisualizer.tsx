import { useNavigate, useParams } from "react-router-dom"
import { useEditorStore } from "../store/useEditorStore"
import { problems } from "../data/problems"
import { useEffect, useState, useRef } from "react"
import { algorithmGenerators } from "../lib/algorithms"
import { Sidebar } from "./Sidebar"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"

export function EnhancedVisualizer() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const {
    activeProblem: storeActiveProblem,
    setActiveProblem,
    visualizationSteps,
    setVisualizationSteps,
    currentStepIndex,
    setCurrentStepIndex,
    isPlaying,
    setIsPlaying,
    speed,
    language,
    setLanguage,
    mode,
    setMode,
    setSpeed
  } = useEditorStore()

  const timerRef = useRef<number | null>(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [inputData, setInputData] = useState<string>('')
  const [copiedCode, setCopiedCode] = useState(false)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowWidth < 768

  const problem = problems.find(p => p.slug === slug)
  const activeProblem = problem || storeActiveProblem;

  useEffect(() => {
    if (problem) {
      setActiveProblem(problem.id)

      let initialInput = problem.defaultInput || getDefaultFallbackInput(problem);

      const sessionInput = JSON.stringify(initialInput);
      setInputData(sessionInput)
      generateSteps(problem.slug, initialInput, mode)
    }
  }, [slug, mode])

  const getDefaultFallbackInput = (p: any) => {
    const category = p.category;
    if (category === 'Graphs') return { grid: [["1", "1", "0"], ["1", "1", "0"], ["0", "0", "1"]] };
    if (category === 'Trees') return { treeLevels: [[{ val: '6', isActive: true }], [{ val: '2' }, { val: '8' }]] };
    if (category === 'Linked List') return { nodes: [1, 2, 3, 4, 5] };
    if (category === 'Bit Manipulation') return { n: 11 };
    if (category === 'Tries') return { words: ["apple", "app", "apricot"] };
    if (category === 'Two Pointers' && p.slug.includes('palindrome')) return { s: "racecar" };
    if (p.slug.includes('matrix') || p.slug.includes('image')) return { matrix: [[1, 2], [3, 4]] };

    return { nums: [1, 2, 3, 4, 5] };
  }

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLInputElement) return;

      if (e.code === 'Space') {
        e.preventDefault()
        setIsPlaying(!isPlaying)
      } else if (e.code === 'ArrowRight') {
        e.preventDefault()
        setCurrentStepIndex(Math.min(visualizationSteps.length - 1, currentStepIndex + 1))
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault()
        setCurrentStepIndex(Math.max(0, currentStepIndex - 1))
      } else if (e.code === 'KeyR' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault()
        setCurrentStepIndex(0)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isPlaying, currentStepIndex, visualizationSteps.length])

  const generateSteps = (problemSlug: string, input: any, currentMode: string) => {
    if (algorithmGenerators[problemSlug]) {
      try {
        const steps = algorithmGenerators[problemSlug](input, currentMode)
        setVisualizationSteps(steps)
        setCurrentStepIndex(0)
        setIsPlaying(false)
      } catch (err) {
        console.error("Simulation failed:", err)
      }
    }
  }

  const handleRandomizeInput = () => {
    let randomInput: any = {}
    if (activeProblem?.slug === 'two-sum') {
      const nums = Array.from({ length: 7 }, () => Math.floor(Math.random() * 20) + 1)
      const target = nums[Math.floor(Math.random() * nums.length)] + nums[Math.floor(Math.random() * nums.length)]
      randomInput = { nums, target }
    } else if (activeProblem?.slug === 'reverse-linked-list') {
      randomInput = { nodes: Array.from({ length: 6 }, (_, i) => i + 1).sort(() => Math.random() - 0.5) }
    } else {
      randomInput = { nums: Array.from({ length: 5 }, () => Math.floor(Math.random() * 10) + 1) }
    }
    setInputData(JSON.stringify(randomInput))
    generateSteps(activeProblem!.slug, randomInput, mode)
  }

  const handleUpdateInput = () => {
    try {
      const parsed = JSON.parse(inputData)
      if (activeProblem) {
        generateSteps(activeProblem.slug, parsed, mode)
        setIsEditModalOpen(false)
      }
    } catch {
      alert("Invalid JSON format. Please check your input structure.")
    }
  }

  const handleCopyCode = async () => {
    const code = getCodeContent()
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(true)
      setTimeout(() => setCopiedCode(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  useEffect(() => {
    if (isPlaying) {
      const interval = 2000 / (speed || 1)
      timerRef.current = window.setInterval(() => {
        if (currentStepIndex < visualizationSteps.length - 1) {
          setCurrentStepIndex(currentStepIndex + 1)
        } else {
          setIsPlaying(false)
        }
      }, interval)
    } else if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPlaying, currentStepIndex, visualizationSteps.length, speed])

  if (!activeProblem) return null;
  const currentStep = visualizationSteps[currentStepIndex];
  const totalSteps = visualizationSteps.length;

  const getCodeContent = () => {
    const codeObj = mode === 'beginner' && activeProblem.beginnerCode
      ? activeProblem.beginnerCode
      : activeProblem.codes;

    if (typeof codeObj === 'string') return codeObj;

    const langCode = (codeObj as any)?.[language as keyof typeof activeProblem.codes];
    if (langCode) return langCode;

    return activeProblem.starterCode || `// No code template for ${language}`;
  }

  const getCurrentLine = () => {
    if (!currentStep) return -1;
    if (currentStep.lineHighlights) {
      const lang = language === 'python' ? 'python' : language === 'javascript' ? 'javascript' : 'cpp';
      return currentStep.lineHighlights[lang as keyof typeof currentStep.lineHighlights] || -1;
    }
    return (currentStep as any).lineHighlight || (currentStep as any).line || -1;
  }

  const currentLine = getCurrentLine();

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex overflow-hidden">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-auto min-h-16 px-4 md:px-6 py-3 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between bg-white dark:bg-slate-900/50 gap-4">
          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                <span className="material-symbols-outlined text-xl">arrow_back</span>
              </button>
              <div>
                <h1 className="font-bold text-sm md:text-lg leading-none dark:text-white capitalize truncate max-w-[150px] md:max-w-none">
                  {slug?.replace(/-/g, ' ')}
                  <span className="hidden sm:inline text-xs font-normal text-slate-400 ml-2 uppercase tracking-tighter">LEETCODE {activeProblem.id}</span>
                </h1>
              </div>
            </div>
            {isMobile && (
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase rounded border ${activeProblem.difficulty === 'Easy' ? 'bg-accent-neon/10 text-accent-neon border-accent-neon/20' :
                  activeProblem.difficulty === 'Medium' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                    'bg-rose-500/10 text-rose-500 border-rose-500/20'
                  }`}>
                  {activeProblem.difficulty}
                </span>
              </div>
            )}
          </div>

          <div className="glass px-4 md:px-6 py-2 rounded-2xl md:rounded-full flex items-center justify-between md:justify-center gap-4 md:gap-6 shadow-xl border border-white/5 w-full md:w-auto order-3 md:order-2 overflow-x-auto">
            <div className="flex items-center gap-4 md:gap-6 flex-1 justify-center">
              <button
                onClick={() => setCurrentStepIndex(0)}
                className="text-slate-400 hover:text-accent-neon transition-colors"
              >
                <span className="material-symbols-outlined text-lg">replay</span>
              </button>
              <button
                onClick={() => setCurrentStepIndex(Math.max(0, currentStepIndex - 1))}
                className="text-slate-400 hover:text-accent-neon transition-colors"
              >
                <span className="material-symbols-outlined text-lg">skip_previous</span>
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 bg-accent-neon hover:bg-accent-neon/90 text-black rounded-full flex items-center justify-center shadow-lg shadow-accent-neon/30 transition-all active:scale-95 shrink-0"
              >
                <span className="material-symbols-outlined fill-1">{isPlaying ? 'pause' : 'play_arrow'}</span>
              </button>
              <button
                onClick={() => setCurrentStepIndex(Math.min(visualizationSteps.length - 1, currentStepIndex + 1))}
                className="text-slate-400 hover:text-accent-neon transition-colors"
              >
                <span className="material-symbols-outlined text-lg">skip_next</span>
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-3 ml-2 border-l border-white/10 pl-5">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-slate-400">speed</span>
                <input
                  type="range"
                  min="0.5"
                  max="3"
                  step="0.5"
                  value={speed}
                  onChange={(e) => setSpeed(parseFloat(e.target.value))}
                  className="w-16 md:w-24 accent-accent-neon h-1 bg-slate-300 dark:bg-slate-600 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-[10px] font-black text-slate-500 w-6">{speed}x</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-3 md:gap-4 w-full md:w-auto order-2 md:order-3">
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setMode('beginner')}
                className={`px-2.5 md:px-3 py-1.5 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-wider transition-all ${mode === 'beginner'
                  ? 'bg-white dark:bg-slate-900 text-accent-neon shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
              >
                Beginner
              </button>
              <button
                onClick={() => setMode('interview')}
                className={`px-2.5 md:px-3 py-1.5 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-wider transition-all ${mode === 'interview'
                  ? 'bg-white dark:bg-slate-900 text-accent-neon shadow-sm'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
              >
                Interview
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <span className={`px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded border ${activeProblem.difficulty === 'Easy' ? 'bg-accent-neon/10 text-accent-neon border-accent-neon/20' :
                activeProblem.difficulty === 'Medium' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                  'bg-rose-500/10 text-rose-500 border-rose-500/20'
                }`}>
                {activeProblem.difficulty}
              </span>
            </div>

            <button
              onClick={() => setIsEditModalOpen(true)}
              className="flex items-center gap-2 px-3 md:px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-[11px] md:text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-sm">edit</span> Edit Input
            </button>
          </div>
        </header>

        <div className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-950">
          <PanelGroup direction={isMobile ? "vertical" : "horizontal"}>
            {/* Left Column: Explanation + Code */}
            <Panel defaultSize={isMobile ? 40 : 48} minSize={20}>
              <PanelGroup direction="vertical">
                {/* Step by Step Explanation */}
                <Panel defaultSize={60} minSize={20}>
                  <section className="h-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm overflow-hidden">
                    <div className="p-3 border-b border-slate-100 dark:border-slate-800/50 flex justify-between items-center bg-slate-50/50 dark:bg-white/5">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-accent-neon text-base">description</span>
                        <h2 className="text-[11px] font-bold tracking-tight uppercase text-slate-500 dark:text-slate-400">Step by Step Explanation</h2>
                      </div>
                    </div>
                    <div className="flex-1 p-5 overflow-y-auto custom-scrollbar bg-slate-50/30 dark:bg-slate-900/10">
                      <div className="space-y-8">
                        {/* Problem Description Section */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-accent-neon">
                            <span className="material-symbols-outlined text-base">description</span>
                            <h3 className="text-[10px] font-black uppercase tracking-widest">Problem Description</h3>
                          </div>
                          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-4 rounded-xl shadow-sm">
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs font-medium">
                              {activeProblem.description}
                            </p>
                          </div>
                        </div>

                        {/* Detailed Explanation Section */}
                        {activeProblem.detailedExplanation && (
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 text-purple-500">
                              <span className="material-symbols-outlined text-base">menu_book</span>
                              <h3 className="text-[10px] font-black uppercase tracking-widest">Detailed Explanation</h3>
                            </div>
                            <div className="bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/20 p-4 rounded-xl">
                              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs font-medium whitespace-pre-line">
                                {activeProblem.detailedExplanation}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Edge Cases Section */}
                        {activeProblem.edgeCases && activeProblem.edgeCases.length > 0 && (
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 text-rose-500">
                              <span className="material-symbols-outlined text-base">report_problem</span>
                              <h3 className="text-[10px] font-black uppercase tracking-widest">Edge Cases to Consider</h3>
                            </div>
                            <div className="bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/20 p-4 rounded-xl">
                              <ul className="space-y-2">
                                {activeProblem.edgeCases.map((ec, i) => (
                                  <li key={i} className="flex items-start gap-2 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1 shrink-0"></span>
                                    {ec}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        {/* Examples Section */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 text-blue-500">
                            <span className="material-symbols-outlined text-base">lightbulb</span>
                            <h3 className="text-[10px] font-black uppercase tracking-widest">Examples</h3>
                          </div>
                          <div className="grid grid-cols-1 gap-3">
                            {activeProblem.examples.slice(0, 3).map((ex, idx) => (
                              <div key={idx} className="bg-slate-100 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800 p-3 rounded-lg">
                                <div className="text-[10px] font-bold text-slate-500 mb-2 uppercase tracking-tighter">Example {idx + 1}</div>
                                <div className="font-mono text-[10px] space-y-1">
                                  <div className="flex gap-2">
                                    <span className="text-blue-400 font-bold shrink-0">Input:</span>
                                    <span className="text-slate-600 dark:text-slate-300 break-all">{ex.input}</span>
                                  </div>
                                  <div className="flex gap-2">
                                    <span className="text-emerald-400 font-bold shrink-0">Output:</span>
                                    <span className="text-slate-600 dark:text-slate-300 break-all">{ex.output}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Constraints Section */}
                        {activeProblem.constraints && activeProblem.constraints.length > 0 && (
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 text-orange-500">
                              <span className="material-symbols-outlined text-base">assignment_late</span>
                              <h3 className="text-[10px] font-black uppercase tracking-widest">Constraints</h3>
                            </div>
                            <div className="bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl">
                              <ul className="space-y-2">
                                {activeProblem.constraints.map((c, i) => (
                                  <li key={i} className="flex items-start gap-2 text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 shrink-0"></span>
                                    {c}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        {/* Steps History Section */}
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-emerald-500">
                              <span className="material-symbols-outlined text-base">reorder</span>
                              <h3 className="text-[10px] font-black uppercase tracking-widest">Algorithmic Steps ({totalSteps})</h3>
                            </div>
                            <span className="text-[9px] font-black text-slate-400 uppercase">Step {currentStepIndex + 1} of {totalSteps}</span>
                          </div>
                          <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            {visualizationSteps.map((step, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentStepIndex(idx)}
                                className={`w-full text-left p-3 rounded-lg border transition-all flex gap-3 group ${currentStepIndex === idx
                                  ? 'bg-accent-neon border-accent-neon text-black shadow-lg shadow-accent-neon/20'
                                  : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-accent-neon/50'
                                  }`}
                              >
                                <div className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-black shrink-0 ${currentStepIndex === idx ? 'bg-black text-accent-neon' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                                  }`}>
                                  {idx + 1}
                                </div>
                                <div className={`text-[11px] leading-tight font-medium ${currentStepIndex === idx ? 'text-black' : 'text-slate-600 dark:text-slate-400'}`}>
                                  {step.description}
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-t border-slate-100 dark:border-slate-800 flex gap-4 bg-slate-50/50 dark:bg-white/5">
                      <div className="flex items-center gap-2 text-[9px] font-black text-orange-400 uppercase tracking-widest">
                        <span className="material-symbols-outlined text-xs">speed</span> TIME: {activeProblem.complexity?.time || 'O(N)'}
                      </div>
                      <div className="flex items-center gap-2 text-[9px] font-black text-accent-neon uppercase tracking-widest">
                        <span className="material-symbols-outlined text-xs">grid_view</span> SPACE: {activeProblem.complexity?.space || 'O(1)'}
                      </div>
                    </div>
                  </section>
                </Panel>

                <PanelResizeHandle className="h-0.5 bg-slate-200 dark:bg-slate-800 hover:bg-accent-neon transition-colors cursor-row-resize" />

                {/* Code Editor */}
                <Panel defaultSize={40} minSize={20}>
                  <section className="h-full bg-[#1E2227] flex flex-col shadow-lg overflow-hidden border border-slate-800">
                    <div className="px-3 py-2 bg-[#21252b] border-b border-[#181a1f] flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                        </div>
                        <span className="text-[9px] font-black tracking-widest text-slate-500 uppercase ml-2">{slug}.{language === 'javascript' ? 'js' : language === 'python' ? 'py' : 'cpp'}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={handleCopyCode}
                          className={`text-slate-500 hover:text-slate-300 transition-colors ${copiedCode ? 'text-accent-neon' : ''}`}
                        >
                          <span className="material-symbols-outlined text-base">{copiedCode ? 'check' : 'content_copy'}</span>
                        </button>
                        <select
                          value={language}
                          onChange={(e) => setLanguage(e.target.value)}
                          className="bg-[#181a1f] text-[10px] font-black text-slate-400 uppercase outline-none border border-white/5 rounded px-2 py-0.5 cursor-pointer focus:border-accent-neon transition-colors"
                        >
                          <option value="javascript">JavaScript</option>
                          <option value="python">Python</option>
                          <option value="cpp">C++</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex-1 p-4 font-mono text-xs overflow-y-auto custom-scrollbar leading-relaxed bg-[#282c34]">
                      <div className="flex gap-4">
                        <div className="text-slate-600 text-right select-none pr-3 border-r border-slate-800/50 text-[10px]">
                          {getCodeContent().split('\n').map((_: string, i: number) => (
                            <div key={i} className={currentLine === i + 1 ? 'text-accent-neon bg-accent-neon/10' : ''}>
                              {i + 1}
                            </div>
                          ))}
                        </div>
                        <div className="text-slate-300 text-[11px] whitespace-pre">
                          {getCodeContent().split('\n').map((line: string, i: number) => (
                            <div key={i} className={currentLine === i + 1 ? 'bg-accent-neon/10 w-full -ml-1 pl-1 border-l-2 border-accent-neon' : ''}>
                              {line || ' '}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                </Panel>
              </PanelGroup>
            </Panel>

            <PanelResizeHandle className="w-0.5 bg-slate-200 dark:bg-slate-800 hover:bg-accent-neon transition-colors cursor-col-resize" />

            {/* Right Column: Memory Visualization + Logic */}
            <Panel defaultSize={52} minSize={30}>
              <section className="h-full bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 flex flex-col shadow-sm overflow-hidden">
                <div className="p-3 border-b border-slate-100 dark:border-slate-800/50 flex justify-between items-center bg-slate-50/50 dark:bg-white/5">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent-neon text-base">analytics</span>
                    <h2 className="text-[11px] font-bold tracking-tight uppercase text-slate-500 dark:text-slate-400">Memory Visualization & Logic Insight</h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-neon animate-pulse"></span>
                      <span className="text-[9px] font-bold text-slate-500 uppercase">Current</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                      <span className="text-[9px] font-bold text-slate-500 uppercase">Match</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col overflow-hidden">
                  <div className="flex-1 p-6 overflow-y-auto custom-scrollbar flex flex-col justify-start pt-16 bg-white dark:bg-slate-900/30">
                    <div className="flex flex-wrap gap-3 justify-center items-center">
                      {/* Array Visualization (nums or chars) */}
                      {(() => {
                        const array = currentStep?.state?.nums || currentStep?.state?.chars;
                        return array ? array.map((val: any, idx: number) => {
                        const isActive = currentStep.state.activeIndices?.includes(idx) || currentStep.state.l === idx || currentStep.state.r === idx;
                        const isFound = currentStep.state.foundIndices?.includes(idx);
                        return (
                          <div key={idx} className="flex flex-col items-center gap-1.5 transition-all">
                            <div className={`w-12 h-12 rounded-lg border-[3px] flex items-center justify-center font-bold text-base shadow-md transition-transform hover:scale-105 ${isActive ? 'border-accent-neon bg-accent-neon/10 text-accent-neon shadow-accent-neon/20' :
                              isFound ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400 shadow-yellow-400/20' :
                                'border-slate-200 dark:border-slate-700 text-slate-400'
                              }`}>
                              {val}
                            </div>
                            <div className="flex flex-col items-center">
                              <span className={`text-[9px] font-mono font-bold ${isActive ? 'text-accent-neon' : isFound ? 'text-yellow-400' : 'text-slate-500'}`}>
                                i:{idx}
                              </span>
                              {currentStep.state.l === idx && <span className="text-[10px] text-accent-neon font-black">L</span>}
                              {currentStep.state.r === idx && <span className="text-[10px] text-accent-neon font-black">R</span>}
                            </div>
                          </div>
                        );
                      }) : null;
                      })()}

                      {/* Linked List Visualization (nodes) */}
                      {currentStep?.state?.nodes && currentStep.state.nodes.map((val: any, idx: number) => {
                        const isCurr = currentStep.state.curr === idx;
                        const isPrev = currentStep.state.prev === idx;
                        const isNext = currentStep.state.next === idx;

                        return (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="flex flex-col items-center gap-1.5 transition-all">
                              <div className={`w-12 h-12 rounded-lg border-[3px] flex items-center justify-center font-bold text-base shadow-md transition-transform hover:scale-105 ${isCurr ? 'border-accent-neon bg-accent-neon/10 text-accent-neon shadow-accent-neon/20' :
                                isPrev ? 'border-blue-400 bg-blue-400/10 text-blue-400 shadow-blue-400/20' :
                                  isNext ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400 shadow-yellow-400/20' :
                                    'border-slate-200 dark:border-slate-700 text-slate-400'
                                }`}>
                                {val}
                              </div>
                              <div className="flex flex-col items-center h-8">
                                {isCurr && <span className="text-[9px] text-accent-neon font-black uppercase tracking-tighter">curr</span>}
                                {isPrev && <span className="text-[9px] text-blue-400 font-black uppercase tracking-tighter">prev</span>}
                                {isNext && <span className="text-[9px] text-yellow-400 font-black uppercase tracking-tighter">next</span>}
                              </div>
                            </div>
                            {idx < currentStep.state.nodes.length - 1 && (
                              <div className="mb-8 text-slate-300 dark:text-slate-700">
                                <span className="material-symbols-outlined text-2xl">arrow_forward</span>
                              </div>
                            )}
                          </div>
                        );
                      })}

                      {/* Fallback */}
                      {!currentStep?.state?.nums && !currentStep?.state?.chars && !currentStep?.state?.nodes && !currentStep?.state?.grid && !currentStep?.state?.treeLevels && (
                        <div className="text-slate-500 italic text-xs">No data to visualize for this step.</div>
                      )}

                      {/* Graph/Grid Visualization */}
                      {currentStep?.state?.grid && (
                        <div className="flex flex-col gap-1 border border-slate-200 dark:border-slate-800 p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                          {currentStep.state.grid.map((row: any[], rIdx: number) => (
                            <div key={rIdx} className="flex gap-1">
                              {row.map((cell: any, cIdx: number) => {
                                const isActive = currentStep.state.activeCell?.[0] === rIdx && currentStep.state.activeCell?.[1] === cIdx;
                                const isVisited = currentStep.state.visitedCells?.some((v: any) => v[0] === rIdx && v[1] === cIdx);
                                return (
                                  <div
                                    key={cIdx}
                                    className={`w-10 h-10 border flex items-center justify-center text-xs font-bold transition-all ${isActive ? 'bg-accent-neon border-accent-neon text-black scale-110 z-10 shadow-lg' :
                                      isVisited ? 'bg-accent-neon/20 border-accent-neon/30 text-accent-neon' :
                                        cell === '0' ? 'bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-400' :
                                          'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-500'
                                      }`}
                                  >
                                    {cell}
                                  </div>
                                );
                              })}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tree Visualization (Simplified Levels) */}
                      {currentStep?.state?.treeLevels && (
                        <div className="flex flex-col items-center gap-8 w-full py-4">
                          {currentStep.state.treeLevels.map((level: any[], lIdx: number) => (
                            <div key={lIdx} className="flex justify-center gap-12 relative w-full">
                              {level.map((node: any, nIdx: number) => (
                                <div key={nIdx} className="relative">
                                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold shadow-sm transition-all ${node.isActive ? 'border-accent-neon bg-accent-neon text-black' :
                                    'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500'
                                    }`}>
                                    {node.val}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Binary Representation */}
                      {currentStep?.state?.binary && (
                        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/50 w-full max-w-2xl mx-auto">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-xs text-slate-400">binary</span>
                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Binary Representation</h4>
                          </div>
                          <div className="flex justify-center gap-1">
                            {currentStep.state.binary.split('').map((bit: string, i: number) => (
                              <div key={i} className={`w-8 h-10 flex items-center justify-center font-mono font-bold text-sm rounded transition-all ${bit === '1' ? 'bg-accent-neon text-black scale-105 shadow-md shadow-accent-neon/20' : 'bg-slate-100 dark:bg-slate-800 text-slate-400 opacity-50'}`}>
                                {bit}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Recursion Stack */}
                      {currentStep?.state?.recursionStack && (
                        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/50 w-full max-w-2xl mx-auto">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-xs text-slate-400">layers</span>
                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Recursion Stack</h4>
                          </div>
                          <div className="flex flex-col-reverse gap-2 max-w-sm mx-auto">
                            {currentStep.state.recursionStack.map((frame: any, i: number) => (
                              <div key={i} className="flex items-center gap-4 bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800 animate-in slide-in-from-bottom-2 duration-300">
                                <div className="w-8 h-8 rounded-lg bg-accent-neon/10 flex items-center justify-center text-accent-neon text-xs font-black">
                                  {i}
                                </div>
                                <div className="flex-1">
                                  <div className="text-[11px] font-bold dark:text-white uppercase tracking-tight">{frame.name}</div>
                                  <div className="text-[9px] font-mono text-slate-500">DEPTH: {frame.depth}</div>
                                </div>
                                {i === currentStep.state.recursionStack.length - 1 && (
                                  <span className="w-2 h-2 rounded-full bg-accent-neon animate-ping"></span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Hash Map Content - Moved here */}
                    {currentStep?.state?.map && (
                      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/50 w-full max-w-2xl mx-auto">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="material-symbols-outlined text-xs text-slate-400">database</span>
                          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Hash Map State</h4>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                          {Object.entries(currentStep.state.map).map(([k, v]: [string, any]) => (
                            <div key={k} className="flex flex-col bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-100 dark:border-slate-800 p-2 transition-all hover:border-accent-neon/30">
                              <span className="text-[9px] font-bold text-slate-500 mb-1 truncate">{k}</span>
                              <span className="text-xs font-mono font-black text-accent-neon">{v}</span>
                            </div>
                          ))}
                          {Object.keys(currentStep.state.map).length === 0 && (
                            <div className="col-span-full py-4 text-center text-[10px] italic text-slate-500 bg-slate-50/50 dark:bg-white/5 rounded-lg border border-dashed border-slate-200 dark:border-slate-800">
                              No entries in map yet
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Final Result / Output Display */}
                    {currentStep?.result !== undefined && (
                      <div className="mt-8 pt-8 border-t-2 border-accent-neon/30 w-full max-w-2xl mx-auto animate-in zoom-in-95 duration-500">
                        <div className="bg-accent-neon/5 border border-accent-neon/20 rounded-2xl p-6 relative overflow-hidden shadow-2xl shadow-accent-neon/10">
                          <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent-neon/10 blur-3xl rounded-full"></div>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="size-8 rounded-lg bg-accent-neon flex items-center justify-center text-black">
                              <span className="material-symbols-outlined text-sm">emoji_events</span>
                            </div>
                            <h4 className="text-[11px] font-black text-accent-neon uppercase tracking-[0.2em]">Algorithm Execution Complete</h4>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Final Result / Output</p>
                              <div className="bg-black/20 dark:bg-black/40 rounded-xl p-4 border border-white/5">
                                <code className="text-lg md:text-xl font-mono font-bold text-white break-all">
                                  {typeof currentStep.result === 'object'
                                    ? JSON.stringify(currentStep.result)
                                    : String(currentStep.result)
                                  }
                                </code>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <div className="flex-1">
                                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Total Operations</p>
                                <p className="text-sm font-black text-white">{currentStep.insights?.operations || totalSteps}</p>
                              </div>
                              <div className="flex-1 text-right">
                                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Time Complexity</p>
                                <p className="text-sm font-black text-accent-neon">{currentStep.insights?.timeComplexity || activeProblem.complexity?.time}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Integrated Logic Insight - Fixed Height Card */}
                  <div className="h-[260px] shrink-0 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 overflow-y-auto custom-scrollbar">
                    <div className="max-w-4xl mx-auto h-full flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="flex items-center gap-2 text-[10px] font-black text-accent-neon mb-1 uppercase tracking-widest">
                            <span className="material-symbols-outlined text-xs">bolt</span> DECISION LOG • STEP #{currentStepIndex + 1}
                          </div>
                          <h3 className="text-xl font-black dark:text-white tracking-tight uppercase">
                            {currentStep?.result !== undefined
                              ? `SUCCESS: RESULT = ${typeof currentStep.result === 'object' ? JSON.stringify(currentStep.result) : currentStep.result}`
                              : currentStep?.state?.complement !== undefined
                                ? `FIND COMPLEMENT: ${currentStep.state.target} - ${currentStep.state.currentNum} = ${currentStep.state.complement}`
                                : currentStep?.explanation?.goal
                                  ? currentStep.explanation.goal
                                  : `CURRENT OPERATION: ${activeProblem.title}`
                            }
                          </h3>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="px-2 py-0.5 bg-accent-neon text-black text-[9px] font-black rounded uppercase tracking-tighter">
                            {currentStep?.insights?.status || 'LIVE'}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6 flex-1 min-h-0">
                        <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-4 border border-slate-100 dark:border-slate-800 flex flex-col justify-center transition-all duration-500">
                          <div className="flex items-center gap-1.5 text-accent-neon font-black text-[10px] uppercase mb-2 tracking-widest">
                            <span className="material-symbols-outlined text-sm">directions_run</span> Current Step
                          </div>
                          <p className="italic text-slate-600 dark:text-slate-300 text-xs leading-relaxed font-medium">
                            "{currentStep?.description || 'Evaluating next algorithmic move...'}"
                          </p>
                        </div>

                        <div className="flex flex-col justify-center">
                          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Variable Tracking</h4>
                          <div className="grid grid-cols-1 gap-1.5">
                            {Object.entries(currentStep?.state || {})
                              .filter(([k]) => !['activeIndices', 'foundIndices', 'nodes', 'nums', 'chars', 'map', 'binary', 'grid', 'treeLevels', 'activeCell', 'visitedCells', 'recursionStack'].includes(k))
                              .slice(0, 4) // Limit to 4 key variables to ensure they fit
                              .map(([key, value]: [string, any]) => (
                                <div key={key} className="flex items-center bg-slate-50 dark:bg-slate-950 rounded-lg p-1.5 border border-slate-100 dark:border-slate-800">
                                  <span className="w-20 text-[9px] font-black text-slate-500 uppercase px-2 border-r border-slate-200 dark:border-slate-700">{key}</span>
                                  <div className="flex-1 px-3 font-mono text-[11px] text-accent-neon font-bold truncate">
                                    {Array.isArray(value)
                                      ? (value.length > 5 ? `[${value.slice(0, 5).join(',')}+]` : `[${value.join(',')}]`)
                                      : typeof value === 'object' && value !== null
                                        ? '{...}'
                                        : String(value)
                                    }
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Panel>
          </PanelGroup>
        </div>
      </main>

      {/* Edit Modal (Keeping existing logic) */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white dark:bg-surface-dark w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl border border-white/10 animate-in zoom-in-95 duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Configure Session</h3>
              <button onClick={() => setIsEditModalOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 px-1">Input Data (JSON)</label>
                <textarea
                  value={inputData}
                  onChange={(e) => setInputData(e.target.value)}
                  className="w-full h-40 bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-white/10 rounded-2xl p-4 font-mono text-sm outline-none focus:border-accent-neon transition-colors resize-none"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleRandomizeInput}
                  className="flex-1 py-4 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
                >
                  Randomize
                </button>
                <button
                  onClick={handleUpdateInput}
                  className="flex-[2] py-4 bg-accent-neon text-black rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg shadow-accent-neon/20 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  Generate Steps
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

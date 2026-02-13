import React, { useEffect, Suspense, lazy } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { useStore } from '../store/useStore'
import ProblemInfo from '../components/layout/ProblemInfo'
import ThinkingGuide from '../components/problem/ThinkingGuide'
import ErrorBoundary from '../components/common/ErrorBoundary'
import LabSkeleton from '../components/layout/LabSkeleton'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Activity,
    ChevronLeft,
    Play,
    Pause,
    Timer,
    SkipBack,
    SkipForward,
    Lock
} from 'lucide-react'

// Lazy loaded heavy components
const VizPanel = lazy(() => import('../components/layout/VizPanel'))
const CognitiveConsole = lazy(() => import('../components/layout/CognitiveConsole'))
const SuccessSummary = lazy(() => import('../components/problem/SuccessSummary'))

const ProblemLab: React.FC = () => {
    const { slug } = useParams<{ slug: string }>()
    const currentProblem = useStore(state => state.currentProblem)
    const fetchProblemBySlug = useStore(state => state.fetchProblemBySlug)
    const isBruteForce = useStore(state => state.isBruteForce)
    const isPlaying = useStore(state => state.isPlaying)
    const setPlaying = useStore(state => state.setPlaying)
    const isEngineInitialized = useStore(state => state.isEngineInitialized)
    const refreshSteps = useStore(state => state.refreshSteps)
    const currentStepIndex = useStore(state => state.currentStepIndex)
    const nextStep = useStore(state => state.nextStep)
    const prevStep = useStore(state => state.prevStep)
    const resetState = useStore(state => state.resetState)
    const error = useStore(state => state.error) // Added missing selector
    const playbackSpeed = useStore(state => state.playbackSpeed) // Added missing selector
    const setSpeed = useStore(state => state.setSpeed) // Added missing selector
    const setStep = useStore(state => state.setStep) // Added missing selector

    const [isUnlocked, setIsUnlocked] = React.useState(false)

    const handleChecklistComplete = React.useCallback((complete: boolean) => {
        setIsUnlocked(complete)
    }, [])

    useEffect(() => {
        if (isUnlocked && currentProblem) {
            useStore.getState().finalizeThinkingTime(currentProblem.slug)
        }
    }, [isUnlocked, currentProblem])

    useEffect(() => {
        if (slug) {
            fetchProblemBySlug(slug)
        }
        return () => resetState()
    }, [slug, fetchProblemBySlug, resetState])

    const steps = isBruteForce ? currentProblem?.brute_force_steps : currentProblem?.optimal_steps
    const totalSteps = steps?.length || 0

    // Handle Auto-play logic
    useEffect(() => {
        let interval: any
        if (isPlaying && currentProblem && isEngineInitialized) {
            interval = setInterval(() => {
                if (currentStepIndex < totalSteps - 1) {
                    nextStep()
                } else {
                    setPlaying(false)
                }
            }, playbackSpeed)
        }
        return () => clearInterval(interval)
    }, [isPlaying, currentStepIndex, totalSteps, nextStep, setPlaying, playbackSpeed, currentProblem, isEngineInitialized])

    if (error) return <Navigate to="/404" replace />

    if (!currentProblem || !isEngineInitialized) return <LabSkeleton />

    if (currentProblem.status === 'coming_soon') {
        return (
            <div className="flex-1 flex items-center justify-center p-8 mesh-bg font-outfit">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center max-w-lg glass-card p-12 border border-white/5 bg-white/[0.02]"
                >
                    <div className="w-20 h-20 bg-accent-blue/5 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-white/10 shadow-glow">
                        <Activity className="text-accent-blue/60" size={32} />
                    </div>
                    <h2 className="text-4xl font-bold mb-4 tracking-tight">
                        <span className="text-accent-blue/40 mr-4 font-mono text-2xl uppercase">#{String(currentProblem.id).padStart(2, '0')}</span>
                        {currentProblem.title}
                    </h2>
                    <p className="text-white/30 mb-12 leading-relaxed text-lg font-light">
                        Our architects are currently finalizing the visualization layers for this algorithm.
                    </p>
                    <Link to="/problems" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white rounded-2xl transition-all font-bold tracking-widest uppercase text-xs border border-white/5">
                        Return to Library
                    </Link>
                </motion.div>
            </div>
        )
    }

    const isSuccess = steps && currentStepIndex === steps.length - 1 && steps[currentStepIndex]?.state?.found
    const formattedId = String(currentProblem.id).padStart(2, '0')

    return (
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative font-outfit">
            {/* Header with Integrated Controls */}
            <div className="h-16 px-8 flex items-center justify-between border-b border-white/5 bg-background/50 backdrop-blur-md z-10 shrink-0">
                <div className="flex items-center gap-5">
                    <Link to="/problems" className="p-2.5 rounded-xl bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all">
                        <ChevronLeft size={20} />
                    </Link>
                    <span className="text-accent-blue font-mono font-bold text-lg bg-accent-blue/5 px-3 py-1 rounded-lg border border-accent-blue/10">#{formattedId}</span>
                    <h1 className="text-sm font-bold tracking-[0.2em] text-white/90 uppercase truncate max-w-[200px]">{currentProblem.title.toUpperCase()}</h1>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={prevStep}
                            disabled={currentStepIndex === 0 || !isUnlocked}
                            className="p-2 text-white/40 hover:text-white disabled:opacity-10 transition-colors"
                        >
                            <SkipBack size={18} />
                        </button>
                        <button
                            onClick={() => setPlaying(!isPlaying)}
                            disabled={!isUnlocked}
                            className="w-10 h-10 bg-accent-blue text-black rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-glow disabled:opacity-50 disabled:grayscale"
                        >
                            {isPlaying ? <Pause size={18} fill="black" /> : <Play size={18} fill="black" className="ml-0.5" />}
                        </button>
                        <button
                            onClick={nextStep}
                            disabled={currentStepIndex === totalSteps - 1 || !isUnlocked}
                            className="p-2 text-white/40 hover:text-white disabled:opacity-10 transition-colors"
                        >
                            <SkipForward size={18} />
                        </button>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                            <span className="text-[10px] font-mono font-bold text-white/30 whitespace-nowrap">{currentStepIndex + 1} / {totalSteps}</span>
                            <div className="relative w-48 h-6 flex items-center">
                                <div className="absolute w-full h-1 bg-white/10 rounded-full" />
                                <motion.div
                                    className="absolute h-1 bg-accent-blue rounded-full"
                                    style={{ width: `${((currentStepIndex) / (totalSteps - 1 || 1)) * 100}%` }}
                                />
                                <input
                                    type="range"
                                    min="0"
                                    max={totalSteps - 1}
                                    value={currentStepIndex}
                                    disabled={!isUnlocked}
                                    onChange={(e) => setStep(parseInt(e.target.value))}
                                    className="absolute w-full h-6 opacity-0 cursor-pointer z-10"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl border border-white/10">
                            <Timer size={14} className="text-accent-blue/60" />
                            <input
                                type="range"
                                min="100"
                                max="2000"
                                step="100"
                                value={playbackSpeed}
                                onChange={(e) => setSpeed(parseInt(e.target.value))}
                                className="w-24 accent-accent-blue h-1 bg-white/10 rounded-full appearance-none cursor-pointer"
                            />
                            <span className="text-[10px] font-mono font-bold text-white/30 w-12">{playbackSpeed}ms</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar bg-background/50">
                <main className="grid grid-cols-1 lg:grid-cols-[minmax(350px,25%)_minmax(0,1fr)_minmax(400px,30%)] gap-6 p-6 min-h-full items-start">
                    {/* Column 1: Discovery & Context */}
                    <aside className="min-h-0 flex flex-col gap-6 order-1">
                        <div className="glass-card border border-white/5 bg-background/30 backdrop-blur-sm p-6 rounded-2xl">
                            <ErrorBoundary>
                                <ProblemInfo />
                            </ErrorBoundary>
                        </div>
                    </aside>

                    {/* Column 2: Cognitive & Visual */}
                    <section className="min-h-0 flex flex-col gap-6 order-2">
                        <ThinkingGuide
                            problem={currentProblem}
                            onChecklistComplete={handleChecklistComplete}
                        />

                        <div className="glass-card border border-white/5 bg-black/20 rounded-2xl overflow-hidden relative min-h-[600px] flex flex-col shadow-2xl">
                            {!isUnlocked && (
                                <div className="absolute inset-0 z-40 bg-background/60 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-700">
                                    <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-white/10 shadow-inner">
                                        <Lock size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-tight">Pattern Locked</h3>
                                    <p className="text-sm text-white/30 max-w-sm leading-relaxed font-light mb-10">
                                        Internalize the cognitive markers in the Thinking Guide to initialize the pattern engine.
                                    </p>
                                    <div className="flex gap-4">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-12 h-1.5 rounded-full bg-white/5 overflow-hidden">
                                                <div className="w-0 h-full bg-accent-purple" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <Suspense fallback={<LabSkeleton />}>
                                <ErrorBoundary>
                                    <VizPanel />
                                </ErrorBoundary>
                            </Suspense>

                            <AnimatePresence>
                                {isSuccess && (
                                    <Suspense fallback={null}>
                                        <div className="absolute inset-0 z-50 flex items-center justify-center p-8 bg-black/80 backdrop-blur-xl animate-in fade-in duration-500">
                                            <div className="max-w-md w-full">
                                                <SuccessSummary
                                                    problem={currentProblem}
                                                    step={steps[currentStepIndex]}
                                                    onReset={refreshSteps}
                                                />
                                            </div>
                                        </div>
                                    </Suspense>
                                )}
                            </AnimatePresence>
                        </div>
                    </section>

                    {/* Column 3: Analysis & Console */}
                    <aside className="min-h-0 flex flex-col gap-6 order-3">
                        <div className="flex-1 glass-card border border-white/5 bg-background/20 rounded-3xl overflow-hidden flex flex-col min-h-[600px] shadow-2xl">
                            <Suspense fallback={<div className="p-12 animate-pulse text-[10px] uppercase tracking-widest text-white/10 text-center">Synchronizing Neurons...</div>}>
                                <ErrorBoundary>
                                    <CognitiveConsole />
                                </ErrorBoundary>
                            </Suspense>
                        </div>
                    </aside>
                </main>
            </div>
        </div>
    )
}

export default ProblemLab

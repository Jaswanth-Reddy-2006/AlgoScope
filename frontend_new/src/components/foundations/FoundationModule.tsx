import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ArrowLeft,
    Target,
    Zap,
    AlertTriangle,
    Trophy,
    CheckCircle2,
    XCircle,
    Activity,
    BookOpen,
    Briefcase,
    GraduationCap,
    Cpu,
    Timer
} from 'lucide-react'
import { useStore } from '../../store/useStore'
import foundationsData from '../../data/foundations.json'
import { FoundationModule as MutationModuleType } from '../../types/foundation'
import RecursionTreeVisualizer from '../visualizers/RecursionTreeVisualizer'
import GraphVisualizer from '../visualizers/GraphVisualizer'
import PerformanceSimulator from './PerformanceSimulator'

const FoundationModule = () => {
    const { category, moduleId } = useParams()
    const navigate = useNavigate()
    const updatePatternMastery = useStore(state => state.updatePatternMastery)

    // State
    const [activeTab, setActiveTab] = useState<'concepts' | 'performance' | 'visualize' | 'drill'>('concepts')
    const [layerTab, setLayerTab] = useState<'academic' | 'competitive' | 'interview'>('academic')

    // Drill State
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
    const [drillComplete, setDrillComplete] = useState(false)

    // Load Data
    const data = foundationsData[category as keyof typeof foundationsData]
    const module = data?.modules.find((m: any) => m.id === moduleId) as unknown as MutationModuleType

    if (!module) return <div>Module not found</div>

    const handleAnswer = (option: string) => {
        if (selectedOption) return
        setSelectedOption(option)
        const correct = option === module.drill[currentQuestion].correctAnswer
        setIsCorrect(correct)
        if (correct) setScore(s => s + 1)
    }

    const nextQuestion = () => {
        if (currentQuestion < module.drill.length - 1) {
            setCurrentQuestion(prev => prev + 1)
            setSelectedOption(null)
            setIsCorrect(null)
        } else {
            setDrillComplete(true)
            const finalScore = ((score + (isCorrect ? 1 : 0)) / module.drill.length) * 100
            updatePatternMastery(moduleId!, finalScore)
        }
    }

    // Mock Data for Visualizers (unchanged for now)
    const getMockVisualizerData = () => {
        if (module.visualizerType === 'tree') {
            return {
                id: 'root', value: 'Start', status: 'completed',
                children: [
                    { id: 'l', value: 'L', status: 'completed', children: [{ id: 'll', value: 'LL', status: 'active' }, { id: 'lr', value: 'LR' }] },
                    { id: 'r', value: 'R', status: 'pending', children: [{ id: 'rl', value: 'RL' }, { id: 'rr', value: 'RR' }] }
                ]
            }
        }
        if (module.visualizerType === 'graph') {
            return {
                nodes: [
                    { id: 'A', x: 50, y: 50, label: 'A', status: 'visited' },
                    { id: 'B', x: 150, y: 50, label: 'B', status: 'visiting' },
                    { id: 'C', x: 100, y: 150, label: 'C', status: 'unvisited' }
                ],
                edges: [
                    { source: 'A', target: 'B', visited: true },
                    { source: 'A', target: 'C', visited: false }
                ]
            }
        }
        return null
    }

    const visualizerData = getMockVisualizerData()

    return (
        <div className="flex-1 flex flex-col min-w-0 bg-background font-outfit overflow-hidden">
            {/* Header */}
            <div className="h-20 px-8 flex items-center gap-4 border-b border-white/5 bg-background/50 backdrop-blur-md z-10 shrink-0">
                <button
                    onClick={() => navigate('/foundations')}
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                    <ArrowLeft size={20} className="text-white/60" />
                </button>
                <div>
                    <h1 className="text-xl font-bold text-white">{module.title}</h1>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase tracking-wider text-accent-blue font-bold">{module.family}</span>
                        <span className="text-white/20">•</span>
                        <span className="text-[10px] text-white/40 font-mono">{module.difficulty}</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                <div className="max-w-6xl mx-auto">

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        {[
                            { id: 'concepts', label: 'Deep Dive', icon: BookOpen, color: 'text-white' },
                            { id: 'performance', label: 'Performance', icon: Timer, color: 'text-emerald-400' },
                            { id: 'visualize', label: 'Visualize', icon: Activity, color: 'text-accent-purple' },
                            { id: 'drill', label: 'Mastery', icon: Trophy, color: 'text-accent-blue' }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 border ${activeTab === tab.id
                                    ? 'bg-white/10 border-white/20 text-white shadow-glow-white'
                                    : 'bg-transparent border-transparent text-white/40 hover:bg-white/5 hover:text-white/80'
                                    }`}
                            >
                                <tab.icon size={16} className={activeTab === tab.id ? tab.color : 'opacity-50'} />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        {activeTab === 'concepts' && (
                            <motion.div
                                key="concepts"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="space-y-6"
                            >
                                {/* Layer Switcher */}
                                <div className="flex p-1 bg-black/20 rounded-xl border border-white/5 w-fit">
                                    {[
                                        { id: 'academic', label: 'Academic', icon: GraduationCap },
                                        { id: 'competitive', label: 'Competitive', icon: Zap },
                                        { id: 'interview', label: 'Interview', icon: Briefcase }
                                    ].map(layer => (
                                        <button
                                            key={layer.id}
                                            onClick={() => setLayerTab(layer.id as any)}
                                            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${layerTab === layer.id
                                                ? 'bg-white/10 text-white shadow-lg'
                                                : 'text-white/40 hover:text-white/60'
                                                }`}
                                        >
                                            <layer.icon size={14} />
                                            {layer.label}
                                        </button>
                                    ))}
                                </div>

                                {/* Content Area based on Layer */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {/* Left Column: Core Description & Context */}
                                    <div className="space-y-8">
                                        <div className="glass-card p-8 rounded-3xl border border-white/10">
                                            <h2 className="text-2xl font-bold text-white mb-4">{module.description}</h2>
                                            <p className="text-white/60 leading-relaxed mb-6">{module.why}</p>

                                            <div className="flex flex-wrap gap-2">
                                                {module.realWorldUses?.map((use, i) => (
                                                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] uppercase text-white/50">
                                                        {use}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Layer Specific Content */}
                                        <div className="glass-card p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
                                            {layerTab === 'academic' && (
                                                <div className="space-y-6">
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-2 text-emerald-400">
                                                            <Target size={18} />
                                                            <span className="text-xs font-bold uppercase tracking-widest">Formal Invariant</span>
                                                        </div>
                                                        <p className="text-white/80 font-serif italic border-l-2 border-emerald-500/30 pl-4 py-2">
                                                            "{module.academic?.formalInvariant}"
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-2 text-blue-400">
                                                            <BookOpen size={18} />
                                                            <span className="text-xs font-bold uppercase tracking-widest">Proof Intuition</span>
                                                        </div>
                                                        <p className="text-sm text-white/60">{module.academic?.proofIntuition}</p>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                                                        <div>
                                                            <span className="text-[10px] text-white/30 uppercase">Stability</span>
                                                            <div className="text-white/80 font-mono text-sm">{module.academic?.stability}</div>
                                                        </div>
                                                        <div>
                                                            <span className="text-[10px] text-white/30 uppercase">Space Model</span>
                                                            <div className="text-white/80 font-mono text-sm">{module.academic?.spaceModel}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {layerTab === 'competitive' && (
                                                <div className="space-y-6">
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-2 text-amber-400">
                                                            <Cpu size={18} />
                                                            <span className="text-xs font-bold uppercase tracking-widest">Constraints Analysis</span>
                                                        </div>
                                                        <div className="font-mono text-sm text-white/80 bg-black/20 p-3 rounded-lg border border-white/5">
                                                            {module.competitive?.constraints}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="flex items-center gap-2 mb-2 text-purple-400">
                                                            <Zap size={18} />
                                                            <span className="text-xs font-bold uppercase tracking-widest">Optimization Tricks</span>
                                                        </div>
                                                        <ul className="space-y-2">
                                                            {module.competitive?.optimizationTricks?.map((trick, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                                                                    <span className="text-purple-500 mt-1">▹</span> {trick}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {module.competitive?.template && (
                                                        <div className="mt-4">
                                                            <div className="text-[10px] text-white/30 uppercase mb-2">Logic Template</div>
                                                            <pre className="text-xs font-mono text-green-400/80 bg-black/40 p-4 rounded-xl overflow-x-auto">
                                                                {module.competitive.template}
                                                            </pre>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                            {layerTab === 'interview' && (
                                                <div className="space-y-6">
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-2 text-red-400">
                                                            <AlertTriangle size={18} />
                                                            <span className="text-xs font-bold uppercase tracking-widest">Edge Cases & Traps</span>
                                                        </div>
                                                        <div className="bg-red-500/5 border border-red-500/20 p-4 rounded-xl">
                                                            <p className="text-sm text-white/80 mb-4">{module.interview?.trapSimulation}</p>
                                                            <div className="flex flex-wrap gap-2">
                                                                {module.interview?.edgeCases?.map((ec, i) => (
                                                                    <span key={i} className="px-2 py-1 bg-red-500/10 text-red-300 text-[10px] rounded uppercase font-bold">
                                                                        {ec}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <span className="text-[10px] text-white/30 uppercase">Common Wrong Assumptions</span>
                                                        <ul className="space-y-2 mt-2">
                                                            {module.interview?.wrongAssumptions?.map((wa, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                                                                    <XCircle size={14} className="text-red-500/50 mt-0.5" />
                                                                    {wa}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right Column: Code/Performance Preview (Placeholder for now, or drill preview) */}
                                    <div className="hidden lg:block space-y-8">
                                        {/* We can put the Drill preview or mini-viz here, but let's leave it simple for now and just show a graphic placeholder */}
                                        <div className="aspect-square rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 flex items-center justify-center p-8 relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                                            <Activity size={120} className="text-white/5 group-hover:scale-110 transition-transform duration-1000" />
                                            <div className="relative z-10 text-center">
                                                <h3 className="text-2xl font-bold text-white mb-2">Mastery Needed</h3>
                                                <p className="text-white/40 text-sm max-w-[200px] mx-auto">
                                                    Review the {layerTab} layer carefully before attempting the drill.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'performance' && module.performance && (
                            <motion.div
                                key="performance"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                            >
                                <PerformanceSimulator data={module.performance} />
                            </motion.div>
                        )}

                        {activeTab === 'visualize' && (
                            <motion.div
                                key="visualize"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                            >
                                <div className="glass-card p-8 rounded-3xl border border-white/10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Activity size={24} className="text-accent-purple" />
                                        <h2 className="text-xl font-bold text-white">Active Model Visualization</h2>
                                    </div>

                                    <div className="w-full flex justify-center">
                                        {module.visualizerType === 'tree' && visualizerData && (
                                            <RecursionTreeVisualizer data={visualizerData as any} />
                                        )}
                                        {module.visualizerType === 'graph' && visualizerData && (
                                            <GraphVisualizer nodes={(visualizerData as any).nodes} edges={(visualizerData as any).edges} />
                                        )}
                                        {module.visualizerType === 'array' && (
                                            <div className="p-12 text-center text-white/40 font-mono border border-dashed border-white/10 rounded-xl w-full">
                                                Array Visualizer Placeholder (Coming Soon in Phase 15)
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'drill' && (
                            <motion.div
                                key="drill"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="max-w-2xl mx-auto"
                            >
                                {/* ... Drill Logic (Same as before, simplified for this rewrite) ... */}
                                {drillComplete ? (
                                    <div className="text-center py-12">
                                        <div className="w-24 h-24 rounded-full bg-accent-blue/20 flex items-center justify-center mx-auto mb-6">
                                            <Trophy size={48} className="text-accent-blue" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-white mb-2">Module Complete</h2>
                                        <p className="text-white/40 mb-8">Your cognitive map has been updated.</p>
                                        <button
                                            onClick={() => navigate('/foundations')}
                                            className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform"
                                        >
                                            Return to Lab
                                        </button>
                                    </div>
                                ) : (
                                    module.drill && module.drill.length > 0 ? (
                                        <div className="glass-card p-8 rounded-3xl border border-white/10">
                                            <div className="flex items-center justify-between mb-8">
                                                <span className="text-xs font-mono text-white/30">Question {currentQuestion + 1}/{module.drill.length}</span>
                                                <span className="px-3 py-1 rounded-lg bg-white/5 text-[10px] font-bold uppercase tracking-wider text-white">
                                                    {module.drill[currentQuestion].type?.replace(/_/g, ' ')}
                                                </span>
                                            </div>

                                            <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                                                {module.drill[currentQuestion].question}
                                            </h3>
                                            <p className="text-white/60 mb-8 text-lg font-light">
                                                {module.drill[currentQuestion].scenario}
                                            </p>

                                            {(module.drill[currentQuestion] as any).codeSnippet && (
                                                <div className="p-4 mb-8 rounded-xl bg-black/40 border border-white/5 font-mono text-sm text-green-400 whitespace-pre overflow-x-auto">
                                                    {(module.drill[currentQuestion] as any).codeSnippet}
                                                </div>
                                            )}

                                            <div className="space-y-3 mb-8">
                                                {module.drill[currentQuestion].options.map((option: string, i: number) => {
                                                    const isSelected = selectedOption === option
                                                    const isCorrectOpt = option === module.drill[currentQuestion].correctAnswer

                                                    let style = "bg-white/5 border-white/5 hover:bg-white/10"
                                                    if (selectedOption) {
                                                        if (isSelected) {
                                                            style = isCorrect ? "bg-green-500/20 border-green-500/50" : "bg-red-500/20 border-red-500/50"
                                                        } else if (isCorrectOpt) {
                                                            style = "bg-green-500/10 border-green-500/30"
                                                        } else {
                                                            style = "opacity-50"
                                                        }
                                                    }

                                                    return (
                                                        <button
                                                            key={i}
                                                            disabled={!!selectedOption}
                                                            onClick={() => handleAnswer(option)}
                                                            className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${style}`}
                                                        >
                                                            <span className="text-white/90">{option}</span>
                                                            {selectedOption && isSelected && (
                                                                isCorrect ? <CheckCircle2 className="text-green-500" size={18} /> : <XCircle className="text-red-500" size={18} />
                                                            )}
                                                        </button>
                                                    )
                                                })}
                                            </div>

                                            {selectedOption && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="bg-white/5 p-6 rounded-2xl border border-white/5"
                                                >
                                                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                                                        {module.drill[currentQuestion].explanation}
                                                    </p>
                                                    <button
                                                        onClick={nextQuestion}
                                                        className="w-full py-3 bg-accent-blue text-black font-bold rounded-xl hover:opacity-90 transition-opacity"
                                                    >
                                                        {currentQuestion < module.drill.length - 1 ? 'Next Challenge' : 'Finish Drill'}
                                                    </button>
                                                </motion.div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="text-center py-12 text-white/40">
                                            Drills for this module are coming soon.
                                        </div>
                                    )
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </div>
    )
}

export default FoundationModule

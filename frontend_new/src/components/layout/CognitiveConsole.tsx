import React from 'react'
import { useStore } from '../../store/useStore'
import {
    Activity,
    Zap,
    Info
} from 'lucide-react'
import { motion } from 'framer-motion'
import InspectorPanel from './InspectorPanel'
import PatternCapsule from '../problem/PatternCapsule'

const CognitiveConsole: React.FC = () => {
    const currentProblem = useStore(state => state.currentProblem)
    const patternStats = useStore(state => state.patternStats)
    const generatePatternInsight = useStore(state => state.generatePatternInsight)
    const getAdaptiveBehavior = useStore(state => state.getAdaptiveBehavior) // Added getAdaptiveBehavior

    if (!currentProblem) return null

    const adaptiveBehavior = getAdaptiveBehavior(currentProblem.slug) // Called getAdaptiveBehavior
    const stats = patternStats[currentProblem.slug] || { confidence: 0 }

    return (
        <div className="h-full flex flex-col bg-background/20 font-outfit overflow-hidden">
            <div className="h-14 border-b border-white/5 flex items-center px-8 bg-white/[0.02] justify-between">
                <div className="flex items-center gap-3">
                    <Activity size={14} className="text-accent-blue" />
                    <span className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase">Cognitive Console</span>
                </div>

                <div className="flex items-center gap-4">
                    {adaptiveBehavior.statusLabel && (
                        <div className={`
                            px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest border
                            ${adaptiveBehavior.statusLabel === 'Focus Area'
                                ? 'bg-amber-500/10 text-amber-500 border-amber-500/20 shadow-glow-amber'
                                : 'bg-green-500/10 text-green-500 border-green-500/20 shadow-glow-green'}
                        `}>
                            {adaptiveBehavior.statusLabel}
                        </div>
                    )}
                    <div className="flex items-center gap-2">
                        <div className="text-right">
                            <div className="text-[10px] font-bold text-white/30 uppercase tracking-wider">Pattern Confidence</div>
                            <div className="font-mono text-xs text-accent-blue font-bold">{Math.round(stats.confidence)}%</div>
                        </div>
                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-black/20">
                            <div
                                className="w-full h-full rounded-full border-2 border-accent-blue/30"
                                style={{
                                    clipPath: `inset(${100 - (stats.confidence || 0)}% 0 0 0)`
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Analysis Insight */}
            <div className="px-8 py-3 bg-accent-blue/5 border-b border-white/5">
                <div className="flex gap-3 items-start">
                    <div className="mt-1">
                        <div className="w-1 h-1 rounded-full bg-accent-blue animate-pulse" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <span className="text-[8px] font-bold text-accent-blue/60 uppercase tracking-widest">Cognitive Insight</span>
                        <p className="text-[11px] text-white/50 leading-relaxed font-medium italic">
                            "{generatePatternInsight(currentProblem.slug)}"
                        </p>
                    </div>
                </div>
            </div>

            {/* Adaptive Interventions */}
            {adaptiveBehavior.showPatternCapsule && (
                <div className="px-8 py-4 border-b border-white/5 bg-amber-500/[0.02]">
                    <PatternCapsule problem={currentProblem} />
                </div>
            )}

            {/* Console Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                {/* Section 1: Pattern Signals */}
                <section className="space-y-4 p-6"> {/* Added p-6 back to section */}
                    <div className="flex items-center gap-2 px-1">
                        <Zap size={14} className="text-accent-blue/60" />
                        <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Pattern Signals</h3>
                    </div>
                    <div className="grid gap-3">
                        {currentProblem.thinking_guide?.pattern_signals.map((signal, idx) => (
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                key={idx}
                                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex gap-4 group hover:bg-white/[0.04] transition-all"
                            >
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-accent-blue/40 shrink-0 group-hover:bg-accent-blue transition-colors" />
                                <p className="text-sm text-white/60 leading-relaxed font-light">{signal}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Section 2: Complexity Summary */}
                <section className="space-y-4">
                    <div className="flex items-center gap-2 px-1">
                        <Info size={14} className="text-accent-purple/60" />
                        <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Efficiency Constraints</h3>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        <ComplexityCard
                            label="Naive"
                            value={currentProblem.complexity.brute}
                            color="text-red-400/60"
                            bg="bg-red-500/5"
                            border="border-red-500/10"
                        />
                        <ComplexityCard
                            label="Refined"
                            value={currentProblem.complexity.optimal}
                            color="text-green-400/60"
                            bg="bg-green-500/5"
                            border="border-green-500/10"
                        />
                        <ComplexityCard
                            label="Space"
                            value={currentProblem.complexity.space}
                            color="text-accent-blue/60"
                            bg="bg-accent-blue/5"
                            border="border-accent-blue/10"
                        />
                    </div>
                </section>

                {/* Section 3: State Inspector */}
                <section className="space-y-4">
                    <div className="flex items-center gap-2 px-1">
                        <Activity size={14} className="text-accent-blue/60" />
                        <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Neural State</h3>
                    </div>
                    <div className="rounded-2xl border border-white/5 bg-black/20 overflow-hidden">
                        <InspectorPanel />
                    </div>
                </section>
            </div>
        </div>
    )
}

const ComplexityCard = ({ label, value, color, bg, border }: any) => (
    <div className={`p-4 rounded-xl ${bg} ${border} border flex flex-col gap-1.5`}>
        <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">{label}</span>
        <span className={`text-sm font-mono font-bold ${color}`}>{value}</span>
    </div>
)

export default CognitiveConsole

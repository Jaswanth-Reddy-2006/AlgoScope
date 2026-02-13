import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Clock, Database, Brain, RotateCcw } from 'lucide-react'
import { Problem, Step } from '../../types'

interface SuccessSummaryProps {
    problem: Problem
    step: Step
    onReset: () => void
}

const SuccessSummary: React.FC<SuccessSummaryProps> = ({ problem, step, onReset }) => {
    const { state } = step

    return (
        <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="w-full glass-card border border-accent-blue/20 p-8 relative overflow-hidden shadow-2xl bg-black/40 backdrop-blur-md rounded-2xl"
        >
            {/* Background Glows */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent-blue/10 rounded-full blur-[60px]" />

            <div className="text-center mb-8 relative z-10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-16 h-16 bg-accent-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-accent-blue/30 shadow-glow"
                >
                    <Trophy className="text-accent-blue w-8 h-8" />
                </motion.div>

                <h2 className="text-2xl font-bold tracking-tight mb-2 text-white">Pattern Internalized</h2>
                <p className="text-[10px] text-white/30 font-bold tracking-[0.2em] uppercase">Logic Understood. System Recognized.</p>
            </div>

            <div className="space-y-4 mb-8 relative z-10">
                <div className="p-5 bg-white/[0.03] border border-white/5 rounded-xl">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[9px] font-bold text-accent-blue uppercase tracking-[0.2em]">Output Result</span>
                        <div className="h-px flex-1 bg-accent-blue/10" />
                    </div>
                    <div className="text-xl font-bold font-mono text-white/90 mb-2 truncate">
                        {String(state.finalAnswer ?? 'Completed')}
                    </div>
                    {state.explanation && (
                        <p className="text-[10px] text-white/40 leading-relaxed italic font-light">
                            "{state.explanation}"
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <KPICard
                        icon={Clock}
                        color="text-orange-400"
                        label="Naive"
                        value={problem.complexity.brute}
                    />
                    <KPICard
                        icon={Database}
                        color="text-accent-purple"
                        label="Memory"
                        value={problem.complexity.space}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-3 relative z-10">
                <button
                    onClick={onReset}
                    className="flex items-center justify-center gap-3 py-3 px-6 bg-accent-blue text-black font-bold text-[10px] uppercase tracking-widest rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-glow"
                >
                    <RotateCcw size={14} />
                    <span>Re-simulate Pattern</span>
                </button>
                <button
                    onClick={() => {
                        // Logic to focus/open thinking guide
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className="flex items-center justify-center gap-3 py-3 px-6 bg-white/5 text-white/60 font-bold text-[10px] uppercase tracking-widest rounded-xl border border-white/5 hover:bg-white/10 hover:text-white transition-all text-center"
                >
                    <Brain size={14} />
                    <span>Review Thinking Guide</span>
                </button>
            </div>
        </motion.div>
    )
}

const KPICard = ({ icon: Icon, color, label, value }: any) => (
    <div className="p-4 bg-white/[0.03] border border-white/5 rounded-xl flex flex-col gap-2">
        <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center ${color}`}>
            <Icon size={14} />
        </div>
        <div>
            <div className="text-[8px] font-bold text-white/20 uppercase tracking-[0.1em] mb-1">{label}</div>
            <div className="text-xs font-bold font-mono text-white/70">{value}</div>
        </div>
    </div>
)
export default SuccessSummary

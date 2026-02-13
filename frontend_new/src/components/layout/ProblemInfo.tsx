import React from 'react'
import { useStore } from '../../store/useStore'
import ProblemInput from '../input/ProblemInput'
import { Target, Zap, Info, ListFilter } from 'lucide-react'

const ProblemInfo: React.FC = () => {
    const currentProblem = useStore(state => state.currentProblem)
    const isBruteForce = useStore(state => state.isBruteForce)
    const toggleApproach = useStore(state => state.toggleApproach)
    const compareMode = useStore(state => state.compareMode)
    const setCompareMode = useStore(state => state.setCompareMode)

    if (!currentProblem) return null

    return (
        <div className="flex flex-col gap-8">
            {/* Header Section */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <span className={`badge-premium font-bold tracking-[0.2em] py-1 px-3 text-[9px]
                        ${currentProblem.difficulty === 'Easy' ? 'text-green-400 border-green-500/10 bg-green-500/5' :
                            currentProblem.difficulty === 'Medium' ? 'text-orange-400 border-orange-500/10 bg-orange-500/5' :
                                'text-red-400 border-red-500/10 bg-red-500/5'}
                    `}>
                        {currentProblem.difficulty}
                    </span>
                    <div className="flex gap-2">
                        {currentProblem.tags.map(tag => (
                            <span key={tag} className="text-[8px] bg-white/5 text-white/30 px-2 py-0.5 rounded-full border border-white/5 uppercase tracking-widest font-bold">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <h2 className="text-xl font-bold mb-4 tracking-tight text-white group-hover:text-accent-blue transition-colors uppercase">
                    {currentProblem.title}
                </h2>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-0.5 h-full bg-accent-blue/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                        {currentProblem.problem_statement}
                    </p>
                </div>
            </div>

            {/* Test Case Input */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 text-accent-blue/60">
                    <Target size={14} />
                    <h3 className="text-[9px] font-bold uppercase tracking-[0.2em]">Synapse Configuration</h3>
                </div>
                <div className="glass-card p-4 bg-black/20 rounded-xl border border-white/5">
                    <ProblemInput />
                </div>
            </div>

            {/* Approach Selector */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 text-accent-purple/60">
                    <Zap size={14} />
                    <h3 className="text-[9px] font-bold uppercase tracking-[0.2em]">Strategy Processor</h3>
                </div>

                <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
                    <button
                        onClick={() => (!isBruteForce || compareMode) && toggleApproach()}
                        className={`flex-1 py-2 text-[9px] font-bold rounded-lg transition-all ${isBruteForce && !compareMode ? 'bg-accent-blue text-black shadow-glow' : 'text-white/30 hover:text-white hover:bg-white/5'}`}
                    >
                        BRUTE FORCE
                    </button>
                    <button
                        onClick={() => (isBruteForce || compareMode) && toggleApproach()}
                        className={`flex-1 py-2 text-[9px] font-bold rounded-lg transition-all ${!isBruteForce && !compareMode ? 'bg-accent-blue text-black shadow-glow' : 'text-white/30 hover:text-white hover:bg-white/5'}`}
                    >
                        OPTIMAL
                    </button>
                    <button
                        onClick={() => setCompareMode(true)}
                        className={`flex-1 py-2 text-[9px] font-bold rounded-lg transition-all ${compareMode ? 'bg-accent-purple text-white shadow-glow-purple' : 'text-white/30 hover:text-white hover:bg-white/5'}`}
                    >
                        COMPARE
                    </button>
                </div>

                <div className="p-4 rounded-xl bg-accent-blue/5 border border-accent-blue/10 flex gap-3">
                    <Info size={14} className="text-accent-blue shrink-0 mt-0.5 opacity-30" />
                    <p className="text-[10px] text-white/40 leading-relaxed italic font-light">
                        {compareMode ? 'Parallel processing: Visualizing both strategies simultaneously for complexity analysis.' : isBruteForce ? currentProblem.brute_force_explanation : currentProblem.optimal_explanation}
                    </p>
                </div>
            </div>

            {/* Constraints */}
            <div className="space-y-3">
                <div className="flex items-center gap-2 text-white/20">
                    <ListFilter size={12} />
                    <h3 className="text-[9px] font-bold uppercase tracking-[0.2em]">Logical Constraints</h3>
                </div>
                <div className="flex flex-col gap-2">
                    {currentProblem.constraints.map((c, i) => (
                        <div key={i} className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-white/10 mt-1.5 shrink-0" />
                            <span className="text-[10px] text-white/30 font-light leading-relaxed">{c}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProblemInfo

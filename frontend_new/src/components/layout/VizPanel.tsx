import React from 'react'
import { useStore } from '../../store/useStore'
import TwoPointerEngine from '../../visualization-engines/TwoPointerEngine'
import SlidingWindowEngine from '../../visualization-engines/SlidingWindowEngine'

const VizPanel: React.FC = () => {
    const currentProblem = useStore(state => state.currentProblem)
    const compareMode = useStore(state => state.compareMode)
    const isBruteForce = useStore(state => state.isBruteForce)

    if (!currentProblem) return null

    const complexity = currentProblem.complexity

    const renderEngine = (isBrute: boolean) => {
        switch (currentProblem.algorithmType) {
            case 'sliding_window':
                return <SlidingWindowEngine isBrute={isBrute} />
            case 'two_pointer':
            default:
                return <TwoPointerEngine isBrute={isBrute} />
        }
    }

    return (
        <div className="flex-1 flex bg-black/5 overflow-hidden relative">
            {compareMode ? (
                <>
                    {/* Naive Column */}
                    <div className="flex-1 flex flex-col border-r border-white/5">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">Naive Strategy</span>
                            <div className="px-2 py-0.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-400/60 text-[9px] font-mono font-bold">{complexity.brute}</div>
                        </div>
                        <div className="flex-1 relative">
                            {renderEngine(true)}
                        </div>
                    </div>
                    {/* Refined Column */}
                    <div className="flex-1 flex flex-col">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">Refined Strategy</span>
                            <div className="px-2 py-0.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400/60 text-[9px] font-mono font-bold">{complexity.optimal}</div>
                        </div>
                        <div className="flex-1 relative">
                            {renderEngine(false)}
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex-1 flex flex-col">
                    <div className="px-6 pt-5 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
                            {isBruteForce ? 'Naive Path Visualization' : 'Pattern in Motion'}
                        </span>
                        <div className={`px-2 py-0.5 rounded-full border text-[10px] font-mono font-bold ${isBruteForce
                            ? 'bg-red-500/5 border-red-500/20 text-red-400/60'
                            : 'bg-green-500/5 border-green-500/20 text-green-400/60'
                            }`}>
                            {isBruteForce ? complexity.brute : complexity.optimal}
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        {renderEngine(isBruteForce)}
                    </div>
                </div>
            )}
        </div>
    )
}

export default VizPanel

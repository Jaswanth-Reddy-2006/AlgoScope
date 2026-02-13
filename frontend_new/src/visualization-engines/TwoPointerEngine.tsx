import React from 'react'
import { motion } from 'framer-motion'
import { useStore } from '../store/useStore'

interface TwoPointerEngineProps {
    isBrute: boolean
}

const TwoPointerEngine: React.FC<TwoPointerEngineProps> = ({ isBrute }) => {
    const { currentProblem, currentStepIndex, customInput } = useStore()
    if (!currentProblem) return null

    const steps = isBrute ? currentProblem.brute_force_steps : currentProblem.optimal_steps
    const step = steps[currentStepIndex] || steps[0]

    if (!step) return null
    const { state } = step

    let items: any[] = []
    try {
        items = JSON.parse(customInput)
    } catch (e) {
        items = [2, 7, 11, 15]
    }

    const color = isBrute ? 'accent-blue' : 'green-400'

    return (
        <div className="flex flex-col gap-8 p-6 w-full">
            <div className="flex flex-col gap-4">
                <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Input Array</div>
                <div className="flex gap-3 flex-wrap">
                    {items.map((num, idx) => {
                        const isActive = state.pointers?.some(p => p.index === idx)
                        const isFound = state.found && isActive

                        return (
                            <motion.div
                                key={idx}
                                layout
                                className={`w-12 h-12 rounded flex items-center justify-center text-lg font-bold border-2 transition-all relative ${isActive ? `border-${color} bg-${color}/10 text-${color}` : 'border-white/5 bg-white/5'
                                    } ${isFound ? 'border-green-500 bg-green-500/10 text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]' : ''}`}
                            >
                                {num}
                                <div className="absolute -top-5 text-[8px] text-white/20 font-mono">[{idx}]</div>

                                {state.pointers?.map(ptr => {
                                    const ptrColorClass = ptr.id === 'i' ? 'text-accent-blue' : 'text-purple-500'
                                    const ptrBgClass = ptr.id === 'i' ? 'bg-accent-blue' : 'bg-purple-500'

                                    return ptr.index === idx && (
                                        <motion.div
                                            key={ptr.id}
                                            layoutId={`ptr-${ptr.id}`}
                                            className="absolute -bottom-6 flex flex-col items-center"
                                        >
                                            <div className={`w-1.5 h-1.5 ${ptrBgClass} rotate-45 mb-0.5`} />
                                            <span className={`text-[8px] font-bold ${ptrColorClass}`}>{ptr.id}</span>
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {state.mapState && (
                <div className="flex flex-col gap-4">
                    <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Hash Map</div>
                    <div className="flex flex-wrap gap-2 p-3 glass-panel min-h-[60px]">
                        {Object.entries(state.mapState).map(([k, v]) => (
                            <div key={k} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono">
                                <span className="text-accent-blue">{k}</span>: <span>{v as any}</span>
                            </div>
                        ))}
                        {Object.keys(state.mapState).length === 0 && <span className="text-white/10 text-[10px] italic">Empty</span>}
                    </div>
                </div>
            )}
        </div>
    )
}

export default TwoPointerEngine

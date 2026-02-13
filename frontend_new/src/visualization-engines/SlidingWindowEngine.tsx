import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from '../store/useStore'

interface SlidingWindowEngineProps {
    isBrute: boolean
}

const SlidingWindowEngine: React.FC<SlidingWindowEngineProps> = ({ isBrute }) => {
    const { currentProblem, currentStepIndex, customInput } = useStore()
    if (!currentProblem) return null

    const steps = isBrute ? currentProblem.brute_force_steps : currentProblem.optimal_steps
    const step = steps[currentStepIndex] || steps[0]

    if (!step) return null
    const { state } = step

    const s = customInput.replace(/^"|"$/g, '')
    const chars = s.split('')

    const [winL, winR] = state.windowRange || [null, null]

    return (
        <div className="flex flex-col gap-12 p-8 w-full">
            <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">String Visualization</div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-[8px] text-white/30 uppercase">Window Length:</span>
                            <span className="text-xs font-bold text-accent-blue font-mono">{state.customState?.currentLen || 0}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[8px] text-white/30 uppercase">Max Length:</span>
                            <span className="text-xs font-bold text-green-400 font-mono">{state.customState?.maxLen || 0}</span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 flex-wrap relative">
                    {chars.map((char, idx) => {
                        const isInWindow = winL !== null && winR !== null && idx >= winL && idx <= winR
                        const isDuplicate = state.customState?.duplicateChar === char && isInWindow
                        const isFound = state.found && isInWindow

                        return (
                            <motion.div
                                key={idx}
                                layout
                                className={`w-10 h-12 rounded flex items-center justify-center text-lg font-bold border-2 transition-all relative ${isInWindow
                                    ? `border-accent-blue bg-accent-blue/10 text-accent-blue ${isDuplicate ? 'border-red-500 bg-red-500/20 text-red-500 animate-pulse' : ''}`
                                    : 'border-white/5 bg-white/5 text-white/20'
                                    } ${isFound ? 'shadow-[0_0_15px_rgba(34,197,94,0.3)] border-green-500 text-green-400' : ''}`}
                            >
                                {char}
                                <div className="absolute -top-5 text-[8px] text-white/10 font-mono">[{idx}]</div>

                                {state.pointers?.map(ptr => {
                                    const ptrColorClass = ptr.id === 'l' || ptr.id === 'i' ? 'text-accent-blue' : 'text-purple-500'
                                    const ptrBgClass = ptr.id === 'l' || ptr.id === 'i' ? 'bg-accent-blue' : 'bg-purple-500'

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

            <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                    <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Frequency Tracker</div>
                    <div className="glass-panel p-4 flex flex-wrap gap-2 min-h-[100px] content-start">
                        <AnimatePresence>
                            {state.mapState && Object.keys(state.mapState).map(char => (
                                <motion.div
                                    key={char}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    className="px-2 py-1 bg-accent-blue/5 border border-accent-blue/20 rounded text-xs font-mono"
                                >
                                    {char}
                                </motion.div>
                            ))}
                            {(!state.mapState || Object.keys(state.mapState).length === 0) && (
                                <div className="w-full text-center text-white/10 text-[10px] italic mt-4">Empty Set</div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Active Substring</div>
                    <div className="glass-panel p-4 flex items-center justify-center min-h-[100px]">
                        <motion.span
                            key={state.windowRange ? state.windowRange.join(',') : 'none'}
                            initial={{ filter: 'blur(4px)', opacity: 0 }}
                            animate={{ filter: 'blur(0px)', opacity: 1 }}
                            className="text-2xl font-bold font-mono tracking-widest text-accent-blue"
                        >
                            {winL !== null && winR !== null ? s.substring(winL, winR + 1) : '-'}
                        </motion.span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlidingWindowEngine

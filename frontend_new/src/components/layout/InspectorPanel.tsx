import React from 'react'
import { useStore } from '../../store/useStore'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, Database } from 'lucide-react'

const InspectorPanel: React.FC = () => {
    const currentProblem = useStore(state => state.currentProblem)
    const currentStepIndex = useStore(state => state.currentStepIndex)
    const isBruteForce = useStore(state => state.isBruteForce)

    if (!currentProblem) return null

    const steps = isBruteForce ? currentProblem.brute_force_steps : currentProblem.optimal_steps
    const currentStep = steps[currentStepIndex]
    if (!currentStep) return null
    const { state } = currentStep

    return (
        <div className="p-4 flex flex-col gap-6 font-outfit">
            <div className="flex items-center gap-2 text-[10px] font-bold text-accent-blue/60 uppercase tracking-[0.2em]">
                <Activity size={12} />
                <span>State Inspector</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {state.pointers?.map(ptr => (
                    <div key={ptr.id} className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex flex-col gap-1">
                        <span className="text-[8px] text-white/20 uppercase font-bold tracking-widest">Pointer {ptr.id}</span>
                        <span className={`text-sm font-mono font-bold text-white/80`}>{ptr.index !== null ? ptr.index : '-'}</span>
                    </div>
                ))}
                {state.customState && Object.entries(state.customState).map(([k, v]) => (
                    <div key={k} className="bg-white/[0.02] border border-white/5 p-3 rounded-xl flex flex-col gap-1">
                        <span className="text-[8px] text-white/20 uppercase font-bold tracking-widest">{k}</span>
                        <span className="text-sm font-mono font-bold text-white/80">{String(v)}</span>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
                    <Database size={12} />
                    <span>Memory State</span>
                </div>
                <div className="bg-black/20 p-4 rounded-xl min-h-[100px] flex flex-wrap gap-2 content-start border border-white/5">
                    <AnimatePresence>
                        {state.mapState && Object.entries(state.mapState).map(([key, value]) => (
                            <motion.div
                                key={key}
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                className="px-2.5 py-1.5 bg-accent-blue/5 border border-accent-blue/10 rounded-lg text-xs font-mono flex gap-2"
                            >
                                <span className="text-accent-blue/60 font-bold">{key}</span>
                                <span className="text-white/10">:</span>
                                <span className="text-white/60">{String(value)}</span>
                            </motion.div>
                        ))}
                        {(!state.mapState || Object.keys(state.mapState).length === 0) && (
                            <div className="text-white/10 text-[10px] font-bold uppercase tracking-widest w-full text-center mt-6">Idle</div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default InspectorPanel

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ChevronDown,
    Brain,
    Zap,
    Info,
    ListChecks,
    HelpCircle
} from 'lucide-react'
import { Problem } from '../../types'
import { useStore } from '../../store/useStore'

interface ThinkingGuideProps {
    problem: Problem
    onChecklistComplete?: (isComplete: boolean) => void
}

const ThinkingGuide: React.FC<ThinkingGuideProps> = ({ problem, onChecklistComplete }) => {
    const getAdaptiveBehavior = useStore(state => state.getAdaptiveBehavior)
    const adaptiveBehavior = getAdaptiveBehavior(problem.slug)

    const [isExpanded, setIsExpanded] = useState(() => {
        // Adaptive Override: If low confidence, FORCE expand initially
        if (adaptiveBehavior.autoExpandGuide) return true

        // Otherwise respect user preference
        const saved = localStorage.getItem('algoscope_thinking_guide_expanded')
        return saved !== null ? JSON.parse(saved) : true
    })
    const [activeSection, setActiveSection] = useState<string | null>(null)

    // Progress Tracking
    const [progress, setProgress] = useState<Record<string, boolean>>(() => {
        const saved = localStorage.getItem(`thinkingGuide_progress_${problem.slug}`)
        return saved ? JSON.parse(saved) : {}
    })

    // Self-Check Checklist
    const [checklist, setChecklist] = useState<Record<string, boolean>>({
        restatement: false,
        inputs: false,
        bruteForce: false,
        constraint: false,
        structure: false
    })

    React.useEffect(() => {
        const completedCount = Object.values(checklist).filter(v => v).length
        onChecklistComplete?.(completedCount >= 3)

        // Track Checklist Engagement
        if (problem.slug) {
            const rate = (completedCount / 5) * 100 // 5 items
            useStore.getState().trackActivity(problem.slug, 'checklistCompletionRate', rate)
        }
    }, [checklist, onChecklistComplete, problem.slug])

    React.useEffect(() => {
        if (adaptiveBehavior.autoExpandGuide) {
            setIsExpanded(true)
        } else if (adaptiveBehavior.reduceAssistance) {
            setIsExpanded(false)
        }
    }, [adaptiveBehavior.autoExpandGuide, adaptiveBehavior.reduceAssistance])

    React.useEffect(() => {
        localStorage.setItem('algoscope_thinking_guide_expanded', JSON.stringify(isExpanded))
    }, [isExpanded])

    React.useEffect(() => {
        localStorage.setItem(`thinkingGuide_progress_${problem.slug}`, JSON.stringify(progress))

        // Track Guide Depth
        if (problem.slug) {
            const completedSections = Object.values(progress).filter(v => v).length
            const rate = (completedSections / 4) * 100 // 4 sections
            useStore.getState().trackActivity(problem.slug, 'guideSectionCompletionRate', rate)
        }
    }, [progress, problem.slug])

    if (!problem.thinking_guide) return null

    const handleSectionClick = (section: string) => {
        setActiveSection(activeSection === section ? null : section)
        setProgress(prev => ({ ...prev, [section]: true }))
    }

    const sections = [
        { id: 'first_principles', title: 'First Principles', icon: Info, content: problem.thinking_guide.first_principles },
        { id: 'pattern_signals', title: 'Pattern Signals', icon: Zap, content: problem.thinking_guide.pattern_signals },
        { id: 'naive_approach', title: 'Naive Approach', icon: HelpCircle, content: problem.thinking_guide.naive_approach },
        { id: 'approach_blueprint', title: 'Approach Blueprint', icon: ListChecks, content: problem.thinking_guide.approach_blueprint },
    ]

    return (
        <div className="flex flex-col gap-4 font-outfit">
            <div className={`glass-card border border-white/5 bg-background/30 backdrop-blur-sm overflow-hidden transition-all duration-500 rounded-2xl ${isExpanded ? 'p-8' : 'p-4'}`}>
                {/* Header */}
                <div
                    className="flex items-center justify-between cursor-pointer group"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${isExpanded ? 'bg-accent-blue/10 text-accent-blue shadow-glow' : 'bg-white/5 text-white/30'}`}>
                            <Brain size={20} />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors">Cognitive Path</h3>
                            {isExpanded && <span className="text-[8px] text-accent-blue/40 font-bold uppercase tracking-widest mt-0.5">Build your mental model</span>}
                        </div>
                    </div>
                    <ChevronDown size={18} className={`text-white/20 transition-transform duration-500 ${isExpanded ? 'rotate-180 text-white' : ''}`} />
                </div>

                {/* Content */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-10 space-y-4"
                        >
                            {sections.map((section) => (
                                <div key={section.id} className="group/section">
                                    <div
                                        className={`flex items-center justify-between p-4 rounded-xl transition-all cursor-pointer ${activeSection === section.id
                                            ? 'bg-accent-blue/5 border border-accent-blue/10'
                                            : 'bg-white/[0.02] border border-white/5 hover:bg-white/[0.04]'
                                            }`}
                                        onClick={() => handleSectionClick(section.id)}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`${activeSection === section.id ? 'text-accent-blue' : 'text-white/20'}`}>
                                                <section.icon size={16} />
                                            </div>
                                            <span className={`text-sm font-bold tracking-tight ${activeSection === section.id ? 'text-white' : 'text-white/40'}`}>
                                                {progress[section.id] && <span className="mr-2 text-green-500">✓</span>}
                                                {section.title}
                                            </span>
                                        </div>
                                        <ChevronDown size={14} className={`transition-transform duration-300 text-white/10 ${activeSection === section.id ? 'rotate-180 text-accent-blue' : ''}`} />
                                    </div>

                                    <AnimatePresence>
                                        {activeSection === section.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="py-4 px-6 space-y-4 border-l-2 border-accent-blue/20 ml-6 my-2 bg-white/[0.01] rounded-r-xl transition-all">
                                                    {section.content.map((point, idx) => (
                                                        <div key={idx} className="flex gap-4">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-accent-blue/30 mt-2 shrink-0" />
                                                            <p className="text-sm text-white/50 leading-relaxed font-light">
                                                                {point}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}

                            {/* Self-Check Prompts Section */}
                            <div className="pt-8 border-t border-white/5 mt-10 space-y-8">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-accent-purple/10">
                                        <ListChecks size={16} className="text-accent-purple" />
                                    </div>
                                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Before You Visualize</h4>
                                </div>
                                <div className="grid gap-3">
                                    <PromptItem
                                        label="Can I restate the problem in one sentence?"
                                        checked={checklist.restatement}
                                        onChange={(v) => setChecklist(prev => ({ ...prev, restatement: v }))}
                                    />
                                    <PromptItem
                                        label="What are the inputs and outputs?"
                                        checked={checklist.inputs}
                                        onChange={(v) => setChecklist(prev => ({ ...prev, inputs: v }))}
                                    />
                                    <PromptItem
                                        label="What is the brute force approach?"
                                        checked={checklist.bruteForce}
                                        onChange={(v) => setChecklist(prev => ({ ...prev, bruteForce: v }))}
                                    />
                                    <PromptItem
                                        label="What constraint makes brute force inefficient?"
                                        checked={checklist.constraint}
                                        onChange={(v) => setChecklist(prev => ({ ...prev, constraint: v }))}
                                    />
                                    <PromptItem
                                        label="What data structure might help?"
                                        checked={checklist.structure}
                                        onChange={(v) => setChecklist(prev => ({ ...prev, structure: v }))}
                                    />
                                </div>
                                <div className="p-5 rounded-2xl bg-accent-purple/5 border border-accent-purple/10 flex gap-4">
                                    <Info size={18} className="text-accent-purple shrink-0 mt-0.5" />
                                    <p className="text-sm text-accent-purple/60 leading-relaxed font-medium">
                                        Check at least 3 cognitive milestones to unlock the pattern visualization engine.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

const PromptItem = ({ label, checked, onChange }: { label: string, checked: boolean, onChange: (v: boolean) => void }) => (
    <div
        className={`flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer group ${checked ? 'bg-white/5 border-white/10' : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.01]'
            }`}
        onClick={() => onChange(!checked)}
    >
        <div className={`w-5 h-5 rounded-lg border flex items-center justify-center transition-all duration-300 ${checked ? 'bg-accent-purple border-accent-purple shadow-glow' : 'border-white/10 group-hover:border-white/20'
            }`}>
            {checked ? <span className="text-white text-[10px]">✓</span> : <span className="text-white/10 text-[10px]">☐</span>}
        </div>
        <span className={`text-sm transition-colors font-light tracking-wide ${checked ? 'text-white' : 'text-white/30'}`}>
            {label}
        </span>
    </div>
)

export default ThinkingGuide

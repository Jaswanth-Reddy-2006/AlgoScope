import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
    Brain,
    Zap,
    Target,
    TrendingUp,
    Activity,
    CheckCircle2,
    BarChart2,
    ArrowRight
} from 'lucide-react'
import { useStore } from '../store/useStore'
import CognitiveTransferMatrix from '../components/profile/CognitiveTransferMatrix'

const PatternProfile = () => {
    const navigate = useNavigate()
    const problems = useStore(state => state.problems)
    const patternStats = useStore(state => state.patternStats)

    // Aggregate stats by Algorithm Type
    const patternData = useMemo(() => {
        const groups: Record<string, { totalConfidence: number, count: number, problems: any[] }> = {}

        problems.forEach(p => {
            const type = p.algorithmType || 'Uncategorized'
            if (!groups[type]) {
                groups[type] = { totalConfidence: 0, count: 0, problems: [] }
            }
            groups[type].problems.push(p)

            const stats = patternStats[p.slug]
            if (stats) {
                groups[type].totalConfidence += stats.confidence
                groups[type].count += 1
            }
        })

        return Object.entries(groups).map(([type, data]) => {
            const avgConfidence = data.count > 0 ? data.totalConfidence / data.count : 0 // Default to 0 if no attempts
            let level = 'Initiate'
            let levelColor = 'text-white/40'
            let status = 'Developing'
            let statusColor = 'text-accent-blue'
            let bgColor = 'bg-accent-blue'

            // Level Logic
            if (avgConfidence >= 90) {
                level = 'Strategist'
                levelColor = 'text-purple-400'
            } else if (avgConfidence >= 70) {
                level = 'Architect'
                levelColor = 'text-blue-400'
            } else if (avgConfidence >= 40) {
                level = 'Practitioner'
                levelColor = 'text-green-400'
            } else {
                level = 'Initiate'
                levelColor = 'text-white/40'
            }

            // Status Logic (for colors/visuals)
            if (avgConfidence < 50) {
                status = 'Focus Area'
                statusColor = 'text-amber-500'
                bgColor = 'bg-amber-500'
            } else if (avgConfidence >= 80) {
                status = 'Strong'
                statusColor = 'text-green-500'
                bgColor = 'bg-green-500'
            }

            return {
                type,
                confidence: Math.round(avgConfidence),
                status,
                level,
                levelColor,
                statusColor,
                bgColor,
                problemCount: data.problems.length
            }
        }).sort((a, b) => a.confidence - b.confidence)
    }, [problems, patternStats])

    // Identify Priority Training Areas (Weakest 2)
    const priorityAreas = patternData.filter(p => p.confidence < 80).slice(0, 2)

    // Generate Insights
    const insights = useMemo(() => {
        const allInsights: string[] = []
        problems.forEach(p => {
            // We can check local "patternStats" for generic issues to generate a summary
            const stats = patternStats[p.slug]
            if (stats) {
                if (stats.confidence < 50 && stats.attempts > 2) {
                    allInsights.push(`Struggling with ${p.title}: Try breaking down the brute force constraints.`)
                }
                if (stats.bruteFirstCount > stats.attempts * 0.8) {
                    allInsights.push(`${p.title}: Heavy reliance on brute force detected.`)
                }
            }
        })
        return allInsights.slice(0, 3)
    }, [problems, patternStats])


    // Get Recommended Action
    const recommendation = useStore(state => state.getRecommendedAction())

    return (
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative font-outfit bg-background/50">
            {/* Header */}
            <div className="h-20 px-8 flex items-center justify-between border-b border-white/5 bg-background/50 backdrop-blur-md z-10 shrink-0">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-accent-purple/10 flex items-center justify-center border border-accent-purple/20 shadow-glow-purple">
                        <Brain size={20} className="text-accent-purple" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold tracking-widest text-white uppercase">Pattern Profile</h1>
                        <p className="text-[10px] text-white/40 uppercase tracking-wider font-mono">Cognitive Architecture Overview</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Priority & Grid */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Recommendation Card */}
                        {recommendation && (
                            <section>
                                <div className="glass-card p-6 border border-accent-blue/30 bg-accent-blue/5 rounded-2xl relative overflow-hidden group hover:border-accent-blue/50 transition-all flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-accent-blue/20 flex items-center justify-center text-accent-blue">
                                            <Zap size={24} />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-accent-blue mb-1 block">
                                                AI Recommendation
                                            </span>
                                            <h3 className="text-lg font-bold text-white leading-tight">
                                                {recommendation.message}
                                            </h3>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => navigate(recommendation.link)}
                                        className="px-6 py-2 bg-accent-blue hover:bg-accent-blue/90 text-black font-bold rounded-lg transition-colors text-sm uppercase tracking-wide flex items-center gap-2"
                                    >
                                        {recommendation.label}
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </section>
                        )}

                        {/* Priority Training Section */}
                        {priorityAreas.length > 0 && (
                            <section>
                                <div className="flex items-center gap-3 mb-6">
                                    <Target size={18} className="text-amber-500" />
                                    <h2 className="text-sm font-bold uppercase tracking-widest text-white/60">Priority Training Areas</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {priorityAreas.map((area) => (
                                        <button
                                            key={area.type}
                                            onClick={() => navigate(`/mastery/${area.type}`)}
                                            className="glass-card p-6 border border-amber-500/20 bg-amber-500/5 rounded-2xl relative overflow-hidden group hover:border-amber-500/40 transition-all text-left w-full"
                                        >
                                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                                <Activity size={64} className="text-amber-500" />
                                            </div>
                                            <div className="relative z-10">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500 mb-2 block">Needs Attention</span>
                                                <h3 className="text-xl font-bold text-white mb-1 capitalize">{area.type.replace('_', ' ')}</h3>
                                                <div className="flex items-end gap-2 mb-4">
                                                    <span className="text-3xl font-mono font-bold text-white">{area.confidence}%</span>
                                                    <span className="text-xs text-white/40 mb-1">confidence</span>
                                                </div>
                                                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${area.confidence}%` }}
                                                        className="h-full bg-amber-500 rounded-full"
                                                    />
                                                </div>
                                                <div className="mt-4 flex items-center gap-2 text-amber-500 opacity-60 group-hover:opacity-100 transition-opacity">
                                                    <span className="text-[10px] font-bold uppercase tracking-wider">Start Drill</span>
                                                    <ArrowRight size={14} />
                                                </div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Pattern Strength Grid */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <BarChart2 size={18} className="text-accent-blue" />
                                <h2 className="text-sm font-bold uppercase tracking-widest text-white/60">Pattern Strength Matrix</h2>
                            </div>
                            <div className="glass-card border border-white/5 bg-white/[0.02] rounded-2xl overflow-hidden">
                                <div className="grid grid-cols-1 divide-y divide-white/5">
                                    {patternData.map((pattern, idx) => (
                                        <div key={pattern.type} className="p-6 flex items-center justify-between group hover:bg-white/[0.02] transition-colors">
                                            <div className="flex items-center gap-6">
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border border-white/5 ${pattern.status === 'Strong' ? 'bg-green-500/10 text-green-500' : 'bg-white/5 text-white/30'}`}>
                                                    {pattern.status === 'Strong' ? <CheckCircle2 size={20} /> : <Zap size={20} />}
                                                </div>
                                                <div>
                                                    <h3 className="text-base font-bold text-white capitalize mb-1">{pattern.type.replace('_', ' ')}</h3>
                                                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-wider">
                                                        <span className={`${pattern.levelColor} font-bold`}>{pattern.level}</span>
                                                        <span className="text-white/30">•</span>
                                                        <span className="text-white/30">{pattern.problemCount} Patterns</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-8 min-w-[200px]">
                                                <div className="flex-1 flex flex-col gap-2">
                                                    <div className="flex justify-between text-[10px] font-mono font-bold">
                                                        <span className="text-white/30">CONFIDENCE</span>
                                                        <span className="text-white">{pattern.confidence}%</span>
                                                    </div>
                                                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${pattern.confidence}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1, delay: idx * 0.1 }}
                                                            className={`h-full rounded-full ${pattern.bgColor}`}
                                                        />
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => navigate(`/mastery/${pattern.type}`)}
                                                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-colors"
                                                >
                                                    <Zap size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Cognitive Transfer Matrix */}
                        <section>
                            <CognitiveTransferMatrix />
                        </section>
                    </div>

                    {/* Right Column: Insights & Trends */}
                    <div className="space-y-8">
                        {/* Behavioral Insights */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <Brain size={18} className="text-accent-purple" />
                                <h2 className="text-sm font-bold uppercase tracking-widest text-white/60">Cognitive Insights</h2>
                            </div>
                            <div className="glass-card border border-white/5 bg-accent-purple/5 rounded-2xl p-6 relative overflow-hidden">
                                <div className="space-y-4 relative z-10">
                                    {insights.length > 0 ? (
                                        insights.map((insight, i) => (
                                            <div key={i} className="flex gap-4 items-start pb-4 border-b border-white/5 last:border-0 last:pb-0">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-purple mt-2 shrink-0" />
                                                <p className="text-sm text-white/60 leading-relaxed font-light">
                                                    "{insight}"
                                                </p>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-8">
                                            <p className="text-sm text-white/30 italic">No patterns detected yet. Start solving to generate insights.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Mini Trend Visualization (Mocked for now as we don't have historical history yet) */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <TrendingUp size={18} className="text-green-500" />
                                <h2 className="text-sm font-bold uppercase tracking-widest text-white/60">Confidence Trend</h2>
                            </div>
                            <div className="glass-card border border-white/5 bg-white/[0.02] rounded-2xl p-6 flex flex-col items-center justify-center min-h-[150px]">
                                {/* Simple Sparkline Visualization */}
                                <div className="w-full h-24 flex items-end justify-between gap-1 px-4">
                                    {[30, 45, 40, 55, 60, 58, 70, 75, 82, 85].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ delay: i * 0.05 }}
                                            className="w-full bg-accent-blue/20 rounded-t-sm hover:bg-accent-blue/40 transition-colors relative group"
                                        >
                                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-white font-mono bg-black/50 px-1 rounded">
                                                {h}%
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="w-full h-px bg-white/5 mt-0" />
                                <p className="text-[10px] text-white/20 uppercase tracking-widest mt-4">Last 10 Sessions</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatternProfile

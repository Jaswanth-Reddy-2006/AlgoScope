import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    BookOpen,
    Search,
    Layers,
    GitGraph,
    Zap,
    Lock,
    Repeat,
    BarChart3
} from 'lucide-react'
import { useStore } from '../store/useStore'
import foundationsData from '../data/foundations.json'
import { FoundationModule } from '../types/foundation'
import EvolutionTimeline from '../components/foundations/EvolutionTimeline'
import FoundationsRadarChart from '../components/foundations/FoundationsRadarChart'

const FoundationsLayout = () => {
    const navigate = useNavigate()
    const patternStats = useStore(state => state.patternStats)

    const categories = [
        { key: 'sorting', icon: Layers, color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
        { key: 'searching', icon: Search, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
        { key: 'recursion', icon: Repeat, color: 'text-pink-500', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
        { key: 'traversal', icon: GitGraph, color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20' }
    ]

    const isPrerequisiteMet = (prereqs: string[]) => {
        if (!prereqs || prereqs.length === 0) return true
        return prereqs.every(id => (patternStats[id]?.confidence || 0) >= 50)
    }

    return (
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative font-outfit bg-background">
            {/* Header */}
            <div className="h-20 px-8 flex items-center justify-between border-b border-white/5 bg-background/50 backdrop-blur-md z-10 shrink-0">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-glow-emerald">
                        <BookOpen size={20} className="text-emerald-500" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold tracking-widest text-white uppercase">Foundations Lab</h1>
                        <p className="text-[10px] text-white/40 uppercase tracking-wider font-mono">Algorithm Primitives & Theory</p>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
                <div className="max-w-7xl mx-auto space-y-12">

                    {/* Dashboard Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <GitGraph className="text-accent-blue" /> Evolution Path
                                </h2>
                                <EvolutionTimeline />
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-3xl border border-white/5 bg-white/[0.02]">
                            <h2 className="text-sm font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider">
                                <BarChart3 className="text-accent-purple" size={16} /> Competency Radar
                            </h2>
                            <FoundationsRadarChart />
                        </div>
                    </div>

                    {categories.map((cat) => {
                        const data = foundationsData[cat.key as keyof typeof foundationsData]
                        if (!data) return null

                        return (
                            <section key={cat.key}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`p-2 rounded-lg ${cat.bg} ${cat.color}`}>
                                        <cat.icon size={20} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-white leading-none">{data.title}</h2>
                                        <p className="text-xs text-white/40 mt-1">{data.description}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {data.modules.map((mod: any) => {
                                        const module = mod as FoundationModule
                                        const stats = patternStats[module.id]
                                        const confidence = stats?.confidence || 0
                                        const locked = !isPrerequisiteMet(module.prerequisites)

                                        // Level Logic
                                        let level = 'Initiate'
                                        let levelColor = 'text-white/40'
                                        if (confidence >= 90) { level = 'Strategist'; levelColor = 'text-purple-400' }
                                        else if (confidence >= 70) { level = 'Architect'; levelColor = 'text-blue-400' }
                                        else if (confidence >= 40) { level = 'Practitioner'; levelColor = 'text-green-400' }

                                        return (
                                            <motion.div
                                                key={module.id}
                                                whileHover={!locked ? { scale: 1.02 } : {}}
                                                className={`glass-card p-6 rounded-2xl border transition-all relative overflow-hidden group ${locked
                                                    ? 'opacity-50 grayscale border-white/5 cursor-not-allowed'
                                                    : 'border-white/5 hover:border-white/10 cursor-pointer'
                                                    }`}
                                                onClick={() => !locked && navigate(`/foundations/${cat.key}/${module.id}`)}
                                            >
                                                <div className="absolute top-0 right-0 p-4 opacity-50">
                                                    <cat.icon size={80} className={`${cat.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                                                </div>

                                                <div className="relative z-10">
                                                    <div className="flex justify-between items-start mb-4">
                                                        <div className={`px-2 py-1 rounded border text-[10px] uppercase font-bold tracking-wider ${cat.bg} ${cat.border} ${cat.color}`}>
                                                            {module.difficulty}
                                                        </div>

                                                        {stats?.lastPracticed && (Date.now() - stats.lastPracticed > 14 * 24 * 60 * 60 * 1000) && (
                                                            <div className="flex items-center gap-1 text-amber-500 animate-pulse">
                                                                <Zap size={10} />
                                                                <span className="text-[10px] font-bold uppercase">Decay</span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-blue transition-colors flex items-center gap-2">
                                                        {module.title}
                                                        {locked && <Lock size={14} className="text-white/40" />}
                                                    </h3>

                                                    {locked ? (
                                                        <div className="mt-4 p-3 rounded-lg bg-black/40 border border-white/5">
                                                            <div className="text-[10px] text-white/40 mb-1 uppercase tracking-wider">Required</div>
                                                            <div className="text-xs text-white/60 font-mono">
                                                                {module.prerequisites.map(p => p.replace(/_/g, ' ')).join(', ')}
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            <div className="flex items-center gap-2 mb-4">
                                                                <span className={`text-[10px] font-bold uppercase tracking-wider ${levelColor}`}>
                                                                    {level}
                                                                </span>
                                                                <div className="h-1 w-1 rounded-full bg-white/20" />
                                                                <span className="text-[10px] text-white/40 font-mono">{confidence}% Mastery</span>
                                                            </div>

                                                            <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/5">
                                                                {module.interview?.wrongAssumptions?.slice(0, 2).map((mistake, i) => (
                                                                    <div key={i} className="flex items-start gap-1.5 opacity-60">
                                                                        <div className="mt-0.5 w-1 h-1 rounded-full bg-red-400 shrink-0" />
                                                                        <span className="text-[10px] text-white leading-tight">{mistake}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </section>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default FoundationsLayout

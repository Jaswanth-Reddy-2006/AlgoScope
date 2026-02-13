import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Hash, ChevronRight, LayoutGrid, List, Target, Play } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useStore } from '../store/useStore'
import { cn } from '../utils/cn'

const ProblemList: React.FC = () => {
    const { problems, isLoading } = useStore()
    const [searchQuery, setSearchQuery] = React.useState('')
    const [difficulty, setDifficulty] = React.useState<string>('All')
    const [type, setType] = React.useState<string>('All')
    const [viewMode, setViewMode] = React.useState<'grid' | 'table'>('grid')

    const filtered = problems.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesDifficulty = difficulty === 'All' || p.difficulty === difficulty
        const matchesType = type === 'All' || p.algorithmType === type
        return matchesSearch && matchesDifficulty && matchesType
    })

    if (isLoading && problems.length === 0) {
        return (
            <div className="flex-1 flex items-center justify-center mesh-bg">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-2 border-accent-blue/10 border-t-accent-blue rounded-full animate-spin" />
                    <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">Loading Patterns...</span>
                </div>
            </div>
        )
    }

    return (
        <div className="flex-1 overflow-y-auto custom-scrollbar mesh-bg p-8 lg:p-12 font-outfit">
            <div className="max-w-7xl mx-auto">
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 text-accent-blue mb-4">
                        <Target size={20} />
                        <span className="text-xs font-bold uppercase tracking-[0.3em]">Knowledge Hub</span>
                    </div>
                    <h1 className="text-6xl font-bold mb-4 tracking-tight">Curated Problem <span className="text-gradient">Library</span></h1>
                    <p className="text-xl text-white/40 max-w-2xl font-light leading-relaxed">
                        Master the fundamental patterns of computational thinking through interactive visual laboratories.
                    </p>
                </motion.header>

                <div className="flex flex-col xl:flex-row gap-6 mb-12 items-stretch xl:items-center justify-between">
                    <div className="flex-1 relative group">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-accent-blue transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Master a pattern or search by title..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl pl-14 pr-6 focus:outline-none focus:border-accent-blue/40 focus:bg-white/[0.07] transition-all font-medium placeholder:text-white/10"
                        />
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <select
                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                            className="h-16 px-6 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold focus:outline-none focus:border-accent-blue/40 cursor-pointer hover:bg-white/[0.07] transition-all"
                        >
                            <option value="All">All Difficulties</option>
                            <option value="Easy">Beginner</option>
                            <option value="Medium">Intermediate</option>
                            <option value="Hard">Advanced</option>
                        </select>

                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="h-16 px-6 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold focus:outline-none focus:border-accent-blue/40 cursor-pointer hover:bg-white/[0.07] transition-all"
                        >
                            <option value="All">Core Patterns</option>
                            <option value="two_pointer">Two Pointers</option>
                            <option value="sliding_window">Sliding Window</option>
                            <option value="stack">Stack & Queue</option>
                        </select>

                        <div className="h-16 w-[1px] bg-white/10 mx-2 hidden md:block" />

                        <div className="flex bg-white/5 p-2 rounded-2xl border border-white/10">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={cn("p-3 rounded-xl transition-all", viewMode === 'grid' ? "bg-white text-black shadow-lg" : "text-white/40 hover:text-white hover:bg-white/5")}
                            >
                                <LayoutGrid size={20} />
                            </button>
                            <button
                                onClick={() => setViewMode('table')}
                                className={cn("p-3 rounded-xl transition-all", viewMode === 'table' ? "bg-white text-black shadow-lg" : "text-white/40 hover:text-white hover:bg-white/5")}
                            >
                                <List size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <AnimatePresence mode='popLayout'>
                    <motion.div
                        layout
                        className={cn(
                            "grid gap-8",
                            viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "flex flex-col"
                        )}
                    >
                        {filtered.map((problem) => {
                            const formattedId = String(problem.id).padStart(2, '0')
                            return (
                                <motion.div
                                    key={problem.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    className="group"
                                >
                                    <Link
                                        to={`/problems/${problem.slug}`}
                                        className={cn(
                                            "flex glass-card border border-white/5 hover:border-accent-blue/40 transition-all duration-500",
                                            "hover:-translate-y-2 hover:shadow-premium relative overflow-hidden bg-white/[0.02] h-full",
                                            viewMode === 'grid' ? "flex-col p-8" : "flex-row items-center p-6 gap-8",
                                            problem.status === 'coming_soon' && "opacity-70 grayscale-[0.5] hover:opacity-100 hover:grayscale-0"
                                        )}
                                    >
                                        {/* Watermark Index */}
                                        <div className="absolute -right-4 -bottom-8 text-[120px] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-accent-blue/[0.04] transition-colors duration-700 font-mono">
                                            {formattedId}
                                        </div>

                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className={cn(
                                            "relative z-10 flex h-full",
                                            viewMode === 'grid' ? "flex-col w-full" : "flex-row w-full items-center gap-8"
                                        )}>
                                            <div className={cn(
                                                "flex items-start justify-between",
                                                viewMode === 'grid' ? "mb-6" : "mb-0 shrink-0"
                                            )}>
                                                <div className="flex items-center gap-4">
                                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent-blue/30 transition-colors duration-500 shadow-inner shrink-0">
                                                        <Play size={24} className="text-accent-blue" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-xs font-mono font-bold text-accent-blue uppercase tracking-widest mb-1">
                                                            #{formattedId}
                                                        </span>
                                                        <div className="flex items-center gap-2">
                                                            <span className={cn(
                                                                "px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider",
                                                                problem.difficulty === 'Easy' ? "bg-green-500/10 text-green-400 border border-green-500/20" :
                                                                    problem.difficulty === 'Medium' ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20" :
                                                                        "bg-red-500/10 text-red-400 border border-red-500/20"
                                                            )}>
                                                                {problem.difficulty}
                                                            </span>
                                                            {problem.status === 'coming_soon' && (
                                                                <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-white/10 text-white/30 border border-white/10 italic">
                                                                    Architecting...
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex-1 flex flex-col min-w-0">
                                                <h3 className={cn(
                                                    "font-bold tracking-tight group-hover:text-accent-blue transition-all duration-300 truncate",
                                                    viewMode === 'grid' ? "text-2xl mb-3" : "text-xl mb-0"
                                                )}>
                                                    {problem.title}
                                                </h3>

                                                {viewMode === 'grid' && (
                                                    <p className="text-sm text-white/30 line-clamp-2 mb-8 leading-relaxed font-light">
                                                        {problem.problem_statement || "Analyze optimal temporal bounds and computational logic for this fundamental computational pattern."}
                                                    </p>
                                                )}
                                            </div>

                                            <div className={cn(
                                                "flex items-center justify-between",
                                                viewMode === 'grid' ? "pt-6 border-t border-white/5 mt-auto" : "ml-auto shrink-0"
                                            )}>
                                                <div className="flex items-center gap-3">
                                                    {problem.tags.slice(0, 2).map(tag => (
                                                        <span
                                                            key={tag}
                                                            className="text-[9px] font-bold uppercase tracking-widest text-white/20 border border-white/5 px-2 py-1 rounded bg-black/40"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <ChevronRight
                                                    size={24}
                                                    className={cn(
                                                        "text-white/10 group-hover:text-accent-blue transition-all duration-500",
                                                        viewMode === 'grid' ? "translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100" : "opacity-100"
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </AnimatePresence>

                {filtered.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-32 rounded-3xl border border-dashed border-white/10 bg-white/[0.02]"
                    >
                        <div className="w-20 h-20 bg-white/5 shrink-0 rounded-full flex items-center justify-center mx-auto mb-8">
                            <Hash size={40} className="text-white/10" />
                        </div>
                        <h3 className="mb-2 text-2xl font-bold">Zero patterns localized</h3>
                        <p className="text-white/20 font-light max-w-sm mx-auto">
                            Our sensors couldn't find any patterns matching your criteria. Try widening your search or adjusting filters.
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default ProblemList

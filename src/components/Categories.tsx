import { useNavigate } from "react-router-dom"
import { problems } from "../data/problems"
import { Sidebar } from "./Sidebar"

export function Categories() {
    const navigate = useNavigate()

    // Extract unique categories and count problems
    const categoryMap = problems.reduce((acc, p) => {
        acc[p.category] = (acc[p.category] || 0) + 1
        return acc
    }, {} as Record<string, number>)

    const categories = Object.entries(categoryMap).map(([name, count]) => ({
        name,
        count,
        image: getCategoryImage(name)
    }))

    function getCategoryImage(cat: string) {
        const images: Record<string, string> = {
            'Arrays': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
            'Sorting': 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=600',
            'Graphs': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=600',
            'Trees': 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=600',
            'Linked List': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600',
            'Strings': 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600',
            'Two Pointers': 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=600',
            'Sliding Window': 'https://images.unsplash.com/photo-1451187530220-cf1a4273f6a4?auto=format&fit=crop&get=80&w=600',
            'Dynamic Programming': 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=600',
            'Design': 'https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?auto=format&fit=crop&q=80&w=600',
        }
        return images[cat] || 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=600'
    }

    return (
        <div className="flex h-screen overflow-hidden bg-background-dark text-slate-200">
            <Sidebar />

            <main className="flex-1 flex flex-col overflow-y-auto premium-gradient custom-scrollbar">
                <header className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-6 md:py-8 sticky top-0 bg-background-dark/80 backdrop-blur-xl z-20 border-b border-white/[0.03] gap-4">
                    <div className="flex items-center gap-4 md:gap-6 lg:ml-0">
                        <button onClick={() => navigate(-1)} className="p-2.5 md:p-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all text-slate-400 hover:text-white shrink-0">
                            <span className="material-symbols-outlined text-xl">arrow_back</span>
                        </button>
                        <div className="space-y-0.5 md:space-y-1">
                            <h2 className="text-xl md:text-3xl font-black text-white tracking-tight">Algorithm Library</h2>
                            <p className="text-slate-500 text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] line-clamp-1">Explore categorized logic patterns</p>
                        </div>
                    </div>
                </header>

                <div className="px-6 md:px-12 py-12 max-w-[1400px] mx-auto w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {categories.map((cat) => (
                            <div
                                key={cat.name}
                                onClick={() => navigate(`/visualizer?category=${encodeURIComponent(cat.name)}`)}
                                className="group relative bg-white/[0.03] border border-white/[0.08] hover:border-accent-neon/50 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.05] cursor-pointer"
                            >
                                <div className="flex flex-col h-full justify-between gap-8">
                                    <div className="flex items-start justify-between">
                                        <div className="size-16 rounded-2xl bg-accent-neon/5 border border-accent-neon/20 flex items-center justify-center group-hover:bg-accent-neon/10 transition-colors">
                                            <span className="material-symbols-outlined text-accent-neon text-3xl">
                                                {cat.name === 'Arrays' ? 'grid_view' :
                                                    cat.name === 'Sorting' ? 'bar_chart' :
                                                        cat.name === 'Graphs' ? 'hub' :
                                                            cat.name === 'Trees' ? 'account_tree' :
                                                                cat.name === 'Linked List' ? 'schema' :
                                                                    cat.name === 'Strings' ? 'format_quote' :
                                                                        cat.name === 'Two Pointers' ? 'swap_horiz' :
                                                                            cat.name === 'Sliding Window' ? 'window' :
                                                                                cat.name === 'Dynamic Programming' ? 'layers' : 'category'}
                                            </span>
                                        </div>
                                        <div className="size-8 rounded-full border border-white/10 flex items-center justify-center text-slate-600 group-hover:text-accent-neon group-hover:border-accent-neon/30 transition-all">
                                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-black text-white mb-2 group-hover:text-accent-neon transition-colors">{cat.name}</h3>
                                        <div className="flex items-center gap-3">
                                            <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">{cat.count} Algorithms</p>
                                            <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full bg-accent-neon/40 group-hover:bg-accent-neon transition-all duration-500" style={{ width: '100%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

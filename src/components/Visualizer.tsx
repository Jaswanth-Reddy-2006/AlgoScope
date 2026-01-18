import { Sidebar } from "./Sidebar"
import { useEditorStore } from "../store/useEditorStore"
import { problems } from "../data/problems"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"

export function Visualizer() {
  const { activeProblem, setActiveProblem } = useEditorStore()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")

  const categories = Array.from(new Set(problems.map(p => p.category)))
  const [selectedCategory, setSelectedCategory] = useState<string | null>(searchParams.get('category'))

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setSelectedCategory(cat)
  }, [searchParams])

  const handleStart = () => {
    if (activeProblem) {
      navigate(`/visualize/${activeProblem.slug}`)
    }
  }

  const filteredProblems = problems.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  })

  const getCategoryCount = (cat: string) => problems.filter(p => p.category === cat).length

  return (
    <div className="flex h-screen overflow-hidden bg-background-dark text-slate-200 font-display premium-gradient">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-[72px] flex items-center px-8 bg-[#0a0a0a]/60 backdrop-blur-xl border-b border-white/[0.03] flex-shrink-0 z-20">
          <button onClick={() => navigate(-1)} className="mr-6 w-10 h-10 flex items-center justify-center hover:bg-white/5 border border-white/10 rounded-xl transition-all active:scale-95 ml-1">
            <span className="material-symbols-outlined text-slate-400">arrow_back</span>
          </button>
          <div className="flex items-center justify-between flex-1">
            <h2 className="text-xl font-black text-white tracking-tight">
              {selectedCategory ? `${selectedCategory} Library` : "Configure Session"}
            </h2>
            {selectedCategory && (
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  navigate('/visualizer', { replace: true });
                }}
                className="text-[10px] font-black text-accent-neon bg-accent-neon/10 px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-accent-neon/20 transition-all border border-accent-neon/20 group uppercase tracking-widest"
              >
                Clear Filter
                <span className="material-symbols-outlined text-xs group-hover:rotate-90 transition-transform font-black">close</span>
              </button>
            )}
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 md:p-12 relative custom-scrollbar">
          <div className="max-w-6xl mx-auto space-y-16 pb-32">
            {/* Search Bar - Premium Style */}
            <div className="relative group max-w-3xl">
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-accent-neon group-focus-within:scale-110 transition-transform">search</span>
              <input
                className="w-full bg-white/[0.03] border border-white/[0.1] focus:border-accent-neon/50 focus:ring-4 focus:ring-accent-neon/5 rounded-2xl py-5 pl-16 pr-8 text-lg transition-all outline-none text-white placeholder:text-slate-600 shadow-2xl"
                placeholder={selectedCategory ? `Search in ${selectedCategory}...` : "Search algorithms, categories, or complexity..."}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Categories */}
            {!selectedCategory && (
              <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex items-center justify-between mb-8 px-2">
                  <div className="flex items-center gap-3">
                    <div className="h-0.5 w-6 bg-accent-neon"></div>
                    <h3 className="text-[12px] font-black text-slate-400 uppercase tracking-[0.3em]">
                      Explore Categories
                    </h3>
                  </div>
                  <button
                    onClick={() => navigate('/categories')}
                    className="text-accent-neon font-black text-[11px] uppercase tracking-widest hover:underline flex items-center gap-2 group"
                  >
                    View Gallery
                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                      grid_view
                    </span>
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {categories.slice(0, 3).map(cat => (
                    <CategoryCard
                      key={cat}
                      title={cat}
                      count={getCategoryCount(cat)}
                      isSelected={false}
                      onClick={() => {
                        setSelectedCategory(cat);
                        navigate(`/visualizer?category=${encodeURIComponent(cat)}`);
                      }}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* All Algorithms - List View with Premium Cards */}
            <section className="animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
              <div className="flex items-center gap-3 mb-8 px-2">
                <div className="h-0.5 w-6 bg-accent-neon"></div>
                <h3 className="text-[12px] font-black text-slate-400 uppercase tracking-[0.3em]">All Algorithms</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProblems.map((p) => {
                  const isSelected = activeProblem?.id === p.id
                  return (
                    <div
                      key={p.id}
                      onClick={() => setActiveProblem(p.id)}
                      className={`group flex items-center p-6 rounded-[2rem] cursor-pointer transition-all relative overflow-hidden ${isSelected
                        ? 'bg-accent-neon/[0.08] border-2 border-accent-neon/50 shadow-[0_0_40px_rgba(0,255,102,0.1)]'
                        : 'bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] hover:bg-white/[0.04]'
                        }`}
                    >
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-6 transition-all ${isSelected ? 'bg-accent-neon text-black shadow-glow' : 'bg-white/[0.05] text-accent-neon'}`}>
                        <span className={`material-symbols-outlined text-3xl font-black`}>
                          {p.category === 'Arrays' ? 'grid_view' : p.category === 'Sorting' ? 'bar_chart' : p.category === 'Graphs' ? 'hub' : 'account_tree'}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-black text-xl text-white group-hover:text-accent-neon transition-colors tracking-tight">{p.title}</h4>
                        <div className="flex items-center gap-4 mt-1.5">
                          <span className="text-slate-500 font-black text-[10px] uppercase tracking-widest">{p.category}</span>
                          <span className="h-1 w-1 bg-slate-700 rounded-full"></span>
                          <span className={`text-[10px] font-black uppercase tracking-widest ${p.difficulty === 'Easy' ? 'text-accent-neon' : p.difficulty === 'Medium' ? 'text-amber-500' : 'text-rose-500'
                            }`}>{p.difficulty}</span>
                        </div>
                      </div>

                      {isSelected && (
                        <div className="absolute right-0 top-0 h-full w-1 bg-accent-neon shadow-[0_0_15px_rgba(0,255,102,0.8)]"></div>
                      )}

                      <div className={`transition-all duration-300 ${isSelected ? 'scale-110 opacity-100' : 'scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100'}`}>
                        <button className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isSelected ? 'bg-accent-neon text-black' : 'bg-white/10 text-white hover:bg-accent-neon hover:text-black'
                          }`}>
                          <span className="material-symbols-outlined font-black">
                            {isSelected ? 'check' : 'arrow_forward'}
                          </span>
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          </div>
        </div>

        {/* Start Button Overlay - Premium Dynamic FAB */}
        <div className={`fixed bottom-10 right-10 z-50 transition-all duration-700 transform ${activeProblem ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90 pointer-events-none'}`}>
          <button
            onClick={handleStart}
            disabled={!activeProblem}
            className="flex items-center gap-4 bg-accent-neon text-black px-10 py-5 rounded-[2rem] font-black text-lg shadow-[0_20px_50px_rgba(0,255,102,0.4)] hover:scale-105 active:scale-95 transition-all group border-4 border-black/10"
          >
            START SIMULATION
            <div className="bg-black/20 w-8 h-8 rounded-lg flex items-center justify-center group-hover:bg-black/40 transition-colors">
              <span className="material-symbols-outlined font-black">play_arrow</span>
            </div>
          </button>
        </div>
      </main>
    </div>
  )
}

function CategoryCard({ title, count, isSelected, onClick }: { title: string, count: number, isSelected?: boolean, onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`group relative p-8 rounded-[2.5rem] cursor-pointer transition-all duration-500 border overflow-hidden ${isSelected
        ? 'bg-accent-neon/10 border-accent-neon shadow-[0_0_40px_rgba(0,255,102,0.1)]'
        : 'bg-white/[0.02] border-white/[0.06] hover:border-accent-neon/40 hover:bg-white/[0.05]'
        }`}
    >
      <div className="absolute -top-10 -right-10 size-40 bg-accent-neon/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="flex items-center gap-6 relative z-10">
        <div className={`size-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${isSelected ? 'bg-accent-neon text-black shadow-glow' : 'bg-white/[0.05] text-accent-neon group-hover:bg-accent-neon group-hover:text-black'}`}>
          <span className="material-symbols-outlined text-3xl font-black">
            {title === 'Arrays' ? 'grid_view' :
              title === 'Sorting' ? 'bar_chart' :
                title === 'Graphs' ? 'hub' :
                  title === 'Trees' ? 'account_tree' : 'category'}
          </span>
        </div>
        <div className="flex-1">
          <h4 className={`text-xl font-black transition-colors ${isSelected ? 'text-accent-neon' : 'text-white'}`}>{title}</h4>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-1">{count} Modules Available</p>
        </div>
      </div>
    </div>
  )
}

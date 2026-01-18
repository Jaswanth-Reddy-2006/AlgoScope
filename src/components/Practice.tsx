import { Sidebar } from "./Sidebar"
import { useNavigate } from "react-router-dom"
import { problems } from "../data/problems"

export function Practice() {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen overflow-hidden bg-background-dark font-inter text-slate-300">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-5 border-b border-white/5 sticky top-0 bg-background-dark/80 backdrop-blur-xl z-20 gap-4">
          <div className="flex-1 w-full max-w-xl lg:ml-0">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 group-focus-within:text-accent-neon transition-colors">
                <span className="material-symbols-outlined text-xl">search</span>
              </div>
              <input
                className="w-full bg-white/[0.03] border border-white/5 hover:border-white/10 rounded-xl py-2.5 pl-11 pr-4 text-sm focus:ring-1 focus:ring-accent-neon/30 focus:border-accent-neon/30 transition-all text-white placeholder:text-slate-600 outline-none"
                placeholder="Search algorithms..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-5 md:ml-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10">
              <span className="material-symbols-outlined text-accent-neon text-sm animate-pulse">check_circle</span>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Server Online</span>
            </div>
          </div>
        </header>

        <div className="p-4 md:p-8 max-w-6xl mx-auto w-full">
          <div className="flex flex-col gap-1 mb-8 md:mb-10 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-white uppercase">Practice</h2>
              <div className="h-[2px] w-full md:w-auto md:flex-1 bg-gradient-to-r from-accent-neon/40 to-transparent"></div>
            </div>
            <p className="text-slate-500 max-w-2xl text-xs md:text-lg font-medium mx-auto md:mx-0">Refine your technical skills with curated industry-standard problems and interactive visuals.</p>
          </div>

          <div className="grid gap-4">
            {problems.map((prob, index) => (
              <div key={prob.id} className="glass-card neon-glow rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 group transition-all duration-300">
                <div className="flex items-center gap-4 md:gap-6 flex-1 w-full">
                  <div className="size-10 md:size-12 rounded-xl bg-accent-neon/5 flex items-center justify-center shrink-0 border border-accent-neon/20">
                    <span className="text-base md:text-lg font-black text-accent-neon italic">{index + 1}</span>
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3">
                      <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-accent-neon transition-colors truncate">{prob.title}</h4>
                      <span className={`${prob.diffClass} text-[9px] md:text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md bg-white/5`}>
                        {prob.difficulty}
                      </span>
                    </div>
                    <div className="hidden sm:flex items-center gap-3 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                      <span>{prob.category || 'Algorithms'}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                      <span>{prob.complexity?.time || 'O(N)'} Time</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
                  <button className="flex-1 sm:flex-none min-w-[120px] flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 font-bold text-xs md:text-sm text-white transition-all">
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                    LeetCode
                  </button>
                  <button
                    onClick={() => navigate(`/practice/${prob.slug}/solve`)}
                    className="flex-1 sm:flex-none min-w-[120px] flex items-center justify-center gap-2 px-6 md:px-8 py-2.5 rounded-xl bg-accent-neon text-background-dark font-black text-xs md:text-sm transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,255,102,0.3)] active:scale-95 uppercase tracking-wider"
                  >
                    Start
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

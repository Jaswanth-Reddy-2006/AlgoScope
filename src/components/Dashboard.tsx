import { Sidebar } from "./Sidebar"
import { Link } from "react-router-dom"

export function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-dark font-display text-slate-200 premium-gradient selection:bg-accent-neon/30 selection:text-white">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-y-auto">
        <header className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-6 sticky top-0 bg-background-dark/60 backdrop-blur-2xl z-20 border-b border-white/[0.03] gap-4">
          <div className="flex-1 w-full max-w-2xl lg:ml-0 group relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-accent-neon group-focus-within:scale-110 transition-transform">search</span>
            <input
              type="text"
              placeholder="Search algorithms..."
              className="w-full bg-white/[0.03] border border-white/[0.05] focus:border-accent-neon/50 focus:ring-4 focus:ring-accent-neon/5 rounded-2xl py-3 pl-14 pr-6 text-sm outline-none transition-all placeholder:text-slate-600 text-white"
            />
          </div>
          <div className="flex items-center justify-between w-full md:w-auto gap-6">
            <div className="flex items-center gap-4 px-5 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-2xl hover:bg-white/[0.04] transition-all cursor-default flex-1 md:flex-none">
              <span className="material-symbols-outlined text-amber-500 text-lg">military_tech</span>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none">Mastery Rank</span>
                <span className="text-xs font-bold text-slate-200 mt-1 uppercase">Architect II</span>
              </div>
            </div>
            <button className="relative p-3 text-slate-400 hover:bg-white/[0.05] rounded-2xl transition-all group shrink-0">
              <span className="material-symbols-outlined group-hover:text-accent-neon transition-colors">notifications</span>
              <span className="absolute top-3.5 right-3.5 size-2 bg-accent-neon rounded-full ring-4 ring-background-dark shadow-[0_0_8px_rgba(0,255,102,0.6)]"></span>
            </button>
          </div>
        </header>

        <div className="px-4 md:px-12 py-10 max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Dashboard</h2>
              <p className="text-slate-400 text-sm md:text-lg font-medium">Empower your technical intuition with <span className="text-accent-neon/90">visual logic</span>.</p>
            </div>
            <div className="flex gap-4">
              <div className="px-5 md:px-6 py-3 rounded-2xl bg-accent-neon/5 border border-accent-neon/20 flex items-center gap-3 shadow-[0_0_20px_rgba(0,255,102,0.05)]">
                <span className="material-symbols-outlined text-accent-neon text-xl">bolt</span>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider leading-none">Streak</span>
                  <span className="text-base md:text-lg font-black text-white leading-none">12 Days</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="relative overflow-hidden glass-card rounded-[2rem] p-6 md:p-8 flex flex-col lg:flex-row gap-8 md:gap-10 items-center group transition-all duration-700 hover:shadow-[0_0_60px_rgba(0,255,102,0.12)] border-white/[0.1]">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-neon/10 blur-[120px] rounded-full -mr-40 -mt-40 pointer-events-none group-hover:bg-accent-neon/20 transition-all duration-700"></div>
              <div className="w-full lg:w-2/5 aspect-[16/10] bg-cover bg-center rounded-3xl shadow-2xl relative z-10 border border-white/10 shrink-0 overflow-hidden" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBATqFH0OpgpKcMPGKP_wGWlQ0Q20cV7BaJZZyWUNeyEnbKALvnvtg8xJE4TbUsOkpDRVKWvWC4Byw-HRF_fWb8Zagssrn0wvYJ_qhM_J8snephptzTS9ixfOju4rM19eN6LRM-TxSKeHadP96PFim6H6Tkh0BBqvb9n2kQ5maTS4Pu6GjmBiXX001g_ylclJPQKaMix10vJZyu1OarQF7QcLxjywYIfQp-PCA130js0lYAKIN3WcNGhgNfqkESklyI9Lgd_6uS44zD")' }}>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 flex gap-3">
                  <span className="bg-accent-neon shadow-[0_4px_12px_rgba(0,255,102,0.4)] text-background-dark text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg">Daily Mastery</span>
                </div>
              </div>
              <div className="flex-1 relative z-10 w-full text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <div className="h-[1px] w-8 bg-accent-neon"></div>
                  <p className="text-accent-neon text-[11px] font-black tracking-[0.3em] uppercase neon-text-glow">Featured Challenge</p>
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-4 text-white leading-tight">Longest Palindromic Substring</h3>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-5 text-xs md:text-sm font-medium text-slate-400 mb-8">
                  <span className="flex items-center gap-2 py-1 px-3 bg-white/5 rounded-full"><span className="material-symbols-outlined text-base">category</span> Dynamic Programming</span>
                  <span className="flex items-center gap-2 py-1 px-3 bg-white/5 rounded-full"><span className="material-symbols-outlined text-base text-yellow-500">signal_cellular_alt</span> Medium</span>
                </div>
                <p className="text-slate-400 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed text-sm md:text-lg">
                  Master the matrix-based approach to solving this classic string problem. Visualize how optimal substructures are computed to find the symmetric core.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
                  <button className="flex-1 bg-accent-neon hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(0,255,102,0.3)] text-background-dark font-black py-3.5 md:py-4 px-6 md:px-10 rounded-2xl transition-all flex items-center justify-center gap-3 active:scale-95">
                    <span className="material-symbols-outlined font-black">play_arrow</span>
                    Visualize Solution
                  </button>
                  <button className="flex-1 bg-white/5 hover:bg-white/10 text-white font-bold py-3.5 md:py-4 px-6 md:px-10 rounded-2xl border border-white/10 transition-all backdrop-blur-md active:scale-95 text-center">
                    Read Analysis
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-8 px-2">
              <h4 className="text-xl md:text-2xl font-black text-white">Algorithm Categories</h4>
              <Link className="text-accent-neon text-sm font-bold hover:underline flex items-center gap-1 group" to="/categories">
                View Library
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="glass-card neon-border rounded-[2rem] p-6 md:p-8 group transition-all cursor-pointer hover:-translate-y-2">
                <div className="size-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl">sort</span>
                </div>
                <h5 className="text-xl font-bold mb-3 text-white">Sorting Algorithms</h5>
                <p className="text-slate-400 mb-8 leading-relaxed text-sm">QuickSort, MergeSort, and RadixSort visualizers for complex ordering logic.</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.15em]">Progress</span>
                  <span className="text-xs font-black text-blue-400">80%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full w-[80%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                </div>
              </div>
              <div className="glass-card neon-border rounded-[2rem] p-6 md:p-8 group transition-all cursor-pointer hover:-translate-y-2">
                <div className="size-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl">hub</span>
                </div>
                <h5 className="text-xl font-bold mb-3 text-white">Graph Theory</h5>
                <p className="text-slate-400 mb-8 leading-relaxed text-sm">Interactive Dijkstra, A*, and cycle detection on dynamic graph topologies.</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.15em]">Progress</span>
                  <span className="text-xs font-black text-purple-400">45%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-purple-500 h-full rounded-full w-[45%] shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                </div>
              </div>
              <div className="glass-card neon-border rounded-[2rem] p-6 md:p-8 group transition-all cursor-pointer hover:-translate-y-2">
                <div className="size-14 rounded-2xl bg-accent-neon/10 border border-accent-neon/20 text-accent-neon flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                  <span className="material-symbols-outlined text-3xl">database</span>
                </div>
                <h5 className="text-xl font-bold mb-3 text-white">Trees & Lists</h5>
                <p className="text-slate-400 mb-8 leading-relaxed text-sm">AVL tree balancing, B-Tree insertions, and Linked List pointer manipulations.</p>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.15em]">Progress</span>
                  <span className="text-xs font-black text-accent-neon">Completed</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-accent-neon h-full rounded-full w-full shadow-[0_0_12px_rgba(0,255,102,0.6)]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-20">
            <div className="glass-card rounded-[2rem] overflow-hidden border-white/[0.05]">
              <div className="px-6 md:px-8 py-6 border-b border-white/[0.05] bg-white/[0.02] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-2 bg-accent-neon rounded-full animate-pulse shadow-[0_0_8px_rgba(0,255,102,0.8)]"></div>
                  <h4 className="font-black text-white tracking-wide">Live Session History</h4>
                </div>
                <button className="hidden sm:block text-[11px] text-slate-500 hover:text-accent-neon transition-colors uppercase tracking-[0.2em] font-black">Full Logs</button>
              </div>
              <div className="divide-y divide-white/[0.05]">
                <div className="px-6 md:px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-white/[0.01] transition-colors group gap-4 md:gap-0">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="size-12 bg-accent-dark rounded-xl flex items-center justify-center border border-white/[0.05] group-hover:border-accent-neon/30 transition-all shrink-0">
                      <span className="material-symbols-outlined text-accent-neon text-xl">schema</span>
                    </div>
                    <div>
                      <p className="font-bold text-white group-hover:text-accent-neon transition-colors text-sm md:text-base">Binary Search Tree Rotations</p>
                      <p className="text-[10px] md:text-xs text-slate-500 mt-1">Interactive Simulation • 2 hours ago</p>
                    </div>
                  </div>
                  <div className="text-left md:text-right pl-16 md:pl-0">
                    <span className="text-xs font-mono text-accent-neon font-bold block bg-accent-neon/10 px-3 py-1 rounded-lg w-fit md:ml-auto">O(log n)</span>
                    <span className="text-[10px] text-slate-600 font-bold uppercase mt-1 block">Complexity</span>
                  </div>
                </div>
                <div className="px-6 md:px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-white/[0.01] transition-colors group gap-4 md:gap-0">
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="size-12 bg-accent-dark rounded-xl flex items-center justify-center border border-white/[0.05] group-hover:border-accent-neon/30 transition-all shrink-0">
                      <span className="material-symbols-outlined text-accent-neon text-xl">alt_route</span>
                    </div>
                    <div>
                      <p className="font-bold text-white group-hover:text-accent-neon transition-colors text-sm md:text-base">Dijkstra's Shortest Path</p>
                      <p className="text-[10px] md:text-xs text-slate-500 mt-1">Custom Weighted Graph • Yesterday</p>
                    </div>
                  </div>
                  <div className="text-left md:text-right pl-16 md:pl-0">
                    <span className="text-xs font-mono text-accent-neon font-bold block bg-accent-neon/10 px-3 py-1 rounded-lg w-fit md:ml-auto">O(E log V)</span>
                    <span className="text-[10px] text-slate-600 font-bold uppercase mt-1 block">Complexity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

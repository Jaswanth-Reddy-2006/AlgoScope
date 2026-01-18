import { Sidebar } from "./Sidebar"

export function Roadmap() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-dark font-display text-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-background-dark relative">
        <header className="sticky top-0 z-30 flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-4 md:py-6 border-b border-white/10 glass gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-white">Algorithm Journey</h2>
            <p className="text-white/50 text-xs md:text-sm">Path: Beginner to Advanced Competitive Programmer</p>
          </div>
          <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto justify-between">
            <div className="flex flex-col items-end gap-1 flex-1 md:flex-none">
              <div className="flex items-center gap-4">
                <span className="hidden sm:inline text-xs font-medium text-white/50 uppercase tracking-tighter">Total Progress</span>
                <span className="text-accent-neon text-sm font-bold">45%</span>
              </div>
              <div className="w-full md:w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-accent-neon" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2.5 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 border border-white/10">
                <span className="material-symbols-outlined text-[20px]">notifications</span>
              </button>
            </div>
          </div>
        </header>

        <div className="px-6 md:px-10 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 flex flex-col items-center">
            <div className="w-full max-w-2xl relative flex flex-col gap-0">
              {/* Module 1: Mastered */}
              <div className="relative grid grid-cols-[80px_1fr] group">
                <div className="flex flex-col items-center">
                  <div className="z-10 bg-accent-neon size-10 rounded-full flex items-center justify-center text-background-dark shadow-lg shadow-accent-neon/20">
                    <span className="material-symbols-outlined font-bold text-[20px]">check</span>
                  </div>
                  <div className="w-1 bg-accent-neon h-24"></div>
                </div>
                <div className="pb-12 pt-1">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-accent-neon/30 transition-all cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-white text-lg">Arrays & Strings</h3>
                      <span className="text-[10px] font-bold text-accent-neon border border-accent-neon/30 px-2 py-0.5 rounded uppercase">Mastered</span>
                    </div>
                    <p className="text-white/50 text-sm mb-4">Foundation of memory layout, manipulation, and sliding window techniques.</p>
                    <div className="flex items-center gap-4 text-[11px] text-white/40 font-medium">
                      <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 8 hrs</div>
                      <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">menu_book</span> 12 Lessons</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 2: Mastered */}
              <div className="relative grid grid-cols-[80px_1fr] group">
                <div className="flex flex-col items-center">
                  <div className="z-10 bg-accent-neon size-10 rounded-full flex items-center justify-center text-background-dark shadow-lg shadow-accent-neon/20">
                    <span className="material-symbols-outlined font-bold text-[20px]">check</span>
                  </div>
                  <div className="w-1 bg-accent-neon h-24"></div>
                </div>
                <div className="pb-12 pt-1">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-accent-neon/30 transition-all cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-white text-lg">Sorting & Searching</h3>
                      <span className="text-[10px] font-bold text-accent-neon border border-accent-neon/30 px-2 py-0.5 rounded uppercase">Mastered</span>
                    </div>
                    <p className="text-white/50 text-sm mb-4">Mastering O(N log N) sorting algorithms and binary search variants.</p>
                    <div className="flex items-center gap-4 text-[11px] text-white/40 font-medium">
                      <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 10 hrs</div>
                      <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">menu_book</span> 15 Lessons</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 3: Current Focus */}
              <div className="relative grid grid-cols-[80px_1fr] group">
                <div className="flex flex-col items-center">
                  <div className="z-10 bg-accent-neon size-12 rounded-full flex items-center justify-center text-background-dark shadow-[0_0_20px_rgba(31,249,31,0.5)] ring-4 ring-accent-neon/20">
                    <span className="material-symbols-outlined font-bold text-[28px]">play_arrow</span>
                  </div>
                  <div className="w-1 dashed-line h-40"></div>
                </div>
                <div className="pb-16 pt-0">
                  <div className="bg-card-dark border-2 border-accent-neon/50 p-6 rounded-2xl neon-glow relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-neon/10 blur-3xl -mr-16 -mt-16"></div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-accent-neon text-[10px] font-bold uppercase tracking-widest mb-1">Current Focus</p>
                        <h3 className="font-bold text-white text-2xl">Dynamic Programming</h3>
                      </div>
                      <div className="bg-accent-neon/20 px-3 py-1 rounded text-accent-neon text-sm font-bold">75% Done</div>
                    </div>
                    <p className="text-white/70 text-base mb-6">Optimization & Subproblems: Mastering memoization and tabular approaches.</p>
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-xs font-bold text-white/50 mb-1">
                        <span>7/10 LESSONS COMPLETED</span>
                        <span>3 LEFT</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-accent-neon" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-[12px] text-white/40 font-medium">
                        <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 12 hrs total</div>
                        <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">bar_chart</span> Medium-Hard</div>
                      </div>
                      <button className="bg-accent-neon text-background-dark px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                        <span>Resume Learning</span>
                        <span className="material-symbols-outlined text-[18px]">trending_flat</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 4: Locked */}
              <div className="relative grid grid-cols-[80px_1fr] group opacity-60 grayscale-[0.5]">
                <div className="flex flex-col items-center">
                  <div className="z-10 bg-white/10 size-10 rounded-full flex items-center justify-center text-white/40 border border-white/20">
                    <span className="material-symbols-outlined text-[20px]">lock</span>
                  </div>
                  <div className="w-1 dashed-line h-24"></div>
                </div>
                <div className="pb-12 pt-1">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-white/80 text-lg">Trees & Heaps</h3>
                      <span className="text-[10px] font-bold text-white/30 border border-white/10 px-2 py-0.5 rounded uppercase">Locked</span>
                    </div>
                    <p className="text-white/40 text-sm mb-4">Recursive tree traversals, BST properties, and binary heaps.</p>
                    <div className="flex items-center gap-4 text-[11px] text-white/30 font-medium">
                      <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">lock_clock</span> Prerequisite: DP</div>
                      <div className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 12 hrs</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 5: Locked */}
              <div className="relative grid grid-cols-[80px_1fr] group opacity-40 grayscale">
                <div className="flex flex-col items-center">
                  <div className="z-10 bg-white/10 size-10 rounded-full flex items-center justify-center text-white/40 border border-white/20">
                    <span className="material-symbols-outlined text-[20px]">lock</span>
                  </div>
                </div>
                <div className="pb-12 pt-1">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                    <h3 className="font-bold text-white/80 text-lg">Graph Theory</h3>
                    <p className="text-white/40 text-sm">Traversals, Shortest Paths, and Network Flow algorithms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Skill Mastery Radar */}
            <div className="bg-card-dark border border-accent-neon/30 p-6 rounded-2xl glass neon-glow">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h4 className="font-bold text-lg text-white">Skill Mastery Radar</h4>
                  <p className="text-[11px] text-white/50 uppercase tracking-wider">Top Quadrant Analysis</p>
                </div>
                <span className="material-symbols-outlined text-accent-neon text-3xl">radar</span>
              </div>
              <div className="relative w-full aspect-square flex items-center justify-center mb-10">
                <svg className="w-full h-full p-2" viewBox="0 0 200 200">
                  <polygon fill="none" points="100,20 176,75 147,165 53,165 24,75" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></polygon>
                  <polygon fill="none" points="100,60 138,87 123,132 77,132 62,87" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></polygon>
                  <line stroke="rgba(255,255,255,0.1)" strokeDasharray="2" strokeWidth="1" x1="100" x2="100" y1="100" y2="20"></line>
                  <line stroke="rgba(255,255,255,0.1)" strokeDasharray="2" strokeWidth="1" x1="100" x2="176" y1="100" y2="75"></line>
                  <line stroke="rgba(255,255,255,0.1)" strokeDasharray="2" strokeWidth="1" x1="100" x2="147" y1="100" y2="165"></line>
                  <line stroke="rgba(255,255,255,0.1)" strokeDasharray="2" strokeWidth="1" x1="100" x2="53" y1="100" y2="165"></line>
                  <line stroke="rgba(255,255,255,0.1)" strokeDasharray="2" strokeWidth="1" x1="100" x2="24" y1="100" y2="75"></line>
                  <polygon fill="rgba(0, 255, 102, 0.25)" points="100,28 164,79 114,119 79,129 43,81" stroke="#00FF66" strokeWidth="2"></polygon>
                  <circle cx="100" cy="28" fill="#00FF66" r="3"></circle>
                  <circle cx="164" cy="79" fill="#00FF66" r="3"></circle>
                  <circle cx="114" cy="119" fill="#00FF66" r="3"></circle>
                  <circle cx="79" cy="129" fill="#00FF66" r="3"></circle>
                  <circle cx="43" cy="81" fill="#00FF66" r="3"></circle>
                </svg>
                <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white/70 uppercase">Arrays</span>
                <span className="absolute top-[30%] -right-4 text-[10px] font-bold text-white/70 uppercase rotate-12">Sorting</span>
                <span className="absolute bottom-0 right-4 text-[10px] font-bold text-white/70 uppercase">Graphs</span>
                <span className="absolute bottom-0 left-4 text-[10px] font-bold text-white/70 uppercase">Trees</span>
                <span className="absolute top-[30%] -left-2 text-[10px] font-bold text-white/70 uppercase -rotate-12">DP</span>
              </div>
              <div>
                <p className="text-xs font-bold text-accent-neon mb-4 uppercase tracking-tighter flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-neon rounded-full"></span>
                  Proficiency Stats
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  <div className="flex justify-between items-center border-b border-white/5 pb-1">
                    <span className="text-[11px] text-white/50">Arrays</span>
                    <span className="text-xs font-bold text-white">92%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-1">
                    <span className="text-[11px] text-white/50">Sorting</span>
                    <span className="text-xs font-bold text-white">85%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-1">
                    <span className="text-[11px] text-white/50">Graphs</span>
                    <span className="text-xs font-bold text-white">12%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-1">
                    <span className="text-[11px] text-white/50">Trees</span>
                    <span className="text-xs font-bold text-white">45%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-1">
                    <span className="text-[11px] text-white/50">DP</span>
                    <span className="text-xs font-bold text-white">75%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-1">
                    <span className="text-[11px] text-white/50">Overall</span>
                    <span className="text-xs font-bold text-accent-neon">62%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Standing */}
            <div className="bg-card-dark border border-white/10 p-6 rounded-2xl">
              <h4 className="font-bold text-lg mb-4 text-white">Current Standing</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-orange-500/20 text-orange-500 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">local_fire_department</span>
                    </div>
                    <p className="text-sm font-medium text-white/70">Current Streak</p>
                  </div>
                  <p className="text-lg font-bold">12 Days</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-blue-500/20 text-blue-500 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                    </div>
                    <p className="text-sm font-medium text-white/70">Rank</p>
                  </div>
                  <p className="text-lg font-bold">#4,231</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-accent-neon/20 text-accent-neon flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">code</span>
                    </div>
                    <p className="text-sm font-medium text-white/70">Solved</p>
                  </div>
                  <p className="text-lg font-bold">142 Problems</p>
                </div>
              </div>
            </div>

            {/* Achievement */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-4">
              <div className="size-10 bg-accent-neon/10 rounded-full flex items-center justify-center text-accent-neon">
                <span className="material-symbols-outlined">emoji_events</span>
              </div>
              <div>
                <p className="text-sm font-bold">Recursion Wizard</p>
                <p className="text-[11px] text-white/50">Solved 5 Hard recursion problems</p>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-accent-neon/5 blur-[120px] rounded-full pointer-events-none -mr-48 -mb-48"></div>
      </main>
    </div>
  )
}

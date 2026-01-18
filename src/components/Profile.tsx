import { Sidebar } from "./Sidebar"

export function Profile() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <Sidebar />
      <main className="flex-1 overflow-y-auto relative bg-background-light dark:bg-background-dark">
        <header className="sticky top-0 z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-border-dark gap-4">
          <div className="relative w-full md:w-96 max-w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-accent-neon transition-all" placeholder="Search algorithms..." type="text" />
          </div>
          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-accent-neon rounded-full"></span>
            </button>
          </div>
        </header>

        <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-white dark:bg-surface-dark p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-border-dark shadow-sm">
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-accent-neon p-1 bg-background-light dark:bg-background-dark">
                <img alt="Alex Chen's Portrait" className="w-full h-full rounded-full object-cover bg-slate-100 dark:bg-slate-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYSLLXjIjCwgpVVQ_HDpI6uj8HAr4-J_Lz2Q6awUzsCMZpOKu-XLRqmj7A96ZmDnSi1j6IxS6rsHNCqFGbgmvuwGc8Mf_65lkxAKvDagohKkb0VIXjKrKG4HWUKW6SnkrEAfNdfgcDlQNJnfAjptVtM7ov_MFF_k-UhItAsfccxCj9CihKEMRiRxgjiOeZUcH6QVb_UWe3dlHmMn9fi15a0gjbx5NZP8XiB01FvnldoYGYK3uL9O1gka481rufB6U2G9ZeOwjsYK0" />
              </div>
              <div className="absolute -bottom-2 right-0 bg-accent-neon text-black px-2 py-0.5 rounded text-[10px] font-black uppercase shadow-lg">
                Pro
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-1">Alex Chen</h2>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <span className="text-accent-neon font-mono text-[10px] md:text-sm tracking-widest font-bold uppercase tracking-widest">LVL 42 ALGORITHMIST</span>
                <span className="hidden sm:inline w-1 h-1 bg-slate-400 rounded-full"></span>
                <span className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">Joined Oct 2023</span>
                <span className="hidden sm:inline w-1 h-1 bg-slate-400 rounded-full"></span>
                <div className="flex items-center gap-1 text-orange-500 font-bold text-xs md:text-sm">
                  <span className="material-symbols-outlined text-sm">bolt</span>
                  <span>12 Day Streak</span>
                </div>
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl text-xs md:text-sm leading-relaxed">
                Passionate software engineer specializing in complex distributed systems and algorithm optimization. Currently mastering Dynamic Programming and Graph Theory.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <button className="flex-1 md:flex-none px-6 py-2.5 bg-accent-neon text-black font-bold rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">edit</span>
                Edit Profile
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-surface-dark p-4 md:p-6 rounded-xl border border-slate-200 dark:border-border-dark flex items-center gap-3 md:gap-4 group hover:border-accent-neon/50 transition-colors">
              <div className="size-10 md:size-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 shrink-0">
                <span className="material-symbols-outlined text-xl md:text-2xl">visibility</span>
              </div>
              <div>
                <p className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Views</p>
                <p className="text-lg md:text-2xl font-black">248</p>
              </div>
            </div>
            <div className="bg-white dark:bg-surface-dark p-4 md:p-6 rounded-xl border border-slate-200 dark:border-border-dark flex items-center gap-3 md:gap-4 group hover:border-accent-neon/50 transition-colors">
              <div className="size-10 md:size-12 bg-accent-neon/10 rounded-lg flex items-center justify-center text-accent-neon shrink-0">
                <span className="material-symbols-outlined text-xl md:text-2xl">check_circle</span>
              </div>
              <div>
                <p className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Solved</p>
                <p className="text-lg md:text-2xl font-black">156</p>
              </div>
            </div>
            <div className="bg-white dark:bg-surface-dark p-4 md:p-6 rounded-xl border border-slate-200 dark:border-border-dark flex items-center gap-3 md:gap-4 group hover:border-accent-neon/50 transition-colors">
              <div className="size-10 md:size-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 shrink-0">
                <span className="material-symbols-outlined text-xl md:text-2xl">local_fire_department</span>
              </div>
              <div>
                <p className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Streak</p>
                <p className="text-lg md:text-2xl font-black">12d</p>
              </div>
            </div>
            <div className="bg-white dark:bg-surface-dark p-4 md:p-6 rounded-xl border border-slate-200 dark:border-border-dark flex items-center gap-3 md:gap-4 group hover:border-accent-neon/50 transition-colors">
              <div className="size-10 md:size-12 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-500 shrink-0">
                <span className="material-symbols-outlined text-xl md:text-2xl">trophy</span>
              </div>
              <div>
                <p className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Rank</p>
                <p className="text-lg md:text-2xl font-black">#1.4k</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              <section className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-border-dark">
                <h3 className="text-base md:text-lg font-bold mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-accent-neon">analytics</span>
                  Learning Progress
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                  <ProgressCircle percentage={75} label="Sorting" detail="12/16 Mastered" />
                  <ProgressCircle percentage={40} label="Graphs" detail="8/20 Mastered" />
                  <ProgressCircle percentage={92} label="DP" detail="23/25 Mastered" />
                </div>
              </section>
              <section className="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-200 dark:border-border-dark">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-base md:text-lg font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent-neon">stars</span>
                    Achievements
                  </h3>
                  <button className="text-xs md:text-sm text-accent-neon hover:underline font-bold">View All</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Achievement icon="psychology" title="DP Master" detail="20 DP problems" color="accent-neon" />
                  <Achievement icon="fireplace" title="Warrior" detail="10-day streak" color="orange-500" />
                  <Achievement icon="account_tree" title="Path Finder" detail="Mastered Graph" color="blue-500" />
                  <Achievement icon="lock" title="Speed" detail="Locked" color="slate-400" locked />
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <div className="bg-white dark:bg-surface-dark rounded-2xl border border-slate-200 dark:border-border-dark overflow-hidden sticky top-24">
                <div className="flex border-b border-slate-200 dark:border-border-dark">
                  <button className="flex-1 py-3 text-xs md:text-sm font-bold text-accent-neon border-b-2 border-accent-neon">General</button>
                  <button className="flex-1 py-3 text-xs md:text-sm font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Security</button>
                  <button className="flex-1 py-3 text-xs md:text-sm font-bold text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Alerts</button>
                </div>
                <div className="p-4 md:p-6 space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">Display Name</label>
                    <input className="w-full px-4 py-2.5 bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg text-xs md:text-sm focus:ring-1 focus:ring-accent-neon outline-none transition-all" type="text" defaultValue="Alex Chen" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">Primary Focus</label>
                    <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg text-xs md:text-sm focus:ring-1 focus:ring-accent-neon outline-none transition-all">
                      <option>Full Stack Engineering</option>
                      <option>Competitive Programming</option>
                      <option>Interview Prep</option>
                      <option>Academic Research</option>
                    </select>
                  </div>
                  <Toggle label="Public Profile" sublabel="Others can view progress" enabled />
                  <Toggle label="Show Rank" sublabel="Display position" enabled />
                  <div className="pt-2 flex flex-col gap-3">
                    <button className="w-full py-2.5 bg-accent-neon text-black font-bold rounded-lg hover:brightness-110 transition-all text-sm">Save Changes</button>
                    <button className="w-full py-2.5 bg-transparent text-red-500 border border-red-500/20 font-bold rounded-lg hover:bg-red-500/10 transition-all text-sm">Deactivate Account</button>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-accent-neon/20 to-transparent p-6 rounded-2xl border border-accent-neon/20 flex items-center justify-between overflow-hidden relative">
                <div className="z-10">
                  <p className="text-[10px] font-black uppercase text-accent-neon tracking-widest mb-1">Current Quest</p>
                  <h4 className="font-bold text-lg mb-2">7 Days to Elite</h4>
                  <div className="w-32 h-2 bg-black/20 dark:bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[60%] h-full bg-accent-neon"></div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-6xl text-accent-neon/10 absolute -right-2 -bottom-2 transform rotate-12 scale-150">military_tech</span>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}

function ProgressCircle({ percentage, label, detail }: { percentage: number, label: string, detail: string }) {
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle className="text-slate-200 dark:text-slate-800" cx="50" cy="50" fill="transparent" r={radius} stroke="currentColor" strokeWidth="8"></circle>
          <circle className="text-accent-neon" cx="50" cy="50" fill="transparent" r={radius} stroke="currentColor" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" strokeWidth="8"></circle>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-black">{percentage}%</span>
        </div>
      </div>
      <div>
        <p className="font-bold">{label}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{detail}</p>
      </div>
    </div>
  )
}

function Achievement({ icon, title, detail, color, locked }: { icon: string, title: string, detail: string, color: string, locked?: boolean }) {
  return (
    <div className="p-4 bg-slate-50 dark:bg-background-dark/50 rounded-xl border border-slate-200 dark:border-border-dark text-center group hover:-translate-y-1 transition-all">
      <div className={`w-16 h-16 mx-auto mb-3 flex items-center justify-center rounded-full border-2 ${locked ? 'bg-slate-200 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-400' : `bg-${color}/20 border-${color}/50 text-${color} shadow-[0_0_15px_rgba(0,255,106,0.15)]`}`}>
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <p className="text-sm font-bold truncate">{title}</p>
      <p className="text-[10px] text-slate-500 dark:text-slate-400">{detail}</p>
    </div>
  )
}

function Toggle({ label, sublabel, enabled }: { label: string, sublabel: string, enabled?: boolean }) {
  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="text-sm font-bold">{label}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{sublabel}</p>
      </div>
      <div className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors ${enabled ? 'bg-accent-neon' : 'bg-slate-200 dark:bg-slate-800'}`}>
        <span className={`inline-block h-4 w-4 rounded-full bg-black transition transform ${enabled ? 'translate-x-6' : 'translate-x-1'}`}></span>
      </div>
    </div>
  )
}

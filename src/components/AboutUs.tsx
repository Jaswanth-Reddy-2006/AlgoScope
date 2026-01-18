import { Sidebar } from "./Sidebar"

export function AboutUs() {
  const team = [
    { name: "R Jaswanth Reddy", role: "Backend Developer", icon: "database" },
    { name: "N Abhinav", role: "Frontend Designer (UI/UX)", icon: "palette" },
    { name: "Mamatha", role: "Pitcher & Documentation", icon: "present_to_all" },
    { name: "Naresh", role: "Frontend Research", icon: "travel_explore" }
  ]

  return (
    <div className="flex h-screen overflow-hidden bg-background-dark font-display text-white premium-gradient">
      <Sidebar />
      <main className="flex-1 overflow-y-auto selection:bg-accent-neon/30 custom-scrollbar">
        <header className="min-h-[72px] py-4 flex flex-col md:flex-row items-center justify-between px-6 md:px-8 border-b border-white/[0.03] sticky top-0 bg-[#0a0a0a]/60 backdrop-blur-xl z-20 gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="w-10 h-10 rounded-xl bg-accent-neon/10 flex items-center justify-center border border-accent-neon/20 shadow-glow shrink-0">
              <span className="material-symbols-outlined text-accent-neon">info</span>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-black text-white tracking-tight">About DSA Viz</h2>
              <p className="text-[9px] md:text-[10px] text-slate-500 font-black uppercase tracking-widest line-clamp-1">Platform Intelligence • v1.0.4</p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-neon animate-pulse"></span>
              <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Active nodes: 1,402</span>
            </div>
          </div>
        </header>

        <div className="p-8 md:p-12 max-w-7xl mx-auto w-full space-y-24">
          <section className="relative">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent-neon/5 blur-[120px] rounded-full"></div>
            <div className="relative z-10 text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-accent-neon/10 border border-accent-neon/20 text-accent-neon text-[10px] font-black uppercase tracking-[0.2em] mb-6">Our Mission</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9] text-white">
                Demystifying <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-neon to-emerald-400">Complex Logic</span><br />
                Step by Step.
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-medium">
                We believe that every algorithm has a story. Our platform is dedicated to telling those stories through interactive, high-fidelity visualizations.
              </p>
            </div>
          </section>

          <section>
            <div className="glass-card rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden border border-white/5 shadow-2xl">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-neon/5 blur-[150px] rounded-full -mr-32 -mt-32"></div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-white tracking-tight">The Genesis</h3>
                    <p className="text-slate-400 leading-relaxed text-lg font-medium">
                      DSA Viz was born out of a desire for clarity. We found that static diagrams in textbooks couldn't capture the dynamic elegance of a balanced AVL tree or the rhythmic flow of Merge Sort.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-8 py-4">
                    <div>
                      <div className="text-4xl font-black text-accent-neon mb-1">50+</div>
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Algorithms</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black text-white mb-1">100k+</div>
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Visual Steps</div>
                    </div>
                  </div>
                  <button className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-sm font-black uppercase tracking-widest transition-all group">
                    View Project Roadmap
                    <span className="material-symbols-outlined text-accent-neon group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                </div>
                <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-white/10 group">
                  <img alt="Algorithm visualization concept" className="object-cover w-full h-full opacity-40 group-hover:scale-110 transition-transform duration-1000" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 pr-10">
                    <div className="w-12 h-1 bg-accent-neon mb-6"></div>
                    <p className="text-white font-black text-2xl md:text-3xl italic leading-tight tracking-tighter">
                      "Complexity is the enemy of execution. Clarity is its catalyst."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-[1px] w-12 bg-accent-neon/30"></div>
              <h4 className="text-[12px] font-black text-slate-500 uppercase tracking-[0.4em]">Strategic Values</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ValueCard icon="lightbulb" title="Clarity First" desc="Breaking down the most complex dynamic programming problems into digestible, visual steps." />
              <ValueCard icon="gesture" title="Deep Interaction" desc="Manipulate inputs, change constraints, and see the algorithms adapt in real-time." />
              <ValueCard icon="psychology" title="Mastery" desc="Providing the tools not just to pass the interview, but to truly master the science of computation." />
            </div>
          </section>

          <section className="pb-32">
            <div className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-12 bg-accent-neon/30"></div>
                <h4 className="text-[12px] font-black text-slate-500 uppercase tracking-[0.4em]">The Core Team</h4>
              </div>
              <button className="text-[10px] font-black text-accent-neon uppercase tracking-widest hover:underline">Join our community</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {team.map((member) => (
                <div key={member.name} className="group relative">
                  <div className="absolute inset-0 bg-accent-neon/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative space-y-6">
                    <div className="aspect-square rounded-[2rem] bg-white/[0.02] border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:border-accent-neon/30 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="material-symbols-outlined text-6xl text-white/10 group-hover:text-accent-neon transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">{member.icon}</span>
                    </div>
                    <div className="text-center md:text-left px-2">
                      <h6 className="font-black text-xl text-white group-hover:text-accent-neon transition-colors tracking-tight">{member.name}</h6>
                      <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mt-1.5">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

function ValueCard({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="glass-card p-8 rounded-2xl text-center group transition-all hover:border-accent-neon/30 border border-white/5">
      <div className="size-16 mx-auto rounded-full bg-accent-neon/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(56,224,123,0.1)]">
        <span className="material-symbols-outlined text-accent-neon text-4xl">{icon}</span>
      </div>
      <h5 className="text-xl font-bold mb-3">{title}</h5>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

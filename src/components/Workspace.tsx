import { useParams, useNavigate } from "react-router-dom"
import { problems } from "../data/problems"
import { VisualizerPanel } from "./VisualizerPanel"
import { useState } from "react"

export function Workspace() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [showVisualizer, setShowVisualizer] = useState(true)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const problem = problems.find(p => p.slug === slug)

  if (!problem) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-background-dark text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Problem Not Found</h1>
        <p className="text-slate-400 mb-8">The problem you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/practice')}
          className="px-6 py-2 bg-accent-neon text-black rounded-lg font-bold"
        >
          Back to Practice
        </button>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-background-dark text-slate-100 font-sans selection:bg-accent-neon selection:text-black overflow-hidden">
      <aside className="w-16 flex-shrink-0 border-r border-border-dark flex flex-col bg-background-dark items-center py-6 space-y-8">
        <div className="w-10 h-10 bg-accent-neon rounded-xl flex items-center justify-center neon-glow">
          <span className="material-symbols-outlined text-black font-bold">query_stats</span>
        </div>
        <nav className="flex-1 flex flex-col space-y-4">
          <button onClick={() => navigate('/dashboard')} className="p-3 rounded-xl text-slate-500 hover:bg-surface-dark hover:text-accent-neon transition-all">
            <span className="material-symbols-outlined">dashboard</span>
          </button>
          <button onClick={() => navigate('/visualizer')} className="p-3 rounded-xl text-slate-500 hover:bg-surface-dark hover:text-accent-neon transition-all">
            <span className="material-symbols-outlined">play_circle</span>
          </button>
          <button onClick={() => navigate('/practice')} className="p-3 rounded-xl bg-accent-neon/10 text-accent-neon border border-accent-neon/20 transition-all">
            <span className="material-symbols-outlined">terminal</span>
          </button>
          <button onClick={() => navigate('/roadmap')} className="p-3 rounded-xl text-slate-500 hover:bg-surface-dark hover:text-accent-neon transition-all">
            <span className="material-symbols-outlined">map</span>
          </button>
        </nav>
        <div className="mt-auto px-2 relative">
          {isProfileOpen && (
            <div className="absolute bottom-0 left-16 mb-2 w-72 bg-surface-dark border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-left-2 duration-200">
              <div
                onClick={() => navigate('/profile')}
                className="p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border-2 border-accent-neon p-0.5 group-hover:scale-105 transition-transform">
                    <img alt="Profile" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1FKTNY-hANOxsKvvrfQ8MKR7mZ_6zjPYkfuNi1jw-zoq6NGSxQ0OXSPOtqvLyeXF7DcvU_3uQ_cJ4QUb1ji9R9JSQy8-UbfKoqUkBiAmJoKea3WXaCFDppHNYMNsyQnUxMvCtgLGUnTEHTDLAJ1lWeTfw_3L2XkjuyKIi3GFeHcUrRiYjI1EZmAH-9TlF-cVqI4OKVw21D7iQD7E4mTlX0pAa5h48MSjX5wDSwvu_-CNM7WkIXbFoDKYLBQbtUlyCFDSjjIeBt77s" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-accent-neon transition-colors">Jaswanth_Reddy_2006</div>
                    <div className="text-[10px] text-slate-500 font-medium">View Profile</div>
                  </div>
                </div>
              </div>

              <div className="px-2 py-2 space-y-1">
                <ProfileMenuItem onClick={() => navigate('/profile')} icon="settings" label="Settings" />
                <ProfileMenuItem icon="dark_mode" label="Appearance" hasChevron />
                <div className="h-px bg-white/5 mx-2 my-1" />
                <ProfileMenuItem onClick={() => navigate('/about')} icon="info" label="About Us" />
                <ProfileMenuItem onClick={() => navigate('/contact')} icon="contact_support" label="Contact Us" />
                <div className="h-px bg-white/5 mx-2 my-1" />
                <ProfileMenuItem icon="logout" label="Sign Out" />
              </div>
            </div>
          )}
          <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="focus:outline-none">
            <img alt="Profile" className={`w-10 h-10 rounded-lg bg-slate-800 border transition-all ${isProfileOpen ? 'border-accent-neon scale-110 shadow-[0_0_10px_rgba(0,255,102,0.3)]' : 'border-border-dark hover:border-white/20'}`} src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1FKTNY-hANOxsKvvrfQ8MKR7mZ_6zjPYkfuNi1jw-zoq6NGSxQ0OXSPOtqvLyeXF7DcvU_3uQ_cJ4QUb1ji9R9JSQy8-UbfKoqUkBiAmJoKea3WXaCFDppHNYMNsyQnUxMvCtgLGUnTEHTDLAJ1lWeTfw_3L2XkjuyKIi3GFeHcUrRiYjI1EZmAH-9TlF-cVqI4OKVw21D7iQD7E4mTlX0pAa5h48MSjX5wDSwvu_-CNM7WkIXbFoDKYLBQbtUlyCFDSjjIeBt77s" />
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-14 border-b border-border-dark flex items-center justify-between px-6 bg-background-dark/50 backdrop-blur-md">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm text-slate-400">
              <span className="cursor-pointer hover:text-white transition-colors" onClick={() => navigate('/practice')}>Problems</span>
              <span className="material-symbols-outlined text-sm mx-2">chevron_right</span>
              <span className="text-white font-semibold">{problem.id}. {problem.title}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-border-dark hover:bg-surface-dark text-xs font-medium text-slate-300 transition-colors">
              <span className="material-symbols-outlined text-sm">history</span>
              <span>Submissions</span>
            </button>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          <div className={`${showVisualizer ? 'w-1/3' : 'w-1/2'} border-r border-border-dark flex flex-col bg-surface-dark/30 transition-all`}>
            <div className="flex items-center space-x-1 p-2 bg-background-dark/40 border-b border-border-dark">
              <button className="px-4 py-1.5 text-xs font-medium text-accent-neon bg-accent-neon/5 rounded-md border border-accent-neon/20">Description</button>
              <button className="px-4 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-300">Solutions</button>
              <button className="px-4 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-300">Editorial</button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 prose prose-invert prose-sm max-w-none">
              <div className="flex items-center space-x-3 mb-4">
                <h1 className="text-xl font-bold m-0">{problem.id}. {problem.title}</h1>
                <span className={`px-2 py-0.5 rounded ${problem.diffClass === 'difficulty-easy' ? 'bg-emerald-500/10 text-emerald-500' : problem.diffClass === 'difficulty-medium' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-red-500/10 text-red-500'} text-[10px] font-bold uppercase tracking-wider`}>
                  {problem.difficulty}
                </span>
              </div>
              <div className="text-slate-300 leading-relaxed space-y-4">
                {problem.description.split('\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="mt-8 space-y-6">
                {problem.examples.map((ex, i) => (
                  <div key={i}>
                    <h4 className="text-white text-sm font-bold mb-3 uppercase tracking-tighter text-[11px]">Example {i + 1}:</h4>
                    <div className="glass-panel rounded-xl p-4 font-mono text-sm border-white/5 space-y-1">
                      <div><span className="text-slate-500">Input:</span> {ex.input}</div>
                      <div><span className="text-slate-500">Output:</span> {ex.output}</div>
                      {ex.explanation && <div><span className="text-slate-500">Explanation:</span> {ex.explanation}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`${showVisualizer ? 'w-1/3' : 'w-1/2'} flex flex-col bg-background-dark transition-all`}>
            <div className="h-10 flex items-center justify-between px-4 bg-background-dark border-b border-border-dark">
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-2 px-3 py-1 bg-surface-dark rounded border border-border-dark text-[11px] font-medium text-slate-300">
                  <span className="material-symbols-outlined text-sm text-yellow-500">terminal</span>
                  <span>Python 3</span>
                  <span className="material-symbols-outlined text-xs">expand_more</span>
                </button>
              </div>
              <div className="flex items-center space-x-3 text-slate-500">
                <button
                  onClick={() => setShowVisualizer(!showVisualizer)}
                  className={`material-symbols-outlined text-lg cursor-pointer transition-colors ${showVisualizer ? 'text-accent-neon' : 'hover:text-white'}`}
                >
                  {showVisualizer ? 'visibility' : 'visibility_off'}
                </button>
                <span className="material-symbols-outlined text-lg cursor-pointer hover:text-white">auto_fix</span>
                <span className="material-symbols-outlined text-lg cursor-pointer hover:text-white">content_copy</span>
              </div>
            </div>
            <div className="flex-1 overflow-auto font-mono text-sm leading-relaxed p-6">
              <div className="flex">
                <div className="w-10 flex-shrink-0 text-right pr-4 text-slate-600 select-none text-xs leading-6">
                  {Array.from({ length: 15 }, (_, i) => i + 1).map(n => <div key={n}>{n}</div>)}
                </div>
                <div className="flex-1 whitespace-pre text-slate-300">
                  {problem.starterCode}
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-border-dark bg-background-dark/80 backdrop-blur-sm flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white transition-colors flex items-center space-x-2">
                  <span className="material-symbols-outlined text-lg">terminal</span>
                  <span>Console</span>
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-5 py-2 text-xs font-bold bg-surface-dark border border-border-dark rounded-lg hover:bg-slate-800 transition-all">
                  Run Code
                </button>
                <button className="px-6 py-2 text-xs font-bold bg-accent-neon text-black rounded-lg neon-glow hover:opacity-90 transition-all">
                  Submit
                </button>
              </div>
            </div>
          </div>

          {showVisualizer && (
            <div className="w-1/3 border-l border-border-dark transition-all">
              <VisualizerPanel />
            </div>
          )}
        </div>

        <footer className="h-8 border-t border-border-dark flex items-center px-4 bg-background-dark justify-between text-[10px] font-medium text-slate-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-neon/50"></span>
              <span>Auto-save enabled</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>UTF-8</span>
            <span>Tab Size: 4</span>
          </div>
        </footer>
      </main>
    </div>
  )
}

function ProfileMenuItem({ icon, label, hasChevron, onClick }: { icon: string, label: string, hasChevron?: boolean, onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 transition-colors group"
    >
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-[20px] text-slate-500 group-hover:text-accent-neon transition-colors">{icon}</span>
        <span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors">{label}</span>
      </div>
      {hasChevron && <span className="material-symbols-outlined text-sm text-slate-600">chevron_right</span>}
    </button>
  )
}

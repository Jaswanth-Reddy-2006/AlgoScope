import { Link, useLocation, useNavigate } from "react-router-dom"
import { useState } from "react"

export function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()
  const activePath = location.pathname
  const [isOpen, setIsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  const mainNavPaths = ['/dashboard', '/visualizer', '/practice', '/roadmap']
  const showLabels = mainNavPaths.includes(activePath)

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: '/visualizer', label: 'Visualizer', icon: 'play_circle' },
    { path: '/practice', label: 'Practice', icon: 'terminal' },
    { path: '/roadmap', label: 'Roadmap', icon: 'map' },
  ]

  const isActive = (path: string) => {
    if (path === '/practice' && activePath.startsWith('/practice')) return true
    return activePath === path
  }

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-background-dark border border-white/10 rounded-lg text-white"
      >
        <span className="material-symbols-outlined">
          {isOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed lg:static inset-y-0 left-0 ${showLabels ? 'w-48' : 'w-20'} flex-shrink-0 border-r border-slate-200 dark:border-border-dark 
        flex flex-col h-screen bg-white dark:bg-background-dark z-40 transition-all duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="py-8 flex flex-col items-center">
          <div className="w-12 h-12 bg-accent-neon rounded-2xl flex items-center justify-center shadow-lg shadow-accent-neon/30 hover:scale-110 transition-transform cursor-pointer">
            <span className="material-symbols-outlined text-black text-2xl font-black">account_tree</span>
          </div>
        </div>

        <nav className="flex-1 flex flex-col items-center gap-4 py-8">
          {navItems.map((item) => {
            const active = isActive(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`relative ${showLabels ? 'h-12 px-4 flex items-center justify-start gap-3 rounded-2xl' : 'size-12 flex items-center justify-center rounded-2xl'} transition-all group ${active
                  ? 'bg-accent-neon/10 text-accent-neon'
                  : 'text-slate-500 dark:text-slate-600 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
              >
                <span className={`material-symbols-outlined ${showLabels ? 'text-xl' : 'text-2xl'} ${active ? 'fill-current' : ''}`}>
                  {item.icon}
                </span>
                {showLabels && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}

                {!showLabels && (
                  <div className="absolute left-full ml-4 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap shadow-2xl border border-white/10">
                    {item.label}
                  </div>
                )}

                {active && (
                  <div className={`absolute ${showLabels ? 'left-2' : 'left-0'} w-1 h-6 bg-accent-neon rounded-full shadow-[0_0_10px_rgba(0,255,102,1)]`}></div>
                )}
              </Link>
            )
          })}
        </nav>

        <div className="py-8 mt-auto flex flex-col items-center gap-6 border-t border-slate-200 dark:border-border-dark relative">
          {isProfileOpen && (
            <div className="absolute bottom-full left-4 mb-2 w-64 bg-surface-dark border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
              <div
                onClick={() => { navigate('/profile'); setIsProfileOpen(false); }}
                className="p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-accent-neon p-0.5 group-hover:scale-105 transition-transform">
                    <img alt="Profile" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1FKTNY-hANOxsKvvrfQ8MKR7mZ_6zjPYkfuNi1jw-zoq6NGSxQ0OXSPOtqvLyeXF7DcvU_3uQ_cJ4QUb1ji9R9JSQy8-UbfKoqUkBiAmJoKea3WXaCFDppHNYMNsyQnUxMvCtgLGUnTEHTDLAJ1lWeTfw_3L2XkjuyKIi3GFeHcUrRiYjI1EZmAH-9TlF-cVqI4OKVw21D7iQD7E4mTlX0pAa5h48MSjX5wDSwvu_-CNM7WkIXbFoDKYLBQbtUlyCFDSjjIeBt77s" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-accent-neon transition-colors">Jaswanth_Reddy</div>
                    <div className="text-[9px] text-slate-500 font-medium">View Profile</div>
                  </div>
                </div>
              </div>

              <div className="px-2 py-2 space-y-1">
                <ProfileMenuItem onClick={() => navigate('/profile')} icon="settings" label="Settings" />
                <ProfileMenuItem icon="dark_mode" label="Appearance" hasChevron />
                <ProfileMenuItem onClick={() => { navigate('/about'); setIsProfileOpen(false); }} icon="info" label="About Us" />
                <ProfileMenuItem onClick={() => { navigate('/contact'); setIsProfileOpen(false); }} icon="contact_support" label="Contact Us" />
                <div className="h-px bg-white/5 mx-2 my-1" />
                <ProfileMenuItem icon="logout" label="Sign Out" />
              </div>
            </div>
          )}

          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className={`size-12 rounded-2xl transition-all border border-transparent overflow-hidden ${isProfileOpen ? 'ring-2 ring-accent-neon ring-offset-2 ring-offset-background-dark' : 'hover:scale-110'}`}
          >
            <img
              alt="Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1FKTNY-hANOxsKvvrfQ8MKR7mZ_6zjPYkfuNi1jw-zoq6NGSxQ0OXSPOtqvLyeXF7DcvU_3uQ_cJ4QUb1ji9R9JSQy8-UbfKoqUkBiAmJoKea3WXaCFDppHNYMNsyQnUxMvCtgLGUnTEHTDLAJ1lWeTfw_3L2XkjuyKIi3GFeHcUrRiYjI1EZmAH-9TlF-cVqI4OKVw21D7iQD7E4mTlX0pAa5h48MSjX5wDSwvu_-CNM7WkIXbFoDKYLBQbtUlyCFDSjjIeBt77s"
            />
          </button>
        </div>
      </aside>
    </>
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


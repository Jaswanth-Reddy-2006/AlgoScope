import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    ChevronLeft,
    ChevronRight,
    LayoutDashboard,
    Play,
    Menu,
    X,
    CheckCircle2,
    Boxes,
    Brain,
    Layers
} from 'lucide-react'
import { cn } from '../../utils/cn'
import { useStore } from '../../store/useStore'

const Sidebar: React.FC = () => {
    const isSidebarCollapsed = useStore(state => state.isSidebarCollapsed)
    const setSidebarCollapsed = useStore(state => state.setSidebarCollapsed)
    const [isMobileOpen, setIsMobileOpen] = React.useState(false)
    const location = useLocation()

    // Auto-collapse logic
    React.useEffect(() => {
        if (location.pathname.startsWith('/problems/') && location.pathname !== '/problems') {
            setSidebarCollapsed(true)
        } else if (location.pathname === '/problems' || location.pathname === '/') {
            setSidebarCollapsed(false)
        }
    }, [location.pathname, setSidebarCollapsed])

    const NavItem = ({ to, icon: Icon, label, badge }: { to: string, icon: any, label: string, badge?: string }) => {
        const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

        return (
            <Link
                to={to}
                className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group relative overflow-hidden",
                    isActive
                        ? "bg-white/5 text-accent-blue shadow-inner"
                        : "text-white/30 hover:text-white hover:bg-white/[0.03]"
                )}
                onClick={() => setIsMobileOpen(false)}
            >
                <Icon size={20} className={cn(isActive ? "text-accent-blue" : "text-inherit")} />
                {!isSidebarCollapsed && (
                    <div className="flex-1 flex items-center justify-between overflow-hidden animate-in fade-in slide-in-from-left-2 duration-300">
                        <span className="text-sm font-semibold truncate">{label}</span>
                        {badge && (
                            <span className="text-[9px] font-bold bg-accent-blue/20 text-accent-blue px-1.5 py-0.5 rounded uppercase tracking-widest">
                                {badge}
                            </span>
                        )}
                    </div>
                )}
                {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-accent-blue rounded-r-full shadow-glow" />
                )}

                {isSidebarCollapsed && (
                    <div className="absolute left-full ml-4 px-3 py-2 bg-black/95 border border-white/10 rounded-lg text-[10px] font-bold tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-[100] whitespace-nowrap shadow-2xl">
                        {label}
                    </div>
                )}
            </Link>
        )
    }

    return (
        <>
            {/* Mobile Header Toggle */}
            <div className="lg:hidden fixed top-0 left-0 w-full h-20 px-8 flex items-center justify-between z-40 bg-background/80 backdrop-blur-xl border-b border-white/5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                        <Play size={20} className="text-accent-blue" />
                    </div>
                    <span className="font-bold tracking-tight text-lg">AlgoScope</span>
                </div>
                <button
                    onClick={() => setIsMobileOpen(true)}
                    className="p-3 bg-white/5 rounded-xl text-white/60 hover:text-white"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Backdrop for mobile */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 lg:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            <aside className={cn(
                "fixed inset-y-0 left-0 z-50 bg-background/50 backdrop-blur-2xl border-r border-white/5 flex flex-col transition-all duration-500 ease-in-out font-outfit",
                "lg:relative lg:z-0 lg:translate-x-0 h-screen",
                isSidebarCollapsed ? "w-24" : "w-80",
                isMobileOpen ? "translate-x-0 scale-100" : "-translate-x-full lg:translate-x-0"
            )}>
                {/* Header */}
                <div className="h-24 px-8 flex items-center justify-between border-b border-white/5 bg-background/20 backdrop-blur-md">
                    {!isSidebarCollapsed && (
                        <Link to="/" className="flex items-center gap-4 group animate-in fade-in duration-500">
                            <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center group-hover:shadow-glow transition-all duration-500">
                                <Play size={24} className="text-accent-blue" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold tracking-tight text-lg leading-tight uppercase tracking-widest">AlgoScope</span>
                                <span className="text-[10px] text-accent-blue/40 font-bold tracking-[0.2em] uppercase">Intelligence</span>
                            </div>
                        </Link>
                    )}
                    {isSidebarCollapsed && (
                        <Play size={28} className="text-accent-blue mx-auto" />
                    )}

                    <button
                        onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
                        className="hidden lg:flex p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/20 hover:text-white transition-all shadow-inner"
                    >
                        {isSidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                    </button>

                    <button
                        onClick={() => setIsMobileOpen(false)}
                        className="lg:hidden p-2 rounded-xl bg-white/5 text-white/40"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-8 custom-scrollbar flex flex-col gap-10">
                    {/* Main Nav */}
                    <div className="flex flex-col gap-1.5">
                        <NavItem
                            to="/"
                            icon={LayoutDashboard}
                            label="Neural Hub"
                            badge="Live"
                        />
                        <NavItem
                            to="/problems"
                            icon={Boxes}
                            label="Pattern Library"
                        />
                        <NavItem
                            to="/pattern-profile"
                            icon={Brain}
                            label="Pattern Profile"
                        />
                        <NavItem
                            to="/foundations"
                            icon={Layers}
                            label="Foundations Lab"
                            badge="New"
                        />
                    </div>
                </div>

                {/* Footer / Profile */}
                <div className="p-6 border-t border-white/5">
                    {!isSidebarCollapsed ? (
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 shadow-inner group cursor-pointer hover:bg-white/[0.05] transition-all animate-in fade-in duration-500">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-blue to-accent-purple p-[1px]">
                                <div className="w-full h-full rounded-xl bg-background flex items-center justify-center p-1 overflow-hidden">
                                    <div className="w-full h-full rounded-lg bg-gradient-to-tr from-accent-blue to-accent-purple opacity-80" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-white/90">Jaswanth R.</span>
                                <span className="text-[10px] text-white/30 font-medium">Architect</span>
                            </div>
                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                <CheckCircle2 size={16} className="text-accent-blue" />
                            </div>
                        </div>
                    ) : (
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-accent-blue to-accent-purple p-[1px] mx-auto shadow-premium group cursor-pointer">
                            <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center p-1">
                                <div className="w-full h-full rounded-xl bg-gradient-to-tr from-accent-blue to-accent-purple" />
                            </div>
                        </div>
                    )}
                </div>
            </aside>
        </>
    )
}

export default Sidebar

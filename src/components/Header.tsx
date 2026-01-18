import { ChevronDown, Code2, Play, Share2 } from "lucide-react"
import { useEditorStore } from "../store/useEditorStore"
import { problems } from "../data/problems"
import { generateSteps } from "../lib/stepGenerator"
import { useState } from "react"

export function Header() {
  const { activeProblem, setActiveProblem, setVisualizationSteps, setIsPlaying } = useEditorStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleRunCode = () => {
    if (!activeProblem) return;
    const steps = generateSteps(activeProblem.id);
    setVisualizationSteps(steps);
    setIsPlaying(true);
  };

  return (
    <header className="h-14 border-b border-slate-800 flex items-center justify-between px-4 bg-slate-900/50 backdrop-blur-sm z-50">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">AlgoScope</span>
        </div>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 transition-colors rounded-md px-3 py-1.5 border border-slate-700"
          >
            <span className="text-xs font-medium text-slate-400">Problem:</span>
            <span className="text-sm font-semibold">{activeProblem?.title || "Select Problem"}</span>
            <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-2 border-b border-slate-800 bg-slate-950/50">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-2">Select Algorithm</span>
              </div>
              <div className="py-1">
                {problems.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setActiveProblem(p.id);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between transition-colors
                      ${activeProblem?.id === p.id ? 'bg-indigo-600/10 text-indigo-400' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
                  >
                    <span>{p.title}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded uppercase font-bold
                      ${p.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'}`}>
                      {p.difficulty}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={handleRunCode}
          disabled={!activeProblem}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-1.5 rounded-md text-sm font-medium transition-all active:scale-95 shadow-lg shadow-emerald-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Play className="w-4 h-4 fill-current" />
          Run Code
        </button>

        <div className="h-6 w-px bg-slate-800" />

        <div className="flex items-center gap-1">
          <button className="p-2 hover:bg-slate-800 rounded-md transition-colors text-slate-400 hover:text-white">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  )
}

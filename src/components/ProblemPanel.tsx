import { BookOpen, Briefcase, HelpCircle, Lock, Unlock } from "lucide-react"
import { useEditorStore } from "../store/useEditorStore"

export function ProblemPanel() {
  const { activeProblem, unlockHint } = useEditorStore();

  if (!activeProblem) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-slate-900 border-r border-slate-800 text-slate-500">
        <p>Select a problem to view details</p>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col bg-slate-900 border-r border-slate-800 overflow-y-auto">
      <div className="p-4 border-b border-slate-800 flex items-center gap-2 sticky top-0 bg-slate-900 z-10">
        <BookOpen className="w-4 h-4 text-indigo-400" />
        <h2 className="font-semibold text-sm">Problem Description</h2>
      </div>

      <div className="p-6 space-y-8">
        <div>
          <h1 className="text-2xl font-bold mb-2">{activeProblem.title}</h1>
          <div className="flex gap-2 mb-4">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${activeProblem.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-500' :
              activeProblem.difficulty === 'Medium' ? 'bg-amber-500/10 text-amber-500' :
                'bg-rose-500/10 text-rose-500'
              }`}>
              {activeProblem.difficulty}
            </span>
            <span className="bg-slate-800 text-slate-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              {activeProblem.category}
            </span>
          </div>
          <div className="text-slate-300 leading-relaxed prose prose-invert prose-sm max-w-none">
            {activeProblem.description.split('`').map((part, i) =>
              i % 2 === 1 ? <code key={i} className="text-indigo-300 bg-slate-800 px-1 rounded">{part}</code> : part
            )}
          </div>
        </div>

        <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800">
          <div className="flex items-center gap-2 mb-3 text-indigo-400">
            <Briefcase className="w-4 h-4" />
            <h3 className="text-sm font-bold uppercase tracking-tight">Real-World Application</h3>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed italic">
            "{activeProblem.realWorldApp}"
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-slate-400">Examples:</h4>
          {activeProblem.examples.map((example, index) => (
            <div key={index} className="space-y-2">
              <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-sm">
                <div className="flex gap-2 mb-1">
                  <span className="text-slate-500 min-w-[60px]">Input:</span>
                  <span className="text-slate-300">{example.input}</span>
                </div>
                <div className="flex gap-2 mb-2">
                  <span className="text-slate-500 min-w-[60px]">Output:</span>
                  <span className="text-emerald-400">{example.output}</span>
                </div>
                {example.explanation && (
                  <div className="mt-2 pt-2 border-t border-slate-800 text-xs text-slate-500 italic">
                    <span className="font-semibold text-slate-400 not-italic">Explanation:</span> {example.explanation}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-slate-400">
            <HelpCircle className="w-4 h-4" />
            <h4 className="text-sm font-semibold">Progressive Hints</h4>
          </div>
          <div className="space-y-2">
            {activeProblem.hints?.map((hint, idx) => (
              <div key={hint.id} className="group">
                {hint.isUnlocked ? (
                  <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-lg p-3 text-sm text-slate-300 flex gap-3">
                    <Unlock className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <p>{hint.text}</p>
                  </div>
                ) : (
                  <button
                    onClick={() => unlockHint(hint.id)}
                    className="w-full bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-lg p-3 flex items-center justify-between text-sm transition-all group-hover:bg-slate-900/50"
                  >
                    <div className="flex items-center gap-3 text-slate-500">
                      <Lock className="w-4 h-4" />
                      <span>Unlock Hint {idx + 1}</span>
                    </div>
                    <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Reveal
                    </span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800">
          <h4 className="text-sm font-semibold text-slate-400 mb-3">Constraints:</h4>
          <ul className="space-y-2">
            {activeProblem.constraints?.map((constraint, i) => (
              <li key={i} className="flex items-start gap-3 text-xs text-slate-500">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mt-1.5 shrink-0" />
                <span className="font-mono">{constraint}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

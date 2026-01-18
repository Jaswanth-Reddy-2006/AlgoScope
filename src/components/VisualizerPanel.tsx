import { Info, ExternalLink } from "lucide-react"
import { useEditorStore } from "../store/useEditorStore"
import { useEffect, useRef, useState } from "react"
import { getWikiSummary } from "../lib/wikiService"

export function VisualizerPanel() {
  const {
    activeProblem,
    visualizationSteps,
    currentStepIndex,
    nextStep,
    prevStep,
    setCurrentStepIndex,
    isPlaying,
    setIsPlaying
  } = useEditorStore();

  const [wikiData, setWikiData] = useState<any>(null);
  const [showTheory, setShowTheory] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (activeProblem) {
      getWikiSummary(activeProblem.title).then(data => {
        setWikiData(data);
      });
    }
  }, [activeProblem]);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        if (currentStepIndex < visualizationSteps.length - 1) {
          nextStep();
        } else {
          setIsPlaying(false);
        }
      }, 800);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentStepIndex, visualizationSteps.length, nextStep, setIsPlaying]);

  if (!activeProblem) {
    return (
      <div className="h-full flex items-center justify-center bg-slate-900 dark:bg-background-dark text-slate-500">
        <p>Select a problem to start visualization</p>
      </div>
    );
  }

  const currentStep = visualizationSteps[currentStepIndex];

  return (
    <div className="h-full flex flex-col bg-slate-900 dark:bg-background-dark border-l border-slate-800 dark:border-border-dark">
      <div className="p-4 border-b border-slate-800 dark:border-border-dark flex items-center justify-between sticky top-0 bg-slate-900 dark:bg-background-dark z-10">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-accent-neon text-lg">bar_chart</span>
          <h2 className="font-bold text-xs uppercase tracking-wider text-white">Interactive Visualizer</h2>
        </div>
        <div className="flex items-center gap-2">
          {wikiData && (
            <button
              onClick={() => setShowTheory(!showTheory)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all
                ${showTheory ? 'bg-accent-neon text-black' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
            >
              <Info size={12} />
              Theory
            </button>
          )}
          <span className="material-symbols-outlined text-slate-500 cursor-help text-sm">info</span>
        </div>
      </div>

      {showTheory && wikiData && (
        <div className="mx-6 mt-6 bg-surface-dark/40 border border-accent-neon/20 rounded-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="p-4 space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-xs font-black text-accent-neon uppercase tracking-tighter">Wikipedia Summary</h4>
                <h3 className="text-sm font-bold text-white">{wikiData.title}</h3>
              </div>
              {wikiData.thumbnail && (
                <img
                  src={wikiData.thumbnail}
                  alt={wikiData.title}
                  className="w-16 h-16 rounded-xl object-cover border border-white/10"
                />
              )}
            </div>
            <p className="text-[11px] leading-relaxed text-slate-400 line-clamp-4 italic">
              {wikiData.extract}
            </p>
            <a
              href={wikiData.content_urls}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[10px] font-bold text-accent-neon hover:underline"
            >
              Read full article <ExternalLink size={10} />
            </a>
          </div>
        </div>
      )}

      <div className="flex-1 p-6 space-y-8 overflow-y-auto">
        {!currentStep ? (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
            <div className="bg-surface-dark p-6 rounded-3xl border border-border-dark">
              <span className="material-symbols-outlined text-4xl text-slate-700">play_circle</span>
            </div>
            <p className="text-sm text-slate-500 max-w-[200px] font-medium">
              Run your code to generate the step-by-step visualization
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                  Step {currentStepIndex + 1} of {visualizationSteps.length}
                </h3>
                <span className="text-[10px] bg-accent-neon/10 text-accent-neon px-2.5 py-1 rounded-full font-black uppercase tracking-tighter border border-accent-neon/20">
                  {activeProblem.category}
                </span>
              </div>

              <div className="bg-surface-dark/50 border border-border-dark rounded-2xl p-5 min-h-[100px] flex items-center justify-center shadow-inner">
                <p className="text-sm text-slate-300 text-center italic font-medium leading-relaxed">
                  "{currentStep.description}"
                </p>
              </div>

              {/* Dynamic Visualization Rendering based on Problem Category */}
              <div className="space-y-8">
                {activeProblem.category === 'Arrays' && renderArrayVisualizer(currentStep.state)}
                {activeProblem.category === 'Sorting' && renderSortingVisualizer(currentStep.state)}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Playback Controls */}
      {visualizationSteps.length > 0 && (
        <div className="p-6 border-t border-border-dark bg-background-dark/80 backdrop-blur-xl">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => { setCurrentStepIndex(0); setIsPlaying(false); }}
                className="w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-xl text-slate-400 hover:text-white transition-all"
                title="Reset"
              >
                <span className="material-symbols-outlined">restart_alt</span>
              </button>

              <button
                onClick={prevStep}
                disabled={currentStepIndex <= 0}
                className="w-10 h-10 flex items-center justify-center hover:bg-white/5 disabled:opacity-20 rounded-xl text-slate-400 hover:text-white transition-all"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 bg-accent-neon text-black rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(0,255,102,0.3)] hover:scale-105 transition-all active:scale-95"
              >
                <span className="material-symbols-outlined font-black fill-current">
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              </button>

              <button
                onClick={nextStep}
                disabled={currentStepIndex >= visualizationSteps.length - 1}
                className="w-10 h-10 flex items-center justify-center hover:bg-white/5 disabled:opacity-20 rounded-xl text-slate-400 hover:text-white transition-all"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>

            <div className="relative h-2 w-full bg-border-dark rounded-full overflow-hidden cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const percent = x / rect.width;
                const newIndex = Math.floor(percent * visualizationSteps.length);
                setCurrentStepIndex(Math.min(newIndex, visualizationSteps.length - 1));
              }}>
              <div
                className="absolute top-0 left-0 h-full bg-accent-neon shadow-[0_0_10px_rgba(0,255,102,0.5)] transition-all duration-300"
                style={{ width: `${((currentStepIndex + 1) / visualizationSteps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function renderArrayVisualizer(state: any) {
  const { nums, activeIndices = [], foundIndices = [], target, complement } = state;
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Input Array</h3>
        <div className="flex flex-wrap gap-3">
          {nums.map((num: number, i: number) => {
            const isActive = activeIndices.includes(i);
            const isFound = foundIndices.includes(i);
            return (
              <div
                key={i}
                className={`w-12 h-12 rounded-xl border-2 flex flex-col items-center justify-center font-bold text-lg transition-all relative
                  ${isActive ? 'border-accent-neon bg-accent-neon/10 text-accent-neon scale-110 z-10 shadow-[0_0_15px_rgba(0,255,102,0.2)]' :
                    isFound ? 'border-emerald-500 bg-emerald-500/20 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]' :
                      'border-border-dark bg-surface-dark text-slate-500'}`}
              >
                {num}
                <span className="absolute -bottom-6 text-[9px] font-mono text-slate-600">{i}</span>
              </div>
            )
          })}
        </div>
      </div>

      {state.map && (
        <div className="space-y-4">
          <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Hash Map State</h3>
          <div className="bg-background-dark rounded-2xl border border-border-dark p-4 space-y-4 shadow-inner">
            <div className="flex justify-between text-[11px] items-center">
              <span className="text-slate-400 italic">
                {complement !== undefined ? `Looking for: ${target} - ${state.currentNum} = ${complement}` : 'Populating map...'}
              </span>
              {foundIndices.length > 0 && <span className="text-accent-neon font-black animate-pulse uppercase tracking-tighter">Match Found!</span>}
            </div>

            <div className="grid grid-cols-1 gap-2 max-h-[150px] overflow-y-auto pr-2 custom-scrollbar">
              {Object.entries(state.map).length === 0 ? (
                <div className="text-[10px] text-slate-600 italic text-center py-4 bg-surface-dark/30 rounded-lg border border-white/5">Map is empty</div>
              ) : (
                Object.entries(state.map).map(([key, value]: [string, any]) => (
                  <div key={key} className="flex items-center gap-2 bg-surface-dark/50 p-2.5 rounded-xl border border-border-dark">
                    <div className="flex-1 flex justify-between px-2">
                      <span className="text-[11px] font-mono text-accent-neon">{key}</span>
                      <span className="text-[10px] text-slate-600">→</span>
                      <span className="text-[11px] font-mono text-slate-300">{String(value)}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function renderSortingVisualizer(state: any) {
  const { nums, activeIndices = [], sortedIndices = [] } = state;
  const max = Math.max(...nums, 1);

  return (
    <div className="space-y-6">
      <div className="h-48 flex items-end gap-1.5 px-2">
        {nums.map((num: number, i: number) => {
          const isActive = activeIndices.includes(i);
          const isSorted = sortedIndices.includes(i);
          const height = (num / max) * 100;

          return (
            <div
              key={i}
              className="flex-1 flex flex-col items-center gap-3"
            >
              <div
                className={`w-full rounded-t-lg transition-all duration-300 relative group
                  ${isActive ? 'bg-accent-neon shadow-[0_0_20px_rgba(0,255,102,0.6)] z-10' :
                    isSorted ? 'bg-emerald-500' : 'bg-slate-800 hover:bg-slate-700'}`}
                style={{ height: `${height}%` }}
              >
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-black text-accent-neon opacity-0 group-hover:opacity-100 transition-all bg-background-dark/80 px-1.5 py-0.5 rounded border border-accent-neon/20 backdrop-blur-sm">
                  {num}
                </div>
              </div>
              <span className="text-[9px] font-mono text-slate-600 font-bold">{i}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

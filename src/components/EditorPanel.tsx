import Editor from "@monaco-editor/react"
import { useEditorStore } from "../store/useEditorStore"
import { Terminal } from "lucide-react"

export function EditorPanel() {
  const { code, setCode, language, theme, visualizationSteps, currentStepIndex } = useEditorStore()

  return (
    <div className="h-full flex flex-col bg-[#1e1e1e]">
      <div className="h-10 border-b border-slate-800 flex items-center justify-between px-4 bg-slate-900">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border-b-2 border-indigo-500 h-10 px-1">
            <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">solution.js</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 min-h-0">
        <Editor
          height="100%"
          language={language}
          theme={theme}
          value={code}
          onChange={(value) => setCode(value || "")}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            roundedSelection: false,
            scrollBeyondLastLine: false,
            readOnly: false,
            automaticLayout: true,
            padding: { top: 16 }
          }}
        />
      </div>

      <div className="h-40 border-t border-slate-800 bg-slate-950 flex flex-col">
        <div className="h-8 border-b border-slate-800 flex items-center px-4 gap-2 shrink-0">
          <Terminal className="w-3 h-3 text-slate-500" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Execution Trace</span>
        </div>
        <div className="flex-1 p-3 font-mono text-xs overflow-y-auto space-y-1">
          {visualizationSteps.length === 0 ? (
            <div className="text-slate-600 italic">
              &gt; Click 'Run Code' to see the execution trace...
            </div>
          ) : (
            visualizationSteps.slice(0, currentStepIndex + 1).map((step, i) => (
              <div key={step.id} className={`${i === currentStepIndex ? 'text-indigo-400 font-bold' : 'text-slate-500 opacity-60'}`}>
                <span className="mr-2 text-slate-700">[{i + 1}]</span>
                {step.description}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

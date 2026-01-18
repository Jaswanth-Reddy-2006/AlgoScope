import Editor from '@monaco-editor/react';
import { useState } from 'react';

interface CodeEditorProps {
    language: string;
    value: string;
    onChange: (value: string | undefined) => void;
    height?: string;
}

export function CodeEditor({ language, value, onChange, height = '100%' }: CodeEditorProps) {
    const [fontSize, setFontSize] = useState(14);

    const editorOptions = {
        minimap: { enabled: false },
        fontSize,
        fontFamily: 'JetBrains Mono, Consolas, monospace',
        scrollBeyondLastLine: false,
        automaticLayout: true,
        tabSize: language === 'python' ? 4 : 2,
        wordWrap: 'on' as const,
        lineNumbers: 'on' as const,
        renderWhitespace: 'selection' as const,
        bracketPairColorization: {
            enabled: true
        },
        padding: {
            top: 16,
            bottom: 16
        }
    };

    return (
        <div className="relative h-full">
            <div className="absolute top-2 right-2 z-10 flex items-center gap-2 bg-slate-900/90 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                <button
                    onClick={() => setFontSize(Math.max(10, fontSize - 1))}
                    className="text-slate-400 hover:text-white transition-colors"
                    title="Decrease font size"
                >
                    <span className="material-symbols-outlined text-sm">remove</span>
                </button>
                <span className="text-xs text-slate-400 font-mono min-w-[2rem] text-center">{fontSize}px</span>
                <button
                    onClick={() => setFontSize(Math.min(24, fontSize + 1))}
                    className="text-slate-400 hover:text-white transition-colors"
                    title="Increase font size"
                >
                    <span className="material-symbols-outlined text-sm">add</span>
                </button>
            </div>
            <Editor
                height={height}
                language={language}
                value={value}
                onChange={onChange}
                theme="vs-dark"
                options={editorOptions}
                loading={
                    <div className="flex items-center justify-center h-full bg-slate-950">
                        <div className="text-slate-500">Loading editor...</div>
                    </div>
                }
            />
        </div>
    );
}

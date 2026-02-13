import { Component, ErrorInfo, ReactNode } from 'react'
import { AlertTriangle, RotateCcw } from 'lucide-react'

interface Props {
    children?: ReactNode
    fallback?: ReactNode
}

interface State {
    hasError: boolean
    error?: Error
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    }

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error }
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo)
    }

    private handleReset = () => {
        this.setState({ hasError: false })
        window.location.href = '/'
    }

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) return this.props.fallback

            return (
                <div className="min-h-screen bg-background flex items-center justify-center p-6 text-center">
                    <div className="max-w-md w-full glass-panel p-8 border-red-500/20 shadow-lg shadow-red-500/5">
                        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <AlertTriangle className="text-red-500 w-8 h-8" />
                        </div>
                        <h1 className="text-xl font-bold mb-2">Something went wrong</h1>
                        <p className="text-white/40 text-sm mb-8 leading-relaxed">
                            An unexpected error occurred in the visualization engine. You can try resetting the session.
                        </p>
                        <button
                            onClick={this.handleReset}
                            className="w-full h-12 bg-white text-black rounded-lg font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform active:scale-95"
                        >
                            <RotateCcw size={18} />
                            Reset Application
                        </button>
                        <div className="mt-6 text-left p-4 bg-black/40 rounded border border-white/5 overflow-auto max-h-32 text-[10px] font-mono text-red-400">
                            {this.state.error?.toString()}
                        </div>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary

import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import { AnimatePresence } from 'framer-motion'
import { useStore } from './store/useStore'

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'))
const ProblemList = lazy(() => import('./pages/ProblemList'))
const ProblemLab = lazy(() => import('./pages/ProblemLab'))
const PatternProfile = lazy(() => import('./pages/PatternProfile'))
const PatternMastery = lazy(() => import('./pages/PatternMastery'))
const FoundationsLayout = lazy(() => import('./pages/FoundationsLayout'))
const FoundationModule = lazy(() => import('./components/foundations/FoundationModule'))
const NotFound = lazy(() => import('./pages/NotFound'))

const PageLoader = () => (
    <div className="flex-1 flex items-center justify-center mesh-bg">
        <div className="w-12 h-12 border-2 border-accent-blue/10 border-t-accent-blue rounded-full animate-spin" />
    </div>
)

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence mode="wait">
            <Suspense fallback={<PageLoader />}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/problems" element={<ProblemList />} />
                    <Route path="/problems/:slug" element={<ProblemLab />} />
                    <Route path="/pattern-profile" element={<PatternProfile />} />
                    <Route path="/mastery/:pattern" element={<PatternMastery />} />
                    <Route path="/foundations" element={<FoundationsLayout />} />
                    <Route path="/foundations/:category/:moduleId" element={<FoundationModule />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </AnimatePresence>
    )
}

const App: React.FC = () => {
    const checkSkillDecay = useStore(state => state.checkSkillDecay)

    React.useEffect(() => {
        checkSkillDecay()
    }, [checkSkillDecay])

    return (
        <Router>
            <MainLayout>
                <AnimatedRoutes />
            </MainLayout>
        </Router>
    )
}

export default App

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Dashboard } from "./components/Dashboard"
import { Practice } from "./components/Practice"
import { Visualizer } from "./components/Visualizer"
import { Roadmap } from "./components/Roadmap"
import { Workspace } from "./components/Workspace"
import { EnhancedVisualizer } from "./components/EnhancedVisualizer"
import { Profile } from "./components/Profile"
import { AboutUs } from "./components/AboutUs"
import { ContactUs } from "./components/ContactUs"
import { Categories } from "./components/Categories"
import { ProblemSolver } from "./components/ProblemSolver"

function App() {
  return (
    <Router>
      <div className="dark h-screen bg-background-dark overflow-hidden font-sans">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/practice/:slug/solve" element={<ProblemSolver />} />
          <Route path="/practice/:slug" element={<Workspace />} />
          <Route path="/visualize/:slug" element={<EnhancedVisualizer />} />
          <Route path="/visualizer" element={<Visualizer />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/categories" element={<Categories />} />
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

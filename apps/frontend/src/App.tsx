import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import MoodTrackerPage from './pages/MoodTrackerPage';
import AICounselorPage from './pages/AICounselorPage';
import CommunityPage from './pages/CommunityPage';
import CrisisPage from './pages/CrisisPage';
import BlogPage from './pages/BlogPage';
import ProgressPage from './pages/ProgressPage';
import SubscriptionPage from './pages/SubscriptionPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-dark-800 via-dark-700 to-primary-900/20">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/mood-tracker" element={<MoodTrackerPage />} />
            <Route path="/ai-counselor" element={<AICounselorPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/crisis" element={<CrisisPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/subscription" element={<SubscriptionPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
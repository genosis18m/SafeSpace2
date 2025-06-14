import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Smile, 
  MessageCircle, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Calendar,
  Award,
  Target
} from 'lucide-react';

const DashboardPage = () => {
  const [userName, setUserName] = useState("Guest");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUserName(parsed.firstName || "Guest");
    }
  }, []);

  const quickActions = [
    {
      title: 'Mood Check-in',
      description: 'How are you feeling today?',
      icon: Smile,
      link: '/mood-tracker',
      color: 'primary',
      bgGradient: 'from-primary-500 to-primary-600'
    },
    {
      title: 'Chat with AI Counselor',
      description: 'Get instant support and guidance',
      icon: MessageCircle,
      link: '/ai-counselor',
      color: 'secondary',
      bgGradient: 'from-secondary-500 to-secondary-600'
    },
    {
      title: 'Community',
      description: 'Connect with others',
      icon: Users,
      link: '/community',
      color: 'accent',
      bgGradient: 'from-accent-500 to-accent-600'
    },
    {
      title: 'Progress',
      description: 'View your journey',
      icon: TrendingUp,
      link: '/progress',
      color: 'primary',
      bgGradient: 'from-primary-500 to-primary-600'
    }
  ];

  const todayStats = [
    { label: 'Current Streak', value: '7 days', icon: Award },
    { label: 'This Week', value: '5 check-ins', icon: Calendar },
    { label: 'Goals Progress', value: '3/5 complete', icon: Target },
    { label: 'Community Rank', value: '#42', icon: Users }
  ];

  const recentActivity = [
    { time: '2 hours ago', activity: 'Completed mood check-in', mood: '😊' },
    { time: '1 day ago', activity: 'Chat session with AI counselor', mood: '💬' },
    { time: '2 days ago', activity: 'Joined community discussion', mood: '👥' },
    { time: '3 days ago', activity: 'Read "Managing Anxiety" article', mood: '📖' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-8 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">
            Good morning, {userName}! 👋
          </h1>
          <p className="text-gray-300">
            Ready to continue your wellness journey? Here's what's happening today.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Link
                  key={index}
                  to={action.link}
                  className="group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-br ${action.bgGradient} p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all border border-white/10`}
                  >
                    <Icon className="h-8 w-8 mb-4 opacity-90" />
                    <h3 className="font-semibold mb-2">{action.title}</h3>
                    <p className="text-sm opacity-90">{action.description}</p>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Today's Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Today's Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {todayStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-dark-700 p-4 rounded-xl shadow-sm border border-dark-600 text-center hover:border-primary-500/30 transition-colors"
                  >
                    <Icon className="h-6 w-6 text-primary-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Mood Trend Chart Placeholder */}
            <div className="bg-dark-700 p-6 rounded-xl shadow-sm border border-dark-600">
              <h3 className="font-semibold text-white mb-4">Your Mood Trend (7 days)</h3>
              <div className="h-32 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center border border-primary-500/20">
                <p className="text-gray-300">📈 Mood trend visualization</p>
              </div>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
            <div className="bg-dark-700 rounded-xl shadow-sm border border-dark-600 p-6">
              <div className="space-y-4">
                {recentActivity.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-2xl">{item.mood}</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{item.activity}</p>
                      <p className="text-xs text-gray-400">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/progress"
                className="block text-center mt-4 text-primary-400 hover:text-primary-300 font-medium text-sm"
              >
                View Full Activity
              </Link>
            </div>

            {/* Daily Tip */}
            <div className="mt-6 bg-gradient-to-br from-accent-500/20 to-accent-600/20 p-6 rounded-xl border border-accent-500/30">
              <h3 className="font-semibold text-accent-300 mb-2">💡 Daily Tip</h3>
              <p className="text-sm text-accent-100">
                Take 3 deep breaths before checking your phone in the morning. 
                This simple practice can set a calm tone for your entire day.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quick Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Recommended for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/blog" className="bg-dark-700 p-6 rounded-xl shadow-sm border border-dark-600 hover:shadow-md hover:border-primary-500/30 transition-all">
              <BookOpen className="h-8 w-8 text-primary-400 mb-3" />
              <h3 className="font-semibold text-white mb-2">5 Mindfulness Exercises</h3>
              <p className="text-sm text-gray-300">Simple techniques to reduce stress and anxiety</p>
            </Link>
            <Link to="/ai-counselor" className="bg-dark-700 p-6 rounded-xl shadow-sm border border-dark-600 hover:shadow-md hover:border-secondary-500/30 transition-all">
              <MessageCircle className="h-8 w-8 text-secondary-400 mb-3" />
              <h3 className="font-semibold text-white mb-2">Ask Your AI Counselor</h3>
              <p className="text-sm text-gray-300">Get personalized advice on managing relationships</p>
            </Link>
            <Link to="/community" className="bg-dark-700 p-6 rounded-xl shadow-sm border border-dark-600 hover:shadow-md hover:border-accent-500/30 transition-all">
              <Users className="h-8 w-8 text-accent-400 mb-3" />
              <h3 className="font-semibold text-white mb-2">Join Discussion</h3>
              <p className="text-sm text-gray-300">"Share your morning routine tips" - 23 replies</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DashboardPage;

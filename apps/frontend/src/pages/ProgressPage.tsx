import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calendar, Award, Target, Smile, Brain, Heart, Zap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const ProgressPage = () => {
  const [timeRange, setTimeRange] = useState('month');

  const moodData = [
    { date: 'Week 1', mood: 3.2, activities: 12, goals: 2 },
    { date: 'Week 2', mood: 3.8, activities: 15, goals: 3 },
    { date: 'Week 3', mood: 4.1, activities: 18, goals: 4 },
    { date: 'Week 4', mood: 4.3, activities: 20, goals: 5 }
  ];

  const activityData = [
    { name: 'Meditation', sessions: 28, color: '#3b82f6' },
    { name: 'Exercise', sessions: 22, color: '#10b981' },
    { name: 'Journaling', sessions: 18, color: '#f59e0b' },
    { name: 'Social Time', sessions: 15, color: '#8b5cf6' },
    { name: 'Therapy', sessions: 8, color: '#ef4444' }
  ];

  const goalProgress = [
    { goal: 'Daily Meditation', current: 28, target: 30, percentage: 93 },
    { goal: 'Mood Check-ins', current: 25, target: 30, percentage: 83 },
    { goal: 'Exercise Sessions', current: 22, target: 24, percentage: 92 },
    { goal: 'Sleep 8+ Hours', current: 20, target: 30, percentage: 67 },
    { goal: 'Social Connections', current: 15, target: 16, percentage: 94 }
  ];

  const achievements = [
    { title: '7-Day Streak', description: 'Completed mood check-ins for 7 consecutive days', icon: '🔥', earned: true, date: '2 days ago' },
    { title: 'Mindful Warrior', description: 'Completed 30 meditation sessions', icon: '🧘', earned: true, date: '1 week ago' },
    { title: 'Social Butterfly', description: 'Engaged with community 10 times', icon: '🦋', earned: true, date: '2 weeks ago' },
    { title: 'Wellness Champion', description: 'Maintained positive mood trend for 2 weeks', icon: '🏆', earned: false, progress: 85 },
    { title: 'Self-Care Master', description: 'Complete 50 self-care activities', icon: '💆', earned: false, progress: 64 },
    { title: 'Progress Pioneer', description: 'Use the app for 60 consecutive days', icon: '🚀', earned: false, progress: 45 }
  ];

  const insights = [
    {
      title: 'Mood Improvement',
      value: '+34%',
      description: 'Your average mood has improved by 34% this month',
      trend: 'up',
      icon: Smile
    },
    {
      title: 'Activity Consistency',
      value: '92%',
      description: 'You\'ve been consistent with your wellness activities',
      trend: 'up',
      icon: Zap
    },
    {
      title: 'Goal Achievement',
      value: '4/5',
      description: 'You\'re on track to meet 4 out of 5 monthly goals',
      trend: 'up',
      icon: Target
    },
    {
      title: 'Streak Record',
      value: '12 days',
      description: 'Your longest mood tracking streak this month',
      trend: 'up',
      icon: Award
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-8 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-3 rounded-full">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Your Progress Journey</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Track your mental wellness journey with detailed insights, achievements, and progress visualization.
          </p>
        </motion.div>

        {/* Time Range Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-dark-700 rounded-2xl p-2 shadow-lg border border-dark-600">
            {['week', 'month', 'quarter', 'year'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-6 py-3 rounded-xl font-medium transition-all capitalize ${
                  timeRange === range
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <div key={index} className="bg-dark-700 rounded-2xl shadow-lg border border-dark-600 p-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon className="h-8 w-8 text-primary-400" />
                  <span className={`text-2xl font-bold ${
                    insight.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {insight.value}
                  </span>
                </div>
                <h3 className="font-semibold text-white mb-2">{insight.title}</h3>
                <p className="text-sm text-gray-300">{insight.description}</p>
              </div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Mood Trend Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-700 rounded-2xl shadow-lg border border-dark-600 p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Brain className="mr-2 h-6 w-6 text-primary-400" />
              Mood Trend Analysis
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={moodData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="date" stroke="#9ca3af" />
                  <YAxis domain={[1, 5]} stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#374151',
                      border: '1px solid #4b5563',
                      borderRadius: '8px',
                      color: '#ffffff'
                    }}
                    content={({ active, payload, label }) => {
                      if (active && payload && payload[0]) {
                        return (
                          <div className="bg-dark-600 p-3 border border-dark-500 rounded-lg shadow-lg">
                            <p className="font-medium text-white">{label}</p>
                            <p className="text-primary-400">
                              Average Mood: {payload[0].value}/5
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="mood" 
                    stroke="#3b82f6" 
                    strokeWidth={3}
                    dot={{ fill: '#3b82f6', strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, fill: '#1d4ed8' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 p-4 bg-primary-500/20 rounded-xl border border-primary-500/30">
              <p className="text-sm text-primary-200">
                <strong>Insight:</strong> Your mood has shown a consistent upward trend over the past month, 
                with the most significant improvement in week 3.
              </p>
            </div>
          </motion.div>

          {/* Activity Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-dark-700 rounded-2xl shadow-lg border border-dark-600 p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Heart className="mr-2 h-6 w-6 text-secondary-400" />
              Activity Breakdown
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#374151',
                      border: '1px solid #4b5563',
                      borderRadius: '8px',
                      color: '#ffffff'
                    }}
                    content={({ active, payload, label }) => {
                      if (active && payload && payload[0]) {
                        return (
                          <div className="bg-dark-600 p-3 border border-dark-500 rounded-lg shadow-lg">
                            <p className="font-medium text-white">{label}</p>
                            <p style={{ color: payload[0].payload.color }}>
                              Sessions: {payload[0].value}
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="sessions" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {activityData.slice(0, 4).map((activity, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: activity.color }}
                  ></div>
                  <span className="text-sm text-gray-300">{activity.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Goals Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-dark-700 rounded-2xl shadow-lg border border-dark-600 p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Target className="mr-2 h-6 w-6 text-accent-400" />
            Monthly Goals Progress
          </h2>
          <div className="space-y-6">
            {goalProgress.map((goal, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-white">{goal.goal}</h3>
                    <span className="text-sm text-gray-300">
                      {goal.current}/{goal.target}
                    </span>
                  </div>
                  <div className="w-full bg-dark-600 rounded-full h-3">
                    <motion.div
                      className={`h-3 rounded-full ${
                        goal.percentage >= 90 ? 'bg-green-500' :
                        goal.percentage >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${goal.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <span className={`text-lg font-bold ${
                    goal.percentage >= 90 ? 'text-green-400' :
                    goal.percentage >= 70 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {goal.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-dark-700 rounded-2xl shadow-lg border border-dark-600 p-6"
        >
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Award className="mr-2 h-6 w-6 text-yellow-400" />
            Achievements & Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border-2 transition-all ${
                  achievement.earned
                    ? 'border-yellow-500/30 bg-yellow-500/10'
                    : 'border-dark-500 bg-dark-600'
                }`}
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{achievement.icon}</div>
                  <h3 className={`font-semibold ${
                    achievement.earned ? 'text-yellow-300' : 'text-gray-300'
                  }`}>
                    {achievement.title}
                  </h3>
                </div>
                <p className={`text-sm text-center mb-4 ${
                  achievement.earned ? 'text-yellow-200' : 'text-gray-400'
                }`}>
                  {achievement.description}
                </p>
                {achievement.earned ? (
                  <div className="text-center">
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-medium border border-yellow-500/30">
                      Earned {achievement.date}
                    </span>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400">Progress</span>
                      <span className="text-xs text-gray-400">{achievement.progress}%</span>
                    </div>
                    <div className="w-full bg-dark-500 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${achievement.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProgressPage;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, TrendingUp, Plus, Smile, Frown, Meh, Heart, Zap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MoodTrackerPage = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [note, setNote] = useState('');
  const [activities, setActivities] = useState<string[]>([]);

  const moods = [
    { value: 1, emoji: '😢', label: 'Very Low', color: 'red' },
    { value: 2, emoji: '😞', label: 'Low', color: 'orange' },
    { value: 3, emoji: '😐', label: 'Neutral', color: 'yellow' },
    { value: 4, emoji: '😊', label: 'Good', color: 'green' },
    { value: 5, emoji: '😄', label: 'Excellent', color: 'emerald' }
  ];

  const activityOptions = [
    'Exercise', 'Meditation', 'Social Time', 'Work', 'Sleep', 'Creative',
    'Nature', 'Reading', 'Music', 'Cooking', 'Gaming', 'Therapy'
  ];

  const moodData = [
    { date: 'Mon', mood: 3, day: 'Monday' },
    { date: 'Tue', mood: 4, day: 'Tuesday' },
    { date: 'Wed', mood: 2, day: 'Wednesday' },
    { date: 'Thu', mood: 4, day: 'Thursday' },
    { date: 'Fri', mood: 5, day: 'Friday' },
    { date: 'Sat', mood: 4, day: 'Saturday' },
    { date: 'Today', mood: selectedMood || 0, day: 'Sunday' }
  ];

  const handleActivityToggle = (activity: string) => {
    setActivities(prev => 
      prev.includes(activity) 
        ? prev.filter(a => a !== activity)
        : [...prev, activity]
    );
  };

const handleSubmit = async () => {
  if (!selectedMood) return;

  try {
    const res = await fetch('/api/mood', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mood: selectedMood,
        note,
        activities,
        date: new Date().toISOString() // store today
      })
    });

    if (!res.ok) throw new Error('Failed to log mood');

    alert('Mood logged successfully! 🎉');
    setSelectedMood(null);
    setNote('');
    setActivities([]);
  } catch (err) {
    console.error(err);
    alert('Error logging mood.');
  }
};


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-8 pb-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">
            How are you feeling today?
          </h1>
          <p className="text-gray-300">
            Track your mood to better understand your emotional patterns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mood Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-dark-700 rounded-2xl shadow-lg p-6 border border-dark-600"
          >
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Heart className="mr-2 h-6 w-6 text-primary-400" />
              Today's Mood
            </h2>

            <div className="grid grid-cols-5 gap-4 mb-6">
              {moods.map((mood) => (
                <motion.button
                  key={mood.value}
                  onClick={() => setSelectedMood(mood.value)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 rounded-xl text-center transition-all border-2 ${
                    selectedMood === mood.value
                      ? `bg-${mood.color}-500/20 border-${mood.color}-500`
                      : 'bg-dark-600 border-dark-500 hover:bg-dark-500'
                  }`}
                >
                  <div className="text-3xl mb-2">{mood.emoji}</div>
                  <div className="text-xs font-medium text-gray-300">{mood.label}</div>
                </motion.button>
              ))}
            </div>

            {/* Activities */}
            <div className="mb-6">
              <h3 className="font-semibold text-white mb-3 flex items-center">
                <Zap className="mr-2 h-5 w-5 text-secondary-400" />
                What influenced your mood?
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {activityOptions.map((activity) => (
                  <button
                    key={activity}
                    onClick={() => handleActivityToggle(activity)}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                      activities.includes(activity)
                        ? 'bg-primary-600 text-white'
                        : 'bg-dark-600 text-gray-300 hover:bg-dark-500'
                    }`}
                  >
                    {activity}
                  </button>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="mb-6">
              <label className="block font-semibold text-white mb-2">
                Additional Notes (Optional)
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Anything specific you'd like to remember about today?"
                className="w-full p-3 bg-dark-600 border border-dark-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-white placeholder-gray-400"
                rows={3}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={!selectedMood}
              className={`w-full py-3 rounded-lg font-semibold transition-all ${
                selectedMood
                  ? 'bg-primary-600 text-white hover:bg-primary-700 transform hover:scale-105'
                  : 'bg-dark-600 text-gray-500 cursor-not-allowed'
              }`}
            >
              Log My Mood
            </button>
          </motion.div>

          {/* Mood Trend */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-700 rounded-2xl shadow-lg p-6 border border-dark-600"
          >
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
              <TrendingUp className="mr-2 h-6 w-6 text-secondary-400" />
              This Week's Trend
            </h2>

            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={moodData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="date" stroke="#9ca3af" />
                  <YAxis domain={[1, 5]} ticks={[1, 2, 3, 4, 5]} stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#374151',
                      border: '1px solid #4b5563',
                      borderRadius: '8px',
                      color: '#ffffff'
                    }}
                    content={({ active, payload }) => {
                      if (active && payload && payload[0]) {
                        const data = payload[0].payload;
                        const moodInfo = moods.find(m => m.value === data.mood);
                        return (
                          <div className="bg-dark-600 p-3 border border-dark-500 rounded-lg shadow-lg">
                            <p className="font-medium text-white">{data.day}</p>
                            {moodInfo && (
                              <p className="text-sm text-gray-300">
                                {moodInfo.emoji} {moodInfo.label}
                              </p>
                            )}
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

            {/* Insights */}
            <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 p-4 rounded-xl border border-primary-500/30">
              <h3 className="font-semibold text-white mb-2">Weekly Insights</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Your mood improved 25% compared to last week</li>
                <li>• Exercise days show 40% better mood scores</li>
                <li>• Best mood streak: 3 consecutive days</li>
                <li>• Recommended: Try meditation on Wednesday</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Recent Entries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-dark-700 rounded-2xl shadow-lg p-6 border border-dark-600"
        >
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
            <Calendar className="mr-2 h-6 w-6 text-accent-400" />
            Recent Entries
          </h2>

          <div className="space-y-4">
            {[
              { date: 'Yesterday', mood: '😊', activities: ['Exercise', 'Social Time'], note: 'Had a great workout and dinner with friends!' },
              { date: '2 days ago', mood: '😐', activities: ['Work'], note: 'Long day at the office but got a lot done.' },
              { date: '3 days ago', mood: '😄', activities: ['Creative', 'Music'], note: 'Finished my art project and listened to my favorite playlist.' }
            ].map((entry, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-dark-600 rounded-xl border border-dark-500">
                <div className="text-2xl">{entry.mood}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-white">{entry.date}</span>
                    <div className="flex space-x-2">
                      {entry.activities.map((activity) => (
                        <span key={activity} className="px-2 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-full border border-primary-500/30">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">{entry.note}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MoodTrackerPage;
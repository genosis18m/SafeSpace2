import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Heart, Share2, Plus, ExternalLink, Search, Filter } from 'lucide-react';

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions = [
    {
      id: 1,
      title: 'Daily Gratitude Practice - Share 3 things you\'re grateful for today',
      author: 'Sarah M.',
      replies: 42,
      likes: 128,
      time: '2 hours ago',
      category: 'Gratitude',
      preview: 'Starting with coffee, my morning walk, and this amazing community...'
    },
    {
      id: 2,
      title: 'Dealing with Sunday Anxiety - Anyone else experience this?',
      author: 'Alex R.',
      replies: 18,
      likes: 67,
      time: '4 hours ago',
      category: 'Anxiety',
      preview: 'Every Sunday I get this overwhelming feeling about the week ahead...'
    },
    {
      id: 3,
      title: 'Meditation Success Stories - 30 Day Challenge Results',
      author: 'Maya P.',
      replies: 35,
      likes: 94,
      time: '6 hours ago',
      category: 'Mindfulness',
      preview: 'Just completed my 30-day meditation challenge and wow, the changes...'
    },
    {
      id: 4,
      title: 'Work-Life Balance Tips for Remote Workers',
      author: 'Jamie L.',
      replies: 23,
      likes: 56,
      time: '8 hours ago',
      category: 'Work Stress',
      preview: 'Working from home has blurred all my boundaries. Here\'s what helped...'
    }
  ];

  const discordChannels = [
    {
      name: 'General Support',
      description: 'Open discussion for all mental health topics',
      members: 1247,
      link: 'https://discord.gg/mindcare-general'
    },
    {
      name: 'Anxiety Support Group',
      description: 'Dedicated space for anxiety management and support',
      members: 892,
      link: 'https://discord.gg/mindcare-anxiety'
    },
    {
      name: 'Depression Support',
      description: 'Understanding and supporting each other through depression',
      members: 734,
      link: 'https://discord.gg/mindcare-depression'
    },
    {
      name: 'Mindfulness & Meditation',
      description: 'Share techniques and practice together',
      members: 567,
      link: 'https://discord.gg/mindcare-mindfulness'
    },
    {
      name: 'ADHD Support Network',
      description: 'Strategies, tips, and community for ADHD management',
      members: 423,
      link: 'https://discord.gg/mindcare-adhd'
    },
    {
      name: 'Student Mental Health',
      description: 'Support for students dealing with academic stress',
      members: 356,
      link: 'https://discord.gg/mindcare-students'
    }
  ];

  const categories = [
    { name: 'All', count: 156 },
    { name: 'Anxiety', count: 45 },
    { name: 'Depression', count: 32 },
    { name: 'Mindfulness', count: 28 },
    { name: 'Work Stress', count: 23 },
    { name: 'Relationships', count: 18 },
    { name: 'Self Care', count: 10 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-8 pb-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-accent-500 to-primary-500 p-3 rounded-full">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Community Support</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Connect with others on similar journeys. Share experiences, find support, 
            and build meaningful relationships in our safe, moderated community.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-dark-700 rounded-2xl p-2 shadow-lg border border-dark-600">
            <button
              onClick={() => setActiveTab('discussions')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'discussions'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Community Discussions
            </button>
            <button
              onClick={() => setActiveTab('discord')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === 'discord'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Discord Channels
            </button>
          </div>
        </motion.div>

        {/* Community Discussions Tab */}
        {activeTab === 'discussions' && (
          <motion.div
            key="discussions"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-dark-700 rounded-2xl shadow-lg p-6 mb-6 border border-dark-600">
                  <h3 className="font-semibold text-white mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        className="w-full flex items-center justify-between px-3 py-2 text-left text-gray-300 hover:bg-dark-600 rounded-lg transition-colors"
                      >
                        <span className="font-medium">{category.name}</span>
                        <span className="text-sm text-gray-400 bg-dark-600 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl p-6 border border-primary-500/30">
                  <h3 className="font-semibold text-white mb-2">Community Guidelines</h3>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Be respectful and supportive</li>
                    <li>• No medical advice</li>
                    <li>• Keep discussions constructive</li>
                    <li>• Respect privacy and anonymity</li>
                    <li>• Report concerning content</li>
                  </ul>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Search and Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search discussions..."
                      className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-dark-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                    />
                  </div>
                  <button className="flex items-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors">
                    <Plus className="mr-2 h-5 w-5" />
                    New Discussion
                  </button>
                </div>

                {/* Discussion List */}
                <div className="space-y-4">
                  {discussions.map((discussion, index) => (
                    <motion.div
                      key={discussion.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-dark-700 rounded-2xl shadow-sm border border-dark-600 p-6 hover:shadow-md hover:border-primary-500/30 transition-all cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2 hover:text-primary-400 transition-colors">
                            {discussion.title}
                          </h3>
                          <p className="text-gray-300 text-sm mb-3">{discussion.preview}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>by {discussion.author}</span>
                            <span>{discussion.time}</span>
                            <span className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs border border-primary-500/30">
                              {discussion.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-dark-600">
                        <div className="flex items-center space-x-6">
                          <button className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors">
                            <Heart className="h-4 w-4" />
                            <span className="text-sm">{discussion.likes}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors">
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-sm">{discussion.replies} replies</span>
                          </button>
                        </div>
                        <button className="text-gray-400 hover:text-gray-300 transition-colors">
                          <Share2 className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Discord Channels Tab */}
        {activeTab === 'discord' && (
          <motion.div
            key="discord"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Join Our Discord Community</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Connect in real-time with our supportive community through specialized Discord channels. 
                Each channel is moderated by mental health professionals and experienced community members.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {discordChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-dark-700 rounded-2xl shadow-lg border border-dark-600 p-6 hover:shadow-xl hover:border-primary-500/30 transition-all transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">#{channel.name}</h3>
                    <div className="flex items-center text-sm text-gray-400">
                      <Users className="h-4 w-4 mr-1" />
                      {channel.members}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-6">{channel.description}</p>
                  
                  <a
                    href={channel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
                  >
                    Join Channel
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Discord Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl p-8 text-center border border-indigo-500/30"
            >
              <h3 className="text-xl font-bold text-white mb-4">New to Discord?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Discord is a free platform for real-time messaging and voice chat. It's like having 
                a support group available 24/7. Create your free account and join our welcoming community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://discord.com/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors font-medium"
                >
                  Create Discord Account
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="https://support.discord.com/hc/en-us/articles/360045138571-Beginner-s-Guide-to-Discord"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-dark-700 text-indigo-400 border border-indigo-500/30 rounded-xl hover:bg-dark-600 transition-colors font-medium"
                >
                  Learn How to Use Discord
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default CommunityPage;
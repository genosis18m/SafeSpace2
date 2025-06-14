import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, Clock, User, Heart, Share2, Filter } from 'lucide-react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Articles', count: 48 },
    { id: 'anxiety', name: 'Anxiety', count: 12 },
    { id: 'depression', name: 'Depression', count: 10 },
    { id: 'mindfulness', name: 'Mindfulness', count: 8 },
    { id: 'relationships', name: 'Relationships', count: 7 },
    { id: 'self-care', name: 'Self-Care', count: 6 },
    { id: 'therapy', name: 'Therapy', count: 5 }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: '10 Real People On What Finally Worked For Their Anxiety',
      excerpt: 'Real stories and strategies from people who have managed anxiety, offering practical takeaways for anyone struggling.',
      author: 'Lindsay Kellner',
      readTime: '8 min read',
      publishDate: '2 days ago',
      category: 'Anxiety',
      likes: 234,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=compress&fit=crop&w=800&q=80',
      featured: true,
      source: 'MindBodyGreen',
      link: 'https://www.mindbodygreen.com/articles/how-people-cope-with-anxiety'
    },
    {
      id: 2,
      title: 'Mindfulness for Beginners: A Step-by-Step Guide to Incorporating Mindfulness into Your Daily Life',
      excerpt: 'A practical, beginner-friendly guide to mindfulness, with exercises and tips to help you get started.',
      author: 'Phnxman',
      readTime: '6 min read',
      publishDate: '4 days ago',
      category: 'Mindfulness',
      likes: 189,
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=compress&fit=crop&w=800&q=80',
      featured: true,
      source: 'Medium',
      link: 'https://medium.com/@Phnxman/mindfulness-for-beginners-a-step-by-step-guide-to-incorporating-mindfulness-into-your-daily-life-c478cb53e3c0'
    }
  ];

  const articles = [
    {
      id: 3,
      title: 'Research is Shedding New Light on Treating Severe Depression',
      excerpt: 'Explore how innovative treatments like deep brain stimulation are offering hope for people with severe depression.',
      author: 'Brain & Life Magazine',
      readTime: '12 min read',
      publishDate: '1 week ago',
      category: 'Depression',
      likes: 156,
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=compress&fit=crop&w=800&q=80',
      source: 'Brain & Life',
      link: 'https://www.brainandlife.org/articles/shortcircuiting-darkness'
    },
    {
      id: 4,
      title: 'Self Care: Essential Tips and Practices for Well-being to Transform Your Life',
      excerpt: 'A comprehensive guide to self-care, including physical, emotional, and mental wellness practices.',
      author: 'business.jsaycon',
      readTime: '9 min read',
      publishDate: '2 weeks ago',
      category: 'Self-Care',
      likes: 198,
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=compress&fit=crop&w=800&q=80',
      source: 'Medium',
      link: 'https://medium.com/@business.jsaycon/self-care-essential-tips-and-practices-for-well-being-to-transform-your-life-db6706445683'
    },
    {
      id: 5,
      title: 'How to Find a Therapist That’s Right for You: 8 Key Tips',
      excerpt: 'Expert advice on choosing a therapist who fits your needs, with practical steps and considerations.',
      author: 'Rebecca Joy Stanborough, MFA and Melissa Lee',
      readTime: '10 min read',
      publishDate: '2 weeks ago',
      category: 'Therapy',
      likes: 167,
      image: 'https://images.unsplash.com/photo-1457694587812-e8bf29a43845?auto=compress&fit=crop&w=800&q=80',
      source: 'Healthline',
      link: 'https://www.healthline.com/health/how-to-find-a-therapist'
    },
    {
      id: 6,
      title: 'I Beat Anxiety & Depression',
      excerpt: 'A personal story of overcoming anxiety and depression, with hope and inspiration for others.',
      author: 'Kellene Diana',
      readTime: '7 min read',
      publishDate: '1 week ago',
      category: 'Anxiety',
      likes: 142,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=compress&fit=crop&w=800&q=80',
      source: 'ADAA',
      link: 'https://adaa.org/living-with-anxiety/personal-stories/i-beat-anxiety-depression'
    },
    {
      id: 7,
      title: 'Yoga-based Interventions May Reduce Anxiety and Depression Symptoms',
      excerpt: 'A systematic review and meta-analysis of how yoga and mind-body exercises impact mental health.',
      author: 'BMJ British Journal of Sports Medicine',
      readTime: '11 min read',
      publishDate: '3 weeks ago',
      category: 'Mindfulness',
      likes: 211,
      image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=compress&fit=crop&w=800&q=80',
      source: 'BMJ',
      link: 'https://bjsm.bmj.com/content/57/22/1442.abstract'
    },
    {
      id: 8,
      title: 'A Systematic Review of Brief Interventions to Reduce State Anxiety',
      excerpt: 'A scientific look at how brief cognitive, embodiment, and mindfulness interventions can help reduce anxiety.',
      author: 'Frontiers in Psychology',
      readTime: '6 min read',
      publishDate: '3 weeks ago',
      category: 'Anxiety',
      likes: 123,
      image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=compress&fit=crop&w=800&q=80',
      source: 'Frontiers in Psychology',
      link: 'https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2024.1412928/full'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category.toLowerCase() === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              <BookOpen className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Mental Health Resources</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover evidence-based articles, expert insights, and practical guides to support your mental wellness journey.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-dark-700 rounded-2xl shadow-sm border border-dark-600 p-6 mb-6"
            >
              <h3 className="font-semibold text-white mb-4 flex items-center">
                <Search className="mr-2 h-5 w-5" />
                Search Articles
              </h3>
              <input
                type="text"
                placeholder="Search topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-dark-600 border border-dark-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              />
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-dark-700 rounded-2xl shadow-sm border border-dark-600 p-6 mb-6"
            >
              <h3 className="font-semibold text-white mb-4 flex items-center">
                <Filter className="mr-2 h-5 w-5" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-left rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30'
                        : 'text-gray-300 hover:bg-dark-600'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className="text-sm bg-dark-600 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl p-6 border border-primary-500/30"
            >
              <h3 className="font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-sm text-gray-300 mb-4">
                Get the latest mental health articles and resources delivered to your inbox.
              </p>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-dark-600 border border-dark-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent mb-3 text-white placeholder-gray-400"
              />
              <button className="bg-[#2979ff] text-black px-8 py-3 rounded-xl hover:bg-[#1565c0] transition-colors font-medium shadow-lg">
                Subscribe
              </button>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredArticles.map((article, index) => (
                  <a
                    key={article.id}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <motion.article
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-dark-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group border border-dark-600"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                            Featured
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-dark-700/90 text-gray-200 px-2 py-1 rounded-full text-xs font-medium">
                            {article.source}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
                          <span className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {article.author}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {article.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4">{article.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="bg-secondary-500/20 text-secondary-300 px-3 py-1 rounded-full text-xs font-medium border border-secondary-500/30">
                            {article.category}
                          </span>
                          <div className="flex items-center space-x-4 text-gray-400">
                            <button className="flex items-center hover:text-red-400 transition-colors">
                              <Heart className="h-4 w-4 mr-1" />
                              <span className="text-sm">{article.likes}</span>
                            </button>
                            <button className="hover:text-primary-400 transition-colors">
                              <Share2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Article Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Latest Articles</h2>
                <span className="text-gray-400">
                  {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article, index) => (
                  <a
                    key={article.id}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <motion.article
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-dark-700 rounded-2xl shadow-sm border border-dark-600 overflow-hidden hover:shadow-md hover:border-primary-500/30 transition-all cursor-pointer group"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3">
                          <span className="bg-dark-700/90 text-gray-200 px-2 py-1 rounded-full text-xs font-medium">
                            {article.source}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full text-xs font-medium border border-accent-500/30">
                            {article.category}
                          </span>
                          <span className="text-xs text-gray-400">{article.publishDate}</span>
                        </div>
                        <h3 className="font-semibold text-white mb-2 line-clamp-2 group-hover:text-primary-400 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-gray-400">
                            <User className="h-4 w-4 mr-1" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="flex items-center text-gray-400">
                              <Clock className="h-4 w-4 mr-1" />
                              {article.readTime}
                            </span>
                            <button className="flex items-center text-gray-400 hover:text-red-400 transition-colors">
                              <Heart className="h-4 w-4 mr-1" />
                              {article.likes}
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </a>
                ))}
              </div>

              {filteredArticles.length === 0 && (
                <div className="text-center py-12">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">No articles found</h3>
                  <p className="text-gray-300">Try adjusting your search or category filter.</p>
                </div>
              )}
            </motion.div>

            {/* Load More */}
            {filteredArticles.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-12"
              >
                <button className="bg-[#2979ff] text-black px-8 py-3 rounded-xl hover:bg-[#1565c0] transition-colors font-medium shadow-lg">
                  Load More Articles
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPage;

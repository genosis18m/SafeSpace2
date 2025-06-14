import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  MessageCircle, 
  Users, 
  Shield, 
  BookOpen, 
  TrendingUp, 
  CreditCard,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Brain,
      title: 'Mood Tracker',
      description: 'Track your emotional well-being with our intelligent mood monitoring system.',
      color: 'primary'
    },
    {
      icon: MessageCircle,
      title: 'AI Counselor',
      description: '24/7 AI-powered mental health support and personalized guidance.',
      color: 'secondary'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Connect with others on similar journeys through our supportive community.',
      color: 'accent'
    },
    {
      icon: Shield,
      title: 'Crisis Intervention',
      description: 'Immediate help when you need it most - response time under 8 minutes.',
      color: 'red'
    },
    {
      icon: BookOpen,
      title: 'Content Library',
      description: 'Access curated mental health resources and educational content.',
      color: 'primary'
    },
    {
      icon: TrendingUp,
      title: 'Progress Journey',
      description: 'Visualize your mental health journey with detailed progress tracking.',
      color: 'secondary'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-8"
            >
              <Heart className="h-16 w-16 text-primary-500 animate-pulse-slow" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
            >
              Your Mental Health
              <span className="text-primary-500 block">Companion</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
            >
              Experience comprehensive mental health support with AI-powered counseling, 
              mood tracking, community connection, and crisis intervention - all in one platform.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/onboarding"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary-600 rounded-full hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/crisis"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-red-400 bg-red-900/20 border border-red-500/30 rounded-full hover:bg-red-900/30 transition-all transform hover:scale-105"
              >
                <Shield className="mr-2 h-5 w-5" />
                Crisis Help
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary-500/10 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary-500/10 rounded-full opacity-20 blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need for Mental Wellness
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools and support you need 
              to maintain and improve your mental health.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={item}
                  className="bg-gradient-to-br from-dark-700 to-dark-800 p-8 rounded-2xl shadow-xl border border-dark-600 hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:border-primary-500/30"
                >
                  <div className={`inline-flex p-3 rounded-full bg-${feature.color}-500/10 border border-${feature.color}-500/20 mb-6`}>
                    <Icon className={`h-8 w-8 text-${feature.color}-400`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 border-t border-dark-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Mental Health Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of people who have improved their mental well-being with SafeSpace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/onboarding"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-dark-900 bg-white rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Start Free Trial
                <CheckCircle className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/subscription"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-dark-900 transition-all"
              >
                <CreditCard className="mr-2 h-5 w-5" />
                View Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
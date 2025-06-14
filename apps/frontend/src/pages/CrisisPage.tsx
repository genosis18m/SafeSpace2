import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Shield, Clock, Users, AlertTriangle, Heart, Headphones } from 'lucide-react';

const CrisisPage = () => {
  const [selectedRegion, setSelectedRegion] = useState('us');

  const emergencyContacts = {
    us: [
      { name: 'National Suicide Prevention Lifeline', number: '988', available: '24/7', type: 'call' },
      { name: 'Crisis Text Line', number: 'Text HOME to 741741', available: '24/7', type: 'text' },
      { name: 'National Domestic Violence Hotline', number: '1-800-799-7233', available: '24/7', type: 'call' },
      { name: 'SAMHSA National Helpline', number: '1-800-662-4357', available: '24/7', type: 'call' }
    ],
    uk: [
      { name: 'Samaritans', number: '116 123', available: '24/7', type: 'call' },
      { name: 'Crisis Text Line UK', number: 'Text SHOUT to 85258', available: '24/7', type: 'text' },
      { name: 'Mind Infoline', number: '0300 123 3393', available: '9am-6pm, Mon-Fri', type: 'call' },
      { name: 'NHS 111', number: '111', available: '24/7', type: 'call' }
    ],
    canada: [
      { name: 'Talk Suicide Canada', number: '1-833-456-4566', available: '24/7', type: 'call' },
      { name: 'Kids Help Phone', number: '1-800-668-6868', available: '24/7', type: 'call' },
      { name: 'Crisis Text Line Canada', number: 'Text CONNECT to 686868', available: '24/7', type: 'text' },
      { name: 'Telehealth Ontario', number: '1-866-797-0000', available: '24/7', type: 'call' }
    ]
  };

  const immediateActions = [
    {
      icon: Phone,
      title: 'Call Emergency Services',
      description: 'If in immediate danger, call 911 (US), 999 (UK), or your local emergency number',
      color: 'red',
      action: 'tel:911'
    },
    {
      icon: MessageCircle,
      title: 'Crisis Text Line',
      description: 'Text with a trained crisis counselor - completely confidential',
      color: 'blue',
      action: 'sms:741741'
    },
    {
      icon: Headphones,
      title: 'Suicide Prevention Lifeline',
      description: 'Free, confidential, 24/7 support for people in distress',
      color: 'green',
      action: 'tel:988'
    },
    {
      icon: Heart,
      title: 'Stay Connected',
      description: 'Reach out to a trusted friend, family member, or healthcare provider',
      color: 'purple',
      action: null
    }
  ];

  const copingStrategies = [
    {
      title: 'Grounding Technique (5-4-3-2-1)',
      steps: [
        '5 things you can see',
        '4 things you can touch',
        '3 things you can hear',
        '2 things you can smell',
        '1 thing you can taste'
      ]
    },
    {
      title: 'Box Breathing',
      steps: [
        'Breathe in for 4 counts',
        'Hold for 4 counts',
        'Breathe out for 4 counts',
        'Hold for 4 counts',
        'Repeat 4-6 times'
      ]
    },
    {
      title: 'Reach Out',
      steps: [
        'Call a trusted friend or family member',
        'Text someone who cares about you',
        'Contact a mental health professional',
        'Use a crisis hotline',
        'Go to your nearest emergency room'
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-8 pb-12"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-red-500 p-4 rounded-full animate-pulse">
              <Shield className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Crisis Support</h1>
          <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <AlertTriangle className="h-6 w-6 text-red-400 mr-2" />
              <span className="text-red-300 font-semibold">If you're in immediate danger, call emergency services now</span>
            </div>
            <p className="text-red-200">
              This page provides mental health crisis resources. For medical emergencies, 
              always call your local emergency number immediately.
            </p>
          </div>
        </motion.div>

        {/* Immediate Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Immediate Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {immediateActions.map((action, index) => {
              const Icon = action.icon;
              const Component = action.action ? 'a' : 'div';
              return (
                <Component
                  key={index}
                  href={action.action || undefined}
                  className={`bg-dark-700 p-6 rounded-2xl shadow-lg border-2 ${
                    action.color === 'red' ? 'border-red-500/30 hover:border-red-400' :
                    action.color === 'blue' ? 'border-blue-500/30 hover:border-blue-400' :
                    action.color === 'green' ? 'border-green-500/30 hover:border-green-400' :
                    'border-purple-500/30 hover:border-purple-400'
                  } transition-all ${action.action ? 'hover:shadow-xl transform hover:scale-105 cursor-pointer' : ''}`}
                >
                  <div className={`inline-flex p-3 rounded-full mb-4 ${
                    action.color === 'red' ? 'bg-red-500/20' :
                    action.color === 'blue' ? 'bg-blue-500/20' :
                    action.color === 'green' ? 'bg-green-500/20' :
                    'bg-purple-500/20'
                  }`}>
                    <Icon className={`h-6 w-6 ${
                      action.color === 'red' ? 'text-red-400' :
                      action.color === 'blue' ? 'text-blue-400' :
                      action.color === 'green' ? 'text-green-400' :
                      'text-purple-400'
                    }`} />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{action.title}</h3>
                  <p className="text-sm text-gray-300">{action.description}</p>
                </Component>
              );
            })}
          </div>
        </motion.div>

        {/* Crisis Hotlines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Crisis Hotlines</h2>
          
          {/* Region Selector */}
          <div className="flex justify-center mb-6">
            <div className="bg-dark-700 rounded-2xl p-2 shadow-lg border border-dark-600">
              {Object.entries({ us: 'United States', uk: 'United Kingdom', canada: 'Canada' }).map(([code, name]) => (
                <button
                  key={code}
                  onClick={() => setSelectedRegion(code)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    selectedRegion === code
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyContacts[selectedRegion as keyof typeof emergencyContacts].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-700 rounded-2xl shadow-lg border border-dark-600 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-white text-lg">{contact.name}</h3>
                  <div className="flex items-center text-green-400 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {contact.available}
                  </div>
                </div>
                
                <div className={`flex items-center mb-4 p-4 rounded-xl ${
                  contact.type === 'call' ? 'bg-green-500/20 border border-green-500/30' : 'bg-blue-500/20 border border-blue-500/30'
                }`}>
                  {contact.type === 'call' ? (
                    <Phone className="h-6 w-6 text-green-400 mr-3" />
                  ) : (
                    <MessageCircle className="h-6 w-6 text-blue-400 mr-3" />
                  )}
                  <span className="text-2xl font-bold text-white">{contact.number}</span>
                </div>
                
                <a
                  href={contact.type === 'call' ? `tel:${contact.number}` : `sms:${contact.number.split(' ').pop()}`}
                  className={`block w-full text-center py-3 rounded-xl font-medium transition-all ${
                    contact.type === 'call'
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {contact.type === 'call' ? 'Call Now' : 'Send Text'}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coping Strategies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Coping Strategies While Waiting for Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {copingStrategies.map((strategy, index) => (
              <div key={index} className="bg-dark-700 rounded-2xl shadow-lg border border-dark-600 p-6">
                <h3 className="font-semibold text-white mb-4">{strategy.title}</h3>
                <ol className="space-y-2">
                  {strategy.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <span className="bg-primary-500/20 text-primary-300 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0 border border-primary-500/30">
                        {stepIndex + 1}
                      </span>
                      <span className="text-gray-300">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl p-8 text-center border border-primary-500/30"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Remember</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-dark-700 rounded-xl p-6 shadow-sm border border-dark-600">
              <Users className="h-8 w-8 text-primary-400 mb-3" />
              <h3 className="font-semibold text-white mb-2">You're Not Alone</h3>
              <p className="text-gray-300 text-sm">
                Millions of people experience mental health crises. Seeking help is a sign of strength, not weakness.
              </p>
            </div>
            <div className="bg-dark-700 rounded-xl p-6 shadow-sm border border-dark-600">
              <Heart className="h-8 w-8 text-red-400 mb-3" />
              <h3 className="font-semibold text-white mb-2">This Will Pass</h3>
              <p className="text-gray-300 text-sm">
                Crisis feelings are temporary. With the right support and treatment, you can feel better.
              </p>
            </div>
            <div className="bg-dark-700 rounded-xl p-6 shadow-sm border border-dark-600">
              <Shield className="h-8 w-8 text-green-400 mb-3" />
              <h3 className="font-semibold text-white mb-2">Help is Available</h3>
              <p className="text-gray-300 text-sm">
                Professional help is available 24/7. Crisis counselors are trained to support you through this.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CrisisPage;
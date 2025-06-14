import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, User, Mail, Lock, Heart, Target, Calendar } from 'lucide-react';


const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthDate: '',
    goals: [] as string[],
    experience: '',
    preferences: {
      notifications: true,
      reminders: true,
      privacy: 'friends'
    }
  });
  const navigate = useNavigate();

  const steps = [
    {
      title: 'Welcome to SafeSpace',
      subtitle: 'Let\'s create your account',
      component: PersonalInfoStep
    },
    {
      title: 'Your Mental Health Goals',
      subtitle: 'What would you like to focus on?',
      component: GoalsStep
    },
    {
      title: 'Personalize Your Experience',
      subtitle: 'Help us tailor SafeSpace for you',
      component: PreferencesStep
    },
    {
      title: 'You\'re All Set!',
      subtitle: 'Welcome to your mental health journey',
      component: CompletionStep
    }
  ];

const handleNext = async () => {
  if (currentStep < steps.length - 1) {
    setCurrentStep(currentStep + 1);
  } else {
    try {
      const res = await fetch("http://localhost:3001/api/onboarding", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error('Failed to submit onboarding data');
      }

      const data = await res.json();

      // ✅ Save user to localStorage
      localStorage.setItem("user", JSON.stringify(data.user));

      // ✅ Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Onboarding submission failed:', error);
    }
  }
};



  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (updates: any) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const StepComponent = steps[currentStep].component;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center py-12 px-4"
    >
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-300">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="text-sm text-gray-400">
              {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-dark-600 rounded-full h-2">
            <motion.div
              className="bg-primary-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="bg-dark-700 rounded-2xl shadow-xl p-8 border border-dark-600"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              {steps[currentStep].title}
            </h1>
            <p className="text-gray-300">
              {steps[currentStep].subtitle}
            </p>
          </div>

          <StepComponent
            formData={formData}
            updateFormData={updateFormData}
          />

          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${
                currentStep === 0
                  ? 'text-gray-500 cursor-not-allowed'
                  : 'text-gray-300 hover:text-white hover:bg-dark-600'
              }`}
            >
              <ChevronLeft className="mr-2 h-5 w-5" />
              Previous
            </button>

            <button
              onClick={handleNext}
              className="flex items-center px-8 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-all transform hover:scale-105"
            >
              {currentStep === steps.length - 1 ? 'Get Started' : 'Continue'}
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Step Components
function PersonalInfoStep({ formData, updateFormData }: any) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            First Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => updateFormData({ firstName: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-dark-600 border border-dark-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              placeholder="Enter your first name"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Last Name
          </label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => updateFormData({ lastName: e.target.value })}
            className="w-full px-4 py-3 bg-dark-600 border border-dark-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="email"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            className="w-full pl-10 pr-4 py-3 bg-dark-600 border border-dark-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="password"
            value={formData.password}
            onChange={(e) => updateFormData({ password: e.target.value })}
            className="w-full pl-10 pr-4 py-3 bg-dark-600 border border-dark-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
            placeholder="Create a secure password"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Date of Birth
        </label>
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="date"
            value={formData.birthDate}
            onChange={(e) => updateFormData({ birthDate: e.target.value })}
            className="w-full pl-10 pr-4 py-3 bg-dark-600 border border-dark-500 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
          />
        </div>
      </div>
    </div>
  );
}

function GoalsStep({ formData, updateFormData }: any) {
  const goals = [
    { id: 'anxiety', label: 'Manage Anxiety', icon: '🧘' },
    { id: 'depression', label: 'Combat Depression', icon: '🌅' },
    { id: 'stress', label: 'Reduce Stress', icon: '💆' },
    { id: 'sleep', label: 'Improve Sleep', icon: '😴' },
    { id: 'relationships', label: 'Better Relationships', icon: '❤️' },
    { id: 'self-care', label: 'Practice Self-Care', icon: '🌸' },
    { id: 'confidence', label: 'Build Confidence', icon: '💪' },
    { id: 'mindfulness', label: 'Increase Mindfulness', icon: '🧠' }
  ];

  const toggleGoal = (goalId: string) => {
    const currentGoals = formData.goals;
    const updatedGoals = currentGoals.includes(goalId)
      ? currentGoals.filter((id: string) => id !== goalId)
      : [...currentGoals, goalId];
    updateFormData({ goals: updatedGoals });
  };

  return (
    <div>
      <p className="text-gray-300 mb-6 text-center">
        Select all that apply. You can always change these later.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {goals.map((goal) => (
          <motion.button
            key={goal.id}
            onClick={() => toggleGoal(goal.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 rounded-xl border-2 text-center transition-all ${
              formData.goals.includes(goal.id)
                ? 'border-primary-500 bg-primary-500/20 text-primary-300'
                : 'border-dark-500 hover:border-primary-500/50 hover:bg-dark-600 text-gray-300'
            }`}
          >
            <div className="text-2xl mb-2">{goal.icon}</div>
            <div className="font-medium text-sm">{goal.label}</div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function PreferencesStep({ formData, updateFormData }: any) {
  const experiences = [
    { value: 'beginner', label: 'New to mental health tools' },
    { value: 'some', label: 'Some experience with apps/therapy' },
    { value: 'experienced', label: 'Very experienced' }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">
          What's your experience with mental health tools?
        </h3>
        <div className="space-y-3">
          {experiences.map((exp) => (
            <label key={exp.value} className="flex items-center p-4 bg-dark-600 border border-dark-500 rounded-lg cursor-pointer hover:bg-dark-500 transition-colors">
              <input
                type="radio"
                name="experience"
                value={exp.value}
                checked={formData.experience === exp.value}
                onChange={(e) => updateFormData({ experience: e.target.value })}
                className="text-primary-600 focus:ring-primary-500 bg-dark-600 border-dark-500"
              />
              <span className="ml-3 font-medium text-white">{exp.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">
          Notification Preferences
        </h3>
        <div className="space-y-4">
          <label className="flex items-center justify-between p-4 bg-dark-600 border border-dark-500 rounded-lg">
            <div>
              <div className="font-medium text-white">Daily Check-ins</div>
              <div className="text-sm text-gray-300">Get reminded to log your mood</div>
            </div>
            <input
              type="checkbox"
              checked={formData.preferences.notifications}
              onChange={(e) => updateFormData({
                preferences: { ...formData.preferences, notifications: e.target.checked }
              })}
              className="text-primary-600 focus:ring-primary-500 bg-dark-600 border-dark-500"
            />
          </label>
          <label className="flex items-center justify-between p-4 bg-dark-600 border border-dark-500 rounded-lg">
            <div>
              <div className="font-medium text-white">Wellness Reminders</div>
              <div className="text-sm text-gray-300">Tips and encouragement</div>
            </div>
            <input
              type="checkbox"
              checked={formData.preferences.reminders}
              onChange={(e) => updateFormData({
                preferences: { ...formData.preferences, reminders: e.target.checked }
              })}
              className="text-primary-600 focus:ring-primary-500 bg-dark-600 border-dark-500"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

function CompletionStep({ formData }: any) {
  return (
    <div className="text-center py-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
        className="mb-6"
      >
        <Heart className="h-16 w-16 text-primary-400 mx-auto" />
      </motion.div>
      <h2 className="text-2xl font-bold text-white mb-4">
        Welcome to SafeSpace, {formData.firstName}!
      </h2>
      <p className="text-gray-300 mb-6">
        Your account has been created successfully. You're ready to begin your 
        personalized mental health journey with AI-powered support, mood tracking, 
        and community connection.
      </p>
      <div className="bg-primary-500/20 p-6 rounded-xl border border-primary-500/30">
        <h3 className="font-semibold text-primary-300 mb-2">What's Next?</h3>
        <ul className="text-sm text-primary-200 space-y-1">
          <li>• Complete your first mood check-in</li>
          <li>• Explore your personalized dashboard</li>
          <li>• Try our AI counselor for guidance</li>
          <li>• Join our supportive community</li>
        </ul>
      </div>
    </div>
  );
}

export default OnboardingPage;
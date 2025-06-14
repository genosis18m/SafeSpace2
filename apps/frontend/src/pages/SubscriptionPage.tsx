import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, Zap, Heart, Star, CreditCard, Shield, Users } from 'lucide-react';

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: { monthly: 0, yearly: 0 },
      description: 'Perfect for getting started with mental wellness',
      icon: Heart,
      color: 'gray',
      features: [
        'Basic mood tracking',
        'Limited AI counselor sessions (5/month)',
        'Community access',
        'Basic progress insights',
        'Crisis intervention access'
      ],
      limitations: [
        'Limited features',
        'Basic support',
        'No premium content'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: { monthly: 19.99, yearly: 199.99 },
      description: 'Complete mental wellness toolkit for serious progress',
      icon: Crown,
      color: 'primary',
      popular: true,
      features: [
        'Unlimited mood tracking with advanced analytics',
        'Unlimited AI counselor sessions',
        'Premium community features',
        'Detailed progress reports & insights',
        'Priority crisis intervention (< 8 min response)',
        'Personalized content recommendations',
        'Advanced goal setting & tracking',
        'Export data & reports',
        'Priority customer support'
      ]
    },
    {
      id: 'family',
      name: 'Family',
      price: { monthly: 34.99, yearly: 349.99 },
      description: 'Mental wellness for the whole family (up to 6 members)',
      icon: Users,
      color: 'secondary',
      features: [
        'Everything in Premium',
        'Up to 6 family member accounts',
        'Family dashboard & insights',
        'Shared goals & challenges',
        'Family therapist matching',
        'Parental controls & monitoring',
        'Family crisis intervention',
        'Dedicated family support specialist'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Premium User',
      content: 'MindCare has transformed my approach to mental health. The AI counselor is incredibly helpful, and the progress tracking keeps me motivated.',
      rating: 5
    },
    {
      name: 'David L.',
      role: 'Family Plan User',
      content: 'Having the whole family on one plan has been amazing. We can support each other while maintaining privacy. Highly recommended!',
      rating: 5
    },
    {
      name: 'Maya P.',
      role: 'Premium User',
      content: 'The crisis intervention feature gave me peace of mind. Knowing help is always available has reduced my anxiety significantly.',
      rating: 5
    }
  ];

  const handleSubscribe = (planId: string) => {
    // Here you would integrate with your payment processor
    alert(`Subscribing to ${planId} plan! This would redirect to payment processing.`);
  };

  const getSavings = (plan: any) => {
    if (billingCycle === 'yearly' && plan.price.monthly > 0) {
      const monthlyCost = plan.price.monthly * 12;
      const yearlyCost = plan.price.yearly;
      const savings = monthlyCost - yearlyCost;
      const percentage = Math.round((savings / monthlyCost) * 100);
      return { amount: savings, percentage };
    }
    return null;
  };

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
              <CreditCard className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Choose Your Mental Wellness Plan</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Invest in your mental health with our comprehensive platform. 
            Start free, upgrade anytime, cancel whenever you need.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-dark-700 rounded-2xl p-2 shadow-lg border border-dark-600">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-3 rounded-xl font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-8 py-3 rounded-xl font-medium transition-all relative ${
                billingCycle === 'yearly'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const savings = getSavings(plan);
            const price = billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly;
            
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-dark-700 rounded-3xl shadow-xl border-2 p-8 ${
                  plan.popular 
                    ? 'border-primary-500 transform scale-105' 
                    : 'border-dark-600'
                } ${
                  selectedPlan === plan.id ? 'ring-4 ring-primary-500/30' : ''
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex p-4 rounded-full mb-4 ${
                    plan.color === 'primary' ? 'bg-primary-500/20 border border-primary-500/30' :
                    plan.color === 'secondary' ? 'bg-secondary-500/20 border border-secondary-500/30' :
                    'bg-gray-500/20 border border-gray-500/30'
                  }`}>
                    <Icon className={`h-8 w-8 ${
                      plan.color === 'primary' ? 'text-primary-400' :
                      plan.color === 'secondary' ? 'text-secondary-400' :
                      'text-gray-400'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-white">
                      ${price}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className="text-gray-300">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    )}
                  </div>

                  {savings && (
                    <div className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30">
                      Save ${savings.amount}/year ({savings.percentage}% off)
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSubscribe(plan.id)}
                  className={`w-full py-4 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg'
                      : plan.id === 'free'
                      ? 'bg-dark-600 text-gray-300 hover:bg-dark-500'
                      : 'bg-secondary-600 text-white hover:bg-secondary-700 shadow-lg'
                  }`}
                >
                  {plan.id === 'free' ? 'Get Started Free' : 'Start Free Trial'}
                </button>

                {plan.id !== 'free' && (
                  <p className="text-center text-sm text-gray-400 mt-4">
                    14-day free trial • Cancel anytime
                  </p>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Features Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-dark-700 rounded-3xl shadow-xl border border-dark-600 p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Premium?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-primary-500/30">
                <Zap className="h-8 w-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Unlimited Access</h3>
              <p className="text-gray-300">
                No limits on AI counselor sessions, mood tracking, or premium features. 
                Use MindCare as much as you need.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-secondary-500/30">
                <Shield className="h-8 w-8 text-secondary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Priority Support</h3>
              <p className="text-gray-300">
                Get priority crisis intervention with response times under 8 minutes 
                and dedicated customer support.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent-500/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-accent-500/30">
                <Crown className="h-8 w-8 text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Advanced Analytics</h3>
              <p className="text-gray-300">
                Detailed progress reports, personalized insights, and advanced 
                goal tracking to accelerate your wellness journey.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-dark-700 rounded-2xl shadow-lg border border-dark-600 p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl p-8 text-center border border-primary-500/30"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Questions? We're Here to Help
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our mental health platform is designed to be accessible, secure, and effective. 
            All plans include our core crisis intervention features because your safety is our priority.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            <div className="bg-dark-700 rounded-xl p-6 shadow-sm border border-dark-600">
              <h3 className="font-semibold text-white mb-2">Is my data secure?</h3>
              <p className="text-gray-300 text-sm">
                Yes, we use enterprise-grade encryption and comply with HIPAA standards 
                to protect your mental health data.
              </p>
            </div>
            <div className="bg-dark-700 rounded-xl p-6 shadow-sm border border-dark-600">
              <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-300 text-sm">
                Absolutely. You can cancel your subscription at any time with no 
                cancellation fees or penalties.
              </p>
            </div>
            <div className="bg-dark-700 rounded-xl p-6 shadow-sm border border-dark-600">
              <h3 className="font-semibold text-white mb-2">What's included in the free trial?</h3>
              <p className="text-gray-300 text-sm">
                Full access to all premium features for 14 days. No credit card 
                required to start your trial.
              </p>
            </div>
            <div className="bg-dark-700 rounded-xl p-6 shadow-sm border border-dark-600">
              <h3 className="font-semibold text-white mb-2">Do you offer refunds?</h3>
              <p className="text-gray-300 text-sm">
                Yes, we offer a 30-day money-back guarantee if you're not 
                completely satisfied with our service.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SubscriptionPage;
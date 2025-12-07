import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$69',
    period: '/month',
    description: 'Perfect for small teams getting started',
    icon: Star,
    color: 'from-slate-500 to-slate-600',
    features: [
      '500 call minutes included',
      'AI-powered calling',
      'Call logs & recordings',
      'Basic integrations',
      'Email support',
      'Standard compliance'
    ],
    popular: false
  },
  {
    name: 'Growth',
    price: '$279',
    period: '/month',
    description: 'Ideal for growing businesses',
    icon: Zap,
    color: 'from-blue-600 to-purple-600',
    features: [
      '2,000 call minutes included',
      'Advanced AI conversations',
      'CRM synchronization',
      'Admin portal access',
      'Priority support',
      'Advanced compliance',
      'Custom call flows',
      'A/B testing'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large-scale operations',
    icon: Crown,
    color: 'from-indigo-600 to-violet-600',
    features: [
      'Unlimited call minutes',
      'Custom AI training',
      'Advanced analytics',
      'Dedicated support',
      'Custom integrations',
      'SLA guarantee',
      'White-label options',
      'Multi-region deployment'
    ],
    popular: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business size and calling volume. 
            All plans include core AI features and can be upgraded anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-sm border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular 
                  ? 'border-transparent bg-gradient-to-br from-blue-50 to-purple-50 shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-teal-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.color} mb-4`}>
                    <plan.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {plan.description}
                  </p>
                  
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:-translate-y-0.5'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <span className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              Cancel anytime
            </span>
            <span className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              24/7 support
            </span>
            <span className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              99.9% uptime SLA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
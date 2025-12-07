import React from 'react';
import { Upload, Bot, Calendar, Zap, BarChart3, Settings } from 'lucide-react';

const features = [
  {
    icon: Upload,
    title: 'Excel Upload & Validation',
    description: 'Import and verify thousands of contacts instantly with our smart data validation system.',
    gradient: 'from-blue-600 to-blue-700'
  },
  {
    icon: Bot,
    title: 'AI-Powered Conversations',
    description: 'Natural-sounding, multilingual voice AI that adapts to customer responses in real-time.',
    gradient: 'from-purple-600 to-purple-700'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Automatic booking and rescheduling with calendar integration and timezone management.',
    gradient: 'from-teal-500 to-teal-600'
  },
  {
    icon: Zap,
    title: 'CRM Integration',
    description: 'Seamlessly sync with HubSpot, Salesforce, Zoho, and 50+ other platforms you already use.',
    gradient: 'from-indigo-600 to-indigo-700'
  },
  {
    icon: Settings,
    title: 'Automated Campaigns',
    description: 'Set time windows, retry logic, and compliance rules for fully automated outreach.',
    gradient: 'from-violet-600 to-violet-700'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track call outcomes, engagement metrics, and ROI with comprehensive reporting dashboards.',
    gradient: 'from-cyan-600 to-cyan-700'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to automate voice outreach, from contact management 
            to advanced analytics, all in one powerful platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to 10x Your Outreach?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of businesses already using AI voice calls to scale their operations.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
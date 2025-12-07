import React from 'react';
import { Upload, Settings, Phone, BarChart } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload your contact list',
    description: 'Import contacts from Excel, CSV, or connect your CRM. Our system validates and formats data automatically.',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: Settings,
    title: 'Configure call flow & script',
    description: 'Set your objectives, customize conversation flows, and define success metrics for your campaign.',
    color: 'from-purple-600 to-purple-700'
  },
  {
    icon: Phone,
    title: 'AI places calls & captures responses',
    description: 'Our AI conducts natural conversations, qualifies leads, and books meetings automatically.',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: BarChart,
    title: 'Auto-schedules meetings & sends reports',
    description: 'Calendar invites are sent, follow-ups scheduled, and detailed reports delivered to your inbox.',
    color: 'from-indigo-600 to-indigo-700'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with our simple 4-step process. 
            No technical setup required.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-between mb-16">
            <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 via-purple-600 via-teal-500 to-indigo-600 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-xl group-hover:scale-110 transition-transform duration-200`}>
                    {index + 1}
                  </div>
                  <div className={`absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r ${step.color} opacity-20 scale-150 group-hover:scale-175 transition-transform duration-300`}></div>
                </div>

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${step.color} mb-4 group-hover:scale-105 transition-transform duration-200`}>
                  <step.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Launch your first AI voice campaign in under 10 minutes. 
              No credit card required for your free trial.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
              Start Free Trial Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
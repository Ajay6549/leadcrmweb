import React from 'react';
import { TrendingUp, Clock, Users, Award, Phone } from 'lucide-react';

const stats = [
  {
    icon: Phone,
    number: '10,000+',
    label: 'Calls Automated',
    description: 'Daily voice interactions powered by AI',
    color: 'from-blue-600 to-blue-700'
  },
  {
    icon: TrendingUp,
    number: '85%',
    label: 'Engagement Rate',
    description: 'Higher than traditional cold calling',
    color: 'from-purple-600 to-purple-700'
  },
  {
    icon: Clock,
    number: '5x',
    label: 'Faster Outreach',
    description: 'Compared to manual calling processes',
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: Award,
    number: '95%',
    label: 'Client Satisfaction',
    description: 'Based on customer feedback scores',
    color: 'from-indigo-600 to-indigo-700'
  }
];

const SocialProof: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of companies that have transformed their outreach 
            with AI-powered voice calling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              
              <div className="text-lg font-semibold text-gray-800 mb-2">
                {stat.label}
              </div>
              
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-4">
                "CallOps increased our lead qualification rate by 300% while reducing our team's workload."
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Sarah Mitchell</div>
                  <div className="text-gray-600">Head of Sales, TechFlow Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
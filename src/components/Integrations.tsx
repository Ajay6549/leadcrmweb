import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

const integrations = [
  {
    name: 'HubSpot',
    description: 'CRM & Marketing',
    logo: '🔵',
    category: 'CRM'
  },
  {
    name: 'Salesforce',
    description: 'Sales Cloud',
    logo: '🌤️',
    category: 'CRM'
  },
  {
    name: 'Zoho',
    description: 'Business Suite',
    logo: '🟠',
    category: 'CRM'
  },
  {
    name: 'Pipedrive',
    description: 'Sales Pipeline',
    logo: '🟢',
    category: 'CRM'
  },
  {
    name: 'Zapier',
    description: 'Automation',
    logo: '⚡',
    category: 'Automation'
  },
  {
    name: 'Calendly',
    description: 'Scheduling',
    logo: '📅',
    category: 'Scheduling'
  },
  {
    name: 'Slack',
    description: 'Team Chat',
    logo: '💬',
    category: 'Communication'
  },
  {
    name: 'Microsoft Teams',
    description: 'Collaboration',
    logo: '🎯',
    category: 'Communication'
  }
];

const Integrations: React.FC = () => {
  return (
    <section id="integrations" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect CallOps with your existing tools and workflows. 
            We integrate with 50+ popular business applications.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group border border-gray-200"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {integration.logo}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {integration.name}
              </h3>
              <p className="text-sm text-gray-600">
                {integration.description}
              </p>
              <div className="mt-3">
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {integration.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Features */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 ml-4">
                Real-Time Sync
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Automatically sync call results, lead updates, and meeting bookings 
              with your CRM in real-time. No manual data entry required.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Bi-directional data synchronization
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Custom field mapping
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Automated workflow triggers
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-3 rounded-lg">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 ml-4">
                Easy Setup
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Connect your favorite tools in minutes with our pre-built integrations. 
              Most connections require just a few clicks to set up.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                One-click authentication
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                Pre-configured templates
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                24/7 integration support
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need a custom integration? Our team can build it for you.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
            Request Integration
          </button>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
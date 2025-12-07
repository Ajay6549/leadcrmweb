import React from 'react';
import { ShoppingCart, CreditCard, Truck, Coffee, Users, Target, MessageSquare, BarChart } from 'lucide-react';

const industries = [
  {
    icon: ShoppingCart,
    title: 'Retail & eCommerce',
    description: 'Promotions, Order Confirmations, COD Verification',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: CreditCard,
    title: 'BFSI',
    description: 'Loan Reminders, KYC Verification, Policy Renewals',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: Truck,
    title: 'Logistics',
    description: 'Shipment Updates, Delivery Scheduling',
    color: 'bg-teal-50 text-teal-600'
  },
  {
    icon: Coffee,
    title: 'Hospitality',
    description: 'Reservations, Upselling, Feedback',
    color: 'bg-indigo-50 text-indigo-600'
  },
  {
    icon: Users,
    title: 'HR & Recruitment',
    description: 'Screening, Interview Reminders',
    color: 'bg-violet-50 text-violet-600'
  },
  {
    icon: Target,
    title: 'Inside Sales',
    description: 'Lead Qualification, Follow-Ups',
    color: 'bg-cyan-50 text-cyan-600'
  },
  {
    icon: MessageSquare,
    title: 'Feedback & Surveys',
    description: 'CSAT/NPS Collection',
    color: 'bg-emerald-50 text-emerald-600'
  }
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From retail to healthcare, our AI voice platform adapts to your industry's 
            specific needs and communication requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className={`inline-flex p-3 rounded-xl ${industry.color} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <industry.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {industry.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Don't see your industry? We customize solutions for any business.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
            Discuss Your Use Case
          </button>
        </div>
      </div>
    </section>
  );
};

export default Industries;
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface FinalCTAProps {
  onSignInClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onSignInClick }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white transform translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Your Voice, At Scale
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Let AI handle your calls while you focus on closing deals.
        </p>

        {/* Key Benefits */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center">
            <CheckCircle className="h-6 w-6 mr-2 text-teal-300" />
            <span className="text-lg">No Setup Fees</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-6 w-6 mr-2 text-teal-300" />
            <span className="text-lg">14-Day Free Trial</span>
          </div>
          <div className="flex items-center">
            <CheckCircle className="h-6 w-6 mr-2 text-teal-300" />
            <span className="text-lg">Cancel Anytime</span>
          </div>
        </div>

        {/* Main CTA */}
        <div className="space-y-4">
          <button 
            onClick={onSignInClick}
            className="bg-white text-gray-900 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-2xl flex items-center justify-center mx-auto"
          >
            Start Free Trial
            <ArrowRight className="ml-3 h-6 w-6" />
          </button>
          
          <p className="text-sm opacity-75">
            Get started in under 5 minutes • No credit card required
          </p>
        </div>

        {/* Secondary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-200">
            Schedule Demo
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-200">
            Talk to Sales
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-white border-opacity-30">
          <p className="text-sm opacity-75 mb-4">
            Trusted by 500+ growing businesses
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold">StartupCo</div>
            <div className="text-2xl font-bold">TechFlow</div>
            <div className="text-2xl font-bold">SalesBoost</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
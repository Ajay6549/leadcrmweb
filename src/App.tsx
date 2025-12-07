import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Integrations from './components/Integrations';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import LinkedInProspector from './components/LinkedInProspector';
import ContinuousScroll from './components/ContinuousScroll';

function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleSignInOpen = () => setIsSignInOpen(true);
  const handleSignInClose = () => setIsSignInOpen(false);

  return (
    <div className="min-h-screen bg-white">
      {/* <Header onSignInClick={handleSignInOpen} /> */}
      <Navbar onSignInClick={handleSignInOpen} />
      <Hero onSignInClick={handleSignInOpen} />
      <ContinuousScroll />
      <LinkedInProspector />
      {/* <SignInModal    /> */}
      <Industries />
      <Features />
      <HowItWorks />
      <SocialProof />
      <Pricing />
      <Integrations />
      <FinalCTA onSignInClick={handleSignInOpen} />
      <Footer />
      <SignIn isOpen={isSignInOpen} onClose={handleSignInClose} />

      {isSignInOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <p className="text-gray-600 mb-6">Get started with LeadCRM.io</p>
            <button
              onClick={handleSignInClose}
              className="w-full py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}


    </div>
  );
}

export default App;
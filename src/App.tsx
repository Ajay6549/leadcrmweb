import React from 'react';
import { useState } from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import LinkedInProspector from './components/LinkedInProspector';
import ContinuousScroll from './components/ContinuousScroll';
import DataEnrichment from './components/DataEnrichment';
import FloatingCTA from './components/FloatingCTA';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CompleteSolutions from './components/CompleteSolutions';
import SupportedCRMs from './components/SupportedCRMs';
import LinkedInPowerhouse from './components/LinkedInPowerhouse';

function App() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const handleSignInOpen = () => setIsSignInOpen(true);
  const handleSignInClose = () => setIsSignInOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onSignInClick={handleSignInOpen} />
      <Hero onSignInClick={handleSignInOpen} />
      <ContinuousScroll />
      <LinkedInProspector />
      <HowItWorks />
      <Testimonials />
      <CompleteSolutions />
      <SupportedCRMs />
      <DataEnrichment />
      <LinkedInPowerhouse onSignInClick={handleSignInOpen} />
      <Footer />
      {/* <FloatingCTA onSignInClick={handleSignInOpen} /> */}
      <SignIn isOpen={isSignInOpen} onClose={handleSignInClose} />
    </div>
  );
}

export default App;
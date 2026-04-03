import React, { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load components below the fold for faster Initial Load
const DifferentiatorSection = React.lazy(() => import('./components/DifferentiatorSection'));
const ProblemSection = React.lazy(() => import('./components/ProblemSection'));
const SolutionSection = React.lazy(() => import('./components/SolutionSection'));
const FeaturesSection = React.lazy(() => import('./components/FeaturesSection'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const DemoSection = React.lazy(() => import('./components/DemoSection'));
const SignupForm = React.lazy(() => import('./components/SignupForm'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-[#fbfbfb] font-sans overflow-x-hidden text-slate-800">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="py-32 flex items-center justify-center text-brand font-medium">Loading network...</div>}>
          <DifferentiatorSection />
          <ProblemSection />
          <SolutionSection />
          <FeaturesSection />
          <Testimonials />
          <DemoSection />
          <div id="signup">
            <SignupForm />
          </div>
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

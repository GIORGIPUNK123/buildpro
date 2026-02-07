import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cta } from './components/Cta';
import { Faq } from './components/Faq';
import { Toaster } from './components/ui/sonner';
import { SEO } from './components/SEO';
import {
  StructuredData,
  organizationSchema,
} from './components/StructuredData';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    ReactGA.initialize('G-BP7TBYZ2TJ');
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }, []);

  return (
    <div className='bg-white'>
      <SEO
        title='BuildPro - Web Development & Software Solutions'
        description='Premium web development and software solutions for your business. Expert team ready to build your digital future.'
      />
      <StructuredData type='Organization' data={organizationSchema} />

      <Toaster position='top-right' richColors />
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <TechStack />
      <Projects />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

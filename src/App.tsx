import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cta } from './components/Cta';
import { Faq } from './components/Faq';
import { Toaster } from './components/ui/sonner';

export const App = () => {
  return (
    <div className='bg-white'>
      <Toaster position='top-right' richColors />
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <TechStack />
      <Projects />
      <Testimonials />
      <Faq />
      <Cta />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

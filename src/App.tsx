import { FirstSection } from './components/FirstSection';
import { Header } from './components/Header';
import { SecondSection } from './components/SecondSection';
import './style.css';

export const App = () => {
  return (
    <div className='bg-white text-dark font-inter'>
      <Header />
      <FirstSection />
      <div className='h-12 bg-primary-muted'></div>
      <SecondSection />
    </div>
  );
};

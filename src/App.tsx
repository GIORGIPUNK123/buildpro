import { useCallback, useState } from 'react';
import { FirstSection } from './components/FirstSection';
import { Header } from './components/Header';
import { SecondSection } from './components/SecondSection';
import { ThirdSection } from './components/ThirdSection';
import './style.css';

export const App = () => {
  const [burgerClicked, setBurgerClicked] = useState(false);
  console.log('burgerClicked: ', burgerClicked);
  const handleBurgerClick = useCallback(() => {
    setBurgerClicked((prev) => !prev);
  }, []);
  return (
    <div className='bg-white text-dark font-inter'>
      <Header onClick={handleBurgerClick} burgerClicked={burgerClicked} />
      <FirstSection />
      <div className='h-12 bg-primary-muted' />
      <SecondSection />
      <div className='h-12 bg-primary-muted' />
      <ThirdSection />
    </div>
  );
};

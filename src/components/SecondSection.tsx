import { Card } from './Card';
// import itImg from '../images/it.png';
import designImg from '../images/Custom-Website-Design.webp';
import seoImg from '../images/AI-SEO-Optimization.webp';
import mobileImg from '../images/Mobile-Friendly.png';

export const SecondSection = () => {
  return (
    <>
      <section className='flex flex-col items-center py-26 lg:py-56 bg-gradient-to-r from-accent/10 to-background'>
        <h2 className='mb-24 text-5xl'>What We Offer</h2>
        <div className='flex flex-wrap justify-center gap-24'>
          <Card
            heading='Mobile-Friendly Websites'
            description='Ensure your website looks great on all devices. We design responsive websites that adapt to any screen size.'
            imageSrc={mobileImg}
          />
          <Card
            heading='Custom Website Design'
            description='We create unique and stunning websites that perfectly fit your brand. Let us bring your vision to life.'
            imageSrc={designImg}
          />
          <Card
            heading='SEO Optimization'
            description="Boost your website's search engine ranking with our SEO services. We help drive more traffic and increase visibility."
            imageSrc={seoImg}
          />
        </div>
      </section>
    </>
  );
};

import landingImg from '../images/landing-screenshot.png';
import portfolioImg from '../images/portfolio.png';
import { ProjectCard } from './ProjectCard';
export const ThirdSection = () => {
  return (
    <section className='flex flex-col py-56 from-accent/10 to-background'>
      <div className='flex flex-col items-center'>
        <h2 className='text-5xl font-medium underline underline-offset-[16px] '>
          Recent Projects
        </h2>

        <div className='flex flex-wrap justify-center w-full gap-12 px-4 py-24'>
          <ProjectCard
            heading='Portfolio'
            imageSrc={portfolioImg}
            webLink='giorgi-portfolio.vercel.app'
            gitLink='https://github.com/GIORGIPUNK123/Portfolio'
            description='This is an unique Portfolio which has "terminal", you can see all my projects, information about me and other stuff'
          />
          <ProjectCard
            heading='Landing Page'
            imageSrc={landingImg}
            webLink='https://11landingpagedemo11.netlify.app'
            gitLink='https://github.com/GIORGIPUNK123/landing-page'
            description='Created Landing Page to showcase my skills abilities'
          />
          <ProjectCard
            heading='Other'
            description='This website is currently in development'
          />
        </div>
      </div>
    </section>
  );
};

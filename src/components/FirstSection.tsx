import itImg from '../images/it.png';
export const FirstSection = () => {
  return (
    <section className='py-64 bg-gradient-to-r from-accent/10 to-background'>
      <div className='container flex flex-col items-center justify-between gap-12 px-6 mx-auto md:flex-row'>
        <div className='flex-1 space-y-8 text-center md:text-left'>
          <h1 className='text-4xl font-bold leading-tight md:text-5xl'>
            Build Stunning, Interactive Websites
            <br className='hidden md:block' />
            With the BuildPro Team
          </h1>

          <p className='max-w-lg text-lg text-muted'>
            We craft modern, high-performance websites with great design and
            robust technology. Let's bring your ideas to life!
          </p>

          <button className='px-8 py-4 mt-6 text-lg font-semibold text-white transition-all duration-300 shadow-lg cursor-pointer  hover:scale-110 bg-primary hover:bg-primary-hover rounded-xl hover:shadow-xl'>
            Request a Website
          </button>
        </div>

        <div className='relative flex-1 max-w-[800px]'>
          <img
            src={itImg}
            alt='Web design preview'
            className='w-full shadow-xl rounded-2xl'
          />

          <div className='absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white bg-overlay/80 rounded-2xl'>
            <h3 className='mb-4 text-3xl font-semibold'>Need a Website?</h3>
            <button className='px-6 py-3 text-xl font-semibold transition-all duration-300 rounded-lg cursor-pointer bg-accent hover:scale-110 hover:bg-accent-hover'>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

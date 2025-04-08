export const Header = (props: { burgerClicked: boolean; onClick: any }) => {
  return (
    <>
      <div className='fixed w-full z-20 lg:static font-mono shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] items-center justify-between flex h-20 md:h-24 lg:h-32 bg-[#fcfcfc] px-16 md:px-32'>
        <span className='text-4xl font-medium '>LOGO</span>
        <div
          onClick={props.onClick}
          className='flex flex-col justify-between rounded-md cursor-pointer h-9 md:h-12 lg:hidden aspect-square'
        >
          {[0, 1, 2].map((_) => (
            <div
              className={` h-[9px] md:h-3 bg-black ${
                _ == 0 ? 'rounded-t-sm' : _ == 1 ? '' : 'rounded-b-sm'
              } `}
            />
          ))}
        </div>
        <nav className='hidden lg:flex'>
          <ul className='flex gap-12 text-2xl '>
            <li className='duration-200 border-b-4 cursor-pointer border-b-transparent hover:border-b-black'>
              Home
            </li>
            <li className='duration-200 border-b-4 cursor-pointer border-b-transparent hover:border-b-black'>
              Finished Projects
            </li>
            <li className='duration-200 border-b-4 cursor-pointer border-b-transparent hover:border-b-black'>
              Contact Us
            </li>
          </ul>
        </nav>
        <nav
          className={`fixed ${
            !props.burgerClicked && 'hidden'
          } right-0 z-20 w-full text-3xl bg-[#fcfcfc] py-16 top-20 md:top-24`}
        >
          <ul className='flex flex-col items-center gap-12'>
            {['Home', 'Finished Projects', 'Contact Us'].map((_, __) => (
              <li
                onClick={props.onClick}
                className='duration-200 border-b-4 cursor-pointer border-b-transparent hover:border-b-black'
              >
                {_}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

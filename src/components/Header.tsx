export const Header = () => {
  return (
    <>
      <div className=' items-center justify-between flex h-32 bg-[#fcfcfc] px-32'>
        <span className='text-4xl font-medium'>LOGO</span>
        <nav>
          <ul className='flex gap-12 text-2xl '>
            <li className=' cursor-pointer border-b-transparent border-b-4 hover:border-b-black duration-200 '>
              Home
            </li>
            <li className=' cursor-pointer border-b-transparent border-b-4 hover:border-b-black duration-200 '>
              Finished Projects
            </li>
            <li className=' cursor-pointer border-b-transparent border-b-4 hover:border-b-black duration-200 '>
              Contact Us
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

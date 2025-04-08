import loadingImg from '../images/loading.jpg';
export const ProjectCard = (props: {
  heading: string;
  description: string;
  imageSrc?: string;
  webLink?: string;
  gitLink?: string;
}) => {
  return (
    <div className='flex flex-col w-full max-w-[700px] items-center rounded-md p-8 gap-4 bg-white shadow-lg'>
      <h2 className='mb-4 font-mono text-3xl font-semibold'>{props.heading}</h2>

      <div
        className='flex items-center justify-center w-full transition-transform duration-100 bg-center bg-cover rounded-md shadow-2xl h-96 hover:scale-105'
        style={{
          backgroundImage: `url(${
            props.imageSrc ? props.imageSrc : loadingImg
          })`,
        }}
      >
        {!props.gitLink && !props.webLink ? (
          ''
        ) : (
          <div className='flex flex-col gap-6 mt-12'>
            <a
              target='_blank'
              href={props.webLink}
              className='text-center p-4 text-xl font-medium bg-primary hover:bg-primary-hover hover:scale-110 text-[#ffffff] duration-150 cursor-pointer shadow-2xl rounded-md hover:outline-none'
            >
              Open Website
            </a>
            <a
              target='_blank'
              href={props.gitLink}
              className='text-center p-4 text-xl font-medium bg-accent hover:bg-accent-hover text-[#ffffff] hover:scale-110 duration-150 cursor-pointer shadow-2xl rounded-md hover:outline-none '
            >
              Open Github
            </a>
          </div>
        )}
      </div>

      <p className='text-2xl text-center text-gray-700'>{props.description}</p>
    </div>
  );
};

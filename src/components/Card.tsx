export const Card = (props: {
  heading: string;
  description: string;
  imageSrc: string;
}) => {
  return (
    <div className='flex flex-col items-center bg-white p-8 rounded-lg shadow-lg max-w-md w-full min-h-[600px] md:max-w-lg'>
      <div className='w-full mb-6 h-2/3'>
        <img
          src={props.imageSrc}
          alt={props.heading}
          className='object-cover w-full h-full duration-150 rounded-lg hover:shadow-2xl hover:scale-110'
        />
      </div>
      <h2 className='mb-4 text-4xl font-semibold text-center'>
        {props.heading}
      </h2>
      <p className='text-2xl text-center text-gray-700'>{props.description}</p>
    </div>
  );
};

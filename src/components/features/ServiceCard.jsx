import React from 'react';

function ServiceCard({service}) {
  return (
    <div className="lg:w-[26vw] md:w-[40vw] border-solid  h-85 bg-gradient-to-r from-bodyColor to-[#202327] shadow-shadowOne hover:bg-gradient-to-b hover:from-black hover:to-1e2024 rounded-md transition-colors ease-in duration-100 ">
        <div className='flex flex-col p-12 gap-4'>
          <span className='text-2xl text-[#FF014B]'>{service.icon}</span>
          <h2 className="capitalize text-2xl">{service.Heading}</h2>
          <p className=''>{service.parag}</p>
        </div>
    </div>
  )
}

export default ServiceCard

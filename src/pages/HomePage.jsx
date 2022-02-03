import React from 'react';

export default function HomePage() {
  return (
    <div className='bg-cover bg-home-bg h-screen'>
      <div className='container mx-auto flex items-end justify-between '>
        <div className=' w-450 flex flex-col'>
          <span className='text-lg text-blue'>SO, YOU WANT TO TRAVEL TO</span>
          <span className='text-4xl text-white'>SPACE</span>
          <span className='text-default text-blue'>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </span>
        </div>
        <div className=''>
            <button className='bg-white text-black text-xl rounded-full w-64 h-64'>EXPLORE</button>
        </div>
      </div>
    </div>
  );
}

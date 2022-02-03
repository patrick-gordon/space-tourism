import React from 'react';
import CrewTabs from '../components/CrewTabs';

export default function Crew() {
  return (
    <div className='bg-crew-bg-mobile md:bg-crew-bg-tablet lg:bg-crew-bg-desktop bg-cover h-full'>
      <div>
        <span className='text-white text-default md:text-mobile lg:text-xl'>
          02 MEET YOUR CREW
        </span>
      </div>
      <CrewTabs />
    </div>
  );
}

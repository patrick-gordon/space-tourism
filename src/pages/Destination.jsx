import React from 'react';
import DestinationTabs from '../components/DestinationTabs';

export default function Destination() {
  return (
    <div className=' bg-destination-bg-mobile md:bg-destination-bg-tablet lg:bg-destination-bg-desktop bg-cover'>
      <div className=''>
        <span className='text-white text-default md:text-mobile lg:text-xl '>
          01 PICK YOUR DESTINATION
        </span>
      </div>
      <DestinationTabs />
    </div>
  );
}

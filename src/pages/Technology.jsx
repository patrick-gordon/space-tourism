import React from 'react';
import TechTabs from '../components/TechTabs';

export default function Technology() {
  return (
    <div className='bg-tech-bg-mobile md:bg-tech-bg-tablet lg:bg-tech-bg bg-cover h-screen '>
      <div>
        <span className='text-white text-default md:text-mobile lg:text-xl'>
          03 TECHNOLOGY
        </span>
      </div>
      <TechTabs />
    </div>
  );
}

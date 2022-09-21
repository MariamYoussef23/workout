import React from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
type Props = {};

const workoutcard = (props: Props) => {
  return (
    <div className="relative ">
      <div className="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="../images/pexels-anna-tarazevich-4839736.jpg"
          alt=""
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <div className="min-w-0 flex-1 ">
            <span className="absolute inset-0 " aria-hidden="true" />
            <p className="text-sm font-medium w-full text-gray-900 ">
              Jumping jacks
            </p>
            <p className="truncate text-sm w-full text-gray-500">
              10reps . 20kg{' '}
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default workoutcard;

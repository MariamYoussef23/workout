import React from 'react';
import CalendarWorkout from '../../components/calendarworkout';
import Layout from '../../components/layout';
import Workoutcard from '../../components/workoutcard';
import { startOfToday, format } from 'date-fns';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

type Props = {};

const Calender = (props: Props) => {
  let today = startOfToday();
  return (
    <>
      <Layout>
        <div className="px-4 py-5 sm:px-6 h-full ">
          <div className="py-5">
            <p className=" font-bold text-5xl"> Workout history</p>
          </div>
          <div className="flex flex-wrap -mx-3 overflow-hidden h-screen sm:-mx-3 md:-mx-2 lg:-mx-2 xl:-mx-1">
            <div className="  my-3 px-3 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2 pt-4">
              <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1 shadow-xl h-20 content-center  p-2">
                <div className="my-1 h-fit px-1 w-[48%] overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2 ">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
                    <div className="min-w-0 flex-1">
                      {/* <span className="absolute inset-0" aria-hidden="true" /> */}
                      <p className="text-sm font-medium text-gray-900">
                        Workout
                      </p>
                      <p className="truncate text-sm text-gray-500">Cardio</p>
                    </div>
                  </div>
                </div>

                <div className="my-1 w-[48%]  h-fit px-1 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
                  <div className="grid grid-cols-1 w-full gap-4 sm:grid-cols-4">
                    <div className="min-w-0 flex-1 ">
                      {/* <span className="absolute inset-0 " aria-hidden="true" /> */}
                      <p className="text-sm font-medium w-full text-gray-900 ">
                        Date
                      </p>
                      <p className="truncate text-sm w-full text-gray-500">
                        {format(today, ' dd MMM yyyy')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-10">
                <Workoutcard />
              </div>
            </div>
            <div className="my-3 px-3 w-1/2 overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
              <CalendarWorkout />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Calender;

import React, { useState } from 'react';
import Layout from '../../../../components/layout';
import Workouttable from '../../../../components/workouttable';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import axios from 'axios';
import { prisma } from '../../../../lib/prisma';
import { WorkoutLine } from '@prisma/client';

type Props = {};

const Exercise = ({ exercisesData }: any) => {
  console.log(exercisesData);

  const [isPlay, setIsPlay] = useState(false);
  const exercise = {
    id: '1',
    name: 'Squats',
    imageSrc: '/images/venti-views-j-Ou5YvdXFQ-unsplash (1).jpg',
    imageAlt: 'Squats',
    description:
      'A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up. During the descent of a squat, the hip and knee joints flex while the ankle joint dorsiflexes; conversely the hip and knee joints extend and the ankle joint plantarflexes when standing up',
    sets: '3 sets x 20 reps',
    video: 'https://www.youtube.com/embed/aclHkVaku9U',
    href: '#',
  };

  return (
    <Layout>
      <div className="px-4 py-5 sm:px-6 h-full ">
        <div className="grid grid-cols-3 h-full py-8">
          <div className=" rounded-md col-span-2 h-full ">
            <iframe
              className="rounded-lg"
              width="74%"
              height="400px"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              src={exercisesData.video}
            ></iframe>
          </div>
          <div className=" text-start">
            <p className=" font-bold text-5xl">{exercisesData.name}</p>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">
                Description :
              </h2>
              <p className="prose prose-sm mt-1 text-gray-500">
                {exercisesData.description}
              </p>
            </div>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Sets :</h2>
              <p className="prose prose-sm mt-1 text-gray-500">
                - {exercisesData.sets}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap w-full ">
          <div className=" p-10 w-full lg:w-1/2 ">
            <p className=" font-bold text-5xl">Log workout</p>
            <Workouttable />
          </div>
          <div className=" lg:w-1/3 flex flex-col items-center w-full mt-auto">
            {isPlay ? (
              <CountdownCircleTimer
                isPlaying
                duration={30}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[30, 20, 10, 0]}
              >
                {({ remainingTime }) => remainingTime}
              </CountdownCircleTimer>
            ) : (
              <CountdownCircleTimer
                duration={30}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[30, 20, 10, 0]}
              >
                {({ remainingTime }) => remainingTime}
              </CountdownCircleTimer>
            )}

            <button
              type="button"
              onClick={() => setIsPlay(!isPlay)}
              className="m-2  inline-flex items-center rounded-md border border-transparent bg-black px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              {isPlay ? 'Pause' : 'Start'}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Exercise;

export const getStaticPaths: GetStaticPaths = async () => {
  const workoutLines = await prisma?.workoutLine.findMany();
  const paths = workoutLines.map((workoutline: WorkoutLine) => {
    return {
      params: {
        workout: workoutline.workoutId.toString(),
        exercise: workoutline.exerciseId.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const exercise = await prisma.exercise.findFirst({
    where: { id: +params?.exercise! },
    include: { workoutLines: { where: { workoutId: +params?.workout! } } },
  });
  return {
    props: { exercisesData: JSON.parse(JSON.stringify(exercise)) },
  };
};

import React from 'react';
import { Exercise } from '../../../../types';
import Layout from '../../../../components/layout';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import { useUser } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Router, { useRouter } from 'next/router';
import { prisma } from '../../../../lib/prisma';
import { WorkoutLine } from '@prisma/client';
const WorkoutPage = ({ exercises }: { exercises: Exercise[] }) => {
  const { user } = useUser();
  console.log(exercises);

  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push('/signin');
    }
  }, [user]);

  return (
    <div>
      <>
        <Layout>
          <div>
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="container h-fit  ">
                <p className="text-center font-bold h-32 text-5xl">
                  Browse our carefully exercises
                </p>
              </div>

              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {exercises.map((exercise: any) => (
                  <Link
                    key={exercise.exerciseId}
                    href={`/workouts/${exercise.workoutId}/exercises/${exercise.exerciseId}`}
                  >
                    <a className="group">
                      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                        <img
                          src={exercise.exercise.Images}
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                        <h3>{exercise.exercise.Name}</h3>
                      </div>
                      <p className="mt-1 text-sm italic text-gray-500">
                        {exercise.sets} Sets x {exercise.recReps} Reps
                      </p>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Layout>
      </>
    </div>
  );
};

export default WorkoutPage;

export const getStaticPaths: GetStaticPaths = async () => {
  // const res = await axios.get('http://localhost:3000/api/workoutline');
  const workoutLines = await prisma?.workoutLine.findMany();
  const paths = workoutLines.map((workoutline: WorkoutLine) => {
    return {
      params: { workout: workoutline.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = +params?.workout!;
  const workoutLines = await prisma?.workoutLine.findMany({
    where: { workoutId: id },
    include: { exercise: true },
  });
  console.log(workoutLines);

  return {
    props: { exercises: JSON.parse(JSON.stringify(workoutLines)) },
  };
};

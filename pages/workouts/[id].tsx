import React from 'react';
import { Exercise } from '../../types';
import Layout from '../../components/layout';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import { useUser } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Router, { useRouter } from 'next/router';

const WorkoutPage = ({ exercises }: { exercises: Exercise[] }) => {
  const { user } = useUser();
  console.log(user);

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
                    href={'/exercises/' + exercise.exerciseId}
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
  const res = await axios.get('http://localhost:3000/api/workoutline');
  console.log(res.data);
  const paths = res.data.workoutLines.map((workoutline: any) => {
    return {
      params: { id: workoutline.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const res = await axios.get(`http://localhost:3000/api/workoutline/${id}`);
  console.log(res.data);

  return {
    props: { exercises: res.data.workoutLines },
  };
};

// export const getServerSideProps = withPageAuth({
//   redirectTo: './signin',
//   async getServerSideProps({ params }) {
//     const exercisesdraft = await prisma.workoutLine.findMany({
//       where: { workoutId: +params!.id! },
//       include: { exercise: true },
//     });
//     console.log(exercisesdraft);

//     const exercises = exercisesdraft.map((exercise) => {
//       return {
//         ...exercise,
//         createdAt: exercise.createdAt.getDate(),
//         updatedAt: exercise.updatedAt.getDate(),
//       };
//     });

//     return {
//       props: {
//         exercises,
//       },
//     };
//   },
// });

// const router = useRouter();
// const id = router.query.id;

// const exercises = [
//   {
//     id: "1",
//     name: "Squats",
//     imageSrc: "/images/venti-views-j-Ou5YvdXFQ-unsplash (1).jpg",
//     imageAlt: "Squats",

//     description: "3 sets x 20 reps",
//     video: "https://www.youtube.com/watch?v=aclHkVaku9U",
//   },
//   {
//     id: "2",
//     name: "Walking Lunge",
//     imageSrc: "/images/pexels-anete-lusina-4793258.jpg",
//     imageAlt: "",

//     description: "3 sets x 20 reps",
//     video: "https://www.youtube.com/watch?v=L8fvypPrzzs",
//   },
//   {
//     id: "3",
//     name: "EATED LEG PRESS",
//     imageSrc: "/images/scott-webb-JNPvv1u8yRg-unsplash.jpg",
//     imageAlt: "",

//     description: "3 sets x 20 reps",
//     video: "https://youtu.be/IZxyjW7MPJQ",
//   },
//   {
//     id: "4",
//     name: "DEADLIFT (BARBELL)",
//     imageSrc: "/images/serjan-midili-b8tSWXHsjk0-unsplash.jpg",
//     imageAlt: "",
//     description: "3 sets x 20 reps",
//     video: "https://youtu.be/r4MzxtBKyNE",
//   },
// ];

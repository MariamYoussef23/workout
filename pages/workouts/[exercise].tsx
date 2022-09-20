import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Layout from "../../components/layout";
import { Exercise } from "../../types";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {};

const WorkoutPage = (props: Props) => {
  const router = useRouter();
  const name = router.query.name;

  const exercises = [
    {
      id: "1",
      name: "Squats",
      imageSrc: "/images/venti-views-j-Ou5YvdXFQ-unsplash (1).jpg",
      imageAlt: "Squats",

      description: "3 sets x 20 reps",
      video: "https://www.youtube.com/watch?v=aclHkVaku9U",
    },
    {
      id: "2",
      name: "Walking Lunge",
      imageSrc: "/images/pexels-anete-lusina-4793258.jpg",
      imageAlt: "",

      description: "3 sets x 20 reps",
      video: "https://www.youtube.com/watch?v=L8fvypPrzzs",
    },
    {
      id: "3",
      name: "EATED LEG PRESS",
      imageSrc: "/images/scott-webb-JNPvv1u8yRg-unsplash.jpg",
      imageAlt: "",

      description: "3 sets x 20 reps",
      video: "https://youtu.be/IZxyjW7MPJQ",
    },
    {
      id: "4",
      name: "DEADLIFT (BARBELL)",
      imageSrc: "/images/serjan-midili-b8tSWXHsjk0-unsplash.jpg",
      imageAlt: "",
      description: "3 sets x 20 reps",
      video: "https://youtu.be/r4MzxtBKyNE",
    },
  ];

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
                {exercises.map((exercise) => (
                  <Link key={exercise.id} href={"/workouts/exercises/" + exercise.name}>
                    <a className="group">
                      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                        <img
                          src={exercise.imageSrc}
                          alt={exercise.imageAlt}
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                        <h3>{exercise.name}</h3>
                      </div>
                      <p className="mt-1 text-sm italic text-gray-500">
                        {exercise.description}
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

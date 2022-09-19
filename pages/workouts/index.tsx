import React from 'react';
import Layout from '../../components/layout';
import { useRouter } from 'next/router';
// import { Query } from 'typeorm/driver/Query';
import Link from 'next/link';

const Workouts = () => {
  const router = useRouter();
  const id = router.query.id;

  const workouts = [
    {
      id: '1',
      name: 'Leg day',
      exercises: [
        {
          id: 1,
          name: 'Squats',
          description: '3 sets x 20 reps',
          video: 'https://www.youtube.com/watch?v=aclHkVaku9U',
        },
        {
          id: 2,
          name: 'Walking Lunge',
          description: '3 sets x 20 reps',
          video: 'https://www.youtube.com/watch?v=L8fvypPrzzs',
        },
        {
          id: 3,
          name: 'EATED LEG PRESS',
          description: '3 sets x 20 reps',
          video: 'https://youtu.be/IZxyjW7MPJQ',
        },
        {
          id: 4,
          name: 'DEADLIFT (BARBELL)',
          description: '3 sets x 20 reps',
          video: 'https://youtu.be/r4MzxtBKyNE',
        },
      ],
      imageSrc:
        '/images/61a7e2b2c2f2b433de456203_thomas-yohei-BAlBUJb-SXQ-unsplash-p-800.jpeg',
      imageAlt: 'Leg day',
    },
    {
      id: '2',
      name: 'Abs day',
      href: '#',
      description: '5 sets x 15 reps',
      imageSrc: 'images/colin-lloyd-rdgGNjj69zI-unsplash.jpg',
      imageAlt: 'Abs day',
    },
    {
      id: '3',
      name: 'Pull day',
      href: '#',
      description: '5 sets x 15 reps',
      imageSrc: '/images/karolis-milisauskas-eoVdk1z4ihI-unsplash.jpg',
      imageAlt: 'Pull day',
    },
    {
      id: '4',
      name: 'Push day',
      href: '#',
      description: '5 sets x 15 reps',
      imageSrc: '/images/meagan-stone-kC5KL_iUpL4-unsplash.jpg',
      imageAlt: 'Push day',
    },

    // More products...
  ];
  return (
    <>
      <Layout>
        <div>
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="container h-fit  ">
              <p className="text-center font-bold h-32 text-5xl">
                Browse our carefully catered workouts
              </p>
              <p className="text-center font-light h-32 text-base">
                Thoughtfully designed exercises meant to push you to the
                absolute limits{' '}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {workouts.map((workout) => (
                <Link key={workout.id} href={'/workouts/' + workout.id}>
                  <a className="group">
                    <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                      <img
                        src={workout.imageSrc}
                        alt={workout.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                      <h3>{workout.name}</h3>
                    </div>
                    <p className="mt-1 text-sm italic text-gray-500">
                      {workout.description}
                    </p>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Workouts;

import React, { useEffect } from 'react';
import Layout from '../../components/layout';
import { useRouter } from 'next/router';
// import { Query } from 'typeorm/driver/Query';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { getWorkouts } from '../../utils/apiFunctions';
import { withPageAuth } from '@supabase/auth-helpers-nextjs';


const Workouts = ({ workouts }: any) => {
  const router = useRouter();
  const id = router.query.id;

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
              {workouts.map((workout: any) => (
                <Link
                  key={workout.id}
                  href={`/workouts/${workout.id}/exercises`}
                >
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

// export const getStaticProps: GetStaticProps = async () => {
//   const workouts = await getWorkouts();

//   return {
//     props: {
//       workouts,
//     },
//   };
// };

export const getServerSideProps = withPageAuth({
  redirectTo: './signin',
  async getServerSideProps() {
    const workouts = await getWorkouts();

    return {
      props: {
        workouts,
      },
    };
  },
});

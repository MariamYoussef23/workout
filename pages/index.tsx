import { useUser } from '@supabase/auth-helpers-react';
import type { NextPage } from 'next';
import React from 'react';
import PersonalRecords from '../components/indexComps/personalRecords';
import WelcomeTab from '../components/indexComps/welcomeTab';
import WorkoutDetails from '../components/indexComps/workoutDetails';
import Layout from '../components/layout';

const Home: NextPage = () => {
  const { user } = useUser();

  const useName = `${user?.user_metadata.firstName} ${user?.user_metadata.lastName}`;

  return (
    <>
      <Layout>
        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              <div className="bg-white shadow sm:rounded-lg">
                <WelcomeTab useName={useName} />
              </div>

              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <div className="container mx-auto px-4 py-4">
                  <PersonalRecords />
                  <WorkoutDetails />
                </div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;

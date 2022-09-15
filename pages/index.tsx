import type { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/layout";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Layout>
        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Good morning, User Name
                  </h3>
                  <div className="mt-2 sm:flex sm:items-start sm:justify-between">
                    <div className="max-w-xl text-sm text-gray-500">
                      <p>10 Day Streak</p>
                    </div>
                    <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:flex-shrink-0 sm:items-center">
                      <button
                        type="button"
                        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                        onClick={() => router.push("/workouts")}
                      >
                        Browse Workouts
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              {/* Replace with your content */}
              <div className="container mx-auto px-4 py-4">
                <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
              </div>
              {/* /End replace */}
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;

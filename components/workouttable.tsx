import { useUser } from '@supabase/auth-helpers-react';
import React, { useState } from 'react';
import { Exercise } from '../types';
import { logExercise } from '../utils/apiFunctions';


const Workouttable = ({ exercisesData }: { exercisesData: Exercise }) => {
  const exercise = exercisesData;
  const { user } = useUser();

  const workoutLineId = exercise?.workoutLines![0].id;
  const userId = user?.id;
  console.log(userId);

  const [Weights, setWeights] = useState(0);
  const [Reps, setReps] = useState(0);
  const setNo = exercise?.workoutLines![0].sets;

  const InputWeightsHandler = (e: any) => {
    setWeights(e.target.value);
  };
  const InputRepsHandler = (e: any) => {
    setReps(e.target.value);
  };
  const submitHandler = () => {
    const data = {
      workoutLineId,
      userId: userId as string,
      Weights: Weights as number,
      Reps: Reps as number,
      setNo,
    };
    logExercise(data);
  };
  return (
    <>
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Weight
                  </th>

                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Reps
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              {Array.from({
                length: exercise?.workoutLines![0]
                  ? exercise?.workoutLines![0].sets
                  : 3,
              }).map((item, idx) => (
                <tbody key={idx} className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {idx + 1}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <input
                        onChange={(e) => InputWeightsHandler(e)}
                        type="text"
                        name="text"
                        id="text"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                        placeholder=" 20KG"
                      />
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <input
                        onChange={(e) => InputRepsHandler(e)}
                        type="text"
                        name="text"
                        id="text"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                        placeholder="3"
                      />{' '}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <input
                        onClick={submitHandler}
                        id="comments"
                        aria-describedby="comments-description"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                      />
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workouttable;

import Link from 'next/link';

const WelcomeTab = ({ useName }: { useName: string }) => {
  return (
    <>
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Good Morning, {useName}
                </h3>
                <p className="text-sm text-gray-500">
                  <a href="#"> 10 Days Streak</a>
                </p>
              </div>
            </div>
          </div>
          <div className="ml-4 mt-4 flex flex-shrink-0">
            <Link href={'/workouts'}>
              <button
                type="button"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Browse Workouts
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeTab;

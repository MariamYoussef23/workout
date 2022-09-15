const records = [
    {
      name: "Squat",
      record: "25Kg",
    },
    {
      name: "Bicep Curl",
      record: "55Kg",
    },
    {
      name: "Bench Press",
      record: "150Kg",
    },
    {
      name: "Overhead Press",
      record: "90lbs",
    },
  ];

const PersonalRecords = () => {
  return (
    <>
      <p>Personal Records</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        {records.map((record) => (
          <div
            key={record.name}
            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            <div className="min-w-0 flex-1">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">
                  {record.name}
                </p>
                <p className="truncate text-sm text-gray-500">
                  {record.record}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PersonalRecords;

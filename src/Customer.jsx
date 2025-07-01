import { useState } from 'react';

export default function Customer() {
  const [hasAlcohol, setHasAlcohol] = useState(false);
  const [hasPets, setHasPets] = useState(false);
  const [matched, setMatched] = useState(false);

  const findCab = () => {
    setMatched(true);
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Passenger Preferences</h2>
      <label className="flex items-center gap-2 my-2">
        <input
          type="checkbox"
          checked={hasAlcohol}
          onChange={() => setHasAlcohol(!hasAlcohol)}
        />
        Carrying Alcohol
      </label>
      <label className="flex items-center gap-2 my-2">
        <input
          type="checkbox"
          checked={hasPets}
          onChange={() => setHasPets(!hasPets)}
        />
        Traveling with Pets/Guide Dogs
      </label>
      <button
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
        onClick={findCab}
      >
        Find Cab
      </button>
      {matched && (
        <div className="mt-4 p-3 bg-green-200 rounded">
          🎉 <strong>Cab Matched!</strong> Driver will pick you up shortly.
        </div>
      )}
    </div>
  );
}

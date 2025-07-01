import { useState } from 'react';

export default function Customer() {
  const [hasAlcohol, setHasAlcohol] = useState(false);
  const [hasPet, setHasPet] = useState(false);
  const [matched, setMatched] = useState(false);

  const findCab = () => {
    setMatched(true);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Passenger Preferences</h2>
      <label className="flex items-center gap-2 mb-3">
        <input type="checkbox" checked={hasAlcohol} onChange={() => setHasAlcohol(!hasAlcohol)} />
        Carrying Alcohol
      </label>
      <label className="flex items-center gap-2 mb-3">
        <input type="checkbox" checked={hasPet} onChange={() => setHasPet(!hasPet)} />
        Traveling with Pets/Guide Dogs
      </label>
      <button
        className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600"
        onClick={findCab}
      >
        Find Cab
      </button>
      {matched && (
        <div className="mt-4 p-3 bg-green-100 rounded-lg">
          🎉 <strong>Cab Matched!</strong> Driver will pick you up shortly.
        </div>
      )}
    </div>
  );
}
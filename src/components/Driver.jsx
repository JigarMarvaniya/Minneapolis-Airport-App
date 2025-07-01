import { useState } from 'react';

export default function Driver() {
  const [acceptAlcohol, setAcceptAlcohol] = useState(false);
  const [acceptPets, setAcceptPets] = useState(false);

  return (
    <div className="max-w-lg mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Driver Preferences</h2>
      <label className="flex items-center gap-2 my-2">
        <input
          type="checkbox"
          checked={acceptAlcohol}
          onChange={() => setAcceptAlcohol(!acceptAlcohol)}
        />
        Accept Alcohol-Carrying Passengers
      </label>
      <label className="flex items-center gap-2 my-2">
        <input
          type="checkbox"
          checked={acceptPets}
          onChange={() => setAcceptPets(!acceptPets)}
        />
        Accept Passengers with Pets/Guide Dogs
      </label>
      <button className="mt-4 w-full bg-green-600 text-white py-2 rounded">
        Save Preferences
      </button>
    </div>
  );
}

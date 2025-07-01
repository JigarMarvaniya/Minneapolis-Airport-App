import { useState } from 'react';

export default function Driver() {
  const [acceptAlcohol, setAcceptAlcohol] = useState(false);
  const [acceptPets, setAcceptPets] = useState(false);

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Driver Preferences</h2>
      <label className="flex items-center gap-2 mb-3">
        <input type="checkbox" checked={acceptAlcohol} onChange={() => setAcceptAlcohol(!acceptAlcohol)} />
        Accept passengers carrying Alcohol
      </label>
      <label className="flex items-center gap-2 mb-3">
        <input type="checkbox" checked={acceptPets} onChange={() => setAcceptPets(!acceptPets)} />
        Accept passengers with Pets/Guide Dogs
      </label>
      <button className="w-full bg-green-500 text-white py-2 rounded-lg mt-4 hover:bg-green-600">
        Save Preferences
      </button>
    </div>
  );
}
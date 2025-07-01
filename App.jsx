import { Routes, Route, Link } from 'react-router-dom';
import Driver from './driver/Driver';
import Customer from './customer/Customer';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Minneapolis Airport Cab Service</h1>
      <div className="flex justify-center gap-4 mb-6">
        <Link to="/customer" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600">
          Passenger Side
        </Link>
        <Link to="/driver" className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600">
          Driver Side
        </Link>
      </div>

      <Routes>
        <Route path="/customer" element={<Customer />} />
        <Route path="/driver" element={<Driver />} />
      </Routes>
    </div>
  );
}

export default App;
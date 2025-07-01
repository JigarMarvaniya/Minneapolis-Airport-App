import { Routes, Route, Link } from 'react-router-dom';
import Driver from './Driver';
import Customer from './Customer';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-6">
        Minneapolis Airport Cab Service
      </h1>
      <div className="flex justify-center gap-4 my-4">
        <Link to="/customer" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
          Passenger Side
        </Link>
        <Link to="/driver" className="px-4 py-2 bg-green-500 text-white rounded-lg">
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


import AddFoodData from './components/AddFoodData';

import OrderSection from './components/OrderSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowDetails from './components/ShowDetails';

function App() {
  return (
  

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrderSection />} />
        <Route path="/addfood" element={<AddFoodData />} />
        <Route path="/orderdetails/:orderid" element={<ShowDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

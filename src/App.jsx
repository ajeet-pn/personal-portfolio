import { BrowserRouter, Route, Routes } from "react-router-dom";

import Plinko from "./pages/Plinko";
import Dashboard from "./pages/dashboard/Dashboard";
import Mines from "./pages/games/Mines";

const App = () => {
  return ( 
    <BrowserRouter>
    

    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/plinko" element={<Plinko />} />
      <Route path="/mines" element={<Mines />} />
    </Routes>
    </BrowserRouter>
   );
}
 
export default App;

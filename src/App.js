// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
// import HorizontalCard from "./components/horizontal-card";
// import HorizontalPageCard from "./components/horizontal-page-card";
import Navbar from "./components/Navbar";
// import VerticalCard from "./components/vertical-card";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
        <Navbar />
        {/* <HorizontalCard />
        <HorizontalPageCard/>
        <VerticalCard/> */}
      <Routes>
            <Route path="/" element={<Homepage />} />
            
          </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

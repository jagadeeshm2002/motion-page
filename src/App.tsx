import { Route, Routes } from "react-router-dom";

import HomePageOne from "./pages/pagedesignone/HomePageOne";
import Home from "./pages/home/Home";
import HomePageTwo from "./pages/pagedesigntwo/HomePageTwo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Homepageone" element={<HomePageOne />} />
        <Route path="/homepagetwo" element={<HomePageTwo/>} />
      </Routes>
    </>
  );
}

export default App;

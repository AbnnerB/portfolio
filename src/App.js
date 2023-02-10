import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Details from "./Pages/Details";
import AllProjects from "./Pages/AllProjects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/allprojects" element={<AllProjects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

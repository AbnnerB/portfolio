import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Details from "./Pages/Details";
import AllProjects from "./Pages/AllProjects";
import PageError from "./Pages/PageError";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/allprojects" element={<AllProjects />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Details from "./Pages/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

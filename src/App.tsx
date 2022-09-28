import { Route, Routes } from "react-router-dom";

import "./assets/scss/index.scss";
import Home from "./pages/Home";
import Success from "./pages/Success";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

// React motion or router

export default App;

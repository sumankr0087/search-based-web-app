import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-transparent to-[rgb(59,130,246,0.5)]">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
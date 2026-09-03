import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  if (!token) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Login setToken={setToken} />} />
          <Route path="/signup" element={<Signup switchToLogin={() => window.location.href = "/"} />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return <Home />;
}

export default App;
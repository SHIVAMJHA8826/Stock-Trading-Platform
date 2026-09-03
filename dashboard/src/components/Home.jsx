import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Menu from "./Menu";

const Home = () => {
  return (
    <>
      <Menu />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
        </Routes>
      </div>
    </>
  );
};

export default Home;
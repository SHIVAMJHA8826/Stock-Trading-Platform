import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="indices-container">
        {/* Render logo directly from the public folder */}
        <img
          src="/logo.png"
          alt="Logo"
          style={{ width: "30px", height: "auto", marginRight: "1rem" }}
        />

        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">100.2</p>
          <p className="percent"></p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">100.2</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
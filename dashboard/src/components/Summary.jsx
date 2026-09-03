import React, { useState, useEffect } from "react";
import axios from "axios";
import Holdings from "./Holdings";
import Positions from "./Positions";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allHoldings")
      .then((res) => {
        setHoldings(res.data);
      })
      .catch((err) => {
        console.error("Error fetching holdings for summary:", err);
      });
  }, []);

  // Calculate portfolio totals
  let totalInvestment = 0;
  let currentValue = 0;

  holdings.forEach((stock) => {
    totalInvestment += stock.qty * stock.avg;
    currentValue += stock.qty * stock.price;
  });

  const totalPnL = currentValue - totalInvestment;
  const isProfit = totalPnL >= 0;
  const pnlClass = isProfit ? "profit" : "loss";
  const pnlPercentage = totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;

  return (
    <div className="dashboard-container">
      <div className="portfolio-summary">
        <div className="summary-card">
          <div className="card-header">
            <h4>Equity</h4>
            <span className="dot"></span>
          </div>
          <div className="card-body">
            <div className="metric">
              <h2>{currentValue.toFixed(2)}</h2>
              <p>Current value</p>
            </div>
            <hr />
            <div className="metric-row">
              <div>
                <p className="label">Investment</p>
                <p className="value">{totalInvestment.toFixed(2)}</p>
              </div>
              <div>
                <p className="label">P&amp;L</p>
                <p className={`value ${pnlClass}`}>
                  {totalPnL.toFixed(2)} ({pnlPercentage.toFixed(2)}%)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="divider" />
      
      <Holdings />
      
      <hr className="divider" />
      
      <Positions />
    </div>
  );
};

export default Summary;
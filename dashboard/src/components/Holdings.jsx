import React, { useState, useEffect } from "react";
import axios from "axios";
import VerticalGraph from './VerticalGraph'; 

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  const fetchHoldings = () => {
    axios
      .get("http://localhost:3002/allHoldings")
      .then((res) => {
        console.log("Frontend fetched holdings:", res.data);
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.error("Error fetching holdings on frontend:", err);
      });
  };

  useEffect(() => {
    fetchHoldings();
    // Auto-refresh every 3 seconds to keep it live
    const interval = setInterval(fetchHoldings, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&amp;L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <VerticalGraph />
    </>
  );
};

export default Holdings;
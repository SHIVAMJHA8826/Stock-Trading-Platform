import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ 
  labels = ["Tech", "Banking", "Energy", "Auto"], 
  dataset = [40, 30, 20, 10] 
}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Watchlist Share",
        data: dataset,
        backgroundColor: [
          "#387ed1",
          "#4caf50",
          "#ff9800",
          "#9e9e9e",
          "#9c27b0"
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" },
      title: { display: false },
    },
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
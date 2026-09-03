import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VerticalGraph = () => {
  const data = {
    labels: ["RELIANCE", "TCS", "INFY", "HDFCBANK", "ICICIBANK"],
    datasets: [
      {
        label: "Investment Value (₹)",
        data: [12000, 19000, 3000, 5000, 2000],
        backgroundColor: "rgba(56, 126, 209, 0.8)",
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Top Holdings Breakdown" },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div style={{ height: "300px", padding: "15px", background: "#fff", borderRadius: "8px", boxShadow: "0 1px 4px rgba(0,0,0,0.1)" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default VerticalGraph;
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import datalabels from "chartjs-plugin-datalabels";
ChartJS.register(ArcElement, Tooltip, Legend, datalabels);
const items = [
  { itemName: "Service", itemValue: 2, color: "#7A5542" },
  { itemName: "Product", itemValue: 99, color: "#ffffff" },
];

const PieChart = ({ angle, draw }) => {
  const data = {
    labels: false,
    datasets: [
      {
        data: items.map((item) => item.itemValue),
        backgroundColor: items.map((item) => item.color),
        borderAlign: "inner",
        borderWidth: 0.5,
        borderRadius: 1,
        circumference: angle,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      datalabels: {
        anchor: "center",
        align: "end",
        offset: 5,
        font: {
          size: 0,
          weight: "bold",
        },
        color: "#ffffff",
        // formatter: (value, ctx) => {
        //   const dataset = ctx.chart.data.datasets[0];
        //   const total = dataset.data.reduce((acc, cur) => acc + cur);
        //   const percentage = ((value * 100) / total).toFixed(1) + "%";
        //   return `${percentage}`;
        // },
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false, // Disable tooltips
      },
      tooltips: {
        callbacks: {
           title: function() {}
        }
     },
    },
  };
  return (
    <div
    data-aos="zoom-in"
                  data-aos-duration="3000"
      style={{
        overflow: "visible",
        width: "100%",
      }}
    >
      <Pie
        data={data}
        options={options}
        style={{
          filter: "drop-shadow(10px 8px 2px 5px #898D9B)",
          width: "100%",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </div>
  );
};

export default PieChart;
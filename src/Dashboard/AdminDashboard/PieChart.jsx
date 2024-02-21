import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const [chartState] = useState({
    series: [30, 20, 33, 34],
    options: {
      chart: {
        width: 180, // Adjust the width here
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 180, // Adjust the width here as well
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        showForSingleSeries: false,
        show: false, // Hide labels for series
      },
      labels: ["Order", "Revenue", "Sales", "Others"], // Custom labels
      colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560"], // Custom colors
    },
  });

  return (
    <div>
      <div className="mx-auto mt-4 flex justify-center items-center">
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="donut"
          width={360} // Set the width prop to match the chart width
        />
      </div>
      <div className="flex justify-center items-center">
        {chartState.options.labels.map((label, index) => (
          <div key={index} className="flex items-center mr-4">
            <div
              className="w-3 h-3 mr-2"
              style={{ backgroundColor: chartState.options.colors[index] }}
            ></div>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;

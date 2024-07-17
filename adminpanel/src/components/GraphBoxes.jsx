import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GraphBoxes = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Orders",
        data: [65, 59, 80, 81, 56, 55, 40, 45, 70, 60, 75, 90],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Earnings",
        data: [28, 48, 40, 19, 86, 27, 90, 50, 70, 80, 55, 40],
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
      {
        label: "Refunds",
        data: [12, 19, 3, 5, 2, 3, 7, 10, 15, 20, 10, 5],
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  };

  const locationData = {
    labels: ["Canada", "Greenland", "Russia", "Palestine"],
    datasets: [
      {
        label: "Sales by Location",
        data: [75, 47, 82, 60],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full   bg-[#f3f3f8] flex flex-col md:flex-row gap-5 px-5 md:px-5 md:gap-5  ">
      <div className="w-full  flex justify-center items-center  md:w-[65%] md:h-[400px] bg-white rounded-md ">
        <Bar
          data={data}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "top" },
              title: { display: true, text: "Monthly Data" },
            },
          }}
        />
      </div>
      <div className="w-full  flex justify-center items-center md:w-[35%] md:h-[400px] bg-white rounded-md">
        <Bar
          data={locationData}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "top" },
              title: { display: true, text: "Sales by Location" },
            },
            indexAxis: "y",
          }}
        />
      </div>
    </div>
  );
};

export default GraphBoxes;

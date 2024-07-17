import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto"; // Import the entire chart.js to avoid potential issues

const PieChart = () => {
  const pieData = {
    labels: ["Direct", "Social", "Email", "Other", "Referrals"],
    datasets: [
      {
        data: [25.6, 32.0, 23.8, 9.9, 8.7],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF9F40",
          "#4BC0C0",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF9F40",
          "#4BC0C0",
        ],
      },
    ],
  };

  return (
    <>
      {" "}
      <div className="w-full    ">
        <div className="flex flex-col md:flex-row w-full h-full bg-[#f3f3f8]  md:mt-0 py-10 md:px-5 ">
          <div className="w-full h-full md:w-[30%] md:h-80  flex justify-center items-center p-5">
            <Pie data={pieData} className="w-28" />
          </div>
          <div className="w-full h-80 md:w-[70%] px-6 ">
            <h2 className="text-lg font-bold mb-4">Best Selling Products</h2>
            <div className="overflow-x-auto rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead>
                  <tr>
                    <th className="px-1 py-3 bg-gray-50">Product</th>
                    <th className="px-1 py-3 bg-gray-50">Price</th>
                    <th className="px-1 py-3 bg-gray-50">Orders</th>
                    <th className="px-1 py-3 bg-gray-50">Stock</th>
                    <th className="px-1 py-3 bg-gray-50">Amount</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-1 py-4 whitespace-nowrap">
                      Branded T-Shirts
                    </td>
                    <td className="px-1 py-4 whitespace-nowrap">$29.00</td>
                    <td className="px-1 py-4 whitespace-nowrap">12</td>
                    <td className="px-1 py-4 whitespace-nowrap">510</td>
                    <td className="px-1 py-4 whitespace-nowrap">$1,798</td>
                  </tr>
                  <tr>
                    <td className="px-1 py-4 whitespace-nowrap">
                      Bentwood Chair
                    </td>
                    <td className="px-1 py-4 whitespace-nowrap">$85.20</td>
                    <td className="px-1 py-4 whitespace-nowrap">35</td>
                    <td className="px-1 py-4 whitespace-nowrap text-red-500">
                      Out of stock
                    </td>
                    <td className="px-1 py-4 whitespace-nowrap">$2,982</td>
                  </tr>
                  <tr>
                    <td className="px-1 py-4 whitespace-nowrap">
                      Borosil Paper Cup
                    </td>
                    <td className="px-1 py-4 whitespace-nowrap">$14.00</td>
                    <td className="px-1 py-4 whitespace-nowrap">80</td>
                    <td className="px-1 py-4 whitespace-nowrap">749</td>
                    <td className="px-1 py-4 whitespace-nowrap">$1,120</td>
                  </tr>
                  <tr>
                    <td className="px-1 py-4 whitespace-nowrap">
                      One Seater Sofa
                    </td>
                    <td className="px-1 py-4 whitespace-nowrap">$127.50</td>
                    <td className="px-1 py-4 whitespace-nowrap">51</td>
                    <td className="px-1 py-4 whitespace-nowrap">510</td>
                    <td className="px-1 py-4 whitespace-nowrap">$7,140</td>
                  </tr>
                  <tr>
                    <td className="px-1 py-4 whitespace-nowrap">
                      Stillbird Helmet
                    </td>
                    <td className="px-1 py-4 whitespace-nowrap">$54</td>
                    <td className="px-1 py-4 whitespace-nowrap">74</td>
                    <td className="px-1 py-4 whitespace-nowrap">805</td>
                    <td className="px-1 py-4 whitespace-nowrap">$3,996</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PieChart;

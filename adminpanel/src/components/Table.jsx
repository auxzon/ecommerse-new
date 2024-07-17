import React from "react";

function Table() {
  return (
    <div className="flex flex-col md:flex-row  bg-[#f3f3f8]  md:pb-14 md:pt-5   gap-8 md:px-6 py-5 px-6  ">
      <div className="w-full h-80 md:w-1/2 ">
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
                <td className="px-1 py-4 whitespace-nowrap">Bentwood Chair</td>
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
                <td className="px-1 py-4 whitespace-nowrap">One Seater Sofa</td>
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

      <div className="w-full h-80 md:w-1/2  md:mt-0  mt-10  ">
        <h2 className="text-lg font-bold mb-4">Top Sellers</h2>
        <table className="min-w-full divide-y divide-gray-200 ">
          <thead>
            <tr>
              <th className=" py-3 bg-gray-50">Seller</th>
              <th className=" py-3 bg-gray-50">Stock</th>
              <th className=" py-3 bg-gray-50">Amount</th>
              <th className=" py-3 bg-gray-50">Percentage</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className=" py-4 whitespace-nowrap">iTest Factory</td>
              <td className=" py-4 whitespace-nowrap">8547</td>
              <td className=" py-4 whitespace-nowrap">$541,200</td>
              <td className=" py-4 whitespace-nowrap">32%</td>
            </tr>
            <tr>
              <td className=" py-4 whitespace-nowrap">Digitech Galaxy</td>
              <td className=" py-4 whitespace-nowrap">895</td>
              <td className=" py-4 whitespace-nowrap">$75,030</td>
              <td className=" py-4 whitespace-nowrap">79%</td>
            </tr>
            <tr>
              <td className=" py-4 whitespace-nowrap">Nesta </td>
              <td className=" py-4 whitespace-nowrap">3470</td>
              <td className=" py-4 whitespace-nowrap">$456,000</td>
              <td className=" py-4 whitespace-nowrap">90%</td>
            </tr>
            <tr>
              <td className=" py-4 whitespace-nowrap">Zoetic Fashion</td>
              <td className=" py-4 whitespace-nowrap">5488</td>
              <td className=" py-4 whitespace-nowrap">$2,945,460</td>
              <td className=" py-4 whitespace-nowrap">40%</td>
            </tr>
            <tr>
              <td className=" py-4 whitespace-nowrap">Meta4Systems</td>
              <td className=" py-4 whitespace-nowrap">4100</td>
              <td className=" py-4 whitespace-nowrap">$112,600</td>
              <td className=" py-4 whitespace-nowrap">57%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;

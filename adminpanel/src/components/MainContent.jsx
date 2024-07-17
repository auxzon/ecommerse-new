// import React from "react";
// // import DatePicker from "react-date-picker";
// import FourBoxes from "./FourBoxes";
// import GraphBoxes from "./GraphBoxes";
// import Table from "./Table";
// import PieChart from "./PieChart";
// import Bio from "./Bio";

// function MainContent() {
//   return (
//     <main className="flex-1 bg-white  ">
//       <Bio />
//       <FourBoxes />
//       <GraphBoxes />
//       <Table />
//       <PieChart />
//     </main>
//   );
// }

// export default MainContent;

// MainContent.js
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import FourBoxes from "./FourBoxes";
// import GraphBoxes from "./GraphBoxes";
// import Table from "./Table";
// import PieChart from "./PieChart";
// import Bio from "./Bio";
// import AddProduct from "../pages/AddProduct"; // Import your new component

// import AllProducts from "../pages/AllProducts";
// import AllCustomers from "../pages/AllCustomers";
// import NewCustomer from "../pages/NewCustomer";
// import Banner from "../pages/Banner";
// import NewOrders from "../pages/NewOrders";
// import Pending from "../pages/Pending";
// import CompletedOrder from "../pages/CompletedOrder";
// import StockLevels from "../pages/StockLevels";
// import Suppliers from "../pages/Suppliers";
// import Restock from "../pages/Restock";
// import SalesReport from "../pages/SalesReport";
// import Traffic from "../pages/Traffic";
// import CustomerInsights from "../pages/CustomerInsights";

// function MainContent() {
//   return (
//     <main className="flex-1 bg-white">
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Bio />
//               <FourBoxes />
//               <GraphBoxes />
//               <Table />
//               <PieChart />
//             </>
//           }
//         />
//         <Route path="/products" element={<AllProducts />} />
//         <Route path="/products/add" element={<AddProduct />} />

//         <Route path="/customers" element={<AllCustomers />} />
//         <Route path="/customers/new" element={<NewCustomer />} />
//         <Route path="/dashboard/banners" element={<Banner />} />
//         <Route path="/orders/new" element={<NewOrders />} />
//         <Route path="/orders/pending" element={<Pending />} />
//         <Route path="/orders/completed" element={<CompletedOrder />} />
//         <Route path="/inventory/stock" element={<StockLevels />} />
//         <Route path="/inventory/suppliers" element={<Suppliers />} />
//         <Route path="/inventory/restock" element={<Restock />} />
//         <Route path="/analytics/sales" element={<SalesReport />} />
//         <Route path="/analytics/traffic" element={<Traffic />} />
//         <Route path="/analytics/insights" element={<CustomerInsights />} />

//         {/* Add other routes here */}
//       </Routes>
//     </main>
//   );
// }

// export default MainContent;

// -----------------------------------

import React from "react";
import { Routes, Route } from "react-router-dom";
import FourBoxes from "./FourBoxes";
import GraphBoxes from "./GraphBoxes";
import Table from "./Table";
import PieChart from "./PieChart";
import Bio from "./Bio";
import AddProduct from "../pages/AddProduct";
import AllProducts from "../pages/AllProducts";
import AllCustomers from "../pages/AllCustomers";
import NewCustomer from "../pages/NewCustomer";
import Banner from "../pages/Banner";
import NewOrders from "../pages/NewOrders";
import Pending from "../pages/Pending";
import CompletedOrder from "../pages/CompletedOrder";
import StockLevels from "../pages/StockLevels";
import Suppliers from "../pages/Suppliers";
import Restock from "../pages/Restock";
import SalesReport from "../pages/SalesReport";
import Traffic from "../pages/Traffic";
import CustomerInsights from "../pages/CustomerInsights";

function MainContent() {
  return (
    <main className="flex-1 bg-white">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Bio />
              <FourBoxes />
              <GraphBoxes />
              <Table />
              <PieChart />
            </>
          }
        />
        <Route path="products" element={<AllProducts />} />
        <Route path="products/add" element={<AddProduct />} />
        <Route path="customers" element={<AllCustomers />} />
        <Route path="customers/new" element={<NewCustomer />} />
        <Route path="dashboard/banners" element={<Banner />} />
        <Route path="orders/new" element={<NewOrders />} />
        <Route path="orders/pending" element={<Pending />} />
        <Route path="orders/completed" element={<CompletedOrder />} />
        <Route path="inventory/stock" element={<StockLevels />} />
        <Route path="inventory/suppliers" element={<Suppliers />} />
        <Route path="inventory/restock" element={<Restock />} />
        <Route path="analytics/sales" element={<SalesReport />} />
        <Route path="analytics/traffic" element={<Traffic />} />
        <Route path="analytics/insights" element={<CustomerInsights />} />
      </Routes>
    </main>
  );
}

export default MainContent;

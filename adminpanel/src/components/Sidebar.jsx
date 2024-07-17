// // Sidebar.js
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const toggleDropdown = (item) => {
//     setOpenDropdown(openDropdown === item ? null : item);
//   };

//   const menuItems = [
//     {
//       name: "Dashboard",
//       options: [
//         { name: "Overview", path: "/" },
//         { name: "Stats", path: "/dashboard/stats" },
//         { name: "Reports", path: "/dashboard/reports" },
//       ],
//     },
//     {
//       name: "Orders",
//       options: [
//         { name: "New Orders", path: "/orders/new" },
//         { name: "Pending", path: "/orders/pending" },
//         { name: "Completed", path: "/orders/completed" },
//       ],
//     },
//     {
//       name: "Products",
//       options: [
//         { name: "All Products", path: "/products" },
//         { name: "Add Product", path: "/products/add" },
//         { name: "Categories", path: "/products/categories" },
//       ],
//     },
//     {
//       name: "Customers",
//       options: [
//         { name: "All Customers", path: "/customers" },
//         { name: "New Customer", path: "/customers/new" },
//         { name: "Groups", path: "/customers/groups" },
//       ],
//     },
//     {
//       name: "Inventory",
//       options: [
//         { name: "Stock Levels", path: "/inventory/stock" },
//         { name: "Suppliers", path: "/inventory/suppliers" },
//         { name: "Restock", path: "/inventory/restock" },
//       ],
//     },
//     {
//       name: "Analytics",
//       options: [
//         { name: "Sales Reports", path: "/analytics/sales" },
//         { name: "Traffic", path: "/analytics/traffic" },
//         { name: "Customer Insights", path: "/analytics/insights" },
//       ],
//     },
//     {
//       name: "Marketing",
//       options: [
//         { name: "Campaigns", path: "/marketing/campaigns" },
//         { name: "Promotions", path: "/marketing/promotions" },
//         { name: "SEO", path: "/marketing/seo" },
//       ],
//     },
//     {
//       name: "Settings",
//       options: [
//         { name: "General", path: "/settings/general" },
//         { name: "Account", path: "/settings/account" },
//         { name: "Preferences", path: "/settings/preferences" },
//       ],
//     },
//     {
//       name: "Support",
//       options: [
//         { name: "Help Center", path: "/support/help-center" },
//         { name: "Contact Us", path: "/support/contact" },
//         { name: "Feedback", path: "/support/feedback" },
//       ],
//     },
//   ];

//   return (
//     <aside className="bg-[#3f5289] text-white w-64 h-full p-4 hidden md:block md:flex flex-col justify-start items-start md:px-10 md:py-24">
//       <div className="w-full">
//         <ul className="space-y-4 w-full">
//           {menuItems.map((item) => (
//             <li key={item.name} className="relative">
//               <button
//                 onClick={() => toggleDropdown(item.name)}
//                 className="w-full text-left focus:outline-none flex justify-between items-center py-2 px-4 bg-[#4f689c] hover:bg-[#6f88bc] rounded-md transition duration-300"
//               >
//                 <span>{item.name}</span>
//                 <span
//                   className={`ml-2 transform transition-transform duration-300 ${
//                     openDropdown === item.name ? "rotate-180" : ""
//                   }`}
//                 >
//                   &#x25BC;
//                 </span>
//               </button>
//               <div
//                 className={`transition-all duration-300 overflow-hidden ${
//                   openDropdown === item.name ? "max-h-40" : "max-h-0"
//                 }`}
//               >
//                 <ul className="ml-4 mt-2 space-y-2">
//                   {item.options.map((option, index) => (
//                     <li
//                       key={index}
//                       className={`pl-2 py-1 rounded-md hover:bg-[#5f799d] transition-colors duration-300 ${
//                         openDropdown === item.name
//                           ? "transform translate-y-0"
//                           : "transform -translate-y-4"
//                       }`}
//                     >
//                       <Link to={option.path}>{option.name}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const toggleDropdown = (item) => {
//     setOpenDropdown(openDropdown === item ? null : item);
//   };

//   const menuItems = [
//     {
//       name: "Dashboard",
//       options: [
//         { name: "Overview", path: "/" },
//         { name: "Stats", path: "/dashboard/stats" },
//         { name: "Reports", path: "/dashboard/reports" },
//       ],
//     },
//     {
//       name: "Orders",
//       options: [
//         { name: "New Orders", path: "/orders/new" },
//         { name: "Pending", path: "/orders/pending" },
//         { name: "Completed", path: "/orders/completed" },
//       ],
//     },
//     {
//       name: "Products",
//       options: [
//         { name: "All Products", path: "/products" },
//         { name: "Add Product", path: "/products/add" },
//         { name: "Categories", path: "/products/categories" },
//       ],
//     },
//     {
//       name: "Customers",
//       options: [
//         { name: "All Customers", path: "/customers" },
//         { name: "New Customer", path: "/customers/new" },
//         { name: "Groups", path: "/customers/groups" },
//       ],
//     },
//     {
//       name: "Inventory",
//       options: [
//         { name: "Stock Levels", path: "/inventory/stock" },
//         { name: "Suppliers", path: "/inventory/suppliers" },
//         { name: "Restock", path: "/inventory/restock" },
//       ],
//     },
//     {
//       name: "Analytics",
//       options: [
//         { name: "Sales Reports", path: "/analytics/sales" },
//         { name: "Traffic", path: "/analytics/traffic" },
//         { name: "Customer Insights", path: "/analytics/insights" },
//       ],
//     },
//     {
//       name: "Marketing",
//       options: [
//         { name: "Campaigns", path: "/marketing/campaigns" },
//         { name: "Promotions", path: "/marketing/promotions" },
//         { name: "SEO", path: "/marketing/seo" },
//       ],
//     },
//     {
//       name: "Settings",
//       options: [
//         { name: "General", path: "/settings/general" },
//         { name: "Account", path: "/settings/account" },
//         { name: "Preferences", path: "/settings/preferences" },
//       ],
//     },
//     {
//       name: "Support",
//       options: [
//         { name: "Help Center", path: "/support/help-center" },
//         { name: "Contact Us", path: "/support/contact" },
//         { name: "Feedback", path: "/support/feedback" },
//       ],
//     },
//   ];

//   return (
//     <aside className="bg-[#3f5289] text-white w-64 h-full p-4 md:flex flex-col justify-start items-start md:px-10 md:py-24">
//       <div className="w-full">
//         <ul className="space-y-4 w-full">
//           {menuItems.map((item) => (
//             <li key={item.name} className="relative">
//               <button
//                 onClick={() => toggleDropdown(item.name)}
//                 className="w-full text-left focus:outline-none flex justify-between items-center py-2 px-4 bg-[#4f689c] hover:bg-[#6f88bc] rounded-md transition duration-300"
//               >
//                 <span>{item.name}</span>
//                 <span
//                   className={`ml-2 transform transition-transform duration-300 ${
//                     openDropdown === item.name ? "rotate-180" : ""
//                   }`}
//                 >
//                   &#x25BC;
//                 </span>
//               </button>
//               <div
//                 className={`transition-all duration-300 overflow-hidden ${
//                   openDropdown === item.name ? "max-h-40" : "max-h-0"
//                 }`}
//               >
//                 <ul className="ml-4 mt-2 space-y-2">
//                   {item.options.map((option, index) => (
//                     <li
//                       key={index}
//                       className={`pl-2 py-1 rounded-md hover:bg-[#5f799d] transition-colors duration-300 ${
//                         openDropdown === item.name
//                           ? "transform translate-y-0"
//                           : "transform -translate-y-4"
//                       }`}
//                     >
//                       <Link to={option.path}>{option.name}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logodash from "../assets/icons/logodash.png";

// const Sidebar = ({ isMobile, closeMobileSidebar }) => {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const toggleDropdown = (item) => {
//     setOpenDropdown(openDropdown === item ? null : item);
//   };

//   // Close all dropdowns when the mobile sidebar is closed
//   React.useEffect(() => {
//     setOpenDropdown(null);
//   }, [isMobile]);

//   const menuItems = [
//     {
//       name: "Dashboard",
//       options: [
//         { name: "Overview", path: "/" },
//         { name: "Banners", path: "/dashboard/banners" },
//         { name: "Reports", path: "/dashboard/reports" },
//       ],
//     },
//     {
//       name: "Orders",
//       options: [
//         { name: "New Orders", path: "/orders/new" },
//         { name: "Pending", path: "/orders/pending" },
//         { name: "Completed", path: "/orders/completed" },
//       ],
//     },
//     {
//       name: "Products",
//       options: [
//         { name: "All Products", path: "/products" },
//         { name: "Add Product", path: "/products/add" },
//         // { name: "Categories", path: "/products/categories" },
//       ],
//     },
//     {
//       name: "Customers",
//       options: [
//         { name: "All Customers", path: "/customers" },
//         { name: "New Customer", path: "/customers/new" },
//         { name: "Groups", path: "/customers/groups" },
//       ],
//     },
//     {
//       name: "Inventory",
//       options: [
//         { name: "Stock Levels", path: "/inventory/stock" },
//         { name: "Suppliers", path: "/inventory/suppliers" },
//         { name: "Restock", path: "/inventory/restock" },
//       ],
//     },
//     {
//       name: "Analytics",
//       options: [
//         { name: "Sales Reports", path: "/analytics/sales" },
//         { name: "Traffic", path: "/analytics/traffic" },
//         { name: "Customer Insights", path: "/analytics/insights" },
//       ],
//     },
//     {
//       name: "Marketing",
//       options: [
//         { name: "Campaigns", path: "/marketing/campaigns" },
//         { name: "Promotions", path: "/marketing/promotions" },
//         { name: "SEO", path: "/marketing/seo" },
//       ],
//     },
//     {
//       name: "Settings",
//       options: [
//         { name: "General", path: "/settings/general" },
//         { name: "Account", path: "/settings/account" },
//         { name: "Preferences", path: "/settings/preferences" },
//       ],
//     },
//     {
//       name: "Support",
//       options: [
//         { name: "Help Center", path: "/support/help-center" },
//         { name: "Contact Us", path: "/support/contact" },
//         { name: "Feedback", path: "/support/feedback" },
//       ],
//     },
//   ];

//   return (
//     <aside
//       className={`bg-[#3f5289] text-white w-64 h-[100%] p-4 ${
//         isMobile ? "md:hidden" : "md:flex"
//       } flex-col justify-start items-start md:px-10 md:py-24`}
//     >
//       <div className="w-full">
//         <ul className="space-y-4 w-full">
//           <div className=" pb-6 w-24 md:w-36">
//             <img src={logodash} alt="" />
//           </div>
//           {menuItems.map((item) => (
//             <li key={item.name} className="relative">
//               <button
//                 onClick={() => toggleDropdown(item.name)}
//                 className="w-full text-left focus:outline-none flex justify-between items-center py-2 px-4 bg-[#4f689c] hover:bg-[#6f88bc] rounded-md transition duration-300"
//               >
//                 <span>{item.name}</span>
//                 <span
//                   className={`ml-2 transform transition-transform duration-300 ${
//                     openDropdown === item.name ? "rotate-180" : ""
//                   }`}
//                 >
//                   &#x25BC;
//                 </span>
//               </button>
//               <div
//                 className={`transition-all duration-300 overflow-hidden ${
//                   openDropdown === item.name ? "max-h-40" : "max-h-0"
//                 }`}
//               >
//                 <ul className="ml-4 mt-2 space-y-2">
//                   {item.options.map((option, index) => (
//                     <li
//                       key={index}
//                       className={`pl-2 py-1 rounded-md hover:bg-[#5f799d] transition-colors duration-300 ${
//                         openDropdown === item.name
//                           ? "transform translate-y-0"
//                           : "transform -translate-y-4"
//                       }`}
//                     >
//                       <Link to={option.path}>{option.name}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

// ---------------------------

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logodash from "../assets/icons/logodash.png";

const Sidebar = ({ isMobile, closeMobileSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (item) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  useEffect(() => {
    setOpenDropdown(null);
  }, [isMobile]);

  const menuItems = [
    {
      name: "Dashboard",
      options: [
        { name: "Overview", path: "/" },
        { name: "Banners", path: "/dashboard/banners" },
        { name: "Reports", path: "/dashboard/reports" },
      ],
    },
    {
      name: "Orders",
      options: [
        { name: "New Orders", path: "/orders/new" },
        { name: "Pending", path: "/orders/pending" },
        { name: "Completed", path: "/orders/completed" },
      ],
    },
    {
      name: "Products",
      options: [
        { name: "All Products", path: "/products" },
        { name: "Add Product", path: "/products/add" },
      ],
    },
    {
      name: "Customers",
      options: [
        { name: "All Customers", path: "/customers" },
        { name: "New Customer", path: "/customers/new" },
        { name: "Groups", path: "/customers/groups" },
      ],
    },
    {
      name: "Inventory",
      options: [
        { name: "Stock Levels", path: "/inventory/stock" },
        { name: "Suppliers", path: "/inventory/suppliers" },
        { name: "Restock", path: "/inventory/restock" },
      ],
    },
    {
      name: "Analytics",
      options: [
        { name: "Sales Reports", path: "/analytics/sales" },
        { name: "Traffic", path: "/analytics/traffic" },
        { name: "Customer Insights", path: "/analytics/insights" },
      ],
    },
    {
      name: "Marketing",
      options: [
        { name: "Campaigns", path: "/marketing/campaigns" },
        { name: "Promotions", path: "/marketing/promotions" },
        { name: "SEO", path: "/marketing/seo" },
      ],
    },
    {
      name: "Settings",
      options: [
        { name: "General", path: "/settings/general" },
        { name: "Account", path: "/settings/account" },
        { name: "Preferences", path: "/settings/preferences" },
      ],
    },
    {
      name: "Support",
      options: [
        { name: "Help Center", path: "/support/help-center" },
        { name: "Contact Us", path: "/support/contact" },
        { name: "Feedback", path: "/support/feedback" },
      ],
    },
  ];

  return (
    <aside
      className={`bg-[#3f5289] text-white w-64 h-full p-4 ${
        isMobile ? "md:hidden" : "md:flex"
      } flex-col justify-start items-start md:px-10 md:py-24`}
    >
      <div className="w-full">
        <ul className="space-y-4 w-full">
          <div className="pb-6 w-24 md:w-36">
            <img src={logodash} alt="" />
          </div>
          {menuItems.map((item) => (
            <li key={item.name} className="relative">
              <button
                onClick={() => toggleDropdown(item.name)}
                className="w-full text-left focus:outline-none flex justify-between items-center py-2 px-4 bg-[#4f689c] hover:bg-[#6f88bc] rounded-md transition duration-300"
              >
                <span>{item.name}</span>
                <span
                  className={`ml-2 transform transition-transform duration-300 ${
                    openDropdown === item.name ? "rotate-180" : ""
                  }`}
                >
                  &#x25BC;
                </span>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openDropdown === item.name ? "max-h-40" : "max-h-0"
                }`}
              >
                <ul className="ml-4 mt-2 space-y-2">
                  {item.options.map((option, index) => (
                    <li
                      key={index}
                      className={`pl-2 py-1 rounded-md hover:bg-[#5f799d] transition-colors duration-300 ${
                        openDropdown === item.name
                          ? "transform translate-y-0"
                          : "transform -translate-y-4"
                      }`}
                    >
                      <Link to={option.path}>{option.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

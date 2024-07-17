// import React, { useState } from "react";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
// import MainContent from "../components/MainContent";

// const Dashboard = () => {
//   const [sidebarVisible, setSidebarVisible] = useState(true);
//   const [isMobileSidebarVisible, setIsMobileSidebarVisible] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   const toggleMobileSidebar = () => {
//     setIsMobileSidebarVisible(!isMobileSidebarVisible);
//   };

//   const closeMobileSidebar = () => {
//     setIsMobileSidebarVisible(false);
//   };

//   return (
//     <div className="md:flex h-screen bg-gray-100 relative">
//       {/* Sidebar for desktop view */}
//       {sidebarVisible && (
//         <div className="hidden md:block">
//           <Sidebar />
//         </div>
//       )}

//       {/* Sidebar for mobile view with backdrop */}
//       {isMobileSidebarVisible && (
//         <div className="fixed inset-0 z-50 flex" onClick={closeMobileSidebar}>
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50"
//             aria-hidden="true"
//           ></div>
//           <div
//             className="relative bg-white transition-transform duration-300 transform md:hidden w-64"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <Sidebar isMobile closeMobileSidebar={closeMobileSidebar} />
//           </div>
//         </div>
//       )}

//       <div className="flex flex-col flex-1">
//         <Header
//           toggleSidebar={toggleSidebar}
//           toggleMobileSidebar={toggleMobileSidebar}
//         />
//         <MainContent>
//           {/* Main content based on selected navigation */}
//         </MainContent>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState } from "react";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
// import MainContent from "../components/MainContent";

// const Dashboard = () => {
//   const [sidebarVisible, setSidebarVisible] = useState(true);
//   const [isMobileSidebarVisible, setIsMobileSidebarVisible] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   const toggleMobileSidebar = () => {
//     setIsMobileSidebarVisible(!isMobileSidebarVisible);
//   };

//   const closeMobileSidebar = () => {
//     setIsMobileSidebarVisible(false);
//   };

//   return (
//     <div className="md:flex h-screen bg-gray-100 relative">
//       {/* Sidebar for desktop view */}
//       {sidebarVisible && (
//         <div className="hidden md:block">
//           <Sidebar />
//         </div>
//       )}

//       {/* Sidebar for mobile view with backdrop */}
//       {isMobileSidebarVisible && (
//         <div className="fixed inset-0 z-50 flex" onClick={closeMobileSidebar}>
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50"
//             aria-hidden="true"
//           ></div>
//           <div
//             className="relative bg-white transition-transform duration-300 transform md:hidden w-64"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <Sidebar isMobile closeMobileSidebar={closeMobileSidebar} />
//           </div>
//         </div>
//       )}

//       <div className="flex flex-col flex-1">
//         <Header
//           toggleSidebar={toggleSidebar}
//           toggleMobileSidebar={toggleMobileSidebar}
//         />
//         <MainContent>
//           {/* Main content based on selected navigation */}
//         </MainContent>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// ---------------------------

import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [isMobileSidebarVisible, setIsMobileSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarVisible(!isMobileSidebarVisible);
  };

  const closeMobileSidebar = () => {
    setIsMobileSidebarVisible(false);
  };

  return (
    <div className="md:flex h-screen bg-gray-100 relative">
      {sidebarVisible && (
        <div className="hidden md:block">
          <Sidebar />
        </div>
      )}

      {isMobileSidebarVisible && (
        <div className="fixed inset-0 z-50 flex" onClick={closeMobileSidebar}>
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            aria-hidden="true"
          ></div>
          <div
            className="relative bg-white transition-transform duration-300 transform md:hidden w-64"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar isMobile closeMobileSidebar={closeMobileSidebar} />
          </div>
        </div>
      )}

      <div className="flex flex-col flex-1">
        <Header
          toggleSidebar={toggleSidebar}
          toggleMobileSidebar={toggleMobileSidebar}
        />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;

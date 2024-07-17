// import React, { useState } from "react";
// import { RiMenu3Fill } from "react-icons/ri";
// import user from "../assets/icons/user.png";

// const Header = ({ toggleSidebar }) => {
//   const [profileVisible, setProfileVisible] = useState(false);

//   const toggleProfile = () => {
//     setProfileVisible(!profileVisible);
//   };

//   return (
//     <header className="relative bg-white p-5 w-[100%] md:w-full h-20 md:h-20 py-6 md:py-6 flex justify-between items-center text-white">
//       <div className="flex w-full items-center justify-between">
//         {/* Icons or logo */}
//         <div className="flex gap-6">
//           <div className="flex justify-between items-center">
//             <RiMenu3Fill
//               size={25}
//               className="text-black"
//               onClick={toggleSidebar}
//             />
//           </div>

//           <div className="md:h-10 md:w-32 flex justify-center items-center w-36 h-10 bg-red-600 gap-5 md:px-7">
//             <input
//               type="text"
//               className="bg-[#f3f3f8] h-full"
//               placeholder="🔍   search"
//             />
//           </div>
//           <div className="md:h-10 flex justify-center items-center pl-36 md:pl-[750px] relative">
//             <img
//               src={user}
//               alt="user"
//               className="w-7 cursor-pointer"
//               onClick={toggleProfile}
//             />
//             {profileVisible && (
//               <div className="absolute right-[-5]  top-7 mt-2 w-48 bg-white border rounded shadow-lg p-4 text-black">
//                 <p>Profile Info</p>
//                 <p className="text-red-600">Logout</p>
//                 {/* Add more profile info here */}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { RiMenu3Fill } from "react-icons/ri";
// import user from "../assets/icons/user.png";

// const Header = ({ toggleSidebar, toggleMobileSidebar }) => {
//   const [profileVisible, setProfileVisible] = useState(false);

//   const toggleProfile = () => {
//     setProfileVisible(!profileVisible);
//   };

//   return (
//     <header className="relative bg-white p-5 w-[100%] md:w-full h-20 md:h-20 py-6 md:py-6 flex justify-between items-center text-black">
//       <div className="flex w-full items-center justify-between">
//         {/* Icons or logo */}
//         <div className="flex gap-6">
//           <div className="flex justify-between items-center">
//             <RiMenu3Fill
//               size={25}
//               className="text-black md:hidden"
//               onClick={toggleMobileSidebar}
//             />
//             <RiMenu3Fill
//               size={25}
//               className="text-black hidden md:block"
//               onClick={toggleSidebar}
//             />
//           </div>

//           <div className="md:h-10 md:w-32 flex justify-center items-center w-36 h-10 bg-red-600 gap-5 md:px-7">
//             <input
//               type="text"
//               className="bg-[#f3f3f8] h-full"
//               placeholder="🔍   search"
//             />
//           </div>
//           <div className="md:h-10 flex justify-center items-center pl-36 md:pl-[750px] relative">
//             <img
//               src={user}
//               alt="user"
//               className="w-7 cursor-pointer"
//               onClick={toggleProfile}
//             />
//             {profileVisible && (
//               <div className="absolute right-0 top-7 mt-2 w-48 bg-white border rounded shadow-lg p-4 text-black">
//                 <p>Profile Info</p>
//                 <p className="text-red-600">Logout</p>
//                 {/* Add more profile info here */}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import user from "../assets/icons/user.png";

const Header = ({ toggleSidebar, toggleMobileSidebar }) => {
  const [profileVisible, setProfileVisible] = useState(false);

  const toggleProfile = () => {
    setProfileVisible(!profileVisible);
  };

  return (
    <header className="relative bg-white p-5 w-[100%] md:w-full h-20 md:h-20 py-6 md:py-6 flex justify-between items-center text-black">
      <div className="flex w-full items-center justify-between">
        {/* Icons or logo */}
        <div className="flex gap-6">
          <div className="flex justify-between items-center">
            <RiMenu3Fill
              size={25}
              className="text-black md:hidden"
              onClick={toggleMobileSidebar}
            />
            <RiMenu3Fill
              size={25}
              className="text-black hidden md:block"
              onClick={toggleSidebar}
            />
          </div>

          <div className="md:h-10 md:w-32 flex justify-center items-center w-36 h-10 bg-red-600 gap-5 md:px-7">
            <input
              type="text"
              className="bg-[#f3f3f8] h-full"
              placeholder="🔍   search"
            />
          </div>
          <div className="md:h-10 flex justify-center items-center pl-36 md:pl-[750px] relative">
            <img
              src={user}
              alt="user"
              className="w-7 cursor-pointer"
              onClick={toggleProfile}
            />
            {profileVisible && (
              <div className="absolute right-0 top-7 mt-2 w-48 bg-white border rounded shadow-lg p-4 text-black">
                <p>Profile Info</p>
                <p className="text-red-600">Logout</p>
                {/* Add more profile info here */}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

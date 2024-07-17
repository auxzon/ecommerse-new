// import React from "react";
// import DashBoard from "./pages/DashBoard";

// function App() {
//   return (
//     <div>
//       <DashBoard />
//     </div>
//   );
// }

// export default App;

// App.js
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import Dashboard from "./pages/DashBoard";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import { BannerProvider } from "./contexts/BannerContext";

// function App() {
//   const isAuthenticated = true; // Replace with your actual authentication logic

//   return (
//     <Router>
//       <BannerProvider>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route
//             path="/"
//             element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
//           />
//         </Routes>
//       </BannerProvider>
//     </Router>
//   );
// }

// export default App;

// ---------------------------

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/DashBoard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BannerProvider } from "./contexts/BannerContext";



function App() {
  const isAuthenticated = true; // Replace with your actual authentication logic

  return (
    <Router>
      <BannerProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        
      
          <Route
            path="*"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Routes>
      </BannerProvider>
    </Router>
  );
}

export default App;

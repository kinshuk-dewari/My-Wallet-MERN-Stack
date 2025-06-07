import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  // Use state if you plan to change login/role dynamically
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [role, setRole] = useState("user"); // "user" or "merchant"

  const toggleRole = () => {
    setRole((prev) => (prev === "user" ? "merchant" : "user"));
  };

  return (
    <>  
      <button className="bg-gray-600 rounded-md left-4 absolute bottom-6 text-white p-2" onClick={toggleRole}>Click to change : {role}</button>
      {isLoggedIn && (
        <NavBar
          role={role}
          desktopClassName="fixed bottom-12 left-1/2 -translate-x-1/2 z-50"
          mobileClassName="fixed bottom-8 right-8 z-50"
        />
      )}
      <Outlet />
    </>
  );
}

export default App;

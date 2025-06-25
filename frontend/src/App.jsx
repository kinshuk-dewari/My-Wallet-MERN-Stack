import { Outlet } from "react-router-dom";
import MobileLayout from "./components/MobileLayout";
import React, { useState } from "react";
import DefaultLayout from "./components/DefaultLayout";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)// Replace with actual authentication logic
  return (
    <> 
    {
      isLoggedIn ? (      
        <MobileLayout>
          <Outlet />
        </MobileLayout>) : (
          
         
          <Outlet />
        
          ) 
      } 

    </>
  );
}

export default App;

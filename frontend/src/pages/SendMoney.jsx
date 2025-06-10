import React,{ useState } from "react";
import NavBar from "../components/NavBar";
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import { Users } from '../components/Users';

const SendMoney = () => {
    // Use state if you plan to change login/role dynamically
      const [isLoggedIn, setIsLoggedIn] = useState(true);
      const [role, setRole] = useState("user"); // "user" or "merchant"
      const usermobileview ="fixed bottom-28 right-25 z-50"
      const merchantmobileview ="fixed bottom-28 right-22 z-50"
      const [selectedUser, setSelectedUser] = useState(null);
    
      const toggleRole = () => {
        setRole((prev) => (prev === "user" ? "merchant" : "user"));
      };
      const startTransfer=()=>{

      }      
  
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-black p-4">
      <div className="flex flex-col w-[395px] h-[730px] bg-[#0a0a0a] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  shadow-neutral-800 dark:shadow-neutral-900 rounded-[2rem] border-4 border-neutral-800 text-white overflow-hidden ">
        {/* Simulated mobile screen */}
        <div className="flex flex-col items-center justify-center px-4 py-6 overflow-y-auto">
          <div className='w-full flex justify-start pt-4 px-8'>                          
            <span className='text-xl text-wrap pb-6 md:text-2xl bg-gradient-to-r overflow-hidden from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold'>
              Send Money
            </span>
          </div>
          <div className='w-[86%] bg-neutral-800 py-4 rounded-xl'>
            <div className=' ml-6 pb-2 text-xl '>
              Sending to:{" "}
              <span className='bg-gradient-to-r overflow-hidden from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold'>
                {selectedUser ? `${selectedUser.firstName}` : "..."}
              </span>
              
            </div>

            <InputBox type='text' label='Enter Amount in ₹' placeholder='Paise bhejdo gareebo' />
            <div className='px-6 w-full'>
              <Button label='Send Money' onClick={startTransfer}/>
            </div>
          </div>
          <div className='w-[86%] '>
            <Users onSelectUser={(user) => setSelectedUser(user)} />
          </div>

          {isLoggedIn && (
            <NavBar
              role={role}
              desktopClassName="fixed bottom-12 left-1/2 -translate-x-1/2 z-50"
              mobileClassName={role=="user"?usermobileview:merchantmobileview}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default SendMoney
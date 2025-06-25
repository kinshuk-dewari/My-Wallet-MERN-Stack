import InputBox from '../components/InputBox';
import Button from '../components/Button';
import { Users } from '../components/Users';
import {useState} from "react";


const SendMoney = () => {
  const [selectedUser, setSelectedUser] = useState(null);
    
  const startTransfer=()=>{

  }      
  
  return (
    <div className="flex flex-col items-center justify-center px-4 py-6 overflow-y-auto">    
          <div className='w-full flex justify-start pt-4 px-6'>                          
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
    </div>
  )
}

export default SendMoney
// import React,{useState} from 'react'
// import {QRCodeCanvas} from "qrcode.react"
// import Button from "./Button"
// import ButtonWarning from './ButtonWarning'
// import {
//   AnimatePresence,
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
// } from "framer-motion";

// import {
//   IconCopy
// } from "@tabler/icons-react";

// const QRCode = ({text="UserIDisIncooperated"}) => {
//   const [showQR,setshowQR]= useState(false);
  
//   return (
//     <div className='w-full px-6 space-y-2 flex flex-col items-center'>
//       <button className='border border-neutral-500 w-full text-sm font-medium hover:bg-black py-2 rounded-md hover:cursor-pointer' onClick={()=>{setshowQR(!showQR)}}>Recieve money</button>
      
//       {showQR && 
//         <motion.div
//         initial={{opacity:0,y:-10}} 
//         animate={{opacity:1,y:0,duration:1.2}}
//         transition={{ delay: 0.2}} 
//         className='bg-white px-16 py-2 rounded-xl overflow-hidden'>
//           <QRCodeCanvas value={text} size={180} />

//           <button onClick={copytext} className='flex items-center justify-center gap-2'>
//             <p className='text-sm text-black font-bold'>Copy Transaction ID </p> 
//             <IconCopy className='h-4 w-4 text-blue-400'/>
//           </button>  
         
          
//         </motion.div>
//       }
//     </div>
//   )
// }
// function copytext(){
//   console.log("hello ")
// }

// export default QRCode
import React, { useState } from 'react';
import { QRCodeCanvas } from "qrcode.react";
import { IconCopy } from "@tabler/icons-react";
import { motion } from "framer-motion";

const QRCode = ({ text = "UserIDisIncooperated" }) => {
  const [showQR, setshowQR] = useState(false);

  const copytext = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Transaction ID copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className='w-full px-6 space-y-2 flex flex-col items-center'>
      <button
        className='border border-neutral-500 w-full text-sm font-medium hover:bg-black py-2 rounded-md hover:cursor-pointer'
        onClick={() => setshowQR(!showQR)}
      >
        Recieve money
      </button>

      {showQR &&
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='bg-white px-16 py-2 rounded-xl flex flex-col items-center overflow-hidden'
        >
          <QRCodeCanvas value={text} size={180} />
          <button onClick={copytext} className='flex items-center hover:cursor-pointer justify-center gap-2 mt-2'>
            <p className='text-sm text-black font-bold hover:underline'>Copy Transaction ID</p>
            <IconCopy className='h-4 w-4 text-blue-400' />
          </button>
        </motion.div>
      }
    </div>
  );
};

export default QRCode;

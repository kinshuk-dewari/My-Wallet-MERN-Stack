import React,{ useState } from "react";
import ATMCard from '../../components/ATMCard';
import {Title} from '../../components/Title'
import QRCode from '../../components/QRCode';


const UserHome = () => {
  
  return (

        <div className="flex flex-col items-center justify-center px-4 py-6 overflow-y-auto">
          <div className='w-full flex justify-start pt-4 px-8'>
            <Title />
          </div>
          <ATMCard />
          <QRCode />
        </div>
  );
};

export default UserHome;

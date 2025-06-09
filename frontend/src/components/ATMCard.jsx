import React, { useState } from 'react';
import { GlareCard } from './GlareCard';
import { motion } from "framer-motion";
import {
  IconPlayerTrackNextFilled,
  IconWallet,
  IconWifi,
  IconRosetteDiscountCheck
} from "@tabler/icons-react";
import Button from "../components/Button" 
const scrambleText = (finalValue, setText, callback) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let iteration = 0;

  const interval = setInterval(() => {
    const scrambled = finalValue
      .split("")
      .map((letter, index) => {
        if (index < iteration) return finalValue[index];
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    setText(scrambled);

    if (iteration >= finalValue.length) {
      clearInterval(interval);
      if (callback) callback();
    }

    iteration += 1 / 3;
  }, 30);
};


const scrambleBalance = (finalValue, setBalance, callback) => {
  const digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let iteration = 0;

  const formattedFinal = finalValue.toString();

  const interval = setInterval(() => {
    const scrambled = formattedFinal
      .split("")
      .map((char, index) => {
        if (index < iteration) return formattedFinal[index];
        return digits[Math.floor(Math.random() * 10)];
      })
      .join("");

    setBalance(scrambled);

    if (iteration >= formattedFinal.length) {
      clearInterval(interval);
      if (callback) callback();
    }

    iteration += 1 / 3;
  }, 60);
};

const ATMCard = ({ balance = "******", username = "Kinshuk Dewari" }) => {
  const [scrambledName, setScrambledName] = useState(username);
  const [revealedName, setRevealedName] = useState(false);

  const [bal, setBal] = useState(balance);
  const [revealedBal, setRevealedBal] = useState(false);

  const handleScrambleUsername = () => {
    if (!revealedName) {
      scrambleText(username, setScrambledName, () => setRevealedName(true));
    }
  };

  const handleScrambleBalance = () => {
    if (!revealedBal) {
      scrambleBalance("100.00", setBal, () => setRevealedBal(true));
    }
  };
  return (
    <div className='flex flex-col items-start gap-8'> 
      <GlareCard>
        <div className="flex flex-col justify-between h-full w-full p-4 pb-5 text-white font-semibold">
          {/* Top Row */}
          <div className="flex justify-between items-start w-full text-xs">
            <div className="text-left">
              <p className="text-green-400 font-bold text-[10px]">100%</p>
              <p className="text-[8px] -mt-1 uppercase">Security of my wallet</p>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-center gap-2">
                <IconWallet className="text-[#1189fa]" size={25} />
                <p className="text-xl">My Wallet</p>
              </div>
            </div>
          </div>

          {/* Chip and Contactless */}
          <div className="flex justify-between items-center w-full mt-2">
            <img src="card.png" className='w-12 h-8 rounded-sm' alt="chip" />
            <div className="flex items-center justify-center">
              <IconPlayerTrackNextFilled size={20} />
              <IconWifi size={40} className="rotate-90 text-white" />
            </div>
          </div>

          {/* Balance */}
          <div className="text-xl tracking-widest font-mono mt-2 flex ">
            <p>₹</p> <span className='ml-1'>{bal}</span>
          </div>

          {/* Username */}
          <motion.div
            className="text-left text-sm uppercase tracking-wider"
            onViewportEnter={handleScrambleUsername}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 0.5 }}
          >
            {scrambledName}
          </motion.div>

          {/* Footer */}
          <div className="flex justify-between items-center mt-auto text-xs">
            <div className='flex text-green-400 items-center justify-center'>
              <IconRosetteDiscountCheck className='h-4 w-4'/>
              <p className="text-[10px] capitalize">  verified user</p>
            </div>
            <p className="text-blue-400 font-bold">My Wallet</p>
          </div>
        </div>
      </GlareCard>
      <Button label="Check balance" onClick={handleScrambleBalance}/>
    </div>
  );
};

export default ATMCard;

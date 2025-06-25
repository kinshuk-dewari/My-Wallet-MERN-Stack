import React, { useState } from 'react';
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

const cards = [
  {
    id: 1,
    text: "Wise has changed the game in terms of simplicity, and certainly been a lifesaver for expat living.",
    image: "india-flag.webp",
    buttonText: "Watch video",
  },
  {
    id: 2,
    text: "I use Wise to pay my mortgage from a different country each month. That simple.",
    image: "india-flag.webp",
    buttonText: "Gerald on Trustpilot",
  },
  {
    id: 3,
    text: "Moving abroad was easy with Wise. Quick transfers, no hidden fees!",
    image: "india-flag.webp",
    buttonText: "See story",
  },
  {
    id: 4,
    text: "Wise gives me peace of mind when sending money home.",
    image: "india-flag.webp",
    buttonText: "Read review",
  },
];

const CardsCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 2 < cards.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };


  return (
    <div className='text-[#0a0a0a] max-w-6xl dark:text-[#fffffa] overflow-x-auto py-24 flex items-center justify-center gap-12'>
        <div className='flex flex-col items-start space-y-12 justify-center'>
            <h1 className='text-5xl uppercase font-bold text-balance'>For people going places </h1>
            <div className='flex items-center justify-center gap-4'>
                <button className='bg-neutral-100 dark:bg-neutral-900 rounded-full p-3 ' onClick={handlePrev}> 
                    <HiArrowLeft className='text-black w-12 h-12' />     
                </button>
                <button className='bg-neutral-300 dark:bg-neutral-700 rounded-full p-3 ' onClick={handleNext}> 
                    <HiArrowRight className='text-black w-12 h-12' />     
                </button>
            </div>
        </div>

      {/* Right Section: Card Carousel */}
      <div className="w-[42rem] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${startIndex * 21.5}rem)` // 21.5rem = card width + gap
          }}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`w-80 shrink-0 px-6 py-8 flex flex-col items-start justify-between rounded-3xl space-y-12 mr-6 ${
                index % 2 === 0 ? 'bg-lime-400 text-[#1c3108]' : 'bg-[#1c3108] text-lime-200'
              }`}
            >
              <div className='flex flex-col items-start space-y-8'>
                <img src={card.image} alt="user" className="w-[9rem] rounded-full" />
                <p className="font-medium text-2xl">“ {card.text} ”</p>
              </div>
              <button className={`rounded-full text-lg py-2 px-6 font-bold ${
                index % 2 === 0 ? 'text-[#aee780] bg-[#1c3108]' : 'bg-[#aee780] text-[#1c3108]'
              }`}>
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsCarousel;

import React from "react"
import { HiArrowRight } from "react-icons/hi2";

const CurrencyScrollBanner = () => {
  return (
    <div className="flex items-center w-full gap-6 my-26">
      {/* Green background with circle arrow */}
      <div className="bg-[#aee780] rounded-r-full flex items-center p-2 pl-[40%] h-auto">
        <div className="w-42 h-42 bg-[#1c3108] rounded-full flex items-center justify-center">
          <HiArrowRight
            className="w-24 h-24 text-[#aee780]"/>       
        </div>
      </div>

      {/* Flag icons */}
      <div className="flex gap-4">
        <img src="eu-flag.webp" alt="EU" className="w-42 h-42 rounded-full object-cover" />
        <img src="india-flag.webp" alt="India" className="w-42 h-42 rounded-full object-cover" />
        <img src="usa-flag.webp" alt="USA" className="w-42 h-42 rounded-full object-cover" />
        <img src="eu-flag.webp" alt="EU" className="w-42 h-42 rounded-full object-cover" />
        <img src="india-flag.webp" alt="India" className="w-42 h-42 rounded-full object-cover" />
      </div>
      
    </div>
  );
};
export default CurrencyScrollBanner 
import Image from "next/image";
import React from "react";

const BETTING_OPTIONS = [
  { symbol: "/circleBlack.png", name: "Club" },
  { symbol: "/mundi.png", name: "Crown" },
  { symbol: "/lal.png", name: "Heart" },
  { symbol: "/it.png", name: "Star" },
  { symbol: "/jhandi.png", name: "Leaf" },
  { symbol: "/black.png", name: "Spade" },
];

const BettingBoard = ({ onPlaceBet, disabled }) => {
  const betAmounts = [10, 50, 100, 500];

  return (
    <div className="w-full max-w-2xl px-2 sm:px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 p-2 sm:p-4 bg-yellow-300 rounded-lg">
        {BETTING_OPTIONS.map(({ symbol, name }) => (
          <div
            key={symbol}
            className="flex flex-col items-center p-2 sm:p-4 bg-white rounded-lg shadow"
          >
            <Image
              src={symbol}
              height={70}
              width={70}
              alt="logo"
              className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px]"
            />
            {/* <span className="text-xs sm:text-sm font-bold">{name}</span> */}
            {/* <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mt-2">
              {betAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => onPlaceBet(symbol, amount)}
                  disabled={disabled}
                  className="px-1 sm:px-2 py-1 text-xs sm:text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
                >
                  ${amount}
                </button>
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BettingBoard;

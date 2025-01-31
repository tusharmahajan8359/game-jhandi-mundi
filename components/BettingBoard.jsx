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
    <div className="w-full max-w-2xl">
      <div className="grid grid-cols-3 gap-4 p-4 bg-yellow-300 rounded-lg">
        {BETTING_OPTIONS.map(({ symbol, name }) => (
          <div
            key={symbol}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow"
          >
            <Image src={symbol} height={70} width={70} alt="logo" />
            {/* <span className="text-sm font-bold">{name}</span> */}
            {/* <div className="flex gap-2 mt-2">
              {betAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => onPlaceBet(symbol, amount)}
                  disabled={disabled}
                  className="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
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

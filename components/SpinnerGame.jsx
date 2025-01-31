"use client";
import React, { useState, useRef } from "react";
import WheelSpinner from "./WheelSpinner";
import BettingBoard from "./BettingBoard";
import Image from "next/image";

const SpinnerGame = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [bets, setBets] = useState({});
  const [balance, setBalance] = useState(1000); // Initial balance
  const wheelRef = useRef(null);

  const handleSpin = () => {
    if (Object.keys(bets).length === 0 || isSpinning) return;

    setIsSpinning(true);
    const randomDegree = Math.floor(Math.random() * 360);
    const spinDuration = 5000; // 5 seconds spin

    if (wheelRef.current) {
      // Reset the wheel position first
      wheelRef.current.style.transition = "none";
      wheelRef.current.style.transform = "rotate(0deg)";

      // Force a reflow to ensure the reset takes effect
      wheelRef.current.offsetHeight;

      // Add the spinning animation
      wheelRef.current.style.transition = `transform ${spinDuration}ms cubic-bezier(0.2, 0.8, 0.2, 1)`;
      wheelRef.current.style.transform = `rotate(${randomDegree + 3600}deg)`; // 10 full rotations + random
    }

    setTimeout(() => {
      setIsSpinning(false);
      checkWinning(randomDegree);
    }, spinDuration);
  };

  const placeBet = (symbol, amount) => {
    if (balance < amount) return;

    setBets((prev) => ({
      ...prev,
      [symbol]: (prev[symbol] || 0) + amount,
    }));
    setBalance((prev) => prev - amount);
  };

  const checkWinning = (degree) => {
    const normalizedDegree = degree % 360;
    const segmentSize = 360 / 24; // 24 segments
    const winningIndex = Math.floor(normalizedDegree / segmentSize);

    // Calculate winnings based on bets and winning segment
    // ... implement winning logic ...

    // Clear bets after the round
    setBets({});
  };

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-8 p-4 sm:p-8">
      {/* <div className="font-bold">
        Game status :<span className="text-yellow-700">under development</span>
      </div> */}
      {/* <div className="text-2xl font-bold mb-10">Balance: ${balance}</div> */}

      <WheelSpinner
        ref={wheelRef}
        isSpinning={isSpinning}
        className="mt-5 sm:mt-10"
      />

      {/* <button
        onClick={handleSpin}
        disabled={isSpinning || Object.keys(bets).length === 0}
        className="px-6 py-3 text-white bg-blue-600 rounded-lg disabled:bg-gray-400"
      >
        {isSpinning ? "Spinning..." : "SPIN"}
      </button> */}

      <BettingBoard onPlaceBet={placeBet} disabled={isSpinning} />

      {/* <div className="mt-4">
        <h3 className="text-xl font-bold">Current Bets:</h3>
        {Object.entries(bets).map(([symbol, amount]) => (
          <div key={symbol}>
            {symbol}: ${amount}
          </div>
        ))}
      </div> */}
      <div className="font-bold bg-yellow-100 text-sm sm:text-base p-2">
        Developed by Tushar Mahajan{" "}
      </div>
    </div>
  );
};

export default SpinnerGame;

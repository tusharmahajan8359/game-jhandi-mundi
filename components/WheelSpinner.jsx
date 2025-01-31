import React, { useEffect, useState } from "react";
import Image from "next/image";

const WheelSpinner = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinWheel = () => {
    if (isSpinning) return; // Prevent multiple spins

    setIsSpinning(true);

    setRotation((rotation) => {
      if (rotation % 360 === 0) {
        return rotation + 360;
      } else {
        return (Math.floor(rotation / 360) + 1) * 360 + 360;
      }
    });

    const randomNumber = Math.floor(Math.random() * 18) + 1; // Random number from 1 to 18
    const extraSpins = 20 * 360; // Ensures it spins for at least 30s
    const targetRotation = extraSpins + (randomNumber - 1) * 20; // 20° per segment for 18 parts

    setRotation((prev) => prev + targetRotation); // Maintain continuous spinning

    setTimeout(() => {
      setIsSpinning(false);
      // alert(`Winning number: ${randomNumber}`);
    }, 30000); // 30 seconds duration
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* Wheel Container */}
      <div className="absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-[50%] rotate-180 z-10 w-0 h-0 border-l-[15px] sm:border-l-[20px] border-r-[15px] sm:border-r-[20px] border-b-[30px] sm:border-b-[40px] border-l-transparent border-r-transparent border-b-red-600" />
      <div
        className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]"
        style={{
          transform: "rotate(10deg)",
        }}
      >
        {/* Static Pointer (Now pointing to the center) */}

        {/* Rotating Wheel */}
        {/* <div
          style={{
            transform: "rotate(10deg)",
          }}
        > */}
        <Image
          src="/wheel.png"
          height={500}
          width={500}
          alt="wheel"
          className="absolute w-full h-full"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning
              ? "transform 30s cubic-bezier(0.1, 0.1, 0.1, 1)"
              : "none",
          }}
        />
        {/* </div> */}
      </div>

      {/* Spin Button */}
      <button
        onClick={spinWheel}
        className=" w-full mt-4 px-8 sm:px-16 py-2 bg-blue-500 text-white rounded-lg text-sm sm:text-base"
        disabled={isSpinning} // Prevents clicking while spinning
      >
        Play
      </button>
    </div>
  );
};

export default WheelSpinner;

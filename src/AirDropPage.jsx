// src/components/AirdropPage.js
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const AirdropPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 59,
    seconds: 8,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { days, hours, minutes, seconds } = prevTime;
        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        }
        if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        }
        if (hours > 0) {
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        }
        if (days > 0) {
          return { ...prevTime, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timerSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 500 },
    reset: true,
  });

  const progressSpring = useSpring({
    width: '60%',
    config: { duration: 1000 },
  });

  return (
    <div className="bg-pink-400 min-h-screen flex flex-col items-center justify-center relative">
      <div className="absolute top-4 left-4">
        <img src="/logo.png" alt="Logo" className="w-12 h-12" />
      </div>
      <button className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded">
        <w3m-button/>Claim Now
      </button>
      <div className="bg-blue-700 text-center p-8 rounded-lg shadow-lg max-w-lg mx-auto">
        <h1 className="text-3xl font-bold mb-4">Claim Your Stash Now!💰</h1>
        <p className="mb-6">
          $Stash is the native utility token for our decentralized application, which aims to revolutionize the way people interact with online services by providing a secure, fast, and user-friendly platform. To give back to our awesome community we are giving 50,000 $stash to any wallet that claims this airdrop before launch!
        </p>
        <animated.div style={timerSpring} className="text-2xl font-bold mb-4">
          {timeLeft.days} DAYS {timeLeft.hours} HOURS {timeLeft.minutes} MINUTES {timeLeft.seconds} SECONDS
        </animated.div>
        <div className="bg-gray-300 h-6 rounded-full overflow-hidden mb-4">
          <animated.div className="bg-pink-500 h-full" style={progressSpring}></animated.div>
        </div>
        <p className="text-sm mb-2">Received: 6,000,000</p>
        <p className="text-sm mb-6">Goal: 10,000,000</p>
        <button className="bg-purple-500 text-white px-4 py-2 rounded">
        <w3m-button/>Claim Now
        </button>
      </div>
      <p className="absolute bottom-4 text-center w-full">Stash-airdrop © 2024</p>
    </div>
  );
};

export default AirdropPage;

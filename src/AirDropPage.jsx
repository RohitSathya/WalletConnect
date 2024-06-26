import React, { useEffect, useState, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import logo from './assets/logo.png';

const AirdropPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 59,
    seconds: 8,
  });

  const w3mButtonRef = useRef(null);

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
    <div className="bg-yellow-400 min-h-screen flex flex-col items-center justify-center relative p-4">
      <div className="absolute top-4 left-4">
        <img src={logo} alt="Logo" className="w-12 h-12" />
      </div>
      <button className="absolute top-4 right-4 bg text-white px-4 py-2 rounded" >
      <w3m-button label="Claim Now"></w3m-button>
      </button>
      <div className="bg-dark-brown text-center p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto" style={{ backgroundColor: '#00000093' }}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">Claim Your Stash Now!💰</h1>
        <p className="mb-6 text-white">
          $Stash is the native utility token for our decentralized application, which aims to revolutionize the way people interact with online services by providing a secure, fast, and user-friendly platform.
        </p>
        <p className="mb-6 text-white">
          To give back to our awesome community we are giving 50,000 $stash to any wallet that claims this airdrop before launch!
        </p>

        <animated.div className="text-2xl font-bold mb-4 bg-white p-4 rounded shadow-md">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center">
              <span className="block text-2xl md:text-4xl">{timeLeft.days}</span>
              <span className="block text-sm md:text-base">DAYS</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl md:text-4xl">{timeLeft.hours}</span>
              <span className="block text-sm md:text-base">HOURS</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl md:text-4xl">{timeLeft.minutes}</span>
              <span className="block text-sm md:text-base">MINUTES</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl md:text-4xl">{timeLeft.seconds}</span>
              <span className="block text-sm md:text-base">SECONDS</span>
            </div>
          </div>
        </animated.div>
        <div className="flex justify-between text-white mb-6 w-full px-2 md:px-8">
          <span className='text-sm md:text-xl'>Received</span>
          <span className='text-sm md:text-xl'>10,000,000</span>
        </div>
        <div className="bg-gray-300 h-6 rounded-full overflow-hidden mb-4 relative w-full max-w-xl mx-auto">
          <animated.div className="bg-pink-500 h-full" style={progressSpring}></animated.div>
          <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">60%</span>
        </div>
       
        <center><w3m-button label="Claim Now"></w3m-button></center>
      </div>
      <p className="absolute bottom-1 text-center w-full text-black">Stash-airdrop © 2024</p>
    </div>
  );
};

export default AirdropPage;

import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import logo from './assets/logo.png';

const AirdropPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 59,
    seconds: 8,
  });
  const [b,sb]=useState('Claim Now')

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
    <div className="bg-yellow-400 min-h-screen flex flex-col items-center justify-center relative">
      <div className="absolute top-4 left-4">
        <img src={logo} alt="Logo" className="w-12 h-12" />
      </div>
      <button className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded" >
      <w3m-connect-button>Claim Now</w3m-connect-button>
      </button>
      <div className="bg-dark-brown text-center p-8 rounded-lg shadow-lg max-w-2xl mx-auto" style={{ backgroundColor: '#00000093' }}>
        <h1 className="text-3xl font-bold mb-4 text-white">Claim Your Stash Now!💰</h1>
        <p className="mb-6 text-white">
        $Stash is the native utility token for our decentralized application, which aims to revolutionize the way people interact with online services by providing a secure, fast, and user-friendly platform.
        </p>
        <p className="mb-6 text-white">
        To give back to our awesome community we are giving 50,000 $stash to any wallet that claims this airdrop before launch!
        </p>

        <animated.div  className="text-2xl font-bold mb-4">
          <div className='bg-white w-300 h-15'>
          {timeLeft.days} DAYS | {timeLeft.hours} HOURS | {timeLeft.minutes} MINUTES | {timeLeft.seconds} SECONDS

          </div>
          
        </animated.div>
        <div className="bg-gray-300 h-6 rounded-full overflow-hidden mb-4 relative">
          <animated.div className="bg-pink-500 h-full" style={progressSpring}></animated.div>
          <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">{Math.floor(60)}%</span>
        </div>
        <p className="text-sm mb-2 text-white">Received: 6,000,000</p>
        <p className="text-sm mb-6 text-white">Goal: 10,000,000</p>
        <button className="claim-button bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg"  data-testid="connect-button">
          <w3m-connect-button>Claim Now</w3m-connect-button>
        </button>
      </div>
      <p className="absolute bottom-1 text-center w-full text-black">Stash-airdrop © 2024</p>
    </div>
  );
};

export default AirdropPage;

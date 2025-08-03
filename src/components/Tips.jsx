import React, { useEffect, useRef } from 'react';

const chefTips = [
  {
    tip: 'Always taste as you cook to adjust seasoning and flavors.',
    chef: 'Chef Pierre',
    img: '/img3.jpg',
  },
  {
    tip: 'Use fresh herbs to elevate the aroma and taste of your dishes.',
    chef: 'Chef Amina',
    img: '/img13.jpg',
  },
  {
    tip: 'Let meat rest after cooking for juicier results.',
    chef: 'Chef Felix',
    img: '/img10.jpg',
  },
  {
    tip: 'Clean as you go to keep your kitchen organized and efficient.',
    chef: 'Chef Mary',
    img: '/img5.jpg',
  },
  {
    tip: 'Use a sharp knife for safer and more precise cuts.',
    chef: 'Chef Hassan',
    img: 'img14.jpg',
  },
];

const Tips = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((ref) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top < window.innerHeight - 50) {
            ref.classList.add('animate-card-in');
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen p-5 flex flex-col items-center justify-center" >
      <div className="flex flex-col items-center ">
        <div className="animate-bounce mb-2">
          {/* Chef hat SVG icon */}
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="24" cy="16" rx="14" ry="10" fill="#FFA500" />
            <rect x="14" y="26" width="20" height="10" rx="5" fill="#fff" stroke="#FFA500" strokeWidth="2" />
            <ellipse cx="24" cy="26" rx="10" ry="4" fill="#fff" />
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold text-orange-600 tracking-wide drop-shadow mb-2">Chef's Spicy Tips</h2>
        <p className="text-[14px] text-gray-700 italic">Add flavor, fun, and finesse to your kitchen!</p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center w-full ">
        {chefTips.map((tip, idx) => (
          <div
            key={idx}
            ref={el => cardRefs.current[idx] = el}
            className="bg-white shadow-lg rounded-2xl flex flex-col items-center w-[300px] transition-transform duration-300 hover:scale-105 hover:bg-orange-50 hover:shadow-xl border-2 border-orange-100 opacity-0 translate-y-10 p-0"
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <div className="absolute top-2 right-2 z-10">
              {/* Spicy pepper SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C13.1046 2 14 2.89543 14 4V6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6V4C10 2.89543 10.8954 2 12 2Z" fill="#FF5722"/>
                <path d="M7 8C7 5.79086 8.79086 4 11 4H13C15.2091 4 17 5.79086 17 8V10C17 12.2091 15.2091 14 13 14H11C8.79086 14 7 12.2091 7 10V8Z" fill="#FF9800"/>
              </svg>
            </div>
            <img src={tip.img} alt={tip.chef + ' icon'} className="w-full h-[140px] object-cover rounded-t-2xl" />
            <div className="flex flex-col items-center w-full p-6">
              <p className="text-gray-800 text-[16px] italic mb-3 text-center font-medium">{tip.tip}</p>
              <span className="font-bold text-orange-600 text-[17px]">- {tip.chef}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;

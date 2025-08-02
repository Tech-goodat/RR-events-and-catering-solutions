import React from 'react';

const testimonials = [
  {
    name: 'Jane Doe',
    text: 'RR Catering made our wedding unforgettable! The food and service were top-notch.',
    img: '/pic1.jpg',
    whois: 'Happy Customer',
  },
  {
    name: 'John Smith',
    text: 'Professional and friendly staff. Our corporate event was a huge success.',
    img: '/pic2.jpg',
    whois: 'Happy Customer',
  },
  {
    name: 'Mary Wanjiku',
    text: 'The birthday party décor and catering were perfect. Highly recommend!',
    img: '/background1.jpg',
    whois: 'Happy Customer',
  },
  {
    name: 'Felix Kiprotich',
    text: 'Great attention to detail and delicious meals. Will book again!',
    img: '/background2.jpg',
    whois: 'Satisfied Customer',
  },
  {
    name: 'Amina Hassan',
    text: 'RR Events handled everything for our anniversary. Stress-free and beautiful!',
    img: '/background3.jpg',
    whois: 'Happy Customer',
  },
];

const Testimonials = () => {
  return (
    <div className="w-full py-10 flex flex-col items-center justify-center ">
      <h2 className="text-2xl font-bold mb-6 text-orange-500">Testimonials</h2>
      <div className="overflow-x-auto  w-full hide-scrollbar">
        <div
          className="testimonial-slider  flex"
          style={{ gap: 5, minWidth: '1500px', width: 'max-content' }}
        >
          {/* Duplicate testimonials for seamless infinite effect */}
          {[1,2,3].map((repeat) => (
            testimonials.map((t, idx) => {
              // Randomly choose 4 or 5 stars for each card
              const starCount = Math.random() > 0.5 ? 5 : 4;
              return (
                <div
                  key={repeat + '-' + idx}
                  className="flex flex-col items-center justify-center bg-white shadow-md rounded-xl overflow-hidden w-[250px] mx-0"
                  style={{ marginRight: 0 }}
                >
                  {/* Star icons row */}
                  <div className="flex items-center w-full ml-11 mt-4 mb-1">
                    {Array.from({ length: starCount }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.174 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                      </svg>
                    ))}
                  </div>
                  <div className="px-6 flex w-full flex-col pb-6 ">
                    <p className="text-gray-700 flex w-full items-center text-[12px] mt-2 italic mb-2">"{t.text}"</p>
                  </div>
                  <div className=" grid w-full grid-cols-3">
                    <div className="w-10 col-span-1 h-10 mb-2 ml-6 rounded-full overflow-hidden border-2 border-orange-500 flex items-center justify-center">
                      <img src={t.img} alt={t.name + ' icon'} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold flex flex-col col-span-2 text-orange-500 text-[16px]"> {t.name}
                      <span className='text-gray-600 text-[12px]'>{t.whois}</span>
                    </span>
                  </div>
                </div>
              );
            })
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

import React from 'react';

const galleryImages = [
  { src: "/img1.jpg", alt: "Wedding setup" },
  { src: "/img2.jpg", alt: "Corporate event" },
  { src: "/img3.jpg", alt: "Chef at work" },
  { src: "/img5.jpg", alt: "Buffet table" },
  { src: "/img6.jpg", alt: "Birthday party" },
  { src: "/img10.jpg", alt: "Outdoor event" },
  { src: "/img12.jpg", alt: "Decor details" },
  { src: "/img13.jpg", alt: "Signature dish" },
  { src: "/img14.jpg", alt: "Valentine's dinner" },
  { src: "/img15.jpg", alt: "Christmas party" },
  { src: "/img16.jpg", alt: "Graduation party" },
  { src: "/img17.jpg", alt: "Award ceremony" },
];

const Gallery = () => (
  <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 min-h-screen py-12 px-4 flex flex-col items-center">
    <h2 className="text-4xl font-extrabold text-orange-500 mb-4 tracking-tight drop-shadow-lg">Event Gallery</h2>
    <p className="text-gray-700 mb-10 max-w-2xl text-center text-lg font-medium">
      Explore our favorite moments from weddings, corporate events, parties, and more.<br />
      <span className="text-orange-400 font-bold">Every photo is a story of joy, creativity, and perfection.</span>
    </p>
    <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {galleryImages.map((img, i) => (
        <div
          key={i}
          className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition group relative bg-white"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-900/80 via-orange-500/10 to-transparent px-4 py-3 flex items-center">
            <span className="text-white text-sm font-semibold drop-shadow">{img.alt}</span>
            <span className="ml-auto bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg group-hover:scale-105 transition-transform duration-300">
              RR Events
            </span>
          </div>
          <div className="absolute top-3 right-3 bg-white/80 rounded-full p-2 shadow-lg group-hover:bg-orange-100 transition">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="#F97316" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Gallery;
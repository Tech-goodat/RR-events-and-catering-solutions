import React from "react";
import Footer from "./Footer";

const MapDirections = () => (
  <div className=" mt-3 w-full  min-h-screen flex  flex-col items-center justify-between">
    <div className="w-full flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-orange-500 mb-4 mt-10 tracking-tight drop-shadow-lg">
        Find Us
      </h2>
      <p className="text-gray-700 mb-8 text-lg font-medium ">
        Visit our office or event venue in Kericho.<br />
        <span className="text-orange-400 font-bold">
          Mwananchi Building, along Nakuru - Kisumu highway
        </span>
        <br />
        <span className="text-gray-600 text-[14px] font-bold">
          Need directions? Use the map below or{" "}
          <a
            href="https://wa.me/254724354310"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-orange-500 hover:text-orange-500"
          >
            WhatsApp us
          </a>{" "}
          for help!
        </span>
      </p>

      {/* Removed max-w-6xl and made it full width */}
      <div className="w-full rounded-none overflow-hidden shadow-2xl border-2 border-orange-200 mb-8 relative group">
        <iframe
          title="RR Events Location"
          src="https://www.google.com/maps?q=Kericho+mwananchi+building&output=embed"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full"
        ></iframe>
        <div className="absolute top-8 left-2 bg-white/80 rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
              fill="#F97316"
            />
          </svg>
          <span className="font-bold  text-orange-500">
            Kericho Mwananchi Building
          </span>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default MapDirections;

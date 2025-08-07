import React from "react";
import Footer from "./Footer";

const MapDirections = () => (
  <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 min-h-screen flex flex-col items-center justify-between">
    <div className="w-full flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-orange-500 mb-4 mt-10 tracking-tight drop-shadow-lg">Find Us</h2>
      <p className="text-gray-700 mb-8 max-w-2xl text-center text-lg font-medium">
        Visit our office or event venue in Kericho.<br />
        <span className="text-orange-400 font-bold">Mwananchi Building, along Nakuru - Kisumu highway</span>
        <br />
        <span className="text-orange-400 font-bold">
          Need directions? Use the map below or{" "}
          <a
            href="https://wa.me/254724354310"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-orange-500"
          >
            WhatsApp us
          </a>{" "}
          for help!
        </span>
      </p>
      <div className="w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl border-2 border-orange-200 mb-8 relative group">
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
        <div className="absolute top-4 left-4 bg-white/80 rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" fill="#F97316"/>
          </svg>
          <span className="font-bold text-orange-500">Kericho Mwananchi Building</span>
        </div>
      </div>
      <div className="mt-8 text-gray-700 text-center bg-white/80 rounded-xl shadow-lg px-8 py-6 max-w-xl w-full">
        <div className="font-bold text-orange-500 text-lg mb-2">Contact & Directions</div>
        <div className="mb-2 flex items-center justify-center gap-2">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" fill="#F97316"/></svg>
          Kericho Mwananchi Building, Nakuru - Kisumu Highway
        </div>
        <div className="mb-2 flex items-center justify-center gap-2">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.29 21 3 13.71 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" fill="#F97316"/></svg>
          <span className="font-semibold">Phone:</span>
          <a href="tel:+254724354310" className="text-orange-500 hover:underline">0724 354 310</a>
        </div>
        <div className="flex items-center justify-center gap-2">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M17.472 14.382a13.37 13.37 0 0 1-7.853-7.853l2.033-2.033a1.003 1.003 0 0 0 .241-1.011A9.99 9.99 0 0 0 7.5 3.5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1C3 13.71 10.29 21 20 21a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1c-1.25 0-2.46-.2-3.58-.57a1.003 1.003 0 0 0-1.011.241l-2.033 2.033z" fill="#F97316"/></svg>
          <span className="font-semibold">WhatsApp:</span>
          <a href="https://wa.me/254724354310" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">0724 354 310</a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
export default MapDirections;
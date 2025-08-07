import React, { useState } from "react";

const faqs = [
  {
    q: "What types of events do you cater?",
    a: "We cater weddings, birthdays, corporate events, private dinners, graduations, and more. Every event is customized to your needs."
  },
  {
    q: "Can you create custom menus for dietary needs?",
    a: "Absolutely! Our chefs can design menus for vegetarian, vegan, gluten-free, halal, and other dietary preferences."
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 2-4 weeks in advance, but we can sometimes accommodate last-minute requests."
  },
  {
    q: "Do you provide décor and event planning?",
    a: "Yes, we offer full event planning, including décor, entertainment, logistics, and more."
  },
  {
    q: "What areas do you serve?",
    a: "We are based in Kericho but serve the wider region including Nairobi, Nakuru, Kisumu, and beyond."
  },
  {
    q: "How do I get a quote?",
    a: "Simply contact us through our booking form, email, or phone, and we’ll provide a custom quote for your event."
  }
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 min-h-screen py-12 px-4 flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-orange-500 mb-4 tracking-tight drop-shadow-lg">Frequently Asked Questions</h2>
      <p className="text-gray-700 mb-10 max-w-2xl text-center text-lg font-medium">
        Find answers to the most common questions about our catering and event services.<br />
        <span className="text-orange-400 font-bold">Still have questions? <a href="#contact" className="underline hover:text-orange-500">Contact us!</a></span>
      </p>
      <div className="max-w-2xl w-full space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden transition"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
            >
              <span className="font-semibold text-gray-800">{faq.q}</span>
              <span className={`ml-4 text-orange-500 text-2xl transition-transform duration-300 ${open === idx ? "rotate-45" : ""}`}>
                +
              </span>
            </button>
            <div
              className={`px-6 pb-4 text-gray-600 text-base transition-all duration-300 ${
                open === idx ? "block" : "hidden"
              }`}
            >
              {faq.a}
                </div>
             
          </div>
        ))}
      </div>
    </div>
    );
};
export default FAQ;
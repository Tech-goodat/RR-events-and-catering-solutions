import React from 'react';

const posts = [
  // Event Planning Tips & Guides
  {
    title: "10 Things to Consider When Planning a Wedding Reception",
    date: "2025-08-10",
    category: "Event Planning Tips",
    excerpt: "From guest lists to décor, discover the essentials for a memorable wedding reception in Kenya.",
    img: "/img2.jpg",
    cta: "Planning a wedding? Contact us for expert help."
  },
  {
    title: "How to Budget for Your Corporate Event Catering",
    date: "2025-07-28",
    category: "Event Planning Tips",
    excerpt: "Learn how to estimate costs, choose the right menu, and avoid common budgeting mistakes for your next corporate event.",
    img: "/img3.jpg",
    cta: "Get a custom quote for your event catering."
  },
  {
    title: "Checklist for Hosting a Garden Party in Nairobi",
    date: "2025-07-15",
    category: "Event Planning Tips",
    excerpt: "A step-by-step guide to planning a stylish outdoor celebration, including venue, food, and décor tips.",
    img: "/img10.jpg",
    cta: "Ready for a garden party? Let’s make it happen!"
  },
  // Food & Menu Inspiration
  {
    title: "Top 5 Signature Dishes Clients Love at Our Events",
    date: "2025-06-30",
    category: "Food & Menu Inspiration",
    excerpt: "Explore our most requested dishes and why they’re a hit at weddings, birthdays, and corporate parties.",
    img: "/img5.jpg",
    cta: "See our full menu options."
  },
  {
    title: "Catering Trends in 2025: From Plant-Based to Personalized Menus",
    date: "2025-06-15",
    category: "Food & Menu Inspiration",
    excerpt: "Discover what’s trending in event catering this year, including healthy, sustainable, and custom menu ideas.",
    img: "/img13.jpg",
    cta: "Book a tasting session with our chefs."
  },
  {
    title: "How We Craft Menus for Cultural and Religious Events",
    date: "2025-06-01",
    category: "Food & Menu Inspiration",
    excerpt: "Our approach to creating inclusive menus that respect traditions and delight every guest.",
    img: "/img12.jpg",
    cta: "Discuss your event’s menu needs."
  },
  // Showcasing Past Events
  {
    title: "How We Catered a 500-Guest Wedding in 3 Days",
    date: "2025-05-20",
    category: "Past Events",
    excerpt: "Go behind the scenes with our team as we pull off one of our biggest weddings yet—see the transformation and teamwork.",
    img: "/img1.jpg",
    cta: "View more event stories."
  },
  {
    title: "Before & After: Event Setup Transformations",
    date: "2025-05-10",
    category: "Past Events",
    excerpt: "See how our décor and planning turn ordinary spaces into extraordinary celebrations.",
    img: "/img6.jpg",
    cta: "See our gallery for more."
  },
  // Seasonal & Thematic Posts
  {
    title: "Creative Ideas for Valentine’s Day Dinners & Events",
    date: "2025-02-01",
    category: "Seasonal & Thematic",
    excerpt: "Romantic setups, themed menus, and décor inspiration for February celebrations.",
    img: "/img14.jpg",
    cta: "Book your Valentine’s event today."
  },
  {
    title: "Festive Catering Packages for Christmas Parties",
    date: "2024-12-01",
    category: "Seasonal & Thematic",
    excerpt: "Explore our special holiday menus and décor packages for a magical Christmas party.",
    img: "/img7.jpg",
    cta: "Reserve your festive package."
  },
  {
    title: "Unique Graduation Party Concepts for 2025",
    date: "2025-06-05",
    category: "Seasonal & Thematic",
    excerpt: "Celebrate academic achievements with creative themes, food, and entertainment.",
    img: "/img16.jpg",
    cta: "Let’s plan your graduation party."
  },
  // Company Updates
  {
    title: "Meet Our New Head Chef: Chef Ngeno",
    date: "2025-04-01",
    category: "Company Updates",
    excerpt: "Get to know Chef Ngeno, his culinary journey, and what he brings to RR Events.",
    img: "/img3.jpg",
    cta: "Meet the team."
  },
  {
    title: "RR Events Wins Best Catering Service Award",
    date: "2025-03-15",
    category: "Company Updates",
    excerpt: "We’re honored to be recognized for excellence in catering and event planning.",
    img: "/img17.jpg",
    cta: "See our awards."
  },
  // Venue & Vendor Spotlights
  {
    title: "Why We Love Working With Kericho Gardens",
    date: "2025-05-01",
    category: "Venue & Vendor Spotlights",
    excerpt: "A review of one of our favorite venues and how it helps us create unforgettable events.",
    img: "/img18.jpg",
    cta: "Explore recommended venues."
  },
  {
    title: "Spotlight: DJ Felix – Our Go-To Event DJ",
    date: "2025-04-20",
    category: "Venue & Vendor Spotlights",
    excerpt: "Learn why DJ Felix is a crowd favorite at RR Events and how music sets the mood.",
    img: "/img19.jpg",
    cta: "Meet our partners."
  }
];

const Blog = () => (
  <div className="bg-gray-50 min-h-screen mt-10 py-10 px-4 flex flex-col items-center">
    <h2 className="text-3xl font-bold text-orange-500 mb-2">Blog & Articles</h2>
    <p className='text-[16px] mb-2'>Coming soon !</p>
    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((p, i) => (
        <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition">
          <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
          <div className="p-6 flex flex-col flex-1">
            <span className="text-xs font-semibold text-orange-400 mb-1">{p.category}</span>
            <h3 className="font-bold text-gray-700 text-lg mb-2">{p.title}</h3>
            <p className="text-xs text-gray-400 mb-2">{p.date}</p>
            <p className="text-gray-600 mb-4 flex-1">{p.excerpt}</p>
            {/* <button className="mt-auto bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-400 font-bold transition">
              Read More
            </button> */}
            <div className="mt-2 text-xs text-gray-500">{p.cta}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Blog;
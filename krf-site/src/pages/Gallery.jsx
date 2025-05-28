// src/pages/Gallery.jsx
import React from "react";

const images = [
  "/images/BookWorldTeam.jpg",
  "/images/BlindDateWithABook.png",
  // Add more paths...
];

const Gallery = () => {
  return (
    <div className="bg-white text-black px-6 py-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-[#c27700] mb-6">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Gallery Image ${i + 1}`}
            className="w-full h-64 object-cover rounded shadow"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

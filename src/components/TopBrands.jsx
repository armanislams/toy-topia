import React from "react";
import Marquee from "react-fast-marquee";

export default function TopBrands() {
  const brands = [
    {
      name: "LEGO",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/250px-LEGO_logo.svg.png",
    },
    {
      name: "Fisher-Price",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Fisher-Price_2019.svg/250px-Fisher-Price_2019.svg.png",
    },
    {
      name: "Hot Wheels",
      logo: "https://images.seeklogo.com/logo-png/48/1/hot-wheels-logo-png_seeklogo-484001.png",
    },
    {
      name: "Barbie",
      logo: "https://fabrikbrands.com/wp-content/uploads/Barbie-Logo-1-1-1155x770.png",
    },
    {
      name: "Nerf",
      logo: "https://images.seeklogo.com/logo-png/48/1/nerf-logo-png_seeklogo-487922.png",
    },
    {
      name: "Disney",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3oHfzFiJsfRxFcyVuYqRWZWmf7YkzORn1g&s",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Top Trusted Brands
      </h2>

        <Marquee speed={150}>
      <div className="place-items-center flex gap-15">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition w-32 h-32 flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="object-contain h-20 transition"
              />
            </div>
          ))}
      </div>
        </Marquee>
    </section>
  );
}

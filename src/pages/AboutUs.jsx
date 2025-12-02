import React from "react";

export default function AboutUs() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We are passionate about providing high-quality toys that inspire fun,
          learning, and creativity for children of all ages.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our marketplace offers hand-picked toys from trusted sellers across
            the globe. From STEM learning kits to fun collectibles, each item is
            carefully reviewed to ensure quality and safety.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our goal is to make discovering amazing toys simple for parents and
            exciting for kids, while supporting small toy sellers with a
            trustworthy platform.
          </p>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center">
          <img
            src="https://todaysparent.mblycdn.com/tp/resized/2017/11/767x431/how-many-toys-do-kids-really-need-1280x960.jpg"
            alt="Kids playing with toys"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-3xl font-bold text-blue-600">500+</h3>
          <p className="text-gray-600">Toys Listed</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-600">150+</h3>
          <p className="text-gray-600">Verified Sellers</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-600">10k+</h3>
          <p className="text-gray-600">Happy Customers</p>
        </div>
      </div>
    </section>
  );
}

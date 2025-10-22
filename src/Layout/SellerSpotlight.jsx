import React from 'react';
import { Link } from 'react-router';

const SellerSpotlight = () => (
    <section className="py-16 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                Why Choose Local?
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                Every purchase supports small, independent toy sellers in your community. We hand-pick toys for quality and safety.
            </p>
            <Link to="/sellers" className="btn bg-purple-600 hover:bg-purple-700 text-white border-0 text-lg font-bold shadow-xl">
                Meet Our Sellers
            </Link>
        </div>
    </section>
);

export default SellerSpotlight;
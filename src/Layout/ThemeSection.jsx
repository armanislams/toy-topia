import React from 'react';
import { FaStar, FaCubes, FaPalette } from 'react-icons/fa';

const ThemeSection = () => (
    <section className="py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
                Shop By Play Theme
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Theme 1: Building Blocks */}
                <div className="text-center p-8 border border-indigo-100 rounded-xl shadow-lg bg-indigo-50 hover:bg-indigo-100 transition duration-300" data-aos="zoom-in">
                    <FaCubes className="text-6xl text-indigo-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Construction Play</h3>
                    <p className="text-gray-600">Lego, magnetic tiles, and wooden blocks for the master builder.</p>
                </div>
                {/* Theme 2: Role Play */}
                <div className="text-center p-8 border border-pink-100 rounded-xl shadow-lg bg-pink-50 hover:bg-pink-100 transition duration-300" data-aos="zoom-in" data-aos-delay="200">
                    <FaStar className="text-6xl text-pink-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Fantasy & Adventure</h3>
                    <p className="text-gray-600">Dolls, action figures, costumes, and play sets to spark stories.</p>
                </div>
                {/* Theme 3: Creativity */}
                <div className="text-center p-8 border border-green-100 rounded-xl shadow-lg bg-green-50 hover:bg-green-100 transition duration-300" data-aos="zoom-in" data-aos-delay="400">
                    <FaPalette className="text-6xl text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Arts & Crafts</h3>
                    <p className="text-gray-600">Paints, clay, slime, and craft kits for endless creative expression.</p>
                </div>
            </div>
        </div>
    </section>
);

export default ThemeSection;
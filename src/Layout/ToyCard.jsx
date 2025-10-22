import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const ToyCard = ({ toy }) => {
    return (
        <div 
            data-aos="fade-up" 
            data-aos-duration="1000"
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
        >
            {/* Thumbnail */}
            <div className="h-48 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                <img 
                    src={toy.pictureURL} 
                    alt={toy.toyName} 
                    className="w-full h-full object-contain transform hover:scale-105 transition duration-500"
                />
            </div>
            
            <div className="p-5 flex flex-col flex-1">
                {/* Name and Rating */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 truncate" title={toy.toyName}>
                    {toy.toyName}
                </h3>
                
                <div className="flex items-center justify-between mb-3 text-sm">
                    <span className="flex items-center text-yellow-500 font-semibold">
                        <FaStar className="mr-1" /> {toy.rating}
                    </span>
                    <span className="text-gray-500 font-medium">
                        Qty: {toy.availableQuantity}
                    </span>
                </div>

                {/* Price */}
                <p className="text-2xl font-extrabold text-red-600 mb-4">
                    ${toy.price.toFixed(2)}
                </p>

                {/* View More Button (Protected Route Link) */}
                <Link 
                    to={`/toy/${toy.toyId}`}
                    className="mt-auto block w-full text-center bg-indigo-600 text-white font-bold py-2.5 rounded-lg 
                                hover:bg-indigo-700 transition duration-150 shadow-md"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default ToyCard;
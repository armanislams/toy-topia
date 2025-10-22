import React from 'react';
import { Link } from 'react-router'; 
import useTitle from '../components/hooks/UseTitle';

const ErrorPage = () => {
    useTitle('Error - 404')
    return (

        
        // Corrected 'bg-linear-to-br' to Tailwind's 'bg-gradient-to-br'
        <div className="min-h-screen bg-linear-to-br from-indigo-100 to-purple-100 flex flex-col items-center justify-center p-6 text-center font-sans">
            
            {/* Playful Image */}
            <div className="relative mb-8 animate-bounce-slow">
                {/* Note: The 'animate-bounce-slow' class requires custom CSS definitions */}
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqS06EEQp5fIyjtoxiTbp-40ADQWJedYVUkw&s" 
                    alt="Lost Toy Puzzle Piece" 
                    className="w-48 h-48 sm:w-64 sm:h-64  rounded-full"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl sm:text-9xl font-extrabold text-purple-700 opacity-20 -z-10 select-none">
                    404
                </div>
            </div>

            {/* Error Message */}
            <h1 className="text-6xl sm:text-7xl font-extrabold text-purple-800 mb-4">
                Oops!
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6 max-w-lg">
                It looks like this page wandered off to play.
            </p>

            {/* Call to Action: Link back to the home page */}
            <Link 
                to="/" 
                className="inline-flex items-center px-8 py-4 bg-purple-600 text-white text-lg font-bold rounded-full shadow-lg 
                           hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 ease-in-out
                           ring-2 ring-purple-300 ring-offset-2 ring-offset-indigo-100"
            >
                Go Back to Toy-Land
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            </Link>
            
            {/* Optional Footer Link */}
            <p className="mt-10 text-sm text-gray-500">
                Found a broken link? <Link to="/contact" className="underline text-purple-600 hover:text-purple-800">Let us know!</Link>
            </p>
        </div>
    );
};

export default ErrorPage;
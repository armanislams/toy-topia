import React from 'react';
import { Link } from 'react-router';
import { FaFacebook, FaTwitter, FaInstagram, FaRegEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
    // Reusable styles for links
    // Changed hover color to a brighter, playful pink
    const linkClasses = "link link-hover text-gray-300 hover:text-pink-400 transition-colors duration-200 text-sm"; 

    // Social media icon styles
    const socialIconClasses = "text-3xl text-white hover:text-pink-400 transition-colors duration-200 cursor-pointer";

    return (
        // Changed bg-gray-800 to a richer 'slate' and border to a playful 'pink'
        <footer className="footer py-7 px-12 bg-slate-800 text-gray-200 border-t-8 border-pink-500 shadow-2xl shadow-slate-900/50">
            
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
                
                {/* 1. Logo and Company Info (Full Width on Mobile) */}
                <div className="col-span-1 md:col-span-2 space-y-4">
                    <Link to="/" className="text-4xl font-black text-white tracking-widest flex items-center">
                        <span className="text-pink-500">T</span>oy<span className="text-pink-500">T</span>opia
                    </Link>
                    <p className="mt-3 text-sm max-w-sm">
                        Your local marketplace for vibrant, high-quality toys. Sparking imagination, one block at a time.
                    </p>
                    <div className="flex items-center space-x-2 text-sm">
                        <FaRegEnvelope className="text-pink-500 text-xl" />
                        <span>support@toytopia.com</span>
                    </div>
                </div>

                {/* 2. Quick Links */}
                <div className="space-y-2">
                    <span className="footer-title text-pink-400 text-lg font-bold">Company</span>
                    <nav className="flex flex-col space-y-1">
                        <Link to="/about-us" className={linkClasses}>About Us</Link>
                        <Link to="/contact-us" className={linkClasses}>Contact</Link>
                        <Link to="/terms-and-conditions" className={linkClasses}>Terms of Service</Link>
                        <Link to="/privacy-policy" className={linkClasses}>Privacy Policy</Link>
                    </nav>
                </div>

                {/* 3. Customer Service */}
                <div className="space-y-2">
                    <span className="footer-title text-pink-400 text-lg font-bold">Customer Hub</span>
                    <nav className="flex flex-col space-y-1">
                        <Link to="/faq" className={linkClasses}>FAQ</Link>
                        <Link to="/shipping-and-returns" className={linkClasses}>Shipping & Returns</Link>
                        <Link to="/site-map" className={linkClasses}>Site Map</Link>
                        <Link to="/careers" className={linkClasses}>Careers</Link>
                    </nav>
                </div>

                {/* 4. Newsletter and Social Media */}
                <div className="col-span-1 space-y-4">
                    <span className="footer-title text-pink-400 text-lg font-bold">Stay Connected</span>
                    
                    {/* Social Icons */}
                    <div className="flex space-x-5">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter className={socialIconClasses} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook className={socialIconClasses} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className={socialIconClasses} />
                        </a>
                    </div>

                    {/* Newsletter */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white font-semibold">Join the Toy Gazette!</span>
                        </label>
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="Enter email..." 
                                className="input input-bordered w-full pr-16 bg-slate-700 text-white border-slate-600 focus:border-pink-500 focus:ring-pink-500"
                            />
                            <button className="btn bg-pink-500 hover:bg-pink-600 text-white absolute top-0 right-0 rounded-l-none border-0">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Strip */}
            <div className="footer-center mt-10 border-t border-slate-700 pt-6">
                <p className="text-sm text-gray-400 flex items-center">
                    &copy; {new Date().getFullYear()} ToyTopia. All rights reserved. Made with <FaHeart className="mx-1 text-red-500" /> for local fun.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
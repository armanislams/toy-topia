import React from "react";
import { Link } from "react-router";

const SiteMap =()=> {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Site Map
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700 text-lg">
        <div>
          <h3 className="font-semibold text-xl mb-3">Main Pages</h3>
          <ul className="space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/all-toys">All Toys</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-3">User</h3>
          <ul className="space-y-2">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-3">Policies</h3>
          <ul className="space-y-2">
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/shipping">Shipping & Returns</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
 export default SiteMap
import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaSearch, FaChevronDown, FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import useTitle from '../components/hooks/UseTitle';
import Navbar from '../components/Navbar';

const AllToys = () => {
    useTitle('All Toys');
    const toysData = useLoaderData()
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('');

    // ---------------------------------------------
    // Filtering and Searching Logic
    // ---------------------------------------------
    const subCategories = [...new Set(toysData.map(toy => toy.subCategory))];

    const filteredToys = toysData.filter(toy => {
        const matchesSearch = toy.toyName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === '' || toy.subCategory === filterCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-extrabold text-gray-900 text-center mb-10">
                    Our Full Toy Inventory ({filteredToys.length})
                </h1>

                {/* --- Search and Filter Bar --- */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 p-6 bg-white rounded-lg shadow-lg border border-indigo-100">

                    {/* Search Input */}
                    <div className="relative flex-1">
                        <input
                            type="text"
                            placeholder="Search by Toy Name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                        />
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>

                    {/* Category Filter */}
                    <div className="relative md:w-64">
                        <select
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            className="block w-full appearance-none bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-indigo-500 text-lg"
                        >
                            <option value="">All Categories</option>
                            {subCategories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                        <FaChevronDown className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 top-1/2 transform -translate-y-1/2" />
                    </div>
                </div>

                {/* --- Toy Table --- */}
                <div className="overflow-x-auto bg-white rounded-lg shadow-xl">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-indigo-600 text-white sticky top-0">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Image</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Toy Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Seller</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Quantity</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Rating</th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredToys.length > 0 ? (
                                filteredToys.map((toy) => (
                                    <tr key={toy.toyId} className="hover:bg-indigo-50 transition duration-150">

                                        {/* Image */}
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <img src={toy.pictureURL} alt={toy.toyName} className="w-12 h-12 object-contain rounded-full border border-gray-200" />
                                        </td>

                                        {/* Name */}
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{toy.toyName}</td>

                                        {/* Seller */}
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{toy.sellerName}</td>

                                        {/* Category */}
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-indigo-600">{toy.subCategory}</td>

                                        {/* Price */}
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-500">${toy.price.toFixed(2)}</td>

                                        {/* Quantity */}
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{toy.availableQuantity}</td>

                                        {/* Rating */}
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-500 flex items-center">
                                            <FaStar className="mr-1" /> {toy.rating}
                                        </td>

                                        {/* Actions */}
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Link
                                                to={`/toy/${toy.toyId}`}
                                                className="text-indigo-600 hover:text-indigo-900 font-semibold transition duration-150 p-2 border border-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white"
                                            >
                                                View Details
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center py-10 text-xl text-gray-500">
                                        No toys found matching your criteria.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div>
                <div className='flex justify-center items-center mx-auto py-5'>
                    <Link
                        to="/"
                        className="inline-flex items-center px-8 py-4 bg-purple-600 text-white text-lg font-bold rounded-full shadow-lg 
                                               hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 ease-in-out
                                               ring-2 ring-purple-300 ring-offset-2 ring-offset-indigo-100"
                    >
                        Go Back to Toy-Land
                        <svg className="ml-3 w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllToys;
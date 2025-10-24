import React from 'react';
import useTitle from '../components/hooks/UseTitle';
import { useLoaderData } from 'react-router';

const LocalSeller = () => {
    useTitle('Our Sellers');
    const data = useLoaderData()
    const allNames = data.map(toy => toy.sellerName);
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-2xl">
                <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 border-b pb-2">
                    Our Local Toy Sellers ({allNames.length})
                </h1>

                <p className="text-gray-600 mb-8">
                    Discover the fantastic local shops that make up the ToyTopia community.
                </p>

                <ul className="space-y-4">
                    {allNames.map((name, index) => (
                        <li
                            key={index}
                            className="p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded-lg shadow-md flex items-center justify-between"
                        >
                            <span className="text-lg font-medium text-gray-800">{name}</span>
                            <span className="text-sm text-indigo-600">Local Partner</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LocalSeller;
import React from 'react';
import { Link, useLoaderData, useNavigation, useParams } from 'react-router'; 
import { FaStar, FaEnvelope, FaShoppingCart, FaDollarSign, FaTag } from 'react-icons/fa';
import useTitle from '../components/hooks/UseTitle';
import Loader from '../components/Loader';
const DetailItem = ({ icon, label, value, isBold = false }) => (
    <div className="flex items-start space-x-3 p-2 bg-indigo-50 rounded-lg">
        <div className="text-indigo-600 text-xl pt-1">{icon}</div>
        <div>
            <p className="text-xs font-semibold uppercase text-indigo-600">{label}</p>
            <p className={`text-gray-800 ${isBold ? 'font-extrabold text-lg' : 'font-medium'}`}>{value}</p>
        </div>
    </div>
);


const ToyDetails = () => {
    const toysData = useLoaderData();
    const { id } = useParams();
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading'; 
    const toy = toysData.find(toy => toy.toyId === Number(id));
    useTitle(toy ? toy.toyName : 'Toy Details | Loading...');
    if (isLoading) {
        return <div className="min-h-[70vh]"><Loader /></div>; 
    }
    if (!toy) {
        return (
            <div className="min-h-[70vh] flex flex-col justify-center items-center text-center py-12 bg-red-50">
                <img src="https://i.ibb.co/YqMFY83/cute-teddy-bear-outdoors-still-life.jpg" alt="Lost Teddy Bear" className="max-w-sm rounded-full shadow-xl mb-6"/>
                <h1 className="text-6xl font-extrabold text-red-700 mb-4">404</h1>
                <p className="text-2xl text-gray-700 mb-6">Oops! That toy seems to be lost.</p>
                <Link 
                    to="/all-toys" 
                    className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                    View All Toys
                </Link>
            </div>
        );
    }
    
    // --- Successful Display ---
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
                
                {/* Back Link */}
                <Link to="/all-toys" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition duration-150 mb-6 font-medium">
                    &larr; Back to All Toys
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    
                    {/* --- Image Section --- */}
                    <div className="p-4 bg-gray-50 rounded-lg shadow-inner flex items-center justify-center">
                        <img 
                            src={toy.pictureURL} 
                            alt={toy.toyName} 
                            className="max-h-[500px] w-full object-contain rounded-lg" 
                        />
                    </div>

                    {/* --- Details Section --- */}
                    <div className="space-y-6">
                        <h1 className="text-5xl font-black text-gray-900 leading-tight">
                            {toy.toyName}
                        </h1>

                        {/* Price and Rating */}
                        <div className="flex items-center space-x-6 pb-4 border-b border-gray-200">
                            <p className="text-4xl font-extrabold text-red-600 flex items-center">
                                <FaDollarSign className="text-2xl mr-1" /> {toy.price?.toFixed(2)}
                            </p>
                            <span className="flex items-center text-yellow-500 text-2xl font-bold">
                                <FaStar className="mr-2" /> {toy.rating}
                            </span>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-2">About the Toy</h2>
                            <p className="text-gray-600 leading-relaxed">{toy.description}</p>
                        </div>
                        
                        {/* Key Info Grid */}
                        <div className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-4">
                            <DetailItem icon={<FaTag />} label="Category" value={toy.subCategory} />
                            <DetailItem icon={<FaShoppingCart />} label="In Stock" value={toy.availableQuantity} isBold={toy.availableQuantity > 0} />
                            <DetailItem icon={<FaEnvelope />} label="Seller Email" value={toy.sellerEmail} />
                            <DetailItem icon={<span>👤</span>} label="Seller Name" value={toy.sellerName} />
                        </div>
                        
                        {/* Call to Action (Button) */}
                        <button 
                            className="w-full py-4 mt-6 bg-indigo-600 text-white text-xl font-bold rounded-xl shadow-lg 
                                       hover:bg-indigo-700 transition duration-200 disabled:opacity-50"
                            disabled={toy.availableQuantity === 0}
                        >
                            {toy.availableQuantity > 0 ? "Add to Cart" : "Out of Stock"}
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;
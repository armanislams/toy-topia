import React, { use } from 'react';
import { Link, useLoaderData, useLocation, useNavigation, useParams } from 'react-router'; 
import { FaStar, FaEnvelope, FaShoppingCart, FaDollarSign, FaTag } from 'react-icons/fa';
import useTitle from '../components/hooks/UseTitle';
import Loader from '../components/Loader';
import DetailItem from '../Layout/DetailItem';
import { toast } from 'react-toastify';
import { AuthContext } from '../components/Provider/AuthProvider';


const ToyDetails = () => {
    const {user} = use(AuthContext)
    const toysData = useLoaderData();
    const { id } = useParams();
    const navigation = useNavigation();
    const location = useLocation()
    const isLoading = navigation.state === 'loading'; 
    const toy = toysData.find(toy => toy.toyId === Number(id));
    useTitle(toy ? toy.toyName : 'Toy Details | Loading...');
    if (isLoading) {
        return <Loader></Loader>; 
    }
  
    
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
          <Link
            to="/all-toys"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition duration-150 mb-6 font-medium"
          >
            &larr; Back to All Toys
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="p-4 bg-gray-50 rounded-lg shadow-inner flex items-center justify-center">
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="max-h-[500px] w-full object-contain rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                {toy.toyName}
              </h1>
              <div className="flex items-center space-x-6 pb-4 border-b border-gray-200">
                <p className="text-4xl font-extrabold text-red-600 flex items-center">
                  <FaDollarSign className="text-2xl mr-1" />{" "}
                  {toy.price?.toFixed(2)}
                </p>
                <span className="flex items-center text-yellow-500 text-2xl font-bold">
                  <FaStar className="mr-2" /> {toy.rating}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  About the Toy
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {toy.description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-gray-200 pt-4 ">
                <DetailItem
                  icon={<FaTag />}
                  label="Category"
                  value={toy.subCategory}
                />
                <DetailItem
                  icon={<FaShoppingCart />}
                  label="In Stock"
                  value={toy.availableQuantity}
                  isBold={toy.availableQuantity > 0}
                />
                <DetailItem
                  icon={<FaEnvelope />}
                  label="Seller Email"
                  value={toy.sellerEmail}
                />
                <DetailItem
                  icon={<span>👤</span>}
                  label="Seller Name"
                  value={toy.sellerName}
                />
              </div>
              <div className="flex gap-4 mt-6">
                {/* 1. Try Now Button */}
                <Link
                  to={`/try-now/${id}`}
                  className="w-1/2 py-4 bg-indigo-200 text-indigo-700 text-xl font-bold rounded-xl shadow-lg 
                   hover:bg-indigo-300 transition duration-200 text-center"
                >
                  Try Now
                </Link>

                {/* 2. Add to Cart Button */}
                {user ? (
                  <button
                    onClick={() => toast.success("Added To Your Cart")}
                    className=" py-4 bg-indigo-600 text-white text-xl font-bold rounded-xl shadow-lg 
                   hover:bg-indigo-700 transition duration-200 disabled:opacity-50"
                    disabled={toy.availableQuantity === 0}
                  >
                    {toy.availableQuantity > 0 ? "Add to Cart" : "Out of Stock"}
                  </button>
                ) : (
                  <Link to={"/login"} state={location.pathname}>
                    <button
                      className="py-4 px-1 bg-indigo-600 text-white text-xl font-bold rounded-xl shadow-lg 
                   hover:bg-indigo-700 transition duration-200 disabled:opacity-50"
                    >
                      Login to add to your cart
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ToyDetails;
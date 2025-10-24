import React, { use } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from './Provider/AuthProvider';
const TryNow = () => {
    const {user} = use(AuthContext)
    const { id } = useParams()
    const toysData = useLoaderData();
    const navigate = useNavigate()
    const toy = toysData.find(toy => toy.toyId === Number(id));

    const handleTryNowSubmit = (e) => {
        e.preventDefault()
        toast.success(
            `Thank you! Your request for a virtual preview of the ${toy.toyName} has been processed.`,
          
        );
        e.target.reset()
        navigate(-1)
        
    };

    return (
        <div className=" max-w-md bg-white my-10 p-8 sm:p-10 rounded-xl shadow-2xl border-t-4 border-indigo-600 mx-auto">
            <div className=''>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 ">
                    Try Now Our - {toy && <p>{toy.toyName}</p>}
                </h3>
           </div>

            <form onSubmit={handleTryNowSubmit} className="space-y-4">

                {/* Name Input Field */}
                <div>
                    <label htmlFor="try-name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="try-name"
                        defaultValue={ user.displayName}
                        placeholder="Your Full Name"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* Email Input Field */}
                <div>
                    <label htmlFor="try-email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="try-email"
                        defaultValue={user.email}
                        placeholder="Your Email Address"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-200 text-indigo-700 text-lg font-bold rounded-xl shadow-md 
                                   hover:bg-indigo-300 transition duration-200"
                    >
                        Try Now
                    </button>
                </form>
            </div>
    );
};

export default TryNow;
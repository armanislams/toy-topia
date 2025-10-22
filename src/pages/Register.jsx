import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaUser, FaEnvelope, FaLock, FaImage, FaUserPlus } from 'react-icons/fa';

const Register = () => {
    const [name, setName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // --- Client-Side Validation & Logic Placeholder ---
        
        if (!name || !email || !password) {
            setError('Please fill in all required fields (Name, Email, Password).');
            setLoading(false);
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            setLoading(false);
            return;
        }
        
        const userData = { name, photoURL, email, password };
        console.log('Attempting registration with:', userData);

        // In a real app, you would call your Firebase/API registration function here (e.g., createUserWithEmailAndPassword, updateProfile).
        // On success: redirect the user.
        // On failure: setError(error.message) and setLoading(false).

        // Simulate a network delay
        setTimeout(() => {
            setLoading(false);
            // Simulate success
            alert(`Registration successful for ${name}! (Placeholder)`);
            // Optionally clear fields or redirect
        }, 2000);

        // ------------------------------------------
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-xl shadow-2xl border-t-4 border-indigo-600">
                
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-2">
                    Create Your Account
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    Join Toy-Land and start selling or exploring new toys!
                </p>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    
                    {/* --- Name Input --- */}
                    <div>
                        <label htmlFor="name" className="sr-only">Full Name</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaUser className="h-5 w-5 text-indigo-400" />
                            </div>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg transition duration-150"
                                placeholder="Full Name"
                                disabled={loading}
                            />
                        </div>
                    </div>

                    {/* --- Email Input --- */}
                    <div>
                        <label htmlFor="email" className="sr-only">Email address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaEnvelope className="h-5 w-5 text-indigo-400" />
                            </div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg transition duration-150"
                                placeholder="Email address"
                                disabled={loading}
                            />
                        </div>
                    </div>

                    {/* --- Password Input --- */}
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaLock className="h-5 w-5 text-indigo-400" />
                            </div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg transition duration-150"
                                placeholder="Password (min. 6 characters)"
                                disabled={loading}
                            />
                        </div>
                        <p className="mt-2 text-xs text-gray-500">Password must be at least 6 characters long.</p>
                    </div>

                    {/* --- Photo URL Input (Optional) --- */}
                    <div>
                        <label htmlFor="photoURL" className="sr-only">Photo URL</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaImage className="h-5 w-5 text-indigo-400" />
                            </div>
                            <input
                                id="photoURL"
                                name="photoURL"
                                type="url"
                                value={photoURL}
                                onChange={(e) => setPhotoURL(e.target.value)}
                                className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg transition duration-150"
                                placeholder="Photo URL (Optional)"
                                disabled={loading}
                            />
                        </div>
                    </div>


                    {/* --- Error Message --- */}
                    {error && (
                        <p className="text-red-600 text-sm font-medium text-center bg-red-50 p-3 rounded-lg border border-red-200">
                            {error}
                        </p>
                    )}

                    {/* --- Submit Button --- */}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 disabled:opacity-50"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Signing Up...
                                </>
                            ) : (
                                <>
                                    <FaUserPlus className="mr-3 h-5 w-5" />
                                    Register Account
                                </>
                            )}
                        </button>
                    </div>
                </form>
                
                {/* --- Footer Links --- */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link 
                            to="/login" 
                            className="font-bold text-indigo-600 hover:text-indigo-800 transition duration-150"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Register;
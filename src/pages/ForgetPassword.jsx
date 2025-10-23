import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaEnvelope, FaSignInAlt } from 'react-icons/fa';
import useTitle from '../components/hooks/UseTitle';
import { use } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';

const ForgotPassword = () => {
    const { resetPass } = use(AuthContext)
    useTitle('Reset Password');
    const [loading, setLoading] = useState(false);

    const handlePasswordReset = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        setLoading(true);
        resetPass(email)
            .then(() => {
                toast.success(`Password reset link sent to ${email}.`);
                window.open("https://mail.google.com/", "_blank");
            })
            .catch((err) => {
                console.error("Password reset error:", err);
                if (err.code === 'auth/missing-email') {
                    toast.error("No user found with that email. Please check your email address.");
                }
                else if (err.code === 'auth/invalid-email') {
                    toast.error("Invalid email. Please check your email address.");
                }
                else {
                    toast.error("Failed to send reset email.");
                }
            })
            .finally(() => {
                {
                    setLoading(false);
                }
            })
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Forgot Password
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Enter your email to receive a password reset link.
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handlePasswordReset}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition duration-150"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <FaSignInAlt className="h-5 w-5 mr-2" />
                                    Reset Password
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
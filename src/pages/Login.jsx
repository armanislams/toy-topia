import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEnvelope, FaEye, FaLock, FaSignInAlt } from 'react-icons/fa';
import { AuthContext } from '../components/Provider/AuthProvider';
import { toast } from 'react-toastify';
import useTitle from '../components/hooks/UseTitle';

const Login = () => {
    useTitle('Login || Toy Topia')
    const { signIn, setUser, GoogleLogin } = use(AuthContext);
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }
    const location = useLocation();
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                toast.success('logged in successfully')
                navigate(`${location.state ? location.state : '/'}`)
            })
            .catch(error => {
                if (error.code === 'auth/invalid-email') {
                    toast.error('The email address provided is not valid. Create a new account or try again');
                } else {
                    toast.error('An unexpected error occurred. Please check your credentials and connection.');
                }
            })
    }
    const handleGoogleLogin = () => {
        GoogleLogin().then((result) => {
            const user = result.user
            console.log(user)
            setUser(user)
            toast.success('Successfully Logged In With Google')
            navigate(`${location.state ? location.state : '/'}`)
        })
            .catch(error => {
                toast.error('Something Went Wrong. Please Try Again')
            })
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-xl shadow-2xl border-t-4 border-indigo-600">

                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-2">
                    Welcome Back!
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    Sign in to explore your saved toys.
                </p>

                <form className="space-y-6" onSubmit={handleLogin}>

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
                                className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg transition duration-150"
                                placeholder="Email address" />
                        </div>
                    </div>

                    {/* --- Password Input --- */}
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaLock className="h-5 w-5 text-indigo-400" />
                            </div>
                            <div className="absolute inset-y-0 right-3 pl-3 flex items-center cursor-pointer">
                                <FaEye onClick={handleShow} className="h-5 w-5 text-indigo-400" />

                            </div>
                            <input
                                id="password"
                                name="password"
                                type={`${show ? 'text' : 'password'}`}
                                required
                                className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg transition duration-150"
                                placeholder="Password (min. 6 characters)"
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
                        >
                            <>
                                <FaSignInAlt className="mr-3 h-5 w-5" />
                                Sign In
                            </>

                        </button>
                    </div>
                </form>

                {/* --- Footer Links --- */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link
                            to="/register"
                            className="font-bold text-indigo-600 hover:text-indigo-800 transition duration-150"
                        >
                            Register Now
                        </Link>
                    </p>
                    <Link
                        to="/forgot-password"
                        className="text-xs font-medium text-gray-400 hover:text-indigo-500 transition duration-150 block mt-2"
                    >
                        Forgot Password?
                    </Link>
                </div>
                {/* divider */}
                <div className="divider divider-primary">or</div>
                {/* google login */}
                <div className='flex justify-center items-center w-full'>
                    <button onClick={handleGoogleLogin} className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 disabled:opacity-50">
                        <svg className='mx-2 rounded-full' aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Login;
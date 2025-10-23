import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaUser, FaEnvelope, FaLock, FaImage, FaUserPlus, FaEye } from 'react-icons/fa';
import { AuthContext } from '../components/Provider/AuthProvider';
import useTitle from '../components/hooks/UseTitle';
import { toast } from 'react-toastify';
import { useRef } from 'react';

const Register = () => {
    useTitle('Register || Toy Topia')
    const { createUser, setUser, updateUser, GoogleLogin, resetPass } = use(AuthContext);
    const [show, setShow] = useState(false)
    const [nameError, setNameError] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const emailRef = useRef();
    const handleResetPass = () => {
        const email = emailRef.current.value
        resetPass(email)
            .then(() => {
                toast.success(`Password reset link sent to ${email}.`);
                window.location.href = "https://mail.google.com/";
            })
            .catch((err) => {
                console.error("Password reset error:", err.code);
                if (err.code === 'auth/missing-email') {
                    toast.error("No user found with that email. Please check your address.");
                } else if (err.code === 'auth/invalid-email') {
                    toast.error('The email address provided is not valid.')
                }
                else {
                    toast.error("Failed to send reset email.");
                }
            })
    }
    
    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        if (name.length < 5) {
            setNameError('Name Should Be More Than or equal to 5 Character')
            return
        }
        else {
            setNameError('')
        }
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const regEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
        const password = e.target.password.value;
        if (!regEXP.test(password)) {
            setError('Please Check Your Password Again')
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        navigate('/')
                    })
                    .catch(error => {
                       toast.error("Something Went Wrong, Please try again")
                    })

            })
                .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    toast.error('This email is already registered. Please login or use a different email.');
                } else if (error.code === 'auth/invalid-email') {
                    toast.error('The email address provided is not valid.');
                } else if (error.code === 'auth/weak-password') {
                    toast.error('The password is too weak. Please use at least 6 characters.');
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
    const handleShow = () => {
        setShow(!show)
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white p-8 sm:p-10 rounded-xl shadow-2xl border-t-4 border-indigo-600">

                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-2">
                    Create Your Account
                </h2>
                <p className="text-center text-gray-500 mb-8">
                    Join Toy-Land and start selling or exploring new toys!
                </p>

                <form className="space-y-6" onSubmit={handleRegister}>

                    {/* --- Name Input --- */}
                    <div>
                        <label htmlFor="name" className="sr-only">Full Name</label>
                        <div className="relative">
                            <div className="absolute inset-y-0  left-0 pl-3 flex items-center pointer-events-none">
                                <FaUser className="h-5 w-5 text-indigo-400" />
                            </div>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg transition duration-150"
                                placeholder="Full Name"
                            />
                            {
                                nameError && <p className='text-red-500'>{nameError}</p>
                            }
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
                                ref={emailRef}
                                required
                                className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg transition duration-150"
                                placeholder="Email address"
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
                        <p className="mt-2 text-xs text-gray-500 uppercase"><span className='text-red-500'>password must be</span> <br />Between 8 and 20 characters <br /> one uppercase letter, <br />one lowercase letter,<br />
                            one number, and one special character.</p>
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
                                name="photo"
                                type="url"
                                className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg transition duration-150"
                                placeholder="Photo URL (Optional)"
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


                            <FaUserPlus className="mr-3 h-5 w-5" />
                            Register Account


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
                    {/* forget pass */}
                <p onClick={() => {
                    if (emailRef.current && emailRef.current.value) {
                        handleResetPass();
                    } else {
                        navigate("/forgot-password");
                    }
                }} className="cursor-pointer text-xs font-medium text-gray-400 hover:text-indigo-500 transition duration-150 block mt-2">
                    Forgot Password?</p>
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

export default Register;
import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaUser, FaEnvelope, FaLock, FaImage, FaUserPlus } from 'react-icons/fa';
import { AuthContext } from '../components/Provider/AuthProvider';
import useTitle from '../components/hooks/UseTitle';

const Register = () => {
    useTitle('Register || Toy Topia')
    const {createUser, setUser, updateUser} = use(AuthContext);
     const [nameError, setNameError] = useState('')
     const [error, setError] = useState('')
     const navigate = useNavigate()
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
            setError('password must be between 8 and 20 characters and requires at least one uppercase letter, one lowercase letter, one number, and one special character.')
            return;
                }
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            updateUser({displayName: name, photoURL: photo})
            .then(()=>{
                setUser({...user, displayName: name, photoURL: photo})
                navigate('/')
            })
             .catch(error=>{
            const errorMessage = error.message;
            setError(errorMessage)
            setUser(user)
        })
            
        })
        .catch(error=>{
            const errorMessage = error.message;
            alert(errorMessage)
            console.log(errorMessage)
            
        })
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
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg transition duration-150"
                                placeholder="Password (min. 6 characters)"
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
                </div>

            </div>
        </div>
    );
};

export default Register;
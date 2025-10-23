import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaImage, FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import useTitle from '../components/hooks/UseTitle';
import { use } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';

const Profile = () => {
    useTitle('My Profile')
    const { user, loading, updateUser, setUser } = use(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [updateError, setUpdateError] = useState('');
    const [updateSuccess, setUpdateSuccess] = useState('');
    const [isSaving, setIsSaving] = useState(false);
    const userIcon = 'https://i.ibb.co/Kx8NVc70/images-q-tbn-ANd9-Gc-SIwu-CARv-k-G1eyy6a-IXkq-Fv-Sr-CVyz-J419-Vbg-s.jpg';
    if (loading) {
        return <Loader></Loader>
    }
    

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedName = e.target.name.value;
        const updatedPhoto = e.target.photo.value;
        setUpdateError('');
        setUpdateSuccess('');
        setIsSaving(true);
        const finalName = updatedName
            ? updatedName
            : user.displayName

        const finalPhotoURL = updatedPhoto
            ? updatedPhoto
            : user.photoURL
        updateUser({ displayName: finalName, photoURL: finalPhotoURL })
            .then(() => {
                setUser({ ...user, displayName: finalName, photoURL: finalPhotoURL })
                setIsSaving(false);
                setIsEditing(false);
                toast.success('Profile updated successfully ')
            })
            .catch(() => {
                toast.error("Something Went Wrong, Please try again")
            })
            .finally(() => {
                setIsSaving(false);
                setIsEditing(false);
            });
    };

    const handleCancel = () => {
        setUpdateError('');
        setUpdateSuccess('');
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8 flex items-start justify-center">
            <div className="w-full max-w-2xl bg-white p-6 sm:p-10 rounded-xl shadow-2xl border-t-4 border-indigo-600">

                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                        User Profile
                    </h1>

                    {/* Edit/Save Button */}
                    <button
                        onClick={() => isEditing ? handleUpdate(new Event('submit')) : setIsEditing(true)}
                        disabled={isSaving}
                        className={`flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition duration-200 
                                    ${isEditing ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'}`}
                    >
                        {isSaving ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Saving...
                            </>
                        ) : isEditing ? (
                            <p>Editing..</p>
                        ) : (
                            <>
                                <FaEdit className="mr-2" /> Edit Profile
                            </>
                        )}
                    </button>
                </div>

                {/* Status Messages */}
                {updateError && (
                    <div className="p-3 mb-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">{updateError}</div>
                )}
                {updateSuccess && (
                    <div className="p-3 mb-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">{updateSuccess}</div>
                )}

                {/* Profile Photo Display */}
                <div className="flex flex-col items-center mb-8">
                    <img
                        className="w-32 h-32 rounded-full object-cover border-4 border-indigo-200 shadow-md"
                        src={user && user.photoURL
                            ? user.photoURL
                            : userIcon}
                        alt={`${user.displayName || 'User'}'s Profile`}
                    />
                    <h2 className="text-2xl font-bold mt-4 text-gray-900">{user.displayName || 'New User'}</h2>
                    <p className="text-gray-500 text-sm">{user.email}</p>
                </div>

                <hr className="mb-8 border-gray-200" />

                {/* Conditional Rendering: View Mode vs Edit Mode */}
                <form onSubmit={handleUpdate}>
                    {isEditing ? (
                        // --- EDIT MODE ---
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-gray-700">Edit Information</h3>

                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <div className="relative">
                                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-indigo-400" />
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                        
                                    />
                                </div>
                            </div>

                            {/* Photo URL Input */}
                            <div>
                                <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
                                <div className="relative">
                                    <FaImage className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-indigo-400" />
                                    <input
                                        name="photo"
                                        type="url"
                                        placeholder="Paste a link to your new profile picture"
                                        className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                </div>
                            </div>

                            {/* Action Buttons in Edit Mode */}
                            <div className="flex justify-end space-x-4 pt-4">
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-150"
                                >
                                    <FaTimes className="mr-2" /> Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSaving}
                                    className="flex items-center px-4 py-2 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 transition duration-150"
                                >
                                    <FaSave className="mr-2" /> {isSaving ? 'Saving...' : 'Save Profile'}
                                </button>
                            </div>
                        </div>

                    ) : (
                        // --- VIEW MODE ---
                        <div className="space-y-4">
                            <div className="grid grid-cols-3 gap-4 border-b pb-2">
                                <span className="col-span-1 text-sm font-semibold text-gray-600 flex items-center"><FaUser className="mr-2" /> Name:</span>
                                <span className="col-span-2 text-gray-800 font-medium">{user.displayName || 'N/A (Update Name)'}</span>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <span className="col-span-1 text-sm font-semibold text-gray-600 flex items-center"><FaImage className="mr-2" /> Photo URL:</span>
                                <span className="col-span-2 text-indigo-500 text-sm truncate">{user.photoURL}</span>
                            </div>
                        </div>
                    )}
                </form>

            </div>
        </div>
    );
};

export default Profile;
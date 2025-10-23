import React, { use } from 'react';
import { NavLink, Link } from 'react-router';
import { AuthContext } from './Provider/AuthProvider';
import { toast } from 'react-toastify';
import Loader from './Loader';

const Navbar = () => {
    const { user, logOut, loading } = use(AuthContext);    
    const userIcon = 'https://i.ibb.co/Kx8NVc70/images-q-tbn-ANd9-Gc-SIwu-CARv-k-G1eyy6a-IXkq-Fv-Sr-CVyz-J419-Vbg-s.jpg'
    const navLinkClasses = ({ isActive }) =>
        `font-semibold px-3 py-2 transition-colors duration-200 ${isActive
            ? 'text-red-600 border-b-2 border-red-600'
            : 'text-gray-700 hover:text-red-500' 
        }`;
    if (loading) {
        return <Loader></Loader>
    }
    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('Log out successful')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const navItems = (
        <>
            <li><NavLink to="/" className={navLinkClasses}>Home</NavLink></li>
            <li><NavLink to="all-toys" className={navLinkClasses}>All toys</NavLink></li>
            <li><NavLink to="my-profile" className={navLinkClasses}>My Profile</NavLink></li>
        </>
    );
    

    return (
        <div className="navbar bg-white shadow-lg border-b border-gray-100 sticky top-0 z-40">
            <div className="navbar-start">
                {/* Mobile/Hamburger Menu */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                {/* Website Name/Logo */}
                <Link to="/" className="btn btn-ghost normal-case text-2xl font-extrabold text-gray-800 tracking-wider">
                    <span className="text-red-600">Toy</span>Topia
                </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {navItems}
                </ul>
            </div>

            <div className="navbar-end flex gap-5 px-5">
                {
                    user && <div className='group'>
                        <img
                            className='w-12 rounded-full'
                            src={
                                user && user.photoURL
                                    ? user.photoURL
                                    : userIcon
                            }
                            alt={user.displayName}
                        />
                        <div className='absolute top-full transform -translate-x-1/2 mt-3 
                                        bg-gray-800 text-white text-sm rounded-lg py-1 px-3 
                                        whitespace-nowrap z-50 transition-all duration-300 
                                        scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'>{user.displayName}</div>
                    </div>
                }
               <div>
                    {
                        user ?
                            <button onClick={handleLogout} className='inline-flex items-center px-4 py-2 bg-purple-600 text-white text-lg font-bold rounded-full shadow-lg  hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 ease-in-out ring-2 ring-purple-300 ring-offset-2 ring-offset-indigo-100'>LogOut</button>
                            :
                            <Link to={'/login'}><button className='inline-flex items-center px-4 py-2 bg-purple-600 text-white text-lg font-bold rounded-full shadow-lg  hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 ease-in-out ring-2 ring-purple-300 ring-offset-2 ring-offset-indigo-100'>Login</button></Link>}
               </div>
            </div>
        </div>
    );
};

export default Navbar;
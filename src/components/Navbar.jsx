import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router';
// import { AuthContext } from '../../providers/AuthProvider'; // ⬅️ Import your AuthContext

const Navbar = () => {
    // // 1. Get user, loading state, and logout function from AuthContext
    // const { user, logOut, loading } = useContext(AuthContext);
    // const [isHovering, setIsHovering] = useState(false); // State for hover effect

    // Class for Active/Inactive NavLinks
    const navLinkClasses = ({ isActive }) =>
        `font-semibold px-3 py-2 transition-colors duration-200 ${
            isActive 
                ? 'text-red-600 border-b-2 border-red-600' // Active style
                : 'text-gray-700 hover:text-red-500' // Inactive style
        }`;

    const navItems = (
        <>
            <li><NavLink to="/" className={navLinkClasses}>Home</NavLink></li>
            {/* My Profile is a protected route requirement */}
            {/* {user && <li><NavLink to="/my-profile" className={navLinkClasses}>My Profile</NavLink></li>}
            {/* The Extra Protected Route */}
            {/* {user && <li><NavLink to="/extra-content" className={navLinkClasses}>Extra Content</NavLink></li>} */} 
        </>
    );

    // // 2. Conditional Rendering Logic for Auth Section
    // let authContent;
    
    // if (loading) {
    //     // Show a simple loader while Firebase checks the user status
    //     authContent = (
    //         <div className="flex items-center space-x-2">
    //             <span className="loading loading-spinner loading-sm text-red-500"></span>
    //             <span className="text-sm text-gray-500">Loading...</span>
    //         </div>
    //     );
    // } else if (user) {
    //     // User is logged in: Show image, name on hover, and Logout button
    //     authContent = (
    //         <div className="flex items-center space-x-3">
    //             {/* User Image and Name on Hover */}
    //             <div 
    //                 className="relative cursor-pointer"
    //                 onMouseEnter={() => setIsHovering(true)}
    //                 onMouseLeave={() => setIsHovering(false)}
    //             >
    //                 <img
    //                     src={user.photoURL || 'https://via.placeholder.com/150'} // Use placeholder if photoURL is null
    //                     alt={user.displayName || 'User'}
    //                     className="w-10 h-10 rounded-full border-2 border-red-500 object-cover shadow-md"
    //                 />
    //                 {/* Tooltip/Hover Name Display */}
    //                 {isHovering && user.displayName && (
    //                     <span className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
    //                         {user.displayName}
    //                     </span>
    //                 )}
    //             </div>

        //         {/* Logout Button */}
        //         <button
        //             onClick={logOut}
        //             className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-red-600 transition duration-150 shadow-md"
        //         >
        //             Logout
        //         </button>
        //     </div>
        // );
    // } else {
    //     // User is logged out: Show Login button
    //     authContent = (
    //         <Link to="/login">
    //             <button
    //                 className="bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-gray-700 transition duration-150 shadow-md"
    //             >
    //                 Login
    //             </button>
    //         </Link>
    //     );
    // }

    // 3. Main Navbar Structure (Tailwind + Daisy UI for responsive menu)
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

            {/* Auth Section (User Image or Login Button)
            <div className="navbar-end">
                {authContent}
            </div> */}
        </div>
    );
};

export default Navbar;
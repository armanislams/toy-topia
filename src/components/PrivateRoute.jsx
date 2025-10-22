import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loader from './Loader';
import { AuthContext } from './Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading}= use(AuthContext);
    const location = useLocation();
    if(loading){
        return <Loader></Loader>
    }
    else if(!user){
        return <Navigate to={'/auth/login'} state={location.pathname}></Navigate>
    }
    else{
         return children;
    }
   
};

export default PrivateRoute;
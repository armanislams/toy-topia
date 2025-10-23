import React from 'react';
import { createBrowserRouter } from "react-router";
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Root from '../pages/Route/Root';
import Loader from '../components/Loader';
import AllToys from '../pages/AllToys';
import ToyDetails from '../pages/ToyDetails';
import PrivateRoute from '../components/Provider/PrivateRoute';
import Login from '../pages/Login';
import Register from '../pages/Register';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        hydrateFallbackElement: <Loader></Loader>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('/toys.json'),
                Component: Home
            },
            {
                path: 'all-toys',
                loader: () => fetch('/toys.json'),
                element: <PrivateRoute>
                    <AllToys></AllToys>
                </PrivateRoute>
            },
            {
                path: 'toy/:id',
                loader: () => fetch('/toys.json'),
                element: <PrivateRoute>
                    <ToyDetails></ToyDetails>
                </PrivateRoute>

            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            }
        ],
    },

]);


export default router;
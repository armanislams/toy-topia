import React from 'react';
import { createBrowserRouter } from "react-router";
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Root from '../pages/Route/Root';
import Loader from '../components/Loader';
import AllToys from '../pages/AllToys';
import ToyDetails from '../pages/ToyDetails';

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('/toys.json'),
                Component: Home
            },
            {
                path: 'all-toys',
                loader: () => fetch('/toys.json'),
                element: <AllToys></AllToys>
            },
            {
                path: 'toy/:id',
                loader: () => fetch('/toys.json'),
                element: <ToyDetails></ToyDetails>

            }
        ],
        hydrateFallbackElement: <Loader></Loader>,
        errorElement: <ErrorPage></ErrorPage>
    },
]);


export default router;
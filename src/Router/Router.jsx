import React from 'react';
import { createBrowserRouter } from "react-router";
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Root from '../pages/Route/Root';
import Loader from '../components/Loader';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            loader: ()=>fetch('/toys.json'),
            Component: Home
        }
    ],
    hydrateFallbackElement: <Loader></Loader>,
    errorElement: <ErrorPage></ErrorPage>
  },
]);


export default router;
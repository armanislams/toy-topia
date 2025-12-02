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
import Profile from '../pages/Profile';
import ForgotPassword from '../pages/ForgetPassword';
import TryNow from '../components/TryNow';
import LocalSeller from '../components/LocalSeller';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Terms from '../pages/Terms';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import FAQ from '../pages/FAQ';
import ShippingAndReturns from '../pages/ShippingAndReturns';
import SiteMap from '../pages/SiteMap';
import Careers from '../pages/Careers';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Loader></Loader>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/toys.json"),
        Component: Home,
      },
      {
        path: "all-toys",
        loader: () => fetch("/toys.json"),
        Component: AllToys,
      },
      {
        path: "toy/:id",
        loader: () => fetch("/toys.json"),
        Component: ToyDetails,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "forgot-password",
        Component: ForgotPassword,
      },
      {
        path: "try-now/:id",
        loader: () => fetch("/toys.json"),
        element: (
          <PrivateRoute>
            <TryNow></TryNow>
          </PrivateRoute>
        ),
      },
      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "sellers",
        loader: () => fetch("/toys.json"),
        Component: LocalSeller,
      },
      {
        path: "about-us",
        Component: AboutUs,
      },
      {
        path: "contact-us",
        Component: ContactUs,
      },
      {
        path: "terms-and-conditions",
        Component: Terms,
      },
      {
        path: "privacy-policy",
        Component: PrivacyPolicy,
      },
      {
        path: "faq",
        Component: FAQ,
      },
      {
        path: "shipping-and-returns",
        Component: ShippingAndReturns,
      },
      {
        path: "site-map",
        Component: SiteMap,
      },
      {
        path: "careers",
        Component: Careers,
      },
    ],
  },
]);


export default router;
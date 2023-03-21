import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE, BLOG_ROUTE, OFFERS_ROUTE, REALESTATE_ROUTE, ABOUT_ROUTE, WEBOFFERS_ROUTE } from "../utils/consts";

import Admin from "../admin/Admin";
import About from '../about/About';
import Main from '../main/Main';
import RealEstate from '../realEstate/RealEstate';
import WebOffers from '../webOffers/WebOffers';
import Offers from '../offers/Offers';
import Blog from '../blog/Blog';
import Login from '../login/Login'
import Auth from '../auth/Auth'

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main,
    },
    {
        path: LOGIN_ROUTE,
        Component: Login,
    },
    {
        path: ABOUT_ROUTE,
        Component: About,
    },
    {
        path: REALESTATE_ROUTE,
        Component: RealEstate,
    },
    {
        path: WEBOFFERS_ROUTE,
        Component: WebOffers,
    },
    {
        path: OFFERS_ROUTE,
        Component: Offers,
    },
    {
        path: BLOG_ROUTE,
        Component: Blog,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },    
]

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    }, 
]

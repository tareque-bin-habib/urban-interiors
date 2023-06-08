import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../pages/About/About/About";
import Contact from "../../pages/Contact/Contact/Contact";
import Dashboard from "../../pages/Dashboard/DashBoard/Dashboard";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Services from "../../pages/Services/Services/Services";
import SingleService from "../../pages/Services/SingleService/SingleService";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";
import Profile from "../../pages/Profile/Profile";
import NotFound from "../../pages/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },
            {
                path: '/services/:id',
                element: <PrivateRoutes><SingleService></SingleService></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }



        ]
    }
])
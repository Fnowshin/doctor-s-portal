import { createBrowserRouter } from "react-router-dom";
import Appointment from "../../Pages/Appointment/Appointment";
import Home from "../../Pages/Home/Components/Home";
import Testimonials from "../../Pages/Home/Components/Testimonials/Testimonials";
import Main from "../../Pages/Layout/Main";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter ([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/reviews',
                element:<Testimonials></Testimonials>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            }
        ]
    }
])

export default router;
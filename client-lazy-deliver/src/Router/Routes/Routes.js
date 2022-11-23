import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import Main from './../../layouts/Main';
import Home from './../../Pages/Home/Home/Home';
import AddBlog from './../../Pages/Blog/AddBlog';
import UpdateBlog from './../../Pages/Blog/UpdateBlog';
import Contact from './../../Pages/Contact/Contact';
import LogIn from "../../Pages/LogIn/LogIn";
import Registration from './../../Pages/Registration/Registration';
import Services from './../../Pages/Services/Services';
import SingleService from './../../Pages/Services/SingleService';
import AllReview from '../../Pages/AllReview/AllReview'
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import AddService from './../../Pages/AddService/AddService';
import EditReview from './../../Pages/ViewReview/EditReview';



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/add-blog",
                element: <AddBlog />,
            },
            {
                path: "/update/:id",
                element: <UpdateBlog />,
                loader: ({params}) => fetch(`https://lazy-deliver-server.vercel.app/blog/${params.id}`)
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/login",
                element: <LogIn />,
            },
            {
                path: "/registration",
                element: <Registration />,
            },
            {
                path: '/all-review',
                element: <AllReview />,

            },
            {
                path: '/edit-review/:id',
                element: <EditReview />,
                loader: ({params}) => fetch(`https://lazy-deliver-server.vercel.app/review/${params.id}`)

            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/add-service",
                element: <AddService />,
            },
            {
                path: "/service/:id",
                element: <PrivateRoute><SingleService /></PrivateRoute>,
                loader: ({params}) => fetch(`https://lazy-deliver-server.vercel.app/service/${params.id}`)
            },
            {
                path: "*",
                element: <div>Not Found</div>
            }
        ]
    },
  ]);

export { router }; 
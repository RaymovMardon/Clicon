import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/home";
import ShopPage from "../pages/shop";
import FaqPage from "../pages/faq";
import BlogPage from "../pages/blog"
import NotFound from "../pages/notFound";
import UserP from "../pages/user";
import ProductDetails from "../pages/product/index";
import CardPage from "../pages/card";
import FavoritePage from "../pages/favorite";

export const router = createBrowserRouter([{
    path:"/",
    element:<App/>,
    children:[
        {
            index:true,
            element:<Homepage/>
        },
        {
            path:"/shop",
            element:<ShopPage/>
        },
        {
            path:"/faq",
            element:<FaqPage/>
        },
        {
                path:"/blog",
            element:<BlogPage/>
        },
        {
            path:"*",
            element:<NotFound/>
        },
        {
            path:"/product/:id",
            element:<ProductDetails />
        },
        {
            path:"/user",
            element:<UserP/>
        },
        {
            path:"/card",
            element:<CardPage/>
        },
        {
            path:"/favorite",
            element:<FavoritePage/>
        }
    ]
}])
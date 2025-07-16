import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/home";
import ShopPage from "../pages/shop";
import FaqPage from "../pages/faq";
import ProductDetails from "../pages/product/index";

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
            path:"/product",
            element:<ProductDetails />
        },
    ]
}])
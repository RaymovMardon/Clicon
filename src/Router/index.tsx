import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/home";
import ShopPage from "../pages/shop";

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
    ]
}])
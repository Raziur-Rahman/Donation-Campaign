import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ShowDetails from "../Components/ShowDetails/ShowDetails";



const MyCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>, 
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('../Fake_data.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path:"/statistic",
                element: <Statistics></Statistics>
            },
            {
                path: "/details/:ID",
                element: <ShowDetails></ShowDetails>,
                loader: () => fetch('../Fake_data.json')
            }
        ]

    }
])

export default MyCreateRoute
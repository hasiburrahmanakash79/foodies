import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import RecipeDetails from "../components/ChefCategory/RecipeDetails/RecipeDetails";
import PageNotFound from "../Shared/PageNotFound/PageNotFound";
import Home from "../components/pages/Home/Home";
import Blogs from "../components/Blogs/Blogs";
import About from "../components/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/home',
        element: <Home></Home>,
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path: '/about',
        element: <About></About>
      },

      {
        path: '/recipes/:id',
        element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://foodies-server-phi.vercel.app/chef/${params.id}`)
      }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path:'/register',
    element: <SignUp></SignUp>
  },
  
 
  {
    path: "*",
    element: <PageNotFound></PageNotFound>
  }
]);

export default router;
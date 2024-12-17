import Home from "../components/Home.jsx";
import { Navigate } from "react-router-dom";
import Login from "./Login.jsx";
import SignUp from "../components/SignUp.jsx";
import DashBoard from "../components/DashBoard.jsx";
import AdminDashboard from "../components/AdminDashboard.jsx";
import UploadProduct from "../components/UploadProduct.jsx";
import Priceing from '../components/Priceing.jsx'


export default [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp/>,
  },
  {
    path: '/dashboard',
    element: <DashBoard/>,
  },
  {
    path: '/admin-dashboard',
    element: <AdminDashboard/>,
  },
  {
    path: '/upload-product',
    element: <UploadProduct/>,
  },
  {
    path: '/pricing',
    element: <Priceing/>,
  },
  {
    path: '/*',
    element: <Navigate to="/" />,
  },
];

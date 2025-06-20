import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Toaster } from 'react-hot-toast';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
//import Allplants from './components/Allplants.jsx';
import Navbar from './components/Navbar.jsx';
import Addplants from './components/Addplants.jsx';
import Plantall from './components/Plantall.jsx';
import Myplant from './components/Myplant.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Viewdetails from './components/Viewdetails.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import UpdatePlant from './components/UpdatePlant.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Home,
    children:[
      {
        index:true,
        Component:<div></div>
      },
      
      
      
    ]
  },



  {
   path:"*" ,
   element: <img className='mx-auto text-center items-center w-180' src="https://i.ibb.co/GzNrstM/imageserror.jpg" alt="" />

  },
  
    {
        path:"/addplants",
        element:<PrivateRoute> <Addplants></Addplants></PrivateRoute>
        
      },
      {
        path:"/plantall",
        element:<Plantall></Plantall>
      },
      {
   path:"/myplant",
   element:<PrivateRoute>  <Myplant></Myplant> </PrivateRoute>
  
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      
      {
  path:"/viewdetails/:id",
  element:<PrivateRoute><Viewdetails></Viewdetails></PrivateRoute>
  
},
{
  path:"/update/:id",
  element:<PrivateRoute>  <UpdatePlant></UpdatePlant>  </PrivateRoute>
 
}

          
      
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
   <RouterProvider router={router} />
 </AuthProvider>

  
  </StrictMode>,
)


//please add this feature in this file  (do not change other code )
// import { Routes, Route } from "react-router-dom";
// import Addplants from "./pages/Addplants";
// import Myplant from "./pages/Myplant";
// import PrivateRoute from "./routes/PrivateRoute"; // import the component






//chat gpt


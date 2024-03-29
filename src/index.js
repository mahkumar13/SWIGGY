import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Body from './Components/Body';
import ContactUs from './Components/ContactUs';
import NotFound from './Components/NotFound';
import AboutUs from './Components/AboutUs';
import ResturantMenu from './Components/ResturantMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:"/",
        element:<Body></Body>
      },
      {
        path:"/contact",
        element:<ContactUs></ContactUs>
      },
      {
        path:"/about",
        element:<AboutUs></AboutUs>
      },
      {
        path:"/resturant/:resId",
        element:<ResturantMenu></ResturantMenu>
      }

    ],
    errorElement:<NotFound></NotFound>
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
    </RouterProvider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import Home from './Pages/Home.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import Schedules from './Pages/Schedules.jsx';
import Blogs from './Pages/Blogs.jsx';

import Root from './Root/Root.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import Pages from './Pages/Pages.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "aboutus", Component: AboutUs },
      { path: "schedules", Component: Schedules },
      { path: "blogs", Component: Blogs },
      { path: "pages", Component: Pages },
      { path: "contactUs", Component: ContactUs },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,

)

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
import Feature from './Components/Feature/Feature.jsx';
import Benefits from './Components/Benefits/Benefits.jsx';
import Speakers from './Components/Speakers/Speakers.jsx';
import Pricing from './Components/Pricing/Pricing.jsx';
import Testimonials from './Components/Testimonials/Testimonials.jsx';
import FAQ from './Components/FAQ/FAQ.jsx';
import Video from './Components/Video/Video.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "aboutus", Component: AboutUs },
      { path: "schedules", Component: Schedules },
      { path: "blogs", Component: Blogs },
      { path: "contactUs", Component: ContactUs },
      { path: "feature", Component: Feature },
      { path: "benefits", Component: Benefits },
      { path: "speakers", Component: Speakers },
      { path: "pricing ", Component: Pricing },
      { path: "faq", Component: FAQ },
      { path: "video", Component: Video },
      { path: "testimonials", Component: Testimonials },
      
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,

)

import Home from "./pages/Home";

import AppLayout from "./components/AppLayout";
import About from "./pages/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

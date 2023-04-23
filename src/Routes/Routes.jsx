import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import NewsCard from "../Pages/Home/NewsCard/NewsCard";
import News from "../Pages/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/categories/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5200/categories/${params.id}`),
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news/:id",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout />,
    children: [
      {
        path: ":id",
        element: <News />,
      },
    ],
  },
]);

export default router;

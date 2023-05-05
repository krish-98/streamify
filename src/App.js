import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Head from "./components/Head"
import Body from "./components/Body"
import MainContainer from "./components/MainContainer"
import NotFound from "./components/NotFound"
import WatchPage from "./components/WatchPage"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Head />
        <Body />
      </div>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

/**
 *
 *
 * App
 *  -Head
 *  -Body
 *    -ButtonList
 *    -VideoContainer
 *      -VideoCard
 *
 *
 *
 */

export default App

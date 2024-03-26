import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Errorpage from './Errorpage'
import MovieInfo from './MovieInfo'



const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />,
        },
        {
            path: "/movie/:id",
            element: <MovieInfo />
        },
        {
            path: "/tv/:id",
            element: <MovieInfo />
        },
        {
            path: "/error",
            element: <Errorpage />,
        },
    ])
    
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;

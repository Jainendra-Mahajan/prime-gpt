import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router'
import { useDispatch } from 'react-redux'
import Trailer from './Trailer'

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/play/:id",
            element: <Trailer />
        }
    ])

    return (
        <div>
            < RouterProvider router={appRouter} />
        </div >
    )
}

export default Body
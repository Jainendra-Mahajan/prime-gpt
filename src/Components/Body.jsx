import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router'
import { useDispatch } from 'react-redux'
import Trailer from './Trailer'
import GptSeach from './GptSeach'
import LandingPage from './LandingPage'

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/search",
            element: <GptSeach />
        },

        {
            path: "/play/:id",
            element: <Trailer />
        },
        {
            path: "/",
            element: <LandingPage />
        },
    ])

    return (
        <div>
            < RouterProvider router={appRouter} />
        </div >
    )
}

export default Body
import React, { Suspense, lazy } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router'
import { useDispatch } from 'react-redux'
import Trailer from './Trailer'
import LandingPage from './LandingPage'


const Body = () => {
    const GptSearch = lazy(() => import("./GptSearch"))
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage />
        },
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
            element:
                <Suspense fallback={<div>Loading...</div>}>
                    <GptSearch />
                </Suspense>
        },

        {
            path: "/play/:id",
            element: <Trailer />
        },

    ])

    return (
        <div>
            < RouterProvider router={appRouter} />
        </div >
    )
}

export default Body
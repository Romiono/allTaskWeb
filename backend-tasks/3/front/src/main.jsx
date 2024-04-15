import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DB from "./Pages/DB.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/users',
        element: <DB/>
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)

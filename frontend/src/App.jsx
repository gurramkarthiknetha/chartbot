import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RouterLayout from './components/RouterLayout'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
function App() {
    const browserRouterObj=createBrowserRouter(
        [
            {
                path:"",
                element:<RouterLayout/>,
                children:[
                    {
                        path:"",
                        element:<Home/>
                    },
                    {
                        path:"register",
                        element:<Register/>
                    },
                    {
                        path:"login",
                        element:<Login/>
                    },   
                ]
            }
            
        ]
    )
  return (
    <div>
        <RouterProvider router={browserRouterObj}/>
    </div>
  )
}

export default App
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Fotter'
import Header from './Header'
function RouterLayout() {
  return (
    <div>
       <Header/>
        <div >
            <Outlet/>
        </div>
       {/* <Footer/> */}
    </div>
  )
}

export default RouterLayout
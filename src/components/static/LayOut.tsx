// import React from 'react'

import Footer from "./Footer"
import Header from "./Header"
import {Outlet} from "react-router-dom"

const LayOut = () => {
  return (
	<div>
		<Header />
		<Outlet />
		<Footer />
	</div>
  )
}

export default LayOut
// import React from 'react'
import {RouterProvider} from "react-router-dom"
import { mainRouter } from "./router/mainRouter"

import "./App.css"

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRouter} />
    </div>
  )
}

export default App
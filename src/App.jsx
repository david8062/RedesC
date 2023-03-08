import React from 'react'
import PublicRoutes from './config/PublicRoutes'
import { BrowserRouter} from 'react-router-dom'

const App = () => {
  return (       
     <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  
  )
}

export default App
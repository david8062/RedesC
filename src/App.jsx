import React from 'react'
import PublicRoutes from './config/PublicRoutes'
import { BrowserRouter} from 'react-router-dom'
const App = () => {
  console.log("sdbjjsbdbjsad")
  return (       
    
     <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  
  )
}

export default App
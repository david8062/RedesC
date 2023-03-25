import React from 'react'
import PublicRoutes from './config/PublicRoutes'
import { BrowserRouter } from 'react-router-dom'
import ListTematic from './components/layout/ListTematic'
const App = () => {

  return (
    // <ListTematic></ListTematic>
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>

  )
}

export default App
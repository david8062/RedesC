import React from 'react'
import PublicRoutes from './config/PublicRoutes'
import SelectDepartament from './components/pages/SelectDepartament'
import { BrowserRouter} from 'react-router-dom'
import CardProfessor from './components/common/CardProfessor'
import Search from './utils/hooks/Search'
const App = () => {
  return (   
    <Search />
    //  <BrowserRouter>
    //   <PublicRoutes />
    // </BrowserRouter>
  
  )
}

export default App
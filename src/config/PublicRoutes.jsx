import React from 'react'
import HomePage from '../components/pages/HomePage'
import InvestigationLines from '../components/pages/InvestigationLines'
import Departaments from '../components/pages/Departaments'
import SelectDepartament from '../components/pages/SelectDepartament'
import ListTematic from '../components/layout/ListTematic'
import { Routes, Route } from 'react-router-dom'
const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />}></Route> 
            <Route path='/InvestigationLines' element={<InvestigationLines />}></Route>
            <Route path='/Departaments' element={<Departaments />}></Route> 
            <Route path = '/SelectDepartament' element = { <SelectDepartament />}></Route>    
            <Route path = '/ListTematic' element = {<ListTematic />}></Route>  
        </Routes>
    )
}

export default PublicRoutes
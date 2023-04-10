import React, { useState, useEffect } from 'react'
import Search from '../../components/common/Search'
import { DatosJSON }from '../hooks/peticionJSON';


const SearchComponent = () => {
  const dataProfessor = DatosJSON(); 
  const [search, setSearch] = useState("")
  const searcher = (e) => {
    setSearch(e.target.value)
  }
  
  const filteredData = dataProfessor.flatMap(result => result).filter(data =>
    data.otros_campos.apellido_nombre.toLowerCase().includes(search.toLowerCase())
  );

  return(
  <Search search={search} setSearch={setSearch} searcher={searcher}
   />)

  // return (
  //       <div>
  //     <Search search={search} setSearch={setSearch} searcher={searcher} />      
  //     <table className='table table-striped table-hover mt-5 shadow-lg'>
  //       <thead>
  //         <tr className='bg-curso text-white'>
  //           <th>NAME</th>
  //           <th>USER NAME</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {filteredData.map((data) => {
  //           return (
  //             <CardProfessor
  //             key={data.id}
  //             name={data.otros_campos.apellido_nombre}
  //             image={data.otros_campos.fotografia.url}
  //             link = {data.link}
  //         />
  //           )
  //         })}
  //       </tbody>
  //     </table>
  //   </div>
  // )
}

export default SearchComponent

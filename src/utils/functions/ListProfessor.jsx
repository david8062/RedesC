
import React, { useState, useEffect } from 'react'
import CardProfessor from '../../components/common/CardProfessor';
import DatosJSON from '../hooks/peticionJSON';
import Search from '../../components/common/Search'
const ListProfessor = () => {
    const dataProfessor = DatosJSON();
    const [search, setSearch] = useState("")
    const searcher = (e) => {
        setSearch(e.target.value)
    }

    const filteredData = dataProfessor.flatMap(result => result).filter(data =>
        data.otros_campos.apellido_nombre.toLowerCase().startsWith(search.toLowerCase())
    );

    return (
        <div className="JSON-professor">
            <Search search={search} setSearch={setSearch} searcher={searcher} />
           {filteredData.map((data) => {
            return (
              <CardProfessor
              key={data.id}
              name={data.otros_campos.apellido_nombre}
              image={data.otros_campos.fotografia.url}
              link = {data.link}
          />
            )
          })}
        </div>
    );
};

export default ListProfessor;


// {dataProfessor.map((result) => {
//     return result.map((data) => {
//         return (
//             <CardProfessor
//                 key={data.id}
//                 name={data.otros_campos.apellido_nombre}
//                 image={data.otros_campos.fotografia.url}
//                 link={data.link}
//             />
//         );
//     });
// })}
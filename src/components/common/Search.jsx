import React, { useState } from 'react';
import HookSearch from '../../utils/hooks/HookSearch';
import CardProfessor from './CardProfessor';
const Search = ({ setSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = HookSearch(searchTerm);

  return (
    <div className="search__navMenu">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        busqueda = "Busqueda por profesor" 
      />
      <div className="icon__search"></div>
      {filteredData.length > 0 && (
        <ul>
           {filteredData.map((data) => {
                return (
                    <CardProfessor
                        key={data.id}
                        name={data.otros_campos.apellido_nombre}
                        image={data.otros_campos.fotografia.url}
                        link={data.link} />
                );
            })}

        </ul>
      )}
    </div>
  );
};

export default Search;

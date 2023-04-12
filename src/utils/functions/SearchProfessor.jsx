import React, { useState } from 'react';
import HookSearch from '../../utils/hooks/HookSearch';
import CardProfessor from '../../components/common/CardProfessor';
import Search from '../../components/common/Search'

const SearchProfessor = ({ setSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = HookSearch(searchTerm);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search__navMenu">
      <Search
        search={searchTerm}
        searcher={setSearchTerm}
        busqueda="Buscar profesor"
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
                link={data.link}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchProfessor;

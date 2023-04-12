import { useState, useEffect } from 'react';
import DatosJSON from '../hooks/peticionJSON';

const HookSearch = (search) => {
  const dataProfessor = DatosJSON();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (search) {
      const filtered = dataProfessor.flatMap(result => result).filter(data =>
        data.otros_campos.apellido_nombre.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  }, [dataProfessor, search]);

  return filteredData;
};

export default HookSearch;
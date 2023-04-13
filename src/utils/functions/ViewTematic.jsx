import React from 'react';
import DatosJSON from '../hooks/peticionJSON';
import CardTematic from '../../components/common/CardTematic';
import HookSearchTematic from '../hooks/HookSearchTematic';

const ViewTematic = () => {
  const dataProfessor = DatosJSON();

  let arrayTematic = [];
  try {
    dataProfessor.map((result) => {
      return result.map((data) => {
        const arrayInterest = data.otros_campos?.intereses_teoricos || [];
        arrayTematic.push(...arrayInterest);
      });
    });
    const listTematic = arrayTematic.filter(
      (value, index, self) => self.indexOf(value) === index
    );
    listTematic.sort((a, b) => a.localeCompare(b));

    const [searchTerm, setSearchTerm, filteredTematic] = HookSearchTematic(
      listTematic
    );

    // Agrupar los elementos por letra
    const groupedTematic = {};
    filteredTematic.forEach((tematic) => {
      const firstLetter = tematic.charAt(0).toUpperCase();
      if (groupedTematic[firstLetter]) {
        groupedTematic[firstLetter].push(tematic);
      } else {
        groupedTematic[firstLetter] = [tematic];
      }
    });

    return (
      <div className="main-selection-SearchTematic">
        {/* Agregamos un input para buscar temáticas y usamos los elementos del hook */}
        <input
          type="text"
          placeholder="Buscar temática..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Iterar sobre las claves del objeto y crear un contenedor para cada letra */}
        {Object.keys(groupedTematic).map((letter) => (
          <div className="letter" key={letter}>
            <h3 className="letter-menu-tematic">{letter}</h3>
            {/* Iterar sobre los elementos correspondientes a cada letra y crear una instancia de CardTematic para cada uno */}
            {groupedTematic[letter].map((tematic) => (
              <CardTematic tematic={tematic} key={tematic} />
            ))}
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error al cargar los datos de los profesores');
  }
};

export default ViewTematic;

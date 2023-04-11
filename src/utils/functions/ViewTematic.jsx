import React from 'react';
import DatosJSON from '../hooks/peticionJSON';
import CardTematic from '../../components/common/CardTematic';

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

    // Agrupar los elementos por letra
    const groupedTematic = {};
    listTematic.forEach((tematic) => {
      const firstLetter = tematic.charAt(0).toUpperCase();
      if (groupedTematic[firstLetter]) {
        groupedTematic[firstLetter].push(tematic);
      } else {
        groupedTematic[firstLetter] = [tematic];
      }
    });

    console.log(groupedTematic);

    return (
      <div className="main-selection-SearchTematic">
        {/* Iterar sobre las claves del objeto y crear un contenedor para cada letra */}
        {Object.keys(groupedTematic).map((letter) => (
          <div className='letter' key={letter}>
            <h3 className='letter-menu-tematic'>{letter}</h3>
            {/* Iterar sobre los elementos correspondientes a cada letra y crear una instancia de CardTematic para cada uno */}
            {groupedTematic[letter].map((tematic) => (
              <CardTematic tematic={tematic} key={tematic} />
            ))}
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error al cargar los datos de los profesores");
  }
};

export default ViewTematic;

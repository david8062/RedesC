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
    console.log(listTematic);

    return (
      <div className="menu__tematic">
        {/* Mapear cada temática y crear una instancia de CardTematic para cada una */}
        {listTematic.map((tematic) => (
          <CardTematic tematic={tematic} key={tematic} />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error al cargar los datos de los profesores");
  }
};

export default ViewTematic;




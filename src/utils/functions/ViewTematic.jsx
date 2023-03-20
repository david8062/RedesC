import React from 'react'
import DatosJSON from '../hooks/peticionJSON';
import CardTematic from '../../components/common/CardTematic'
const ViewTematic = () => {
  const dataProfessor = DatosJSON()
  try {
    return (
      <div className="menu__tematic">
        {dataProfessor.map((result) => {
          return result.map((data) => {
            const arrayDepartament = data.otros_campos?.intereses_teoricos || [];
            const uniqueDepartaments = arrayDepartament.filter(
              (value, index, self) => self.indexOf(value) === index && self.lastIndexOf(value) === index
            );
            return (
              <>
                {uniqueDepartaments.map((departament) => {
                  if (!departament) {                    
                    return null;
                  }
                  return (
                    <CardTematic
                      tematic={departament}
                    />
                  );
                })}
              </>
            );
          });
        })}
      </div>

    )
  } catch (error) {
    console.error("ocurrio un error", error)
  }

}

export default ViewTematic
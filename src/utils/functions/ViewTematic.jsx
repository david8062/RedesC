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



// const ViewTematic = () => {
//   const dataProfessor = DatosJSON();
//   let arrayTematic = [];
//   try {
//     dataProfessor.map((result) => {
//       return result.map((data) => {
//         const arrayInterest = data.otros_campos?.intereses_teoricos || [];
//         arrayTematic.push(...arrayInterest);
//       });
//     });
//     const listTematic = arrayTematic
//       .filter((value, index, self) => self.indexOf(value) === index)
//       .sort((a, b) => a.localeCompare(b));

//     Agrupar las temáticas por letra
//     const tematicByLetter = listTematic.reduce((groups, tematic) => {
//       const letter = tematic.charAt(0).toUpperCase();
//       if (!groups[letter]) {
//         groups[letter] = [];
//       }
//       groups[letter].push(tematic);
//       return groups;
//     }, {});

//     return (
//       <div className="JASON__professor">
//         {/* Mapear cada grupo de temáticas para crear una lista ordenada */}
//         <ol>
//           {Object.entries(tematicByLetter).map(([letter, tematics]) => (
//             <li key={letter}>
//               <h2>{letter}</h2>
//               <ul>
//                 {tematics.map((tematic) => (
//                   <li key={tematic}>
//                     <CardTematic tematic={tematic} />
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ol>
//       </div>
//     );
//   } catch (error) {
//     console.error("Error al cargar los datos de los profesores");
//   }
// };

// export default ViewTematic;
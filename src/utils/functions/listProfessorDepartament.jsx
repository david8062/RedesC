import React from 'react';
import CardProfessor from '../../components/common/CardProfessor';
import DatosJSON from '../hooks/peticionJSON';

const ListProfessorDepartament = () => {
  const dataProfessor = DatosJSON();
  console.log("hola")  
  switch (dataProfessor["area-departamento"]) {
    case "13":
        console.log("lengua y cultura")
      break;
    case "9":
      console.log("Antropologia")
      break;
    case "10":
        console.log("Cepol")
      break;
    case "11":
        console.log("Filosofia")
        break;
    case "12":
        console.log("Historia y Greografia")
    break;
    case "14":
      console.log("Sicologia")
    break
    case "18":
      console.log("sociologia")
    break
    default:
      break;
  }
};

export default ListProfessorDepartament;

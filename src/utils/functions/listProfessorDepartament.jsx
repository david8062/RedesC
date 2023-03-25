import React from 'react'
import CardProfessor from '../../components/common/CardProfessor';
import DatosJSON from '../hooks/peticionJSON';
import Languaje from '../../components/layout/departaments/Languaje'
const ListProfessor = () => {
    const dataProfessor = DatosJSON()
    return (
        <>
            {
                dataProfessor.map((result) => {
                    return result.map((data) => {
                        const arrayDepartament = data["area-departamento"]
                        const departament = arrayDepartament[0]
                        switch (departament) {
                            case 13:
                                
                                break;
                            case 9:
                               
                            default:
                                break;
                        }

                    });
                })
            }
        </>
    )
}

export default ListProfessor;
import React from 'react'
import CardProfessor from '../../components/common/CardProfessor';
import DatosJSON from '../hooks/peticionJSON';
const ListProfessor = () => {
    const dataProfessor = DatosJSON()
    return (
        <div className="JASON__professor">
            {dataProfessor.map((result) => {
                return result.map((data) => {
                    const arrayDepartament = data["area-departamento"]
                    const departamet = arrayDepartament[0]
                    // if (departamet == "13"){
                    //     console.log("hola mundo")
                    // }
                    switch (departamet) {
                        case 13:
                            console.log("antropolgia")
                            console.log(departamet.lent)
                            return (
                                <CardProfessor
                                    key={data.id}
                                    name={data.otros_campos.apellido_nombre}
                                    image={data.otros_campos.fotografia.url}
                                    departamet={arrayDepartament[0]} />
                            )
                            break;

                        default:
                            break;
                    }
                    
                });
            })}
        </div>
    )
}

export default ListProfessor;
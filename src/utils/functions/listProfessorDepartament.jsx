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
                                return (
                                    <Languaje >
                                        <CardProfessor
                                            style={{ backgroundColor: '#00293E', color: 'white' }}
                                            name={data.otros_campos.apellido_nombre}
                                            image={data.otros_campos.fotografia.url}
                                        />
                                    </Languaje>
                                )
                                break;
                            case 9:
                                return (
                                    <CardProfessor style={{ backgroundColor: 'red', color: 'white' }}
                                        key={data.id}
                                        name={data.otros_campos.apellido_nombre}
                                        image={data.otros_campos.fotografia.url}

                                    />
                                )
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
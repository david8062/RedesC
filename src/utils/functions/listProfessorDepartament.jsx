import React from 'react'
import CardProfessor from '../../components/common/CardProfessor';
import DatosJSON from '../hooks/peticionJSON';
function ListProfessorDepartament(props) {
    const dataProfessor = DatosJSON()
    const professors = []
    dataProfessor.forEach((data) => {
        const dataDepartament = data["area-departamento"]
        const departament = dataDepartament[0]
        if (departament === "13") {
            professors.push({
                name: data.otros_campos.apellido_nombre,
                image: data.otros_campos.fotografia.url,
                
            })
        }
    })

    return (
        <>
            {professors.map((professor, index) => (
                <CardProfessor
                 key={index}
                 name={professor.name}
                 image={professor.image} />
            ))}
        </>
    )
}

export default ListProfessorDepartament


/* <div className="JASON__professor">
{dataProfessor.map((result) => {
    return result.map((data) => {
        const arrayDepartament = data["area-departamento"]
        return (
            <CardProfessor
                key = {data.id}
                name = {data.otros_campos.apellido_nombre}
                image = {data.otros_campos.fotografia.url}
                departamet = {arrayDepartament[0]}
            />
        );
    });
})}
</div> */
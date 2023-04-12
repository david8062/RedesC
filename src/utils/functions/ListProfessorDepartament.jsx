import React from 'react'
import DatosJSON from '../hooks/peticionJSON';
import CardProfessor from '../../components/common/CardProfessor';
const ListProfessorDepartament = () => {
	const dataProfessor = Object.values(DatosJSON());
	const profesoresPorDepartamento = {};

dataProfessor.forEach((result) => {
  result.forEach((data) => {
    const departamento = data["area-departamento"][0];
    if (!profesoresPorDepartamento[departamento]) {
      profesoresPorDepartamento[departamento] = [];
    }
    profesoresPorDepartamento[departamento].push(data);

    switch (departamento) {
      case 13:
            //lengua y cultura
						console.log("Hola, soy lengua");				
            break;
        case 14:
            //sicologia
						console.log("Hola, soy sico");
            break;
        case 9:
            //antropologia
						console.log("Hola, soy antropologia");
            break;
        case 10:
            //Cepol
						console.log("Hola, soy cepol");
            break;
        case 11:
            //filosofia
						console.log("Hola, soy filo");
            break;
        case 12:
            //historia y geografia
						console.log("Hola, historia");
            break;
        case 18:
					//sociologia
					console.log("Hola, socilogia");
            break;
        default:
            break;
    }
  });
});

	return (
		<div>
			{
				Object.keys(profesoresPorDepartamento).map((departamento) => (
					<div key={departamento}>
						<h2>{departamento}</h2>
						{
							profesoresPorDepartamento[departamento].map((profesor) => (
								<CardProfessor
									key={profesor.id}
									name={profesor.otros_campos.apellido_nombre}
									image={profesor.otros_campos.fotografia.url}
									link={profesor.link}
									departament={profesor["area-departamento"][0]}
								/>
							))
						}
					</div>
				))
			}
		</div>
	);
}

export default ListProfessorDepartament

// if (!profesoresPorDepartamento[departamento]) {
// 	profesoresPorDepartamento[departamento] = [];
// }
// profesoresPorDepartamento[departamento].push(data);
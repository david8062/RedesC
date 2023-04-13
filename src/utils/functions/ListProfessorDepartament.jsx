import React from 'react'
import DatosJSON from '../hooks/peticionJSON';
import CardProfessor from '../../components/common/CardProfessor';
import Cepol from '../../components/layout/departaments/Cepol'
import History from '../../components/layout/departaments/History'
import Languaje from '../../components/layout/departaments/Languaje'
import Philosophy from '../../components/layout/departaments/Philosophy'
import Psychology from "../../components/layout/departaments/Psychology"
import Sociology from "../../components/layout/departaments/Sociology"
import Anthropology from '../../components/layout/departaments/Anthropology'
const ListProfessorDepartament = ({ anthropologyVisible }) => {
	const dataProfessor = Object.values(DatosJSON());

	const profesoresPorDepartamento = {
		lengua: [],
		sicologia: [],
		antropologia: [],
		cepol: [],
		filosofia: [],
		historia: [],
		sociologia: []
	};

	dataProfessor.forEach((result) => {
		result.forEach((data) => {
			const departamento = data["area-departamento"][0];
			switch (departamento) {
				case 13:
					//lengua y cultura
					profesoresPorDepartamento.lengua.push(data);
					break;
				case 14:
					//sicologia
					profesoresPorDepartamento.sicologia.push(data);
					break;
				case 9:
					//antropologia
					profesoresPorDepartamento.antropologia.push(data);
					break;
				case 10:
					//Cepol
					profesoresPorDepartamento.cepol.push(data);
					break;
				case 11:
					//filosofia
					profesoresPorDepartamento.filosofia.push(data);
					break;
				case 12:
					//historia y geografia
					profesoresPorDepartamento.historia.push(data);
					break;
				case 18:
					//sociologia
					profesoresPorDepartamento.sociologia.push(data);
					break;
				default:
					break;
			}
		});
	});


	return (

		<><Languaje>
			 <div className={`list-professor-departament ${anthropologyVisible ? 'visible' : 'hidden'}`}>
     		 {/* contenido de la lista de profesores */}
    		</div>
			{profesoresPorDepartamento.lengua.map((profesor) => (
				<CardProfessor
					key={profesor.id}
					name={profesor.otros_campos.apellido_nombre}
					image={profesor.otros_campos.fotografia.url}
					link={profesor.link} />
			))}
		</Languaje>
		<Psychology>
				{profesoresPorDepartamento.sicologia.map((profesor) => (
					<CardProfessor
						key={profesor.id}
						name={profesor.otros_campos.apellido_nombre}
						image={profesor.otros_campos.fotografia.url}
						link={profesor.link} />
				))}
			</Psychology>
			<Cepol>
				{profesoresPorDepartamento.cepol.map((profesor) => (
					<CardProfessor
						key={profesor.id}
						name={profesor.otros_campos.apellido_nombre}
						image={profesor.otros_campos.fotografia.url}
						link={profesor.link} />
				))}
			</Cepol>
			<Philosophy>
				{profesoresPorDepartamento.filosofia.map((profesor) => (
					<CardProfessor
						key={profesor.id}
						name={profesor.otros_campos.apellido_nombre}
						image={profesor.otros_campos.fotografia.url}
						link={profesor.link} />
				))}
			</Philosophy>
			<History>
				{profesoresPorDepartamento.historia.map((profesor) => (
					<CardProfessor
						key={profesor.id}
						name={profesor.otros_campos.apellido_nombre}
						image={profesor.otros_campos.fotografia.url}
						link={profesor.link} />
				))}
			</History>
			<Sociology>
				{profesoresPorDepartamento.sociologia.map((profesor) => (
					<CardProfessor
						key={profesor.id}
						name={profesor.otros_campos.apellido_nombre}
						image={profesor.otros_campos.fotografia.url}
						link={profesor.link} />
				))}
			</Sociology>
			<Anthropology>
				{profesoresPorDepartamento.antropologia.map((profesor) => (
					<CardProfessor
						key={profesor.id}
						name={profesor.otros_campos.apellido_nombre}
						image={profesor.otros_campos.fotografia.url}
						link={profesor.link} />
				))}
			</Anthropology></>
			

	);
}

export default ListProfessorDepartament


import React from 'react';
import CardProfessor from '../../components/common/CardProfessor';
import DatosJSON from '../hooks/peticionJSON';

const ListProfessor = (props) => {
    const dataProfessor = DatosJSON();

    return (
        <div className="JASON__professor">
            {dataProfessor.map((result) => {
                return result.map((data) => {                             
                            return (
                                <CardProfessor
                                    key={data.id}
                                    name={data.otros_campos.apellido_nombre}
                                    image={data.otros_campos.fotografia.url}
                                    link = {data.link}
                                />
                            );                         
                });
            })}
        </div>
    );
};

export default ListProfessor;

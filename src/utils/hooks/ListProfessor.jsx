import React from 'react'
import { useState, useEffect } from "react";
import CardProfessor from '../../components/common/CardProfessor';
const ListProfessor = () => {
    const [dataProfessor, setdateProfessor] = useState([]);   
    const generateUrl = (page) => {
        return `https://cienciassociales.uniandes.edu.co/wp-json/wp/v2/profesor?page=${page}`;
    }
    const urls = [];

    for (let i = 1; i <= 13; i++) {
        const url = generateUrl(i);
        urls.push(url);
    }

    useEffect(() => {
        const fetchData = async () => {
            const results = await Promise.all(urls.map(fetchCharacters));
            setdateProfessor(results);
        }
        fetchData();
    }, [])
    const fetchCharacters = async (url) => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        return responseJSON;
    }
    return (
        <div className = "JASON__professor">
            {dataProfessor.map((result, index) => {
                return result.map((dataProfessor) => {
                    return <CardProfessor
                        key={dataProfessor.id}
                        name={dataProfessor.otros_campos.apellido_nombre}
                        image={dataProfessor.otros_campos.fotografia.url}
                    />
                })
            })}
        </div>
    )
}

export default ListProfessor;
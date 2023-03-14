import React, { useState, useEffect } from 'react'
export default function DatosJSON() {
    const [dataProfessor, setDataProfessor] = useState([]);
    const generateUrl = (page) =>
      `https://cienciassociales.uniandes.edu.co/wp-json/wp/v2/profesor?page=${page}`;
  
    const urls = [];
  
    for (let i = 1; i <= 13; i++) {
      const url = generateUrl(i);
      urls.push(url);
    }
  
    useEffect(() => {
      const fetchData = async () => {
        const results = await Promise.all(urls.map(fetchCharacters));
        setDataProfessor(results);
      };
      fetchData();
    }, []);
  
    const fetchCharacters = async (url) => {
      const response = await fetch(url);
      const responseJSON = await response.json();
      return responseJSON;
    };  
    return dataProfessor;  
  }
  
  export { DatosJSON };
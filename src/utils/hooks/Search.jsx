import React from 'react'
import { useState, useEffect } from "react";
const Search = () => {
  const [dataProfessor, setdateProfessor] = useState([]);
  const [search, setSearch] = useState("");

  const URL = "https://cienciassociales.uniandes.edu.co/wp-json/wp/v2/profesor"

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data)
  }

  showData()

  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }


  return (
    <input type="text" value={search} onChange = {searcher} />
  )
}

export default Search
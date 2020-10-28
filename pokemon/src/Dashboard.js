import Navbar from './Navbar';
import List from './List';
import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => {
        data.results.map((pokemon, i) => {
          pokemon.id = i + 1;
        });
        setList(data.results);
        setFilteredList(data.results);
      });
  }, []);

  const filteredPokemons = input => {
    const filtered = filteredList.filter(poks => poks.name.includes(input));
    setList(filtered);

    // [poks].includes(input);
  };

  return (
    <>
      {console.log(list)}
      <Navbar filtered={filteredPokemons} />
      <List list={list} />
    </>
  );
}

export default Dashboard;

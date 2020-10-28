function Pokemon(props) {
  return (
    <div>
      <h3>#{props.pokemon.id}</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${props.pokemon.id}.png`}
        alt=''
      ></img>
      <h3>{props.pokemon.name}</h3>
    </div>
  );
}

export default Pokemon;

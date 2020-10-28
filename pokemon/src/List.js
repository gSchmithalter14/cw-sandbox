import Pokemon from './Pokemon';

function List(props) {
  const pokemons = props.list.map(pokemon => (
    <Pokemon pokemon={pokemon} key={pokemon.id} />
  ));
  return (
    <>
      <div>{pokemons}</div>
    </>
  );
}

export default List;

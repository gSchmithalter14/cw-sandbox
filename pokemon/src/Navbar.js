import { useEffect, useState } from 'react';

function Navbar(props) {
  const [name, setName] = useState('');

  useEffect(() => {
    props.filtered(name);
  }, [name]);

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className='searchBar'>
      {console.log(name)}
      <input type='text' value={name} onChange={handleChange}></input>
    </div>
  );
}
export default Navbar;

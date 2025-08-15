import { useState, useEffect } from 'react';
import axios from 'axios';

function ListOfCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/characters")
      .then(res => {
        setCharacters(res.data.characters.characters); 
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <main>
      <h1>List of all characters</h1>
      <ul className='flex flex-col w-2xl m-5'>
        {characters.map(char => (
          <li key={char.id}>
            {char.id} - {char.name} {char.realName} - {char.universe}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ListOfCharacters;

import { React, useState, useEffect } from 'react';

function ListOfCharacters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/characters')
            .then(res => res.json())
            .then(data => setCharacters(data))
            .catch(err => console.error("Error : ", err));
    }, []);

    return (
        <div>
            <h1>List of all characters</h1>
            <ul>
                {characters.map(char => (
                    <li key={char.id}>
                        {char.id} - {char.name} ({char.power})
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListOfCharacters;
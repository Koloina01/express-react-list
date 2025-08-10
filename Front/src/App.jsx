import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
/**
 * pour installer express,il faut faire npm install express
 * .listen(8080) => 
 * app.get : creer une route get / donc dans la racine, req:tout ce ui est input et resp tot ce qui est output; 
 * res.send :  envoyer la reponse

const express = require("express");
const app =  express()
app.get("/", (req, res) => {
    res.send("Hello world!")
});

    Get all characters;

const express = require("express");
const app =  express();
const fs = require("fs");

app.use(express.json());

app.get('/characters', (req, res) => {
  try {
    const data = fs.readFileSync('./characters.json', 'utf8');
    const characters = JSON.parse(data);
    res.json(characters);
  } catch (err) {
    console.error('Erreur de lecture du fichier :', err.message);
    res.status(500).json({ message: 'Erreur serveur' });
  }

  const PORT = 3000;
app.listen(PORT, () => {
  console.log(` Serveur démarré sur http://localhost:${PORT}`);
});
});
*/

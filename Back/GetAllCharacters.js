const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get('/characters', (req, res) => {
  try {
    const data = fs.readFileSync('./characters.json', 'utf8'); 
    const characters = JSON.parse(data);
    res.json(characters);
  } catch (err) {
    console.error('Erreur de lecture du fichier :', err.message);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
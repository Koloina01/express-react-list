import { readData, writeData } from "../utils/file-handler.js";

const getAllCharacters = (_req, res) => {
  try {
    const characters = readData("characters.json")
    res.json(characters);
  } catch (error) {
    console.error("Error reading file", error.message);
    res.status(500).json({ message: "Server error" })
  }
}

const getCharacterById = (req, res) => {
  try {
    const id = req.params.id;
    const characters = readData("characters.json")
    const character = characters.characters.find(c => c.id === id);

    if (!character) {
      return res.status(404).json({ error: "Character not found" })
    }

    res.json(character)
  } catch (error) {
    console.error("Error reading file", error.message);
    res.status(500).json({ message: "Server error" })
  }
}

const createCharacter = (req, res) => {
  try {
    const { name, realName, universe } = req.body;

    if (!name || !realName || !universe) {
      res.status(400).json({ error: "All fields are required" })
    }

    const data = readData("characters.json");
    const newId = data.characters.length ? Math.max(...data.characters.map(c => c.id + 1)) : 1
    const newCharacter = {
      id: newId,
      name,
      realName,
      universe
    };

    data.characters.push(newCharacter);

    writeData("characters.json", data);

    res.status(201).json(newCharacter);
  } catch (error) {
    console.error("Error writing file", error.message);
    res.status(500).json({ message: "Server error" })
  }
}

const updateCharacter = (req, res) => {
  try {
    const id = parseInt(req.params.id, 10)
    const { name, realName, universe } = req.body;

    if (!name || !realName || !universe) {
      res.status(400).json({ error: "All fields are required" })
    }

    const data = readData("characters.json");
    const characterIndex = data.characters.findIndex(c => c.id === id);

    data.characters[characterIndex] = { id, name, realName, universe };

    writeData('characters.json', data);

    res.json(data.characters[characterIndex])
  } catch (error) {
    console.error("Error updating file", error.message);
    res.status(500).json({ message: "Server error" })
  }
}

const deleteCharacter = (req, res) => {
  try {
    const id = parseInt(req.params.id, 10)
    const data = readData("characters.json")

    const characterIndex = data.characters.findIndex(c => c.id === id);
    const deletedCharacter = data.characters.splice(characterIndex, 1)[0];

    writeData("characters.json", data)

    res.json({
      message: "Character deleted successfully",
      deleted: deletedCharacter
    })
  } catch (error) {
    console.error("Error deleting file", error.message);
    res.status(500).json({ message: "Server error" })
  }
}

export { getAllCharacters, getCharacterById, createCharacter, updateCharacter, deleteCharacter }

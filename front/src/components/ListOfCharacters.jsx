import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import AddButton from "./Button";
import AddForm from "./Forms";
import EditForm from "./EditForms";

function ListOfCharacters() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [newChar, setNewChar] = useState({ name: "", realName: "", universe: "" });

  const [showEditForm, setShowEditForm] = useState(false);
  const [editChar, setEditChar] = useState({ id: null, name: "", realName: "", universe: "" });

  const fetchCharacters = async () => {
    try {
      const res = await axios.get("http://localhost:3000/character");
      setCharacters(res.data.characters || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const filteredCharacters = characters.filter((char) => {
    const lowerSearch = search.toLowerCase();
    return (
      char.name.toLowerCase().includes(lowerSearch) ||
      char.realName.toLowerCase().includes(lowerSearch) ||
      String(char.id) === search
    );
  });

  /**Add character */
  const handleAddClick = () => setShowForm(true);
  const handleChange = (e) => setNewChar({ ...newChar, [e.target.name]: e.target.value });
  const handleFinish = async () => {
    try {
      const res = await axios.post("http://localhost:3000/character", newChar);
      setCharacters([...characters, res.data]);
      setNewChar({ name: "", realName: "", universe: "" });
      setShowForm(false);
    } catch (err) {
      console.error(err);
    }
  };

  /*Delete character*/
  const handleDelete = async (id) => {
    const confirmed = window.confirm("Voulez-vous vraiment supprimer ce character ?");
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:3000/character/${id}`);
      setCharacters(characters.filter(c => c.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  /*Edit character*/
  const handleEditClick = (char) => {
    setEditChar(char);
    setShowEditForm(true);
  };
  const handleEditChange = (e) => setEditChar({ ...editChar, [e.target.name]: e.target.value });
  const handleReplace = async () => {
    try {
      const res = await axios.put(`http://localhost:3000/character/${editChar.id}`, editChar);
      setCharacters(characters.map(c => c.id === editChar.id ? res.data : c));
      setShowEditForm(false);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-bold mb-6 text-center">List of all characters</h1>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
        />
        <AddButton onClick={handleAddClick} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((char) => (
            <Card
              key={char.id}
              title={char.name}
              onEdit={() => handleEditClick(char)}
              onDelete={() => handleDelete(char.id)}
            >
              <p><strong>Real Name:</strong> {char.realName}</p>
              <p><strong>Universe:</strong> {char.universe}</p>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">Character not found</p>
        )}
      </div>

      <AddForm
        show={showForm}
        onClose={() => setShowForm(false)}
        onFinish={handleFinish}
        newChar={newChar}
        handleChange={handleChange}
      />

      <EditForm
        show={showEditForm}
        onClose={() => setShowEditForm(false)}
        onReplace={handleReplace}
        editChar={editChar}
        handleChange={handleEditChange}
      />
    </main>
  );
}

export default ListOfCharacters;
import React from "react";

function EditForm({ show, onClose, onReplace, editChar, handleChange }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Update character</h2>

        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={editChar.name}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="text"
          name="realName"
          placeholder="Real Name"
          value={editChar.realName}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="text"
          name="universe"
          placeholder="Universe"
          value={editChar.universe}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onReplace}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Replace
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditForm;

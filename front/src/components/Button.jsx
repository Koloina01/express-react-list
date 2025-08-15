import React from "react";

function AddButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="ml-2 px-10 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 border "
    >
      Add
    </button>
  );
}

export default AddButton;
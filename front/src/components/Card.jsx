import React from "react";
import { Trash2, Edit2 } from "lucide-react";

function Card({ title, children, onEdit, onDelete }) {
  return (
    <div className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow relative bg-gray-200">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="flex space-x-2">
          <button onClick={onEdit}>
            <Edit2 className="w-5 h-5 text-blue-500 hover:text-blue-700" />
          </button>
          <button onClick={onDelete}>
            <Trash2 className="w-5 h-5 text-red-500 hover:text-red-700" />
          </button>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Card;


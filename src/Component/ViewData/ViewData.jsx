import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

const ViewData = ({ handleEdit, setStorage, Storage }) => {
  
  const handleRemove = (id) => {
    const removeData = Storage.filter(item => item.id !== id);
    setStorage(removeData);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Student Records</h2>
      <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
        <thead>
          <tr className="bg-blue-600 text-white uppercase text-sm leading-normal">
            <th className="px-4 py-3 border-b border-gray-300 text-left">#</th>
            <th className="px-4 py-3 border-b border-gray-300 text-left">Name</th>
            <th className="px-4 py-3 border-b border-gray-300 text-left">Email</th>
            <th className="px-4 py-3 border-b border-gray-300 text-left">Course</th>
            <th className="px-4 py-3 border-b border-gray-300 text-left">Message</th>
            <th className="px-4 py-3 border-b border-gray-300 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {Storage.map((rec, index) => (
            <tr key={index} className="hover:bg-gray-100 text-gray-700 text-sm">
              <td className="border px-4 py-3 text-center">{index + 1}</td>
              <td className="border px-4 py-3 text-center">{rec.name}</td>
              <td className="border px-4 py-3 text-center">{rec.email}</td>
              <td className="border px-4 py-3 text-center">{rec.course}</td>
              <td className="border px-4 py-3 text-center">{rec.message}</td>
              <td className="border px-4 py-3 text-center">
                <button
                  className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition duration-200 ease-in-out flex items-center justify-center"
                  onClick={() => handleEdit(rec.id)}
                >
                  <PencilIcon className="w-5 h-5 inline-block mr-1" />
                  Edit
                </button>

                <button
                  className="bg-red-600 text-white px-3 py-2 mx-2 rounded hover:bg-red-700 transition duration-200 ease-in-out flex items-center justify-center"
                  onClick={() => handleRemove(rec.id)}
                >
                  <TrashIcon className="w-5 h-5 inline-block mr-1" />
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewData;

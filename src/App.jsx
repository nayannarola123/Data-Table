


import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Form from './Component/Form/Form';
import Home from './Component/Home/Home';
import getdata from './Component/js/main';
import Header from './Component/Header/Header';
import Update from './Component/Update/Update';
import DataTable from './Component/DataTable/DataTable';

function App() {
  const navigate = useNavigate();

  const [FormInput, setFormInput] = useState({
    name: '',
    email: '',
    course: '',
    message: '',
  });

  const [Storage, setStorage] = useState(getdata());

  const [editData, setEditData] = useState(null);

  const handleForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormInput({
      ...FormInput,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormInput = { ...FormInput, id: uuidv4() };
    setStorage([...Storage, newFormInput]);

    navigate('/datatable');

    setFormInput({
      name: '',
      email: '',
      course: '',
      message: '',
    });
  };
  //update part
  const handleEdit = (id) => {
    const recordToEdit = Storage.find((item) => item.id === id);
    setEditData(recordToEdit);
    navigate('/update');
  };

  const handleUpdate = (rec) => {
    const updatedStorage = Storage.map((item) =>
      item.id === rec.id ? rec : item
    );

    setStorage(updatedStorage);
    navigate('/datatable');
  }

  // Updata end 

  useEffect(() => {
    localStorage.setItem('Storage', JSON.stringify(Storage));
  }, [Storage]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Form handleForm={handleForm} handleSubmit={handleSubmit} />} />
        <Route path="/update" element={<Update editData={editData} handleUpdate={handleUpdate} />} />
        <Route path="/datatable" element={<DataTable Storage={Storage} handleEdit={handleEdit} setStorage={setStorage} />} />
        <Route path="*" element={<h1 className="text-center p-3">404 page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;

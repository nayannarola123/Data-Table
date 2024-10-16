import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';

import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

const DataTable = ({ Storage, handleEdit, setStorage }) => {
    const handleRemove = (id) => {
        const removeData = Storage.filter(item => item.id !== id);
        setStorage(removeData);
    };

    return (
        <div className="container mx-auto mt-8">
            <TableContainer component={Paper} className="rounded-xl shadow-lg">
                <Table stickyHeader>
                    <TableHead>
                        <TableRow className="bg-blue-600">
                            <TableCell className="text-white font-semibold">#</TableCell>
                            <TableCell className="text-white font-semibold">Name</TableCell>
                            <TableCell className="text-white font-semibold">Email</TableCell>
                            <TableCell className="text-white font-semibold">Course</TableCell>
                            <TableCell className="text-white font-semibold">Message</TableCell>
                            <TableCell className="text-white font-semibold text-center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Storage.map((rec, index) => (
                            <TableRow key={index} className="hover:bg-gray-100 transition duration-200 ease-in-out">
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{rec.name}</TableCell>
                                <TableCell>{rec.email}</TableCell>
                                <TableCell>{rec.course}</TableCell>
                                <TableCell>{rec.message}</TableCell>
                                <TableCell className="text-center">
                                    <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-700 focus:outline-none transition duration-150 mx-1"
                                        onClick={() => handleEdit(rec.id)}
                                    >
                                        <PencilIcon className="w-5 h-5 inline-block" />
                                    </button>

                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-700 focus:outline-none transition duration-150 mx-1"
                                        onClick={() => handleRemove(rec.id)}
                                    >
                                        <TrashIcon className="w-5 h-5 inline-block" />
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DataTable;

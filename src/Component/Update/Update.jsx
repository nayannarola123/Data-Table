import React, { useState, useEffect } from 'react';

const Update = ({ editData, handleUpdate }) => {
    const [updataData, setUpdataData] = useState({
        name: '',
        email: '',
        course: '',
        message: ''
    });

    useEffect(() => {
        setUpdataData(editData);
    }, [editData]);

    const handleForm = (e) => {
        const { name, value } = e.target;
        setUpdataData({
            ...updataData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdate(updataData);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 via-blue-300 to-green-300">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8 space-y-8">
                <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-6">Update Student Details</h2>

                <form className="space-y-6" onSubmit={handleSubmit}>

                    {/* Name Field */}
                    <div className="space-y-1">
                        <label className="block text-md font-semibold text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={updataData.name}
                            className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                            placeholder="Enter Full Name"
                            onChange={handleForm}
                        />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1">
                        <label className="block text-md font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={updataData.email}
                            className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                            placeholder="Enter Email Address"
                            onChange={handleForm}
                        />
                    </div>

                    {/* Course Field */}
                    <div className="space-y-1">
                        <label className="block text-md font-semibold text-gray-700">Course</label>
                        <input
                            type="text"
                            name="course"
                            value={updataData.course}
                            className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                            placeholder="Enter Course Name"
                            onChange={handleForm}
                        />
                    </div>

                    {/* Additional Information Field */}
                    <div className="space-y-1">
                        <label className="block text-md font-semibold text-gray-700">Additional Information</label>
                        <textarea
                            name="message"
                            value={updataData.message}
                            className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
                            rows="4"
                            placeholder="Provide Additional Information"
                            onChange={handleForm}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold text-lg rounded-full shadow-lg hover:from-green-600 hover:to-blue-600 focus:ring-4 focus:ring-green-500 focus:outline-none transition duration-300"
                        >
                            Update Record
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;

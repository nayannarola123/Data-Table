import React from 'react';

const StudentRegistrationForm = ({ handleForm, handleSubmit }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
            <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-10 my-10">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Register Now</h2>
                
                <form className="space-y-8" onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Full Name</label>
                        <input
                            type="text"
                            name='name'
                            className="mt-2 w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500 transition duration-150 ease-in-out"
                            placeholder="Enter your full name"
                            onChange={handleForm} 
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            className="mt-2 w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500 transition duration-150 ease-in-out"
                            placeholder="Enter your email"
                            onChange={handleForm} 
                        />
                    </div>

                    {/* Course Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Course</label>
                        <input
                            type="text"
                            name="course"
                            className="mt-2 w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500 transition duration-150 ease-in-out"
                            placeholder="Enter your course name"
                            onChange={handleForm} 
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Additional Information</label>
                        <textarea
                            name="message"
                            className="mt-2 w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-gray-500 focus:border-gray-500 transition duration-150 ease-in-out"
                            rows="4"
                            placeholder="Tell us more about your needs or expectations"
                            onChange={handleForm} 
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 focus:ring-4 focus:ring-gray-500 transition duration-300 ease-in-out"
                        >
                            Submit Registration
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default StudentRegistrationForm;

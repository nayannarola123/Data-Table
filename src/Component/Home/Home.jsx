import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='min-h-screen flex justify-center items-center bg-gray-100'>
            <div className='py-5'>
                <Link
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-green-500 hover:to-blue-600 transition duration-300 transform hover:scale-105"
                    to="/student"
                >
                    Add New Record
                </Link>
            </div>
        </div>
    );
}

export default Home;

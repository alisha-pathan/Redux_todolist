import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteuser } from './reducer';

function Home() {
    const [user] = useSelector(state => state.userdata);
    const dispatch = useDispatch();

    const handledel = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            dispatch(deleteuser({ id }));
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        User Dashboard
                    </h1>
                    <Link
                        to="/add"
                        className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-xl transition-all duration-300 flex items-center shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Add New User
                    </Link>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <table className="min-w-full divide-y divide-gray-100">
                        <thead className="bg-gradient-to-r from-purple-50 to-blue-50">
                            <tr>
                                <th className="px-8 py-4 text-left text-sm font-semibold text-purple-700 uppercase tracking-wider">ID</th>
                                <th className="px-8 py-4 text-left text-sm font-semibold text-purple-700 uppercase tracking-wider">Name</th>
                                <th className="px-8 py-4 text-left text-sm font-semibold text-purple-700 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-100">
                            {user && user.map((val) => (
                                <tr key={val.id} className="hover:bg-purple-50 transition duration-200">
                                    <td className="px-8 py-5 whitespace-nowrap text-lg font-medium text-gray-900">#{val.id}</td>
                                    <td className="px-8 py-5 whitespace-nowrap">
                                        <span className="text-lg font-semibold text-gray-800">{val.name}</span>
                                    </td>
                                    <td className="px-8 py-5 whitespace-nowrap">
                                        <div className="flex space-x-4">
                                            <Link
                                                to={"/edit/" + val.id}
                                                className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                </svg>
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handledel(val.id)}
                                                className="flex items-center text-red-500 hover:text-red-700 transition-colors duration-200"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {user && user.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-medium text-gray-500">No users found</h3>
                            <p className="text-gray-400 mt-1">Add a new user to get started</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home;
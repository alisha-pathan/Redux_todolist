import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adduser } from './reducer';

function Add() {
    const [name, setname] = useState("");
    const dispatch = useDispatch();
    const navi = useNavigate();

    const handlesub = (e) => {
        e.preventDefault();
        dispatch(adduser({ name }));
        navi("/");
    }
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border border-gray-100">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                        Add New User
                    </h2>
                    <p className="text-gray-500 mt-2">Fill in the details below</p>
                </div>
                <form onSubmit={handlesub}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                            placeholder="John Doe"
                            required
                            autoFocus
                        />
                    </div>
                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={() => navi("/")}
                            className="px-6 py-2 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow hover:shadow-md"
                        >
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Add;
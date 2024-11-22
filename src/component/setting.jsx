


import React, { useState } from "react";
import male from '../assets/gender/male.png';
import female from '../assets/gender/female.png';

function Setting({ user, setUser }) {
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [editUser, setEditUser] = useState({ ...user });

  const handleSaveChanges = () => {
    setUser({ ...editUser });
    setIsEditPopupOpen(false);
  };

  return (
    <div className="h-screen bg-gray-50 flex items-center justify-center p-6 sm:p-8 md:p-10">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-lg md:max-w-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
          Settings
        </h2>
        <div className="flex flex-col items-center">
          <img
            src={user.gender === "Male" ? male : female}
            alt="User"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-primary mb-4"
          />
          <div className="w-full">
            <div className="mb-4">
              <h3 className="font-semibold text-lg text-gray-700">Name:</h3>
              <p className="text-gray-600">{user.name}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-lg text-gray-700">Phone:</h3>
              <p className="text-gray-600">{user.phone}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-lg text-gray-700">Gender:</h3>
              <p className="text-gray-600">{user.gender}</p>
            </div>
          </div>
          <button
            onClick={() => setIsEditPopupOpen(true)}
            className="mt-4 bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-accent hover:text-button transition duration-200"
          >
            Edit Details
          </button>
        </div>
      </div>

      {isEditPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-xl w-11/12 sm:w-3/4 md:w-1/2">
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">
              Edit Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-gray-700">
                  Name:
                </label>
                <input
                  type="text"
                  value={editUser.name}
                  onChange={(e) =>
                    setEditUser({ ...editUser, name: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700">
                  Phone:
                </label>
                <input
                  type="text"
                  value={editUser.phone}
                  onChange={(e) =>
                    setEditUser({ ...editUser, phone: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700">
                  Gender:
                </label>
                <select
                  value={editUser.gender}
                  onChange={(e) =>
                    setEditUser({ ...editUser, gender: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={handleSaveChanges}
                className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-accent hover:text-button transition duration-200"
              >
                Save Changes
              </button>
              <button
                onClick={() => setIsEditPopupOpen(false)}
                className="bg-slate-400 text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-500 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Setting;

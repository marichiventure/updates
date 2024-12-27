import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserPage = () => {
  const [coursesView, setCoursesView] = useState(false);
  const [paymentHistory, setPaymentHistory] = useState(false);
  const [editButton, setEditButton] = useState(false);
  const { user } = useAuth0();
  const persistedUser = user;

  return (
    <>
      <div className="flex flex-col gap-12 items-start min-h-screen bg-gray-200 px-6 md:px-44">
        {/* Profile Section */}
        <div className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 rounded-3xl shadow-lg w-full flex flex-col md:flex-row md:items-center justify-between p-8 space-y-6 md:space-y-0 md:space-x-8 transform hover:scale-105 transition duration-300 ease-in-out mt-8">
          {/* Profile Picture and Name */}
          <div className="flex flex-row items-center space-x-6 w-full md:w-auto">
            <div className="w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-gray-100 shadow-md transform hover:scale-110 transition duration-300 ease-in-out">
              <img
                src={persistedUser?.picture}
                alt="User Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-700 tracking-wide">
                {persistedUser?.name}
              </h1>
              <p className="text-gray-500">{persistedUser?.email}</p>
            </div>
          </div>

          {/* Edit Profile Button */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <button
              className="bg-gray-100 text-gray-700 font-semibold px-10 py-3 rounded-full shadow-md hover:bg-gray-700 hover:text-gray-100 transition duration-300 transform hover:scale-105"
              onClick={() => setEditButton(true)}
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full flex flex-row gap-6 items-stretch mb-10">
          {/* Left Menu */}
          <div className="flex flex-col w-full md:w-[30%] bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-gray-100 rounded-xl shadow-lg p-6 space-y-6">
            {/* Courses Section */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="border-b-2 border-gray-600 w-full pb-2">
                <h1 className="text-2xl font-semibold text-gray-300 tracking-wide">
                  Learning
                </h1>
              </div>
              <div
                className="w-full rounded-lg p-2 transition transform hover:scale-105 hover:bg-gradient-to-r from-gray-600 to-gray-800 shadow-md duration-300 ease-in-out cursor-pointer"
                onClick={() => {
                  setCoursesView(true);
                  setPaymentHistory(false);
                }}
              >
                <p className="text-lg font-medium text-gray-200">My Courses</p>
              </div>
            </div>

            {/* Payments Section */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="border-b-2 border-gray-600 w-full pb-2">
                <h1 className="text-2xl font-semibold text-gray-300 tracking-wide">
                  Payments
                </h1>
              </div>
              <div
                className="w-full rounded-lg p-2 transition transform hover:scale-105 hover:bg-gradient-to-r from-gray-600 to-gray-800 shadow-md duration-300 ease-in-out cursor-pointer"
                onClick={() => {
                  setPaymentHistory(true);
                  setCoursesView(false);
                }}
              >
                <p className="text-lg font-medium text-gray-200">Payment History</p>
              </div>
            </div>
          </div>

          {/* Courses View */}
          {coursesView && (
            <div className="flex-grow p-6 bg-gray-100 rounded-xl shadow-lg w-full">
              <h1 className="text-3xl font-semibold text-gray-700 mb-6">
                My Courses
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Course Card */}
                <div className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Web Development Bootcamp
                  </h2>
                  <p className="text-gray-600 mb-2">Progress: 60%</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <div className="flex mt-4 space-x-4 text-sm">
                    <button className="text-blue-500 font-medium">Continue</button>
                    <span className="text-gray-400">|</span>
                    <button className="text-gray-500">View Certificate</button>
                  </div>
                </div>

                {/* Add more course cards as needed */}
              </div>
            </div>
          )}

          {/* Payment History View */}
          {paymentHistory && (
            <div className="flex-grow p-6 bg-gray-100 rounded-xl shadow-lg w-full">
              <h1 className="text-3xl font-semibold text-gray-700 mb-6">
                Payment History
              </h1>

              <div className="space-y-4">
                {/* Payment Card */}
                <div className="bg-white border rounded-lg p-6 shadow-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">Web Development Bootcamp</h2>
                      <p className="text-gray-600">Transaction ID: WD-2024-001</p>
                      <p className="text-gray-500">March 15, 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-800">$499</p>
                      <span className="text-green-500">Completed</span>
                    </div>
                  </div>
                </div>

                {/* Add more payment history cards as needed */}
              </div>
            </div>
          )}

          {/* Edit Profile Modal */}
          {editButton && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Edit Profile
                </h2>
                <div className="mb-4">
                  <label className="block text-gray-600">Name:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    defaultValue={persistedUser?.name}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600">Email:</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    defaultValue={persistedUser?.email}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600">Phone number:</label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600">Profile Picture:</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex justify-end gap-4">
                  <button
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                    onClick={() => setEditButton(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    onClick={() => setEditButton(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserPage;

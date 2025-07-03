import React, { useState } from "react";

const StudentLogin = () => {
  // State to store form data
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  // Handle login button click
  const handleLogin = () => {
    // Check if both fields are filled
    if (!studentId || !password) {
      alert("Please fill in both fields");
      return;
    }

    // Here you would typically send the login data to your server
    console.log("Login attempt:", { studentId, password });
    alert("Login functionality would be implemented here");
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-100 min-h-screen">
      {/* Student Portal Section */}
      <section className="py-12 md:py-20">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold text-blue-600 md:text-4xl">
              Student Portal
            </h1>
            <p className="max-w-3xl mx-auto text-gray-600">
              Access your academic records, assignments, learning resources, and
              school activities all in one place.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Login Card */}
            <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md md:w-full">
              <h2 className="mb-6 text-2xl font-bold text-center">
                <i className="mr-2 text-blue-500 fas fa-sign-in-alt"></i>
                Student Login
              </h2>

              <div>
                <div className="mb-4">
                  <label
                    htmlFor="studentId"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Student ID / Admission Number
                  </label>
                  <input
                    type="text"
                    id="studentId"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your Student ID"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="studentPassword"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="studentPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                  />
                  <div className="mt-1 text-right">
                    <a
                      href="#"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleLogin}
                  className="w-full px-4 py-2 font-medium text-white transition bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  Login
                </button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  First time logging in?{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Get your credentials
                  </a>
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="p-8 rounded-lg bg-blue-50">
              <h2 className="mb-6 text-2xl font-bold">Portal Features</h2>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 mt-1 mr-4 text-white bg-blue-500 rounded-full shrink-0">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Academic Progress</h3>
                    <p className="text-gray-600">
                      View your grades, exam results, and track your performance
                      over time.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 mt-1 mr-4 text-white bg-blue-500 rounded-full shrink-0">
                    <i className="fas fa-tasks"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Assignments & Homework</h3>
                    <p className="text-gray-600">
                      Access your assignments, submit completed work, and get
                      feedback from teachers.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 mt-1 mr-4 text-white bg-blue-500 rounded-full shrink-0">
                    <i className="fas fa-book-open"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Learning Resources</h3>
                    <p className="text-gray-600">
                      Download study materials, access digital textbooks, and
                      view lesson notes.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 mt-1 mr-4 text-white bg-blue-500 rounded-full shrink-0">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">School Calendar</h3>
                    <p className="text-gray-600">
                      Stay updated with exam schedules, school events, and
                      important dates.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLogin;

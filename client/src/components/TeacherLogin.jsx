import React, { useState } from "react";

const TeacherLogin = () => {
  // State to store form data
  const [teacherId, setTeacherId] = useState("");
  const [password, setPassword] = useState("");

  // Handle login button click
  const handleLogin = () => {
    // Check if both fields are filled
    if (!teacherId || !password) {
      alert("Please fill in both fields");
      return;
    }

    // Here you would typically send the login data to your server
    console.log("Teacher login attempt:", { teacherId, password });
    alert("Login functionality would be implemented here");
  };

  return (
    <div className="font-sans text-gray-900 bg-gray-100">
      {/* Teachers Portal Section */}
      <section className="py-12 md:py-20">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-3xl font-bold text-blue-600 md:text-4xl">
              Teachers Portal
            </h1>
            <p className="max-w-3xl mx-auto text-gray-600">
              Access your class records, student information, teaching
              resources, and school communications all in one place.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Login Card */}
            <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md md:w-full">
              <h2 className="mb-6 text-2xl font-bold text-center">
                <i className="mr-2 text-blue-500 fas fa-sign-in-alt"></i>
                Teacher Login
              </h2>

              <div>
                <div className="mb-4">
                  <label
                    htmlFor="teacherId"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Teacher ID
                  </label>
                  <input
                    type="text"
                    id="teacherId"
                    value={teacherId}
                    onChange={(e) => setTeacherId(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your Teacher ID"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="teacherPassword"
                    className="block mb-2 font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="teacherPassword"
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
                  New teacher?{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Contact administration
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
                    <i className="fa-solid fa-table"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Class Management</h3>
                    <p className="text-gray-600">
                      Record and track student attendance, manage grades, and
                      create class reports.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 mt-1 mr-4 text-white bg-blue-500 rounded-full shrink-0">
                    <i className="fa-solid fa-clipboard-check"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Assessment Tools</h3>
                    <p className="text-gray-600">
                      Create, assign and grade assessments, track student
                      progress over time.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 mt-1 mr-4 text-white bg-blue-500 rounded-full shrink-0">
                    <i className="fa-solid fa-chalkboard-user"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Learning Resources</h3>
                    <p className="text-gray-600">
                      Access curriculum materials, lesson plan templates, and
                      teaching resources.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 mt-1 mr-4 text-white bg-blue-500 rounded-full shrink-0">
                    <i className="fas fa-comments"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold">Communication</h3>
                    <p className="text-gray-600">
                      Message parents directly, communicate with colleagues, and
                      access school announcements.
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

export default TeacherLogin;

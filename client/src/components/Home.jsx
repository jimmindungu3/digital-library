import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center mb-6">
            <img
              src="https://kimangu.vercel.app/assets/images/logo.png"
              alt="School Logo"
              className="w-12 h-12 mr-3"
            />
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Welcome to Kimangu School Portal
            </h1>
          </div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Learning made digital. Learning made easy.
          </p>
        </header>

        {/* Dashboard Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Student Dashboard */}
          <div className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-blue-300">
            <div className="p-6 sm:p-8">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-white bg-blue-500 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Student Dashboard
                </h2>
              </div>
              <p className="mb-6 text-gray-600">
                Access your courses, grades, assignments, and learning materials
              </p>
              <Link
                to="/student-dashboard"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Go to Student Dashboard
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Teacher Dashboard */}
          <div className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-blue-300">
            <div className="p-6 sm:p-8">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-white bg-blue-500 rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Teacher Dashboard
                </h2>
              </div>
              <p className="mb-6 text-gray-600">
                Manage your classes, students, grades, and teaching materials
              </p>
              <Link
                to="/teacher-dashboard"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Go to Teacher Dashboard
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            Need help? Contact the school administration at admin@kimangu.edu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

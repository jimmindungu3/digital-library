import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="mb-10 bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 py-3 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://kimangu.vercel.app/assets/images/logo.png"
              alt="logo"
              className="w-8 h-8"
            />
            <h1 className="text-lg font-semibold text-gray-800">
              KIMANGU DAY SECONDARY
            </h1>
            <span className="text-gray-400">|</span>
            <span className="text-sm text-gray-600">Digital Library</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
                <FaUser className="w-5 h-5" />
                <span className="hidden sm:inline">Account</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute right-0 z-10 hidden w-48 py-1 bg-white rounded-md shadow-lg group-hover:block">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Log out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { useState } from "react";
import {
  FaSearch,
  FaFileWord,
  FaFilePowerpoint,
  FaFilePdf,
  FaFileVideo,
  FaFileImage,
  FaUser,
  FaDownload,
  FaUpload,
  FaEye,
  FaClock,
  FaStar,
  FaPlay,
} from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

const StudentDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-gray-100">
      <div className="min-h-screen p-4 mx-auto bg-white max-w-7xl">
        {/* Top Bar - Adjusted for mobile */}
        <div className="mb-6 sm:mb-10 bg-white border-b border-gray-200 shadow-sm">
          <div className="px-2 sm:px-4 py-3 mx-auto max-w-7xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <img
                  src="https://kimangu.vercel.app/assets/images/logo.png"
                  alt="logo"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <h1 className="text-sm sm:text-lg font-semibold text-gray-800">
                  KIMANGU DAY SECONDARY
                </h1>
                <span className="hidden sm:inline text-gray-400">|</span>
                <span className="hidden sm:inline text-sm text-gray-600">
                  Digital Library
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
                    <FaUser className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">Account</span>
                    <svg
                      className="hidden sm:block w-4 h-4"
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

        {/* Header - Adjusted text sizes */}
        <header className="mb-6 sm:mb-8">
          <div className="grid grid-cols-[auto_1fr] gap-3 sm:gap-4 items-start">
            <div className="text-2xl sm:text-3xl">📚</div>
            <div>
              <h1 className="mb-1 sm:mb-2 text-xl sm:text-3xl font-bold text-gray-800">
                Digital Learning Materials
              </h1>
              <p className="text-xs sm:text-base text-gray-600">
                Access study materials, notes, quizzes, and past papers
              </p>
            </div>
          </div>
        </header>

        {/* Search Bar - Full width on mobile */}
        <div className="mb-6 sm:mb-8">
          <div className="relative w-full sm:max-w-md">
            <FaSearch className="absolute w-3 h-3 sm:w-4 sm:h-4 text-gray-400 left-3 top-3" />
            <input
              type="text"
              placeholder="Search materials..."
              className="w-full py-2 pl-8 sm:pl-10 pr-4 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Stats Cards - Stack on mobile */}
        <div className="grid grid-cols-1 gap-3 mb-6 sm:grid-cols-2 sm:gap-4 md:grid-cols-4 md:gap-6 md:mb-8">
          <div className="p-4 sm:p-6 border border-blue-200 rounded-lg bg-blue-50">
            <div className="flex items-center">
              <IoLibrary className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm text-gray-600">
                  Total Materials
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  1,847
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 border border-green-200 rounded-lg bg-green-50">
            <div className="flex items-center">
              <FaUpload className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm text-gray-600">
                  New This Week
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  23
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-6 border border-blue-200 rounded-lg bg-blue-50">
            <div className="flex items-center">
              <FaDownload className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm text-gray-600">
                  Downloads This Week
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-800">
                  89
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid - Stack on mobile */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
          {/* Recent Materials */}
          <div className="p-4 sm:p-6 bg-white border border-gray-200 rounded-lg">
            <h2 className="flex items-center mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">
              <FaClock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-600" />
              Recently Added
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  id: 1,
                  title: "Introduction to Calculus",
                  type: "PDF",
                  subject: "Mathematics",
                  teacher: "Mr. Mwangi",
                  uploadDate: "2 days ago",
                },
                {
                  id: 2,
                  title: "Chemical Bonding Explained",
                  type: "Video",
                  subject: "Chemistry",
                  teacher: "Ms. Achieng",
                  uploadDate: "1 day ago",
                },
                {
                  id: 3,
                  title: "Business Finance Basics",
                  type: "PPT",
                  subject: "Business Studies",
                  teacher: "Mr. Otieno",
                  uploadDate: "3 days ago",
                },
                {
                  id: 4,
                  title: "English Literature Notes",
                  type: "Word",
                  subject: "English",
                  teacher: "Mrs. Kamau",
                  uploadDate: "4 days ago",
                },
              ].map((material) => {
                let icon, color;
                switch (material.type) {
                  case "PDF":
                    icon = <FaFilePdf className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />;
                    color = "bg-red-500";
                    break;
                  case "Video":
                    icon = (
                      <FaFileVideo className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    );
                    color = "bg-purple-500";
                    break;
                  case "PPT":
                    icon = (
                      <FaFilePowerpoint className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    );
                    color = "bg-orange-500";
                    break;
                  case "Word":
                    icon = (
                      <FaFileWord className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    );
                    color = "bg-blue-500";
                    break;
                  case "Image":
                    icon = (
                      <FaFileImage className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    );
                    color = "bg-green-500";
                    break;
                  default:
                    icon = (
                      <FaFileWord className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    );
                    color = "bg-gray-500";
                }

                return (
                  <div
                    key={material.id}
                    className="p-3 sm:p-4 rounded-lg bg-gray-50"
                  >
                    <div className="flex items-start justify-between mb-1 sm:mb-2">
                      <h3 className="text-sm sm:text-base font-medium text-gray-800">
                        {material.title}
                      </h3>
                      <span
                        className={`flex items-center px-2 py-1 text-xs text-white rounded-md ${color}`}
                      >
                        {icon}
                        {material.type}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      <p>Subject: {material.subject}</p>
                      <p>Teacher: {material.teacher}</p>
                      <div className="flex justify-between">
                        <p>Uploaded: {material.uploadDate}</p>
                      </div>
                    </div>
                    <div className="flex mt-2 sm:mt-3 space-x-2">
                      {material.type !== "Video" &&
                      material.type !== "Image" ? (
                        <button className="flex items-center px-2 py-1 text-xs sm:text-sm text-white bg-blue-600 rounded hover:bg-blue-500">
                          <FaEye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          View
                        </button>
                      ) : null}
                      <button className="flex items-center px-2 py-1 text-xs sm:text-sm text-white bg-green-600 rounded hover:bg-green-500">
                        {material.type === "Video" ? (
                          <>
                            <FaPlay className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            Play
                          </>
                        ) : (
                          <>
                            <FaDownload className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            Download
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Popular Downloads */}
          <div className="p-4 sm:p-6 bg-white border border-gray-200 rounded-lg">
            <h2 className="flex items-center mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">
              <FaStar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-500" />
              Most Viewed
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  id: 1,
                  title: "Advanced Algebra Notes",
                  type: "PDF",
                  subject: "Mathematics",
                  teacher: "Mr. Mwangi",
                  downloads: 245,
                },
                {
                  id: 2,
                  title: "Organic Chemistry Lecture",
                  type: "Video",
                  subject: "Chemistry",
                  teacher: "Ms. Achieng",
                  downloads: 189,
                },
                {
                  id: 3,
                  title: "Financial Accounting Slides",
                  type: "PPT",
                  subject: "Business Studies",
                  teacher: "Mr. Otieno",
                  downloads: 132,
                },
              ].map((item) => {
                let icon, color;
                switch (item.type) {
                  case "PDF":
                    icon = <FaFilePdf className="w-3 h-3 sm:w-4 sm:h-4" />;
                    color = "bg-red-500";
                    break;
                  case "Video":
                    icon = <FaFileVideo className="w-3 h-3 sm:w-4 sm:h-4" />;
                    color = "bg-purple-500";
                    break;
                  case "PPT":
                    icon = (
                      <FaFilePowerpoint className="w-3 h-3 sm:w-4 sm:h-4" />
                    );
                    color = "bg-orange-500";
                    break;
                  case "Word":
                    icon = <FaFileWord className="w-3 h-3 sm:w-4 sm:h-4" />;
                    color = "bg-blue-500";
                    break;
                  default:
                    icon = <FaFileWord className="w-3 h-3 sm:w-4 sm:h-4" />;
                    color = "bg-gray-500";
                }

                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-2 sm:p-3 rounded-lg bg-gray-50"
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <span
                        className={`flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-md ${color} text-white`}
                      >
                        {icon}
                      </span>
                      <div>
                        <h3 className="text-sm sm:text-base font-medium text-gray-800">
                          {item.title}
                        </h3>
                        <div className="flex space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-600">
                          <p>{item.subject}</p>
                          <span className="text-gray-400">|</span>
                          <p className="flex items-center">
                            <FaUser className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                            {item.teacher}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-base sm:text-lg font-bold text-blue-600">
                        {item.downloads}
                      </p>
                      <p className="text-xs text-gray-500">Views</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Subject Categories - Adjusted grid for mobile */}
        <div className="mt-6 sm:mt-8">
          <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">
            Browse by Subject
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
            {[
              {
                name: "English & Literature",
                icon: "📖",
                color: "text-blue-600",
              },
              {
                name: "Kiswahili",
                icon: "🗣️",
                color: "text-green-600",
              },
              {
                name: "Mathematics",
                icon: "🔢",
                color: "text-purple-600",
              },
              {
                name: "Biology",
                icon: "🧬",
                color: "text-green-700",
              },
              {
                name: "Physics",
                icon: "⚛️",
                color: "text-blue-700",
              },
              {
                name: "Chemistry",
                icon: "🧪",
                color: "text-orange-600",
              },
              {
                name: "History & Government",
                icon: "🏛️",
                color: "text-amber-600",
              },
              {
                name: "Christian Religious Education",
                icon: "✝️",
                color: "text-red-600",
              },
              {
                name: "Geography",
                icon: "🌍",
                color: "text-teal-600",
              },
              {
                name: "Business Studies",
                icon: "💼",
                color: "text-indigo-600",
              },
              {
                name: "Agriculture",
                icon: "🌾",
                color: "text-lime-600",
              },
              {
                name: "Computer Studies",
                icon: "💻",
                color: "text-gray-600",
              },
            ].map((subject) => (
              <button
                key={subject.name}
                className="p-3 text-center transition-colors bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div
                  className={`text-xl sm:text-2xl mb-1 sm:mb-2 ${subject.color}`}
                >
                  {subject.icon}
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-800">
                  {subject.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Browse by Teacher - Adjusted grid for mobile */}
        <div className="mt-6 sm:mt-8 mb-8 sm:mb-12">
          <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">
            Browse by Teacher
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
            {[
              {
                name: "Mr. Mwangi",
                subjects: ["Mathematics", "Physics"],
              },
              {
                name: "Ms. Achieng",
                subjects: ["Biology", "Chemistry"],
              },
              {
                name: "Mr. Otieno",
                subjects: ["Business Studies", "Mathematics"],
              },
            ].map((teacher) => (
              <button
                key={teacher.name}
                className="flex flex-col items-center p-2 sm:p-3 transition-colors bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <FaUser className="object-cover w-6 h-6 sm:w-8 sm:h-8 p-1 mb-1 sm:mb-2 text-gray-700 border border-gray-400 rounded-full" />
                <p className="text-sm sm:text-base font-medium text-center text-gray-900">
                  {teacher.name}
                </p>
                <p className="text-xs sm:text-base text-center text-gray-500">
                  {teacher.subjects.join(" & ")}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Footer - Smaller text on mobile */}
        <div className="py-3 text-xs sm:text-sm text-center text-gray-500 bg-white border-t">
          © {new Date().getFullYear()} Kimangu Day Secondary School. All rights
          reserved.
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

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
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-gray-100">
      <div className="min-h-screen p-4 mx-auto bg-white max-w-7xl">
        <Header />

        <header className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-gray-800">
            📚 Digital Learning Materials
          </h1>
          <p className="text-gray-600">
            Access study materials, notes, quizzes, and past papers
          </p>
        </header>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <FaSearch className="absolute w-4 h-4 text-gray-400 left-3 top-3" />
            <input
              type="text"
              placeholder="Search materials, subjects, or teachers..."
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-6 mb-8 md:grid-cols-4">
          <div className="p-6 border border-blue-200 rounded-lg bg-blue-50">
            <div className="flex items-center">
              <IoLibrary className="w-8 h-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Materials</p>
                <p className="text-2xl font-bold text-gray-800">1,847</p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex items-center">
              <FaUpload className="w-8 h-8 text-gray-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">New This Week</p>
                <p className="text-2xl font-bold text-gray-800">23</p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-blue-200 rounded-lg bg-blue-50">
            <div className="flex items-center">
              <FaDownload className="w-8 h-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Downloads This Week</p>
                <p className="text-2xl font-bold text-gray-800">89</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Recent Materials */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h2 className="flex items-center mb-4 text-xl font-semibold">
              <FaClock className="w-5 h-5 mr-2 text-green-600" />
              Recently Added
            </h2>
            <div className="space-y-4">
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
                {
                  id: 5,
                  title: "Biology Diagrams",
                  type: "Image",
                  subject: "Biology",
                  teacher: "Dr. Wambui",
                  uploadDate: "5 days ago",
                },
              ].map((material) => {
                let icon, color;
                switch (material.type) {
                  case "PDF":
                    icon = <FaFilePdf className="w-4 h-4 mr-1" />;
                    color = "bg-red-500";
                    break;
                  case "Video":
                    icon = <FaFileVideo className="w-4 h-4 mr-1" />;
                    color = "bg-purple-500";
                    break;
                  case "PPT":
                    icon = <FaFilePowerpoint className="w-4 h-4 mr-1" />;
                    color = "bg-orange-500";
                    break;
                  case "Word":
                    icon = <FaFileWord className="w-4 h-4 mr-1" />;
                    color = "bg-blue-500";
                    break;
                  case "Image":
                    icon = <FaFileImage className="w-4 h-4 mr-1" />;
                    color = "bg-green-500";
                    break;
                  default:
                    icon = <FaFileWord className="w-4 h-4 mr-1" />;
                    color = "bg-gray-500";
                }

                return (
                  <div key={material.id} className="p-4 rounded-lg bg-gray-50">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-gray-800">
                        {material.title}
                      </h3>
                      <span
                        className={`flex items-center px-2 py-1 text-xs text-white rounded-md ${color}`}
                      >
                        {icon}
                        {material.type}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>Subject: {material.subject}</p>
                      <p>Teacher: {material.teacher}</p>
                      <div className="flex justify-between">
                        <p>Uploaded: {material.uploadDate}</p>
                      </div>
                    </div>
                    <div className="flex mt-3 space-x-2">
                      {material.type !== "Video" &&
                      material.type !== "Image" ? (
                        <button className="flex items-center px-4 py-1 text-sm font-medium text-blue-600 bg-blue-100 border rounded-md border-gray-50 hover:border-blue-400">
                          <FaEye className="w-4 h-4 mr-2" />
                          View
                        </button>
                      ) : null}
                      <button className="flex items-center px-4 py-1 text-sm text-green-700 bg-green-200 border rounded border-gray-50 hover:border-green-400">
                        {material.type === "Video" ? (
                          <>
                            <FaPlay className="w-4 h-4 mr-2" />
                            Play
                          </>
                        ) : (
                          <>
                            <FaDownload className="w-4 h-4 mr-2" />
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
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h2 className="flex items-center mb-4 text-xl font-semibold">
              <FaStar className="w-5 h-5 mr-2 text-yellow-500" />
              Most Viewed
            </h2>
            <div className="space-y-4">
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
                {
                  id: 4,
                  title: "Shakespeare Analysis",
                  type: "Word",
                  subject: "English",
                  teacher: "Mrs. Kamau",
                  downloads: 98,
                },
                {
                  id: 5,
                  title: "Cell Biology Diagrams",
                  type: "Image",
                  subject: "Biology",
                  teacher: "Dr. Wambui",
                  downloads: 175,
                },
                {
                  id: 6,
                  title: "Trigonometry Practice Problems",
                  type: "PDF",
                  subject: "Mathematics",
                  teacher: "Mr. Kariuki",
                  downloads: 210,
                },
                {
                  id: 7,
                  title: "French Grammar Guide",
                  type: "Word",
                  subject: "French",
                  teacher: "Ms. Dubois",
                  downloads: 87,
                },
              ].map((item) => {
                // Determine icon and color based on file type
                let icon, color;
                switch (item.type) {
                  case "PDF":
                    icon = <FaFilePdf className="w-4 h-4" />;
                    color = "bg-red-500";
                    break;
                  case "Video":
                    icon = <FaFileVideo className="w-4 h-4" />;
                    color = "bg-purple-500";
                    break;
                  case "PPT":
                    icon = <FaFilePowerpoint className="w-4 h-4" />;
                    color = "bg-orange-500";
                    break;
                  case "Word":
                    icon = <FaFileWord className="w-4 h-4" />;
                    color = "bg-blue-500";
                    break;
                  default:
                    icon = <FaFileWord className="w-4 h-4" />;
                    color = "bg-gray-500";
                }

                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
                  >
                    <div className="flex items-center space-x-3">
                      <span
                        className={`flex items-center justify-center w-8 h-8 rounded-md ${color} text-white`}
                      >
                        {icon}
                      </span>
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {item.title}
                        </h3>
                        <div className="flex space-x-2 text-sm text-gray-600">
                          <p>{item.subject}</p>
                          <span className="text-gray-400">|</span>
                          <p className="flex items-center">
                            <FaUser className="w-3 h-3 mr-1" />
                            {item.teacher}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-600">
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

        {/* Subject Categories */}
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">Browse by Subject</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              {
                name: "English & Literature",
                icon: "📖",
                color: "text-blue-600",
              },
              { name: "Kiswahili", icon: "🗣️", color: "text-green-600" },
              { name: "Mathematics", icon: "🔢", color: "text-purple-600" },
              { name: "Biology", icon: "🧬", color: "text-green-700" },
              { name: "Physics", icon: "⚛️", color: "text-blue-700" },
              { name: "Chemistry", icon: "🧪", color: "text-orange-600" },
              {
                name: "History and Government",
                icon: "🏛️",
                color: "text-amber-600",
              },
              { name: "Geography", icon: "🌍", color: "text-emerald-600" },
              {
                name: "Christian Religious Education",
                icon: "✝️",
                color: "text-indigo-600",
              },
              { name: "Business Studies", icon: "💼", color: "text-gray-700" },
              { name: "Agriculture", icon: "🌾", color: "text-lime-600" },
              { name: "Computer Studies", icon: "💻", color: "text-cyan-600" },
            ].map((subject) => (
              <button
                key={subject.name}
                className="p-4 text-center transition-colors bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div className={`text-2xl mb-2 ${subject.color}`}>
                  {subject.icon}
                </div>
                <p className="text-sm font-medium text-gray-800">
                  {subject.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Browse by Teacher */}
        <div className="mt-8 mb-12">
          <h2 className="mb-4 text-xl font-semibold">Browse by Teacher</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
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
              {
                name: "Mrs. Wambui",
                subjects: ["English", "Literature"],
              },
              {
                name: "Mr. Kariuki",
                subjects: ["Physics", "Mathematics"],
              },
              {
                name: "Ms. Njeri",
                subjects: ["Computer Studies", "Mathematics"],
              },
            ].map((teacher) => (
              <button
                key={teacher.name}
                className="flex flex-col items-center p-3 transition-colors bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <FaUser className="object-cover w-8 h-8 p-1 mb-2 text-gray-700 border border-gray-400 rounded-full" />
                <p className="text-sm font-medium text-center text-gray-800">
                  {teacher.name}
                </p>
                <p className="text-xs text-center text-gray-500">
                  {teacher.subjects.join(" & ")}
                </p>
              </button>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;

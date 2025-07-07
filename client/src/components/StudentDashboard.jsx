import { useState, useEffect } from "react";
import {
  FaSearch,
  FaFileWord,
  FaFilePowerpoint,
  FaFilePdf,
  FaFileVideo,
  FaFileImage,
  FaUser,
  FaDownload,
  FaEye,
  FaClock,
  FaStar,
  FaPlay,
} from "react-icons/fa";

import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recentMaterials, setRecentMaterials] = useState([]);
  const [popularMaterials, setPopularMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        setLoading(true);
        const recentResponse = await fetch(
          "http://localhost:5000/api/materials"
        );
        const recentData = await recentResponse.json();
        setRecentMaterials(recentData.slice(0, 4));

        setPopularMaterials(recentData.slice(0, 5));
      } catch (err) {
        console.error("Error fetching materials:", err);
        setError("Failed to load materials");
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, []);

  const getFileTypeIcon = (fileType) => {
    switch (fileType.toLowerCase()) {
      case "pdf":
        return <FaFilePdf className="w-4 h-4 mr-1" />;
      case "video":
        return <FaFileVideo className="w-4 h-4 mr-1" />;
      case "ppt":
      case "pptx":
      case "powerpoint":
        return <FaFilePowerpoint className="w-4 h-4 mr-1" />;
      case "doc":
      case "docx":
      case "word":
        return <FaFileWord className="w-4 h-4 mr-1" />;
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
      case "image":
        return <FaFileImage className="w-4 h-4 mr-1" />;
      default:
        return <FaFileWord className="w-4 h-4 mr-1" />;
    }
  };

  const getFileTypeColor = (fileType) => {
    switch (fileType.toLowerCase()) {
      case "pdf":
        return "bg-red-500";
      case "video":
        return "bg-purple-500";
      case "ppt":
      case "pptx":
      case "powerpoint":
        return "bg-orange-500";
      case "doc":
      case "docx":
      case "word":
        return "bg-blue-500";
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
      case "image":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const formatUploadDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "Yesterday";
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    return `${Math.floor(diffInDays / 30)} months ago`;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading materials...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100">
      <div className="min-h-screen p-4 mx-auto bg-white max-w-7xl">
        <Header />

        <header className="mb-8 border-b">
          <h1 className="mb-2 text-3xl font-bold text-gray-800">
            📚 E-Learning Materials
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Recent Materials */}
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h2 className="flex items-center mb-4 text-xl font-semibold">
              <FaClock className="w-5 h-5 mr-2 text-green-600" />
              Recently Added
            </h2>
            <div className="space-y-4">
              {recentMaterials.map((material) => {
                const icon = getFileTypeIcon(material.fileType);
                const color = getFileTypeColor(material.fileType);

                return (
                  <div key={material._id} className="p-4 rounded-lg bg-gray-50">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-gray-800">
                        {material.title}
                      </h3>
                      <span
                        className={`flex items-center px-2 py-1 text-xs text-white rounded-md ${color}`}
                      >
                        {icon}
                        {material.fileType}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>Subject: {material.subject}</p>
                      <p>Uploaded by: {material.uploadedBy || "Teacher"}</p>
                      <div className="flex justify-between">
                        <p>
                          Uploaded:{" "}
                          {formatUploadDate(
                            material.uploadDate || material.createdAt
                          )}
                        </p>
                        <p>Size: {material.fileSize}</p>
                      </div>
                    </div>
                    <div className="flex mt-3 space-x-2">
                      {material.fileType.toLowerCase() !== "video" &&
                      material.fileType.toLowerCase() !== "image" ? (
                        <button className="flex items-center px-4 py-1 text-sm font-medium text-blue-600 bg-blue-100 border rounded-md border-gray-50 hover:border-blue-400">
                          <FaEye className="w-4 h-4 mr-2" />
                          View
                        </button>
                      ) : null}
                      <button className="flex items-center px-4 py-1 text-sm text-green-700 bg-green-200 border rounded border-gray-50 hover:border-green-400">
                        {material.fileType.toLowerCase() === "video" ? (
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
              {popularMaterials.map((material) => {
                const icon = getFileTypeIcon(material.fileType);
                const color = getFileTypeColor(material.fileType);

                return (
                  <div
                    key={material._id}
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
                          {material.title}
                        </h3>
                        <div className="flex space-x-2 text-sm text-gray-600">
                          <p>{material.subject}</p>
                          <span className="text-gray-400">|</span>
                          <p className="flex items-center">
                            <FaUser className="w-3 h-3 mr-1" />
                            {material.uploadedBy || "Teacher"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-600">
                        {/* TODO: Replace with actual view count when implemented */}
                        {Math.floor(Math.random() * 200) + 50}
                      </p>
                      <p className="text-xs text-gray-500">Views</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Rest of the component remains the same */}
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
              { name: "Agriculture", icon: "🌾", color: "text-lime-600" },
              { name: "Computer Studies", icon: "💻", color: "text-cyan-600" },
              { name: "Business Studies", icon: "💼", color: "text-gray-700" },
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

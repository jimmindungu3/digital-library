import { useState } from "react";
import { IoLibrary } from "react-icons/io5";
import Footer from "./Footer";
import {
  FaSearch,
  FaFileWord,
  FaFilePowerpoint,
  FaFilePdf,
  FaFileVideo,
  FaFileImage,
  FaUser,
  FaUpload,
  FaEye,
  FaCog,
  FaStar,
  FaDownload,
  FaGraduationCap,
  FaTrash,
  FaBookOpen,
  FaChartBar,
  FaPlus,
} from "react-icons/fa";
import Header from "./Header";

const TeacherDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Placeholder data for demonstration
  const teacherName = "Mr. Mwangi";
  const teacherSubjects = ["Mathematics", "Physics"];

  const recentUploads = [
    {
      id: 1,
      title: "Algebraic Expressions Advanced",
      type: "PDF",
      subject: "Mathematics",
      uploadDate: "2 hours ago",
      views: 45,
      downloads: 12,
    },
    {
      id: 2,
      title: "Newton's Laws of Motion Lecture",
      type: "Video",
      subject: "Physics",
      uploadDate: "Yesterday",
      views: 88,
      downloads: 30,
    },
    {
      id: 3,
      title: "Probability & Statistics Practice Questions",
      type: "Word",
      subject: "Mathematics",
      uploadDate: "3 days ago",
      views: 62,
      downloads: 25,
    },
  ];

  const popularMaterials = [
    {
      id: 1,
      title: "Calculus Revision Notes",
      type: "PDF",
      subject: "Mathematics",
      views: 350,
      downloads: 150,
    },
    {
      id: 2,
      title: "Electromagnetism Explained",
      type: "Video",
      subject: "Physics",
      views: 280,
      downloads: 100,
    },
    {
      id: 3,
      title: "Geometry Formulas Handbook",
      type: "PPT",
      subject: "Mathematics",
      views: 210,
      downloads: 80,
    },
  ];

  // Helper function to get icon and color based on file type - KEEP THESE COLORS
  const getFileTypeDetails = (type) => {
    switch (type) {
      case "PDF":
        return { icon: <FaFilePdf />, color: "bg-red-500" };
      case "Video":
        return { icon: <FaFileVideo />, color: "bg-purple-500" };
      case "PPT":
        return { icon: <FaFilePowerpoint />, color: "bg-orange-500" };
      case "Word":
        return { icon: <FaFileWord />, color: "bg-blue-500" };
      case "Image":
        return { icon: <FaFileImage />, color: "bg-green-500" };
      default:
        return { icon: <FaFileWord />, color: "bg-gray-500" };
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="min-h-screen p-4 mx-auto bg-white max-w-7xl">
        <Header />

        {/* Header */}
        <header className="mb-6 sm:mb-8">
          <div className="grid grid-cols-[auto_1fr] gap-3 sm:gap-4 items-start">
            <div className="text-2xl sm:text-3xl">🧑‍🏫</div>
            <div>
              <h1 className="mb-1 text-xl font-bold text-gray-800 sm:mb-2 sm:text-3xl">
                Welcome, {teacherName}!
              </h1>
              <p className="text-xs text-gray-500 sm:text-base">
                Manage your learning materials, track student engagement, and
                more.
              </p>
            </div>
          </div>
        </header>

        {/* Search Bar - No changes needed, already subtle */}
        <div className="mb-6 sm:mb-8">
          <div className="relative w-full sm:max-w-md">
            <FaSearch className="absolute w-3 h-3 text-gray-400 sm:w-4 sm:h-4 left-3 top-3" />
            <input
              type="text"
              placeholder="Search your materials..."
              className="w-full py-2 pl-8 pr-4 text-sm border border-gray-300 rounded-lg sm:pl-10 sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Quick Actions / Teacher Tools (New Section) - Apply subtle blues/grays */}
        <div className="mt-6 mb-8 sm:mt-8">
          <h2 className="mb-3 text-lg font-semibold sm:mb-4 sm:text-xl">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <button className="flex flex-col items-center p-3 text-center transition-colors bg-white border border-blue-200 rounded-lg hover:bg-blue-50">
              {" "}
              {/* Changed from green */}
              <FaUpload className="w-6 h-6 mb-2 text-blue-500 sm:w-8 sm:h-8" />{" "}
              {/* Changed from green */}
              <p className="text-sm font-medium text-gray-800 sm:text-base">
                Upload New Material
              </p>
            </button>
            <button className="flex flex-col items-center p-3 text-center transition-colors bg-white border border-blue-200 rounded-lg hover:bg-blue-50">
              <FaCog className="w-6 h-6 mb-2 text-blue-500 sm:w-8 sm:h-8" />
              <p className="text-sm font-medium text-gray-800 sm:text-base">
                Manage Materials
              </p>
            </button>
            <button className="flex flex-col items-center p-3 text-center transition-colors bg-white border border-blue-200 rounded-lg hover:bg-blue-50">
              {" "}
              {/* Changed from purple */}
              <FaChartBar className="w-6 h-6 mb-2 text-blue-500 sm:w-8 sm:h-8" />{" "}
              {/* Changed from purple */}
              <p className="text-sm font-medium text-gray-800 sm:text-base">
                View Analytics
              </p>
            </button>
            <button className="flex flex-col items-center p-3 text-center transition-colors bg-white border border-blue-200 rounded-lg hover:bg-blue-50">
              {" "}
              {/* Changed from orange */}
              <FaUser className="w-6 h-6 mb-2 text-blue-500 sm:w-8 sm:h-8" />{" "}
              {/* Changed from orange */}
              <p className="text-sm font-medium text-gray-800 sm:text-base">
                Student Progress
              </p>
            </button>
          </div>
        </div>

        {/* Teacher Stats Cards - Apply subtle blues/grays */}
        <div>
          <h2 className="mb-3 text-lg font-semibold sm:mb-4 sm:text-xl">
            Your Work In Summary
          </h2>
          <div className="grid grid-cols-1 gap-3 mb-6 sm:grid-cols-2 sm:gap-4 md:grid-cols-4 md:gap-6 md:mb-8">
            <div className="p-4 border border-blue-200 rounded-lg sm:p-6 bg-blue-50">
              <div className="flex items-center">
                <IoLibrary className="w-6 h-6 text-blue-500 sm:w-8 sm:h-8" />
                <div className="ml-3 sm:ml-4">
                  <p className="text-xs text-gray-500 sm:text-sm">
                    Your Total Materials
                  </p>
                  <p className="text-xl font-bold text-gray-800 sm:text-2xl">
                    125
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-100 border border-gray-200 rounded-lg sm:p-6">
              <div className="flex items-center">
                <FaUpload className="w-6 h-6 text-blue-500 sm:w-8 sm:h-8" />{" "}
                <div className="ml-3 sm:ml-4">
                  <p className="text-xs text-gray-500 sm:text-sm">
                    New Uploads This Week
                  </p>
                  <p className="text-xl font-bold text-gray-800 sm:text-2xl">
                    5
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 border border-blue-200 rounded-lg sm:p-6 bg-blue-50">
              <div className="flex items-center">
                <FaGraduationCap className="w-6 h-6 text-blue-500 sm:w-8 sm:h-8" />{" "}
                <div className="ml-3 sm:ml-4">
                  <p className="text-xs text-gray-500 sm:text-sm">
                    Student Engagement This Week
                  </p>
                  <p className="text-xl font-bold text-gray-800 sm:text-2xl">
                    210
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-100 border border-gray-200 rounded-lg sm:p-6">
              {" "}
              <div className="flex items-center">
                <FaChartBar className="w-6 h-6 text-blue-500 sm:w-8 sm:h-8" />{" "}
                <div className="ml-3 sm:ml-4">
                  <p className="text-xs text-gray-500 sm:text-sm">
                    Total Views This Month
                  </p>
                  <p className="text-xl font-bold text-gray-800 sm:text-2xl">
                    1,560
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid - Recent Uploads and Popular Materials (by teacher) */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
          {/* Recent Uploads by Teacher - Keep file type colors, change general accents */}
          <div className="p-4 bg-white border border-gray-200 rounded-lg sm:p-6">
            <h2 className="flex items-center mb-3 text-lg font-semibold sm:mb-4 sm:text-xl">
              <FaUpload className="w-4 h-4 mr-2 text-blue-500 sm:w-5 sm:h-5" />{" "}
              {/* Changed from blue */}
              Your Recent Uploads
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {recentUploads.map((material) => {
                const { icon, color } = getFileTypeDetails(material.type);
                return (
                  <div
                    key={material.id}
                    className="p-3 rounded-lg sm:p-4 bg-gray-50"
                  >
                    <div className="flex items-start justify-between mb-1 sm:mb-2">
                      <h3 className="text-sm font-medium text-gray-800 sm:text-base">
                        {material.title}
                      </h3>
                      <span
                        className={`flex items-center px-2 py-1 text-xs text-white rounded-md ${color}`}
                      >
                        {icon}
                        {material.type}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 sm:text-sm">
                      <p>Subject: {material.subject}</p>
                      <p>Uploaded: {material.uploadDate}</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="flex items-center">
                          <FaEye className="w-3 h-3 mr-1 sm:w-4 sm:h-4" />
                          {material.views} views
                        </p>
                        <p className="flex items-center ml-4">
                          <FaDownload className="w-3 h-3 mr-1 sm:w-4 sm:h-4" />
                          {material.downloads} downloads
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-2 space-x-2 sm:mt-3">
                      <button className="flex items-center px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 border rounded-md sm:text-sm hover:border-blue-300">
                        <FaEye className="w-3 h-3 mr-1 sm:w-4 sm:h-4 sm:mr-2" />
                        View/Edit
                      </button>
                      <button className="flex items-center px-2 py-1 text-xs font-medium text-red-500 bg-red-100 border rounded-md sm:text-sm hover:border-red-300">
                        <FaTrash className="w-3 h-3 mr-1 sm:w-4 sm:h-4 sm:mr-2" />
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm text-blue-700 bg-blue-100 border border-blue-300 rounded-lg hover:bg-blue-200 sm:text-base">
              <FaPlus className="w-4 h-4 mr-2" /> Upload New Material
            </button>
          </div>

          {/* Your Most Popular Materials */}
          <div className="p-4 bg-white border border-gray-200 rounded-lg sm:p-6">
            <h2 className="flex items-center mb-3 text-lg font-semibold sm:mb-4 sm:text-xl">
              <FaStar className="w-4 h-4 mr-2 text-blue-500 sm:w-5 sm:h-5" />{" "}
              Your Most Popular Materials
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {popularMaterials.map((item) => {
                const { icon, color } = getFileTypeDetails(item.type);
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-2 rounded-lg sm:p-3 bg-gray-50"
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <span
                        className={`flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-md ${color} text-white`}
                      >
                        {icon}
                      </span>
                      <div>
                        <h3 className="text-sm font-medium text-gray-800 sm:text-base">
                          {item.title}
                        </h3>
                        <div className="flex space-x-1 text-xs text-gray-500 sm:space-x-2 sm:text-sm">
                          <p>{item.subject}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-base font-bold text-blue-500 sm:text-lg">
                        {item.views}
                      </p>
                      <p className="text-xs text-gray-500">Views</p>
                      <p className="mt-1 text-base font-bold text-blue-500 sm:text-lg">
                        {" "}
                        {item.downloads}
                      </p>
                      <p className="text-xs text-gray-500">Downloads</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Subjects You Teach */}
        <div className="mt-6 sm:mt-8">
          <h2 className="mb-3 text-lg font-semibold sm:mb-4 sm:text-xl">
            Subjects You Teach
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
            {teacherSubjects.map((subject) => {
              const subjectIcons = {
                Mathematics: "🔢",
                Physics: "⚛️",
                Chemistry: "🧪",
                Biology: "🧬",
                English: "📖",
                Kiswahili: "🗣️",
                "Business Studies": "💼",
                "History & Government": "🏛️",
                Geography: "🌍",
                "Christian Religious Education": "✝️",
                Agriculture: "🌾",
                "Computer Studies": "💻",
              };
              const subjectColors = {
                Mathematics: "text-blue-500",
                Physics: "text-blue-700",
                Chemistry: "text-gray-500",
                Biology: "text-blue-800",
                English: "text-blue-500",
                Kiswahili: "text-gray-700",
                "Business Studies": "text-blue-500",
                "History & Government": "text-gray-500",
                Geography: "text-blue-400",
                "Christian Religious Education": "text-blue-900",
                Agriculture: "text-gray-400",
                "Computer Studies": "text-gray-500",
              };

              return (
                <button
                  key={subject}
                  className="p-3 text-center transition-colors bg-white border border-gray-200 rounded-lg hover:bg-gray-50"
                >
                  <div
                    className={`text-xl sm:text-2xl mb-1 sm:mb-2 ${
                      subjectColors[subject] || "text-gray-500"
                    }`}
                  >
                    {subjectIcons[subject] || "📚"}
                  </div>
                  <p className="text-xs font-medium text-gray-800 sm:text-sm">
                    {subject}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default TeacherDashboard;

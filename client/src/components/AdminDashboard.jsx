import { useState } from "react";
import {
  FaSearch,
  FaEdit,
  FaTrash,
  FaPlus,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaSave,
  FaTimes,
  FaUsers,
  FaUserCheck,
  FaUpload,
  FaFileWord,
  FaFilePowerpoint,
  FaFilePdf,
  FaFileVideo,
  FaFileImage,
  FaEye,
  FaDownload,
} from "react-icons/fa";

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("teacher");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Mwangi",
      role: "teacher",
      teachingSubjects: ["Mathematics", "Physics"],
      status: "Active",
      joinDate: "2024-01-15",
      lastLogin: "2025-07-02",
      materialsUploaded: 25,
      studentsReached: 150,
    },
    {
      id: 2,
      name: "Sarah Achieng",
      role: "teacher",
      teachingSubjects: ["Biology", "Chemistry"],
      status: "Active",
      joinDate: "2024-02-20",
      lastLogin: "2025-07-03",
      materialsUploaded: 18,
      studentsReached: 120,
    },
    {
      id: 3,
      name: "Mary Wanjiku",
      role: "student",
      admissionNumber: "2024001",
      form: "Form 4",
      status: "Active",
      joinDate: "2024-09-01",
      lastLogin: "2025-07-03",
      materialsDownloaded: 45,
      averageGrade: "B+",
    },
    {
      id: 4,
      name: "David Otieno",
      role: "teacher",
      teachingSubjects: ["Business Studies", "Economics"],
      status: "Inactive",
      joinDate: "2023-08-10",
      lastLogin: "2025-06-20",
      materialsUploaded: 30,
      studentsReached: 200,
    },
    {
      id: 5,
      name: "Grace Njeri",
      role: "student",
      admissionNumber: "2024002",
      form: "Form 3",
      status: "Active",
      joinDate: "2024-09-01",
      lastLogin: "2025-07-02",
      materialsDownloaded: 32,
      averageGrade: "A-",
    },
  ]);

  const [resources, setResources] = useState([
    {
      id: 1,
      title: "Algebraic Expressions Advanced",
      type: "PDF",
      subject: "Mathematics",
      teacher: "John Mwangi",
      uploadDate: "2025-06-15",
      views: 145,
      downloads: 62,
    },
    {
      id: 2,
      title: "Newton's Laws of Motion Lecture",
      type: "Video",
      subject: "Physics",
      teacher: "John Mwangi",
      uploadDate: "2025-06-20",
      views: 288,
      downloads: 130,
    },
    {
      id: 3,
      title: "Probability & Statistics Practice Questions",
      type: "Word",
      subject: "Mathematics",
      teacher: "Sarah Achieng",
      uploadDate: "2025-06-25",
      views: 162,
      downloads: 75,
    },
    {
      id: 4,
      title: "Business Studies Case Studies",
      type: "PDF",
      subject: "Business Studies",
      teacher: "David Otieno",
      uploadDate: "2025-06-28",
      views: 98,
      downloads: 45,
    },
  ]);

  const [newUser, setNewUser] = useState({
    name: "",
    role: "student",
    teachingSubjects: [],
    admissionNumber: "",
    form: "",
    status: "active",
  });

  // Filter users based on search and tab
  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTab = user.role === activeTab;
    return matchesSearch && matchesTab;
  });

  // Filter resources based on search when on resources tab
  const filteredResources = resources.filter((resource) => {
    return (
      activeTab !== "resources" ||
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.teacher.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Stats calculations
  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.status === "Active").length;
  const totalTeachers = users.filter((user) => user.role === "teacher").length;
  const totalStudents = users.filter((user) => user.role === "student").length;
  const totalResources = resources.length;

  const handleAddUser = () => {
    const id = Math.max(...users.map((u) => u.id)) + 1;
    const today = new Date().toISOString().split("T")[0];

    const userToAdd = {
      ...newUser,
      id,
      joinDate: today,
      lastLogin: today,
    };

    if (newUser.role === "teacher") {
      userToAdd.materialsUploaded = 0;
      userToAdd.studentsReached = 0;
    } else {
      userToAdd.materialsDownloaded = 0;
      userToAdd.averageGrade = "N/A";
    }

    setUsers([...users, userToAdd]);
    setNewUser({
      name: "",
      role: "student",
      teachingSubjects: [],
      admissionNumber: "",
      form: "",
      status: "active",
    });
    setShowAddModal(false);
    setActiveTab(newUser.role);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleUpdateUser = () => {
    setUsers(
      users.map((user) => (user.id === selectedUser.id ? selectedUser : user))
    );
    setShowEditModal(false);
    setSelectedUser(null);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  const handleDeleteResource = (resourceId) => {
    if (window.confirm("Are you sure you want to delete this resource?")) {
      setResources(resources.filter((resource) => resource.id !== resourceId));
    }
  };

  const getStatusColor = (status) => {
    return status === "Active"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";
  };

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
        {/* Header */}
        <header className="mb-6 sm:mb-8">
          <div className="grid grid-cols-[auto_1fr] gap-3 sm:gap-4 items-start">
            <div className="text-2xl sm:text-3xl">👨‍💼</div>
            <div>
              <h1 className="mb-1 text-xl font-bold text-gray-800 sm:mb-2 sm:text-3xl">
                Admin Dashboard
              </h1>
              <p className="text-xs text-gray-500 sm:text-base">
                Manage users, monitor system activity, and maintain platform
                security.
              </p>
            </div>
          </div>
        </header>

        {/* Search and Add User Bar */}
        <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between sm:mb-8">
          <div className="relative w-full sm:max-w-md">
            <FaSearch className="absolute w-3 h-3 text-gray-400 sm:w-4 sm:h-4 left-3 top-3" />
            <input
              type="text"
              placeholder={
                activeTab === "resources"
                  ? "Search resources by title, subject or teacher..."
                  : "Search users by name..."
              }
              className="w-full py-2 pl-8 pr-4 text-sm border border-gray-300 rounded-lg sm:pl-10 sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {activeTab !== "resources" && (
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              <FaPlus className="w-4 h-4 mr-2" />
              Add User
            </button>
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-3 mb-6 sm:grid-cols-2 sm:gap-4 md:grid-cols-5 md:gap-6 md:mb-8">
          <div className="p-4 border border-blue-200 rounded-lg sm:p-6 bg-blue-50">
            <div className="flex items-center">
              <FaUsers className="w-6 h-6 text-blue-500 sm:w-8 sm:h-8" />
              <div className="ml-3 sm:ml-4">
                <p className="text-xs text-gray-500 sm:text-sm">Total Users</p>
                <p className="text-xl font-bold text-gray-800 sm:text-2xl">
                  {totalUsers}
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-100 border border-gray-200 rounded-lg sm:p-6">
            <div className="flex items-center">
              <FaUpload className="w-6 h-6 text-blue-500 sm:w-8 sm:h-8" />
              <div className="ml-3 sm:ml-4">
                <p className="text-xs text-gray-500 sm:text-sm">
                  Total Resources
                </p>
                <p className="text-xl font-bold text-gray-800 sm:text-2xl">
                  {totalResources}
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 border border-blue-200 rounded-lg sm:p-6 bg-blue-50">
            <div className="flex items-center">
              <FaChalkboardTeacher className="w-6 h-6 text-blue-500 sm:w-8 sm:h-8" />
              <div className="ml-3 sm:ml-4">
                <p className="text-xs text-gray-500 sm:text-sm">Teachers</p>
                <p className="text-xl font-bold text-gray-800 sm:text-2xl">
                  {totalTeachers}
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-100 border border-gray-200 rounded-lg sm:p-6">
            <div className="flex items-center">
              <FaGraduationCap className="w-6 h-6 text-blue-500 sm:w-8 sm:h-8" />
              <div className="ml-3 sm:ml-4">
                <p className="text-xs text-gray-500 sm:text-sm">Students</p>
                <p className="text-xl font-bold text-gray-800 sm:text-2xl">
                  {totalStudents}
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 border border-blue-200 rounded-lg bg-blue-50 sm:p-6">
            <div className="flex items-center">
              <FaUserCheck className="w-6 h-6 text-blue-500 sm:w-8 sm:h-8" />
              <div className="ml-3 sm:ml-4">
                <p className="text-xs text-gray-500 sm:text-sm">Active Users</p>
                <p className="text-xl font-bold text-gray-800 sm:text-2xl">
                  {activeUsers}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("teacher")}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === "teacher"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Teachers
            </button>
            <button
              onClick={() => setActiveTab("student")}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === "student"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Students
            </button>
            <button
              onClick={() => setActiveTab("resources")}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === "resources"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Resources
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        {activeTab === "resources" ? (
          /* Resources Table */
          <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
            <div className="px-4 py-3 border-b border-gray-200 sm:px-6">
              <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">
                Resource Management
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase sm:px-6">
                      Resource Details
                    </th>
                    <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase sm:px-6">
                      Subject & Teacher
                    </th>
                    <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase sm:px-6">
                      Upload Date
                    </th>
                    <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase sm:px-6">
                      Engagement
                    </th>
                    <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase sm:px-6">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredResources.map((resource) => {
                    const { icon, color } = getFileTypeDetails(resource.type);
                    return (
                      <tr key={resource.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4 sm:px-6">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-8 h-8">
                              <div
                                className={`flex items-center justify-center w-8 h-8 rounded-full ${color} text-white`}
                              >
                                {icon}
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {resource.title}
                              </div>
                              <div className="text-xs text-gray-500">
                                {resource.type}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 sm:px-6">
                          <div className="text-sm text-gray-900">
                            {resource.subject}
                          </div>
                          <div className="text-xs text-gray-500">
                            By: {resource.teacher}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 sm:px-6">
                          {resource.uploadDate}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 sm:px-6">
                          <div>
                            <div className="flex items-center">
                              <FaEye className="w-3 h-3 mr-1" />
                              {resource.views} views
                            </div>
                            <div className="flex items-center">
                              <FaDownload className="w-3 h-3 mr-1" />
                              {resource.downloads} downloads
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 sm:px-6">
                          <div className="flex space-x-6">
                            <button
                              onClick={() => handleDeleteResource(resource.id)}
                              className="text-blue-500 hover:text-blue-800"
                            >
                              <FaEye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteResource(resource.id)}
                              className="text-rose-500 hover:text-rose-600"
                            >
                              <FaTrash className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Users Table */
          <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
            <div className="px-4 py-3 border-b border-gray-200 sm:px-6">
              <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">
                User Management
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase sm:px-6">
                      User Details
                    </th>
                    <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase sm:px-6">
                      Status
                    </th>
                    <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase sm:px-6">
                      Last Login
                    </th>
                    <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase sm:px-6">
                      Stats
                    </th>
                    <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase sm:px-6">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 sm:px-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-8 h-8">
                            <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                              {user.role === "teacher" ? (
                                <FaChalkboardTeacher className="w-4 h-4 text-blue-500" />
                              ) : (
                                <FaGraduationCap className="w-4 h-4 text-blue-500" />
                              )}
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {user.role === "teacher" ? (
                                <div>{user.teachingSubjects.join(", ")}</div>
                              ) : (
                                <div>Adm: {user.admissionNumber}</div>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 sm:px-6">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                            user.status
                          )}`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 sm:px-6">
                        {user.lastLogin}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 sm:px-6">
                        {user.role === "teacher" ? (
                          <div>
                            <div>{user.materialsUploaded} materials</div>
                            <div className="text-xs text-gray-400">
                              {user.studentsReached} students
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div>{user.materialsDownloaded} downloads</div>
                            <div className="text-xs text-gray-400">
                              Grade: {user.averageGrade}
                            </div>
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 sm:px-6">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditUser(user)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <FaEdit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <FaTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Keep existing modals (Add User and Edit User) */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            {/* Existing Add User Modal */}
          </div>
        )}

        {showEditModal && selectedUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            {/* Existing Edit User Modal */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

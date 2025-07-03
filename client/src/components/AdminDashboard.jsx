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

  // Stats calculations
  const totalUsers = users.length;
  const activeUsers = users.filter((user) => user.status === "active").length;
  const totalTeachers = users.filter((user) => user.role === "teacher").length;
  const totalStudents = users.filter((user) => user.role === "student").length;

  const handleAddUser = () => {
    const id = Math.max(...users.map((u) => u.id)) + 1;
    const today = new Date().toISOString().split("T")[0];

    const userToAdd = {
      ...newUser,
      id,
      joinDate: today,
      lastLogin: today,
    };

    // Add role-specific default values
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

  const getStatusColor = (status) => {
    return status === "Active"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";
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
              placeholder="Search users by name..."
              className="w-full py-2 pl-8 pr-4 text-sm border border-gray-300 rounded-lg sm:pl-10 sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            <FaPlus className="w-4 h-4 mr-2" />
            Add User
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-3 mb-6 sm:grid-cols-2 sm:gap-4 md:grid-cols-4 md:gap-6 md:mb-8">
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
              <FaUserCheck className="w-6 h-6 text-blue-500 sm:w-8 sm:h-8" />
              <div className="ml-3 sm:ml-4">
                <p className="text-xs text-gray-500 sm:text-sm">Active Users</p>
                <p className="text-xl font-bold text-gray-800 sm:text-2xl">
                  {activeUsers}
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
          </div>
        </div>

        {/* Users Table */}
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

        {/* Add User Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-md p-6 mx-4 bg-white rounded-lg">
              <h3 className="mb-4 text-lg font-semibold">Add New User</h3>
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newUser.name}
                    onChange={(e) =>
                      setNewUser({ ...newUser, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Role
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newUser.role}
                    onChange={(e) =>
                      setNewUser({ ...newUser, role: e.target.value })
                    }
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                  </select>
                </div>

                {newUser.role === "teacher" ? (
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Teaching Subjects (comma-separated)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Mathematics, Physics"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={newUser.teachingSubjects.join(", ")}
                      onChange={(e) =>
                        setNewUser({
                          ...newUser,
                          teachingSubjects: e.target.value
                            .split(",")
                            .map((s) => s.trim())
                            .filter((s) => s),
                        })
                      }
                    />
                  </div>
                ) : (
                  <>
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Admission Number
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., 2024001"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newUser.admissionNumber}
                        onChange={(e) =>
                          setNewUser({
                            ...newUser,
                            admissionNumber: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Form
                      </label>
                      <select
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newUser.form}
                        onChange={(e) =>
                          setNewUser({ ...newUser, form: e.target.value })
                        }
                      >
                        <option value="">Select Form</option>
                        <option value="Form 1">Form 1</option>
                        <option value="Form 2">Form 2</option>
                        <option value="Form 3">Form 3</option>
                        <option value="Form 4">Form 4</option>
                      </select>
                    </div>
                  </>
                )}
              </div>
              <div className="flex justify-end mt-6 space-x-2">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <FaTimes className="inline w-4 h-4 mr-2" />
                  Cancel
                </button>
                <button
                  onClick={handleAddUser}
                  className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                  <FaSave className="inline w-4 h-4 mr-2" />
                  Add User
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit User Modal */}
        {showEditModal && selectedUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-md p-6 mx-4 bg-white rounded-lg">
              <h3 className="mb-4 text-lg font-semibold">Edit User</h3>
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedUser.name}
                    onChange={(e) =>
                      setSelectedUser({ ...selectedUser, name: e.target.value })
                    }
                  />
                </div>

                {selectedUser.role === "teacher" ? (
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Teaching Subjects (comma-separated)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Mathematics, Physics"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={
                        selectedUser.teachingSubjects
                          ? selectedUser.teachingSubjects.join(", ")
                          : ""
                      }
                      onChange={(e) =>
                        setSelectedUser({
                          ...selectedUser,
                          teachingSubjects: e.target.value
                            .split(",")
                            .map((s) => s.trim())
                            .filter((s) => s),
                        })
                      }
                    />
                  </div>
                ) : (
                  <>
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Admission Number
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., 2024001"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={selectedUser.admissionNumber || ""}
                        onChange={(e) =>
                          setSelectedUser({
                            ...selectedUser,
                            admissionNumber: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700">
                        Form
                      </label>
                      <select
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={selectedUser.form || ""}
                        onChange={(e) =>
                          setSelectedUser({
                            ...selectedUser,
                            form: e.target.value,
                          })
                        }
                      >
                        <option value="">Select Form</option>
                        <option value="Form 1">Form 1</option>
                        <option value="Form 2">Form 2</option>
                        <option value="Form 3">Form 3</option>
                        <option value="Form 4">Form 4</option>
                      </select>
                    </div>
                  </>
                )}

                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectedUser.status}
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        status: e.target.value,
                      })
                    }
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end mt-6 space-x-2">
                <button
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <FaTimes className="inline w-4 h-4 mr-2" />
                  Cancel
                </button>
                <button
                  onClick={handleUpdateUser}
                  className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                  <FaSave className="inline w-4 h-4 mr-2" />
                  Update User
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

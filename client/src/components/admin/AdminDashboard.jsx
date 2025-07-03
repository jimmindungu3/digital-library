import { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import TeachersTable from "./TeachersTable";
import StudentsTable from "./StudentsTable";
import ResourcesTable from "./ResourcesTable";

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
    // ... existing handleAddUser implementation ...
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

  return (
    <div className="bg-gray-100">
      <div className="min-h-screen p-4 mx-auto bg-white max-w-7xl">
        {/* Header */}
        <header className="mb-6 border-b-2 border-gray-200 sm:mb-8">
          <div className="grid grid-cols-[auto_1fr] gap-3 sm:gap-4 items-start mb-2">
            <div className="text-2xl sm:text-3xl">👨‍💼</div>
            <div>
              <h1 className="mb-1 text-xl font-bold text-gray-800 sm:mb-2 sm:text-3xl">
                Admin Dashboard
              </h1>
              <p className="text-xs text-gray-500 sm:text-base">
                Manage Teachers, Students and Resources
              </p>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex ">
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
        {activeTab === "teacher" && (
          <TeachersTable
            teachers={users.filter((user) => user.role === "teacher")}
            handleEditUser={handleEditUser}
            handleDeleteUser={handleDeleteUser}
            getStatusColor={getStatusColor}
          />
        )}
        {activeTab === "student" && (
          <StudentsTable
            students={users.filter((user) => user.role === "student")}
            handleEditUser={handleEditUser}
            handleDeleteUser={handleDeleteUser}
            getStatusColor={getStatusColor}
          />
        )}
        {activeTab === "resources" && (
          <ResourcesTable
            resources={filteredResources}
            handleDeleteResource={handleDeleteResource}
          />
        )}

        {/* Modals */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            {/* Add User Modal */}
          </div>
        )}

        {showEditModal && selectedUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            {/* Edit User Modal */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

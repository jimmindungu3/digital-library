import { FaGraduationCap, FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const addNewStudent = () => {
  alert("New student added");
};

const StudentsTable = ({ students, getStatusColor }) => {
  return (
    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
      <div className="flex justify-between px-4 py-3 border-b border-gray-200 sm:px-6">
        <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">
          Student Management
        </h2>
        <button
          onClick={addNewStudent}
          className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          <FaPlus className="mr-2 text-white" />
          New Student
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase sm:px-6">
                Student Details
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
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 sm:px-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8">
                      <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full">
                        <FaGraduationCap className="w-4 h-4 text-blue-500" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {student.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        Adm: {student.admissionNumber}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 sm:px-6">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                      student.status
                    )}`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 sm:px-6">
                  {student.lastLogin}
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 sm:px-6">
                  <div>
                    <div>{student.materialsDownloaded} downloads</div>
                    <div className="text-xs text-gray-400">
                      Grade: {student.averageGrade}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 sm:px-6">
                  <div className="flex space-x-6">
                    <button
                      onClick={() => handleEditUser(student)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaEdit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteUser(student.id)}
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
  );
};

export default StudentsTable;

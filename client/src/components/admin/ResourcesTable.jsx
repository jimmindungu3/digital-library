import {
  FaFilePdf,
  FaFileWord,
  FaFilePowerpoint,
  FaFileVideo,
  FaFileImage,
  FaEye,
  FaDownload,
  FaTrash,
  FaFilter,
  FaTimes,
} from "react-icons/fa";
import { useState, useEffect } from "react";

const ResourcesTable = ({ resources, handleDeleteResource }) => {
  const [filters, setFilters] = useState({
    teacher: "",
    subject: "",
    type: "",
  });
  const [filteredResources, setFilteredResources] = useState(resources);
  const [showFilters, setShowFilters] = useState(false);

  // Get unique values for filter options
  const teachers = [...new Set(resources.map((resource) => resource.teacher))];
  const subjects = [...new Set(resources.map((resource) => resource.subject))];
  const types = [...new Set(resources.map((resource) => resource.type))];

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

  // Apply filters when filters or resources change
  useEffect(() => {
    const filtered = resources.filter((resource) => {
      return (
        (filters.teacher === "" || resource.teacher === filters.teacher) &&
        (filters.subject === "" || resource.subject === filters.subject) &&
        (filters.type === "" || resource.type === filters.type)
      );
    });
    setFilteredResources(filtered);
  }, [filters, resources]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      teacher: "",
      subject: "",
      type: "",
    });
  };

  const areFiltersActive = () => {
    return filters.teacher || filters.subject || filters.type;
  };

  return (
    <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">
              Resource Management
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {filteredResources.length} of {resources.length} resources
              {areFiltersActive() && " (filtered)"}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            {areFiltersActive() && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-600 bg-transparent rounded-md hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:ring-offset-1"
              >
                <FaTimes className="w-3.5 h-3.5 mr-1.5 text-gray-500" />
                Clear Filters
              </button>
            )}

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 focus:ring-offset-1 ${
                showFilters || areFiltersActive()
                  ? "text-blue-600 bg-blue-50 hover:bg-blue-100"
                  : "text-gray-600 bg-transparent hover:bg-gray-100"
              }`}
            >
              <FaFilter className="w-3.5 h-3.5 mr-1.5" />
              Filters
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="p-4 mt-4 rounded-lg bg-gray-50">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Teacher
                </label>
                <select
                  name="teacher"
                  value={filters.teacher}
                  onChange={handleFilterChange}
                  className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Teachers</option>
                  {teachers.map((teacher) => (
                    <option key={teacher} value={teacher}>
                      {teacher}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Subject
                </label>
                <select
                  name="subject"
                  value={filters.subject}
                  onChange={handleFilterChange}
                  className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Subjects</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Resource Type
                </label>
                <select
                  name="type"
                  value={filters.type}
                  onChange={handleFilterChange}
                  className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">All Types</option>
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Resource Details
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Subject & Teacher
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Upload Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Engagement
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => {
                const { icon, color } = getFileTypeDetails(resource.type);
                return (
                  <tr key={resource.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <div
                            className={`flex items-center justify-center w-10 h-10 rounded-full ${color} text-white`}
                          >
                            {icon}
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {resource.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {resource.type}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {resource.subject}
                      </div>
                      <div className="text-sm text-gray-500">
                        By: {resource.teacher}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {resource.uploadDate}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <FaEye className="w-3.5 h-3.5 mr-2 text-gray-400" />
                          <span>{resource.views} views</span>
                        </div>
                        <div className="flex items-center">
                          <FaDownload className="w-3.5 h-3.5 mr-2 text-gray-400" />
                          <span>{resource.downloads} downloads</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleDeleteResource(resource.id)}
                          className="text-gray-500 hover:text-blue-600"
                        >
                          <FaEye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteResource(resource.id)}
                          className="text-gray-500 hover:text-red-600"
                        >
                          <FaTrash className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-8 text-center">
                  <div className="text-gray-500">
                    <svg
                      className="w-12 h-12 mx-auto text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-700">
                      No resources found
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {areFiltersActive()
                        ? "Try adjusting your filters"
                        : "Upload a resource to get started"}
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResourcesTable;

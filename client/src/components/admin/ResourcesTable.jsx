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
      <div className="px-4 py-3 border-b border-gray-200 sm:px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">
            Resource Management
          </h2>
          <div className="flex items-center space-x-2">
            {areFiltersActive() && (
              <button
                onClick={clearFilters}
                className="flex items-center px-3 py-1 text-xs text-red-600 bg-red-100 rounded-full hover:bg-red-200"
              >
                <FaTimes className="mr-1" />
                Clear Filters
              </button>
            )}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-3 py-1 text-xs text-white bg-blue-500 rounded-full hover:bg-blue-600"
            >
              <FaFilter className="mr-1" />
              Filters
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        <div className="p-4 mt-4 rounded-lg bg-gray-50">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label className="block text-xs font-medium text-gray-700">
                Teacher
              </label>
              <select
                name="teacher"
                value={filters.teacher}
                onChange={handleFilterChange}
                className="w-full p-2 mt-1 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
              <label className="block text-xs font-medium text-gray-700">
                Subject
              </label>
              <select
                name="subject"
                value={filters.subject}
                onChange={handleFilterChange}
                className="w-full p-2 mt-1 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
              <label className="block text-xs font-medium text-gray-700">
                Resource Type
              </label>
              <select
                name="type"
                value={filters.type}
                onChange={handleFilterChange}
                className="w-full p-2 mt-1 text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => {
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
              })
            ) : (
              <tr>
                <td colSpan="5" className="px-4 py-6 text-center text-gray-500">
                  No resources found matching your filters
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Resources Count */}
        <div className="px-6 py-4 text-sm text-right text-gray-500 bg-gray-50">
          Showing {filteredResources.length} of {resources.length} resources
          {areFiltersActive() && " (filtered)"}
        </div>
      </div>
    </div>
  );
};

export default ResourcesTable;

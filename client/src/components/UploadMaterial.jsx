import Header from "./Header";
import Footer from "./Footer";
import { useState, useRef } from "react";
import {
  FaFileWord,
  FaFilePowerpoint,
  FaFilePdf,
  FaFileVideo,
  FaFileImage,
  FaUpload,
  FaTimes,
  FaSpinner,
} from "react-icons/fa";

const UploadMaterial = () => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subject: "",
    gradeLevel: "",
    fileType: "",
    tags: "",
  });

  const fileTypes = [
    { type: "PDF", icon: <FaFilePdf className="text-red-500" /> },
    { type: "Video", icon: <FaFileVideo className="text-purple-500" /> },
    { type: "PPT", icon: <FaFilePowerpoint className="text-orange-500" /> },
    { type: "Word", icon: <FaFileWord className="text-blue-500" /> },
    { type: "Image", icon: <FaFileImage className="text-green-500" /> },
  ];

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 50 * 1024 * 1024) {
        setError("File size must be less than 50MB");
        return;
      }
      setError("");
      setFile(selectedFile);
      const extension = selectedFile.name.split(".").pop().toLowerCase();
      let detectedType = "";

      if (["pdf"].includes(extension)) detectedType = "PDF";
      else if (["mp4", "mov", "avi"].includes(extension))
        detectedType = "Video";
      else if (["ppt", "pptx"].includes(extension)) detectedType = "PPT";
      else if (["doc", "docx"].includes(extension)) detectedType = "Word";
      else if (["jpg", "jpeg", "png", "gif"].includes(extension))
        detectedType = "Image";

      setFormData((prev) => ({ ...prev, fileType: detectedType }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFormData((prev) => ({ ...prev, fileType: "" }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !formData.title || !formData.subject || !formData.fileType) {
      setError("Please fill all required fields and select a file");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);
    setError("");

    const formDataToSend = new FormData();
    formDataToSend.append("file", file);
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("gradeLevel", formData.gradeLevel);
    formDataToSend.append("fileType", formData.fileType);
    formDataToSend.append("tags", formData.tags);
    // Add userId when you implement authentication
    // formDataToSend.append("userId", userId);

    try {
      // Create progress event handler
      const xhr = new XMLHttpRequest();
      xhr.upload.addEventListener("progress", (event) => {
        if (event.lengthComputable) {
          const progress = Math.round((event.loaded / event.total) * 90);
          setUploadProgress(progress);
        }
      });

      const response = await fetch("http://localhost:5000/api/materials", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Upload failed");
      }

      const data = await response.json();
      console.log(data);
      setUploadProgress(100);

      // Close the upload modal after a short delay
      setTimeout(() => {}, 1000);
    } catch (error) {
      console.error("Upload failed:", error);
      setError(error.message || "Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto bg-white max-w-4xl ">
        <Header />

        {/* Page header */}
        <header className="p-4 mb-6 border-b border-gray-200 sm:mb-8">
          <div className="grid grid-cols-[auto_1fr] gap-3 sm:gap-4 items-start">
            <div className="text-2xl sm:text-3xl">👤</div>
            <div>
              <h1 className="mb-1 text-xl font-bold text-gray-800 sm:mb-2 sm:text-3xl">
                Mr. Mwangi
              </h1>
            </div>
          </div>
        </header>

        {/* Form */}
        <div className="px-6 mb-20 rounded-lg">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Upload New Material.
            </h2>
          </div>

          {error && (
            <div className="p-3 mb-4 text-red-700 bg-red-100 border border-red-200 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* File Upload Section */}
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Select File (Required)
              </label>
              {!file ? (
                <div
                  className="flex flex-col items-center justify-center p-8 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50"
                  onClick={() => fileInputRef.current.click()}
                >
                  <FaUpload className="w-8 h-8 mb-2 text-gray-400" />
                  <p className="mb-1 text-sm font-medium text-gray-600">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PDF, PPT, Word, Video, or Image (Max 50MB)
                  </p>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.ppt,.pptx,.doc,.docx,.jpg,.jpeg,.png,.gif,.mp4,.mov,.avi"
                  />
                </div>
              ) : (
                <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {fileTypes.find((ft) => ft.type === formData.fileType)
                        ?.icon || <FaFileWord className="text-blue-500" />}
                      <div>
                        <p className="font-medium text-gray-800">{file.name}</p>
                        <p className="text-sm text-gray-500">
                          {(file.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="p-1 text-gray-500 rounded-full hover:bg-gray-200"
                      disabled={isUploading}
                    >
                      <FaTimes />
                    </button>
                  </div>

                  {isUploading && (
                    <div className="mt-3">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                      <p className="mt-1 text-xs text-right text-gray-500">
                        {uploadProgress}% uploaded
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Title (Required)
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Subject (Required)
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select subject</option>
                  <option value="English & Literature">
                    English & Literature
                  </option>
                  <option value="Kiswahili">Kiswahili</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Biology">Biology</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="History and Government">
                    History and Government
                  </option>
                  <option value="Geography">Geography</option>
                  <option value="Christian Religious Education">
                    Christian Religious Education
                  </option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Computer Studies">Computer Studies</option>
                  <option value="Business Studies">Business Studies</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Grade Level
                </label>
                <select
                  name="gradeLevel"
                  value={formData.gradeLevel}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select grade level</option>
                  <option value="Form 1">Form 1</option>
                  <option value="Form 2">Form 2</option>
                  <option value="Form 3">Form 3</option>
                  <option value="Form 4">Form 4</option>
                  <option value="Grade 6">Grade 6</option>
                  <option value="Grade 7">Grade 7</option>
                  <option value="Grade 8">Grade 8</option>
                  <option value="Grade 6">Grade 9</option>
                  <option value="Grade 10">Grade 10</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  File Type (Required)
                </label>
                <div className="flex flex-wrap gap-2">
                  {fileTypes.map((fileType) => (
                    <button
                      key={fileType.type}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          fileType: fileType.type,
                        }))
                      }
                      className={`flex items-center px-3 py-2 text-sm border rounded-lg ${
                        formData.fileType === fileType.type
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {fileType.icon}
                      <span className="ml-1">{fileType.type}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>

              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="e.g. algebra, trigonometry, exam-prep"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                disabled={isUploading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                disabled={isUploading || !file}
              >
                {isUploading ? (
                  <>
                    <FaSpinner className="w-4 h-4 mr-2 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <FaUpload className="w-4 h-4 mr-2" />
                    Upload
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UploadMaterial;

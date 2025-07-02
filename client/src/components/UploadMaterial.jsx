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
import Footer from "./Footer";
import Header from "./Header";

const UploadMaterial = ({ onClose, onUpload }) => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
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
      setFile(selectedFile);
      // Auto-detect file type based on extension
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
      alert("Please fill all required fields and select a file");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress (in a real app, you'd use actual upload API)
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return prev;
        }
        return prev + 10;
      });
    }, 300);

    try {
      // In a real app, you would upload to your backend here
      // const formDataToSend = new FormData();
      // formDataToSend.append("file", file);
      // formDataToSend.append("metadata", JSON.stringify(formData));

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 3000));

      clearInterval(interval);
      setUploadProgress(100);

      // Simulate successful upload
      const uploadedMaterial = {
        id: Date.now(),
        ...formData,
        fileName: file.name,
        fileSize: (file.size / (1024 * 1024)).toFixed(2) + " MB",
        uploadDate: new Date().toLocaleDateString(),
      };

      onUpload(uploadedMaterial);
      onClose();
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto bg-white max-w-7xl ">
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
              Upload new and engaging learning materails.
            </h2>
          </div>

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
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Biology">Biology</option>
                  <option value="English">English</option>
                  <option value="Business Studies">Business Studies</option>
                  <option value="Computer Studies">Computer Studies</option>
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
                onClick={onClose}
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

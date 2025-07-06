import {
  FaFileWord,
  FaFilePowerpoint,
  FaFilePdf,
  FaFileVideo,
  FaFileImage,
  FaDownload,
  FaEye,
  FaPlay,
} from "react-icons/fa";
import Footer from "./Footer";
import Header from "./Header";

const MathMaterialsView = () => {
  // Hardcoded Mathematics materials
  const mathMaterials = [
    {
      id: 1,
      title: "Introduction to Calculus",
      type: "PDF",
      teacher: "Mr. Mwangi",
      uploadDate: "2 days ago",
      downloads: 245,
    },
    {
      id: 2,
      title: "Algebra Fundamentals",
      type: "PDF",
      teacher: "Mr. Kariuki",
      uploadDate: "1 week ago",
      downloads: 189,
    },
    {
      id: 3,
      title: "Trigonometry Concepts Explained",
      type: "Video",
      teacher: "Ms. Njeri",
      uploadDate: "3 days ago",
      downloads: 132,
    },
    {
      id: 4,
      title: "Geometry Theorems and Proofs",
      type: "Word",
      teacher: "Mr. Mwangi",
      uploadDate: "5 days ago",
      downloads: 98,
    },
    {
      id: 5,
      title: "Statistics and Probability",
      type: "PPT",
      teacher: "Mr. Otieno",
      uploadDate: "1 day ago",
      downloads: 175,
    },
    {
      id: 6,
      title: "Linear Algebra Basics",
      type: "PDF",
      teacher: "Mr. Kariuki",
      uploadDate: "2 weeks ago",
      downloads: 210,
    },
    {
      id: 7,
      title: "Differential Equations",
      type: "PDF",
      teacher: "Mr. Mwangi",
      uploadDate: "4 days ago",
      downloads: 87,
    },
    {
      id: 8,
      title: "Number Theory Concepts",
      type: "Word",
      teacher: "Ms. Njeri",
      uploadDate: "1 week ago",
      downloads: 76,
    },
    {
      id: 9,
      title: "Mathematical Logic",
      type: "PPT",
      teacher: "Mr. Otieno",
      uploadDate: "3 days ago",
      downloads: 92,
    },
    {
      id: 10,
      title: "Coordinate Geometry",
      type: "PDF",
      teacher: "Mr. Mwangi",
      uploadDate: "5 days ago",
      downloads: 145,
    },
    {
      id: 11,
      title: "Calculus Problem Set",
      type: "PDF",
      teacher: "Mr. Kariuki",
      uploadDate: "2 days ago",
      downloads: 203,
    },
    {
      id: 12,
      title: "Vectors and Matrices",
      type: "Video",
      teacher: "Ms. Njeri",
      uploadDate: "1 week ago",
      downloads: 118,
    },
    {
      id: 13,
      title: "Complex Numbers",
      type: "Word",
      teacher: "Mr. Mwangi",
      uploadDate: "3 days ago",
      downloads: 97,
    },
    {
      id: 14,
      title: "Discrete Mathematics",
      type: "PPT",
      teacher: "Mr. Otieno",
      uploadDate: "4 days ago",
      downloads: 84,
    },
    {
      id: 15,
      title: "Mathematical Induction",
      type: "PDF",
      teacher: "Mr. Kariuki",
      uploadDate: "1 week ago",
      downloads: 112,
    },
    {
      id: 16,
      title: "Graph Theory Basics",
      type: "Word",
      teacher: "Ms. Njeri",
      uploadDate: "2 days ago",
      downloads: 65,
    },
    {
      id: 17,
      title: "Probability Distributions",
      type: "PPT",
      teacher: "Mr. Otieno",
      uploadDate: "5 days ago",
      downloads: 143,
    },
    {
      id: 18,
      title: "Integration Techniques",
      type: "PDF",
      teacher: "Mr. Mwangi",
      uploadDate: "3 days ago",
      downloads: 178,
    },
    {
      id: 19,
      title: "Sequences and Series",
      type: "Video",
      teacher: "Ms. Njeri",
      uploadDate: "1 week ago",
      downloads: 121,
    },
    {
      id: 20,
      title: "Mathematical Modeling",
      type: "Word",
      teacher: "Mr. Kariuki",
      uploadDate: "2 days ago",
      downloads: 89,
    },
  ];

  const getFileIcon = (type) => {
    switch (type) {
      case "PDF":
        return <FaFilePdf className="w-4 h-4" />;
      case "Video":
        return <FaFileVideo className="w-4 h-4" />;
      case "PPT":
        return <FaFilePowerpoint className="w-4 h-4" />;
      case "Word":
        return <FaFileWord className="w-4 h-4" />;
      case "Image":
        return <FaFileImage className="w-4 h-4" />;
      default:
        return <FaFileWord className="w-4 h-4" />;
    }
  };

  const getFileColor = (type) => {
    switch (type) {
      case "PDF":
        return "bg-red-500";
      case "Video":
        return "bg-purple-500";
      case "PPT":
        return "bg-orange-500";
      case "Word":
        return "bg-blue-500";
      case "Image":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="p-6 mx-auto bg-white max-w-7xl">
        <Header />
        <h2 className="mb-4 text-xl font-semibold">Mathematics Materials</h2>

        <div className="space-y-4">
          {mathMaterials.map((material) => (
            <div key={material.id} className="p-4 rounded-lg bg-gray-50">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-gray-800">{material.title}</h3>
                <span
                  className={`flex items-center px-2 py-1 text-xs text-white rounded-md ${getFileColor(
                    material.type
                  )}`}
                >
                  {getFileIcon(material.type)}
                  {material.type}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                <p>Teacher: {material.teacher}</p>
                <p>Uploaded: {material.uploadDate}</p>
                <p>Views: {material.downloads}</p>
              </div>
              <div className="flex mt-3 space-x-2">
                {material.type !== "Video" && material.type !== "Image" ? (
                  <button className="flex items-center px-4 py-1 text-sm font-medium text-blue-600 bg-blue-100 border rounded-md border-gray-50 hover:border-blue-400">
                    <FaEye className="w-4 h-4 mr-2" />
                    View
                  </button>
                ) : null}
                <button className="flex items-center px-4 py-1 text-sm text-green-700 bg-green-200 border rounded border-gray-50 hover:border-green-400">
                  {material.type === "Video" ? (
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
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MathMaterialsView;

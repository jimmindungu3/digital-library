import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentDashboard from "../src/components/StudentDashboard";
import TeacherDashboard from "../src/components/TeacherDashboard";
import Home from "../src/components/Home";
import UploadMaterial from "./components/UploadMaterial";
import EditMaterial from "./components/EditMaterial";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/upload-material" element={<UploadMaterial />} />
        <Route path="/edit-material" element={<EditMaterial />} />
      </Routes>
    </Router>
  );
};

export default App;

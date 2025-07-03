import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import StudentDashboard from "./components/StudentDashboard";
import TeacherDashboard from "./components/TeacherDashboard";
import UploadMaterial from "./components/UploadMaterial";
import EditMaterial from "./components/EditMaterial";
import StudentLogin from "./components/StudentLogin";
import TeacherLogin from "./components/TeacherLogin";
import AdminDashboard from "./components/AdminDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/upload-material" element={<UploadMaterial />} />
        <Route path="/edit-material" element={<EditMaterial />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
      </Routes>
    </Router>
  );
};

export default App;

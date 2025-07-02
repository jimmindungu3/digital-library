import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentDashboard from "../src/components/StudentDashboard";
import TeacherDashboard from "../src/components/TeacherDashboard";
import Home from "../src/components/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

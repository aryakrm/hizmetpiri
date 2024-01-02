import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import TaskForm from "../components/TaskForm/TaskForm";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="/create-task" element={<TaskForm/>} />
    </Routes>
  );
}

export default Routers;

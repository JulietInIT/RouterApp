import {Routes, Route } from "react-router";
import Events from "./pages/Events";
import Event from "./pages/Event";
import MainLayout from "./layout/MainLayout"
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile"


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route index element={<Events />} />
      <Route path="/events/:id" element={<Event />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App

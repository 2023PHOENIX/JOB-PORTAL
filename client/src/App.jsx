import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import JobListing from "./pages/job/JobListing";
function App() {
  return (
    <>
      <BrowserRouter basename="/api">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<JobListing/> } />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import AddJob from "./pages/job/AddJob";
import JobListing from "./pages/job/JobListing";
import ShowJob from "./pages/job/ShowJob"; 
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addJob" element={<AddJob />} />
          <Route path="/showJob" element={<ShowJob/> }/>
          <Route path="/" element={<JobListing />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import AddJob from "./pages/job/AddJob";
import JobListing from "./pages/job/JobListing";
import ShowJob from "./pages/job/ShowJob";
import SearchJobProvider from "./context/SearchJobProvider";
import EditJob from "./pages/job/EditJob";
function App() {
  return (
    <>
      <SearchJobProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addJob" element={<AddJob />} />
            <Route path="/showJob" element={<ShowJob />} />
            <Route path='/editJob' element={<EditJob />}/>
            <Route path="/" element={<JobListing />} />
          </Routes>
        </BrowserRouter>
      </SearchJobProvider>
      <ToastContainer />
    </>
  );
}

export default App;

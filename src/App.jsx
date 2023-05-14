import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Community from "./Pages/Community";
import Courses from "./Pages/Courses";
import Partner from "./Pages/Partner";
import Blogs from "./Pages/Blogs";
import Mentorship from "./Pages/Mentorship";
import Header from "./Pages/Header";

// eslint-disable-next-line react-refresh/only-export-components
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
         <Home />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

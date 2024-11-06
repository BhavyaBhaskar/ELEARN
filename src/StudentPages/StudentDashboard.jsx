/* eslint-disable no-unused-vars */
import { useState } from "react";
import Header from "./Header";
import StudentHome from "./StudentHome";
import StudentLibrary from "./StudentLibrary";
import StudentCourse from "./StudentCourse";
import ContactUs from "./ContactUs";
import StudentBlog from "./StudentBlog";

function StudentDashboard() {
  const [currPage, setCurrPage] = useState("Home");

  return (
    <div>
      <Header setCurrPage={setCurrPage} />

      {currPage == "Home" && <StudentHome />}
      {currPage == "Library" && <StudentLibrary />}
      {currPage == "Course" && <StudentCourse />}
      {currPage == "Contact" && <ContactUs />}
      {currPage == "Blog" && <StudentBlog />}
    </div>
  );
}

export default StudentDashboard;

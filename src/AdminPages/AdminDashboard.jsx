/* eslint-disable no-unused-vars */
import Home from "./Home";
import Categories from "./Categories";
import Courses from "./Courses";

import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Content from "./Content";
import Library from "./Library";
import Instructor from "./Instructor";
import Blog from "./Blog";

function Dashboard() {
  const [currPage, setCurrPage] = useState("Home");

  return (
    <div style={{ display: "flex" }}>
      <div style={{}}>
        <Sidebar setCurrPage={setCurrPage} />
      </div>
      <div style={{}}>
        {currPage == "Home" && <Home />}
        {currPage == "Categories" && <Categories />}
        {currPage == "Courses" && <Courses />}
        {currPage == "Content" && <Content />}
        {currPage == "Library" && <Library />}
        {currPage == "Instructor" && <Instructor />}
        {currPage == "Blog" && <Blog />}
      </div>
    </div>
  );
}

export default Dashboard;

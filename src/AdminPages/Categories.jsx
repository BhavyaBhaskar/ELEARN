/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import supabase from "../../supabase.js";

/* eslint-disable react/no-unescaped-entities */
function Categories() {
  const [courseCategory, setCourseCategory] = useState("");
  const courses = handleGetCourseCategory();
  console.log(courses);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1
        style={{
          paddingLeft: "8vw",
        }}
      >
        Welcome "INSERT ADMIN NAME"
      </h1>
      <hr
        style={{
          width: "100vw",
          height: "1vh",
          backgroundColor: "lightgreen",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4vh",
          width: "50vw",
          paddingLeft: "8vw",
        }}
      >
        <h4>Insert Course Categories</h4>
        <span>COURSE CATEGORY</span>
        <input
          placeholder="Full Name"
          value={courseCategory}
          onChange={(e) => setCourseCategory(e.target.value)}
        />
        <button
          onClick={() =>
            handleAddCourseCategory({
              courseCategory,
              setCourseCategory,
            })
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
}

async function handleAddCourseCategory({ courseCategory, setCourseCategory }) {
  if (courseCategory !== "") {
    const { data, error } = await supabase
      .from("CourseCategory")
      .insert([{ CourseCategory: courseCategory }])
      .select();
  }

  setCourseCategory("");
}

async function handleGetCourseCategory() {
  const { data, error } = await supabase.from("CourseCategory").select("*");

  return data;
}

export default Categories;

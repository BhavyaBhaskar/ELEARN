/* eslint-disable no-unused-vars */
import { useState } from "react";
import supabase from "../../supabase.js";

/* eslint-disable react/no-unescaped-entities */
function Courses() {
  const [courseName, setCourseName] = useState("");
  const [bookSelection, setBookSelection] = useState("");
  const [categorySelection, setCategorySelection] = useState("");
  const [instructorSelection, setInstructionSelection] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
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
          gap: "1vh",
          width: "50vw",
          paddingLeft: "8vw",
        }}
      >
        <h3>Insert Course</h3>
        <span>COURSE NAME</span>
        <input
          placeholder="Full Name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <span>BOOK SELECTION</span>
        <input
          placeholder="Select Option"
          value={bookSelection}
          onChange={(e) => setBookSelection(e.target.value)}
        />
        <span>CATEGORIE SELECTION</span>
        <input
          placeholder="Select Option"
          value={categorySelection}
          onChange={(e) => setCategorySelection(e.target.value)}
        />
        <span>INSTRUCTOR SELECTION</span>
        <input
          placeholder="Select Option"
          value={instructorSelection}
          onChange={(e) => setInstructionSelection(e.target.value)}
        />
        <span>DESCRIPTION</span>
        <textarea
          style={{ height: "15vh" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={() =>
            handleAddCourse({
              courseName,
              bookSelection,
              categorySelection,
              instructorSelection,
              description,
            })
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
}

async function handleAddCourse({
  courseName,
  bookSelection,
  categorySelection,
  instructorSelection,
  description,
}) {
  const { data, error } = await supabase
    .from("CourseList")
    .insert([
      {
        CourseName: courseName,
        BookSelection: bookSelection,
        CategorySelection: categorySelection,
        InstructorSelection: instructorSelection,
        Description: description,
      },
    ])
    .select();

  console.log(data);
}

export default Courses;

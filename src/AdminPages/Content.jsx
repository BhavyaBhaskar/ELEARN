/* eslint-disable no-unused-vars */
import { useState } from "react";
import supabase from "../../supabase.js";

/* eslint-disable react/no-unescaped-entities */
function Content() {
  const [lectureName, setLectureName] = useState("");
  const [courseSelection, setCourseSelection] = useState("");
  const [onlineLink, setOnlineLink] = useState("");
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
          gap: "2vh",
          width: "50vw",
          paddingLeft: "8vw",
        }}
      >
        <h3>Insert Course Content</h3>
        <span>LECTURE NAME</span>
        <input
          placeholder="Lecture Name"
          value={lectureName}
          onChange={(e) => setLectureName(e.target.value)}
        />
        <span>COURSE SELECTION</span>
        <input
          placeholder="Course Selection"
          value={courseSelection}
          onChange={(e) => setCourseSelection(e.target.value)}
        />
        <span>ONLINE LINK</span>
        <input
          placeholder="Online Link"
          value={onlineLink}
          onChange={(e) => setOnlineLink(e.target.value)}
        />
        <span>DESCRIPTION</span>
        <textarea
          style={{ height: "25vh" }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={() =>
            handleAddCourseContent({
              lectureName,
              courseSelection,
              onlineLink,
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

async function handleAddCourseContent({
  lectureName,
  courseSelection,
  onlineLink,
  description,
}) {
  const { data, error } = await supabase
    .from("CourseContent")
    .insert([
      {
        LectureName: lectureName,
        CourseSelection: courseSelection,
        OnlineLink: onlineLink,
        Description: description,
      },
    ])
    .select();

  console.log(data);
}

export default Content;

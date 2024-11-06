/* eslint-disable no-unused-vars */
import { useState } from "react";
import supabase from "../../supabase.js";

/* eslint-disable react/no-unescaped-entities */
function Home() {
  const [fullName, setFullName] = useState("");
  const [adminType, setAdminType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState();

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
        <h3>Insert Admin</h3>
        <span>FULL NAME</span>
        <input
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <span>ADMIN TYPE</span>
        <input
          placeholder="Select Option"
          value={adminType}
          onChange={(e) => setAdminType(e.target.value)}
        />
        <span>EMAIL</span>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>PASSWORD</span>
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>CONFIRM PASSWORD</span>
        <input
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          onClick={() =>
            handleAddAdmin({
              fullName,
              adminType,
              email,
              password,
              confirmPassword,
            })
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
}

async function handleAddAdmin({
  fullName,
  adminType,
  email,
  password,
  confirmPassword,
}) {
  password === confirmPassword ? console.log("Correct") : console.log("Wrong");

  const { data, error } = await supabase
    .from("Admin")
    .insert([
      {
        FullName: fullName,
        AdminType: adminType,
        Email: email,
        Password: password,
      },
    ])
    .select();
}

async function handleAddPost({
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

export default Home;

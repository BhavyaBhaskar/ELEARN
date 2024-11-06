/* eslint-disable no-unused-vars */
import { useState } from "react";
import supabase from "../../supabase.js";

/* eslint-disable react/no-unescaped-entities */
function Instructor() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [phone, setPhone] = useState("");
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
        <h3>Insert Instructor</h3>
        <span>FULL NAME</span>
        <input
          placeholder="Full Name"
          onChange={(e) => setFullName(e.target.value)}
        />
        <span>Email</span>
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <span>QUALIFICATION</span>
        <input
          placeholder="Qualification"
          onChange={(e) => setQualification(e.target.value)}
        />
        <span>PHONE</span>
        <input placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
        <span>DESCRIPTION</span>
        <textarea
          style={{ height: "15vh" }}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={() =>
            handleAddInstructor({
              fullName,
              email,
              qualification,
              phone,
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

async function handleAddInstructor({
  fullName,
  email,
  qualification,
  phone,
  description,
}) {
  const { data, error } = await supabase
    .from("Instructor")
    .insert([
      {
        FullName: fullName,
        Email: email,
        Qualification: qualification,
        Phone: phone,
        Description: description,
      },
    ])
    .select();

  console.log(data);
}

export default Instructor;

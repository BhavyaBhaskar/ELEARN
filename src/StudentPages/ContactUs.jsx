/* eslint-disable no-unused-vars */
import { useState } from "react";
import supabase from "../../supabase.js";

function ContactUs() {
  const [contact, setContact] = useState();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <i>
        <h1>Contact Us</h1>
      </i>
      <i>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
            fontSize: "4vh",
            border: "solid",
            padding: "3vh",
          }}
        >
          <b>Full Name</b>
          <input
            placeholder="FULL NAME"
            style={{ width: "40vw", height: "5vh" }}
            onChange={(e) => setFullName(e.target.value)}
          />
          <b>Email</b>
          <input
            placeholder="EMAIL"
            style={{ width: "40vw", height: "5vh" }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <b>Message</b>
          <textarea
            placeholder="MESSAGE"
            style={{ width: "40vw", height: "10vh" }}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            style={{
              marginLeft: "34vw",
              height: "4vh",
            }}
            onClick={() =>
              handleAddContact({
                fullName,
                email,
                message,
              })
            }
          >
            SUBMIT
          </button>
        </div>
      </i>
    </div>
  );
}

async function handleAddContact({ fullName, email, message }) {
  console.log(fullName);
  console.log(email);
  console.log(message);

  const { data, error } = await supabase
    .from("Contact")
    .insert([{ FullName: fullName, Email: email, Message: message }])
    .select();
}

export default ContactUs;

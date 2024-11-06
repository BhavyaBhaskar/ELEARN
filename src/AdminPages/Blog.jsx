import { useState } from "react";
import supabase from "../../supabase.js";

/* eslint-disable react/no-unescaped-entities */
function Blog() {
  const [postTitle, setPostTitle] = useState("");
  const [postType, setPostType] = useState("");
  const [postDescription, setPostDescription] = useState("");

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
          paddingTop: "10vh",
        }}
      >
        <h3>Insert Post</h3>
        <span>TITLE</span>
        <input
          placeholder="Title"
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <span>POST TYPE</span>
        <input
          placeholder="Post Type"
          onChange={(e) => setPostType(e.target.value)}
        />
        <span>POST DESCRIPTION</span>
        <textarea
          style={{ height: "10vh" }}
          onChange={(e) => setPostDescription(e.target.value)}
        ></textarea>
        <button
          onClick={() =>
            handleAddPost({ postTitle, postType, postDescription })
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
}

async function handleAddPost({ postTitle, postType, postDescription }) {
  const { data, error } = await supabase
    .from("Post")
    .insert([
      {
        PostTitle: postTitle,
        PostLink: postType,
        PostContent: postDescription,
      },
    ])
    .select();

  console.log(data);
}

export default Blog;

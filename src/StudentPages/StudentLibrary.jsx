/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import supabase from "../../supabase";
import LibraryBook from "./LibraryBook";

function StudentLibrary() {
  let query;

  const library = {
    Book1: {
      BookName: "The Programmatic Programmer",
      BookLink: "https://example.com/",
      BookCategory: "Computer Science Engineering",
      Description: "Object Oriented Programming in Java",
    },
    Book2: {
      BookName: "Engineering and the Mind's Eye",
      BookLink: "https://example.com/",
      BookCategory: "Mechanical Engineering",
      Description: "Mechanical Motor",
    },
    Book3: {
      BookName: "Digital Logic Design",
      BookLink: "https://example.com/",
      BookCategory: "Electronics Engineering",
      Description: "Electronics Logic Gates",
    },
  };

  useEffect(() => {
    query = getLibrary();

    // console.log(query);
  }, [query]);

  console.log(library);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>
        <i>Library</i>
      </h1>
      <table border="1" style={{ backgroundColor: "lightgrey", width: "80vw" }}>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Book Link</th>
            <th>Book Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(library).map((book, index) => (
            <tr key={index}>
              <td style={{ height: "10vh" }}>{book.BookName}</td>
              <td>
                {book.BookLink ? (
                  <a href={book.BookLink} target="_blank">
                    Link
                  </a>
                ) : (
                  "No Link Available"
                )}
              </td>
              <td>{book.BookCategory}</td>
              <td>{book.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

async function getLibrary() {
  let { data: Library } = await supabase.from("LibraryBook").select("*");

  return Library;
}

export default StudentLibrary;

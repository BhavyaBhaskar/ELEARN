/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function Sidebar({ setCurrPage }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "grey",
        height: "100vh",
        width: "10vw",
        paddingLeft: "2vw",
        gap: "5vh",
        justifyContent: "center",
        cursor: "grab",
      }}
    >
      <span onClick={() => setCurrPage("Home")}>HOME</span>
      <span onClick={() => setCurrPage("Categories")}>CATEGORIES</span>
      <span onClick={() => setCurrPage("Courses")}>COURSES</span>
      <span onClick={() => setCurrPage("Content")}>CONTENT</span>
      <span onClick={() => setCurrPage("Blog")}>BLOG</span>
      <span onClick={() => setCurrPage("Library")}>LIBRARY</span>
      <span onClick={() => setCurrPage("Instructor")}>INSTRUCTORS</span>
      <span>LOGOUT</span>
    </div>
  );
}

export default Sidebar;

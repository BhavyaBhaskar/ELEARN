/* eslint-disable react/prop-types */
function Header({ setCurrPage }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "1vw",
          paddingRight: "2vw",
          cursor: "grab",
        }}
      >
        <h1>
          <i>E LEARN PRO</i>
        </h1>
        <i>
          <div style={{ display: "flex", gap: "2vw" }}>
            <span onClick={() => setCurrPage("Home")}>HOME</span>
            <span onClick={() => setCurrPage("Course")}>COURSES</span>
            <span onClick={() => setCurrPage("Blog")}>BLOG</span>
            <span onClick={() => setCurrPage("Team")}>TEAM</span>
            <span onClick={() => setCurrPage("Library")}>LIBRARY</span>
            <span onClick={() => setCurrPage("Contact")}>CONTACT US</span>
          </div>
        </i>
      </div>
      <hr style={{ height: "1vh", backgroundColor: "lightgreen" }} />
    </div>
  );
}

export default Header;

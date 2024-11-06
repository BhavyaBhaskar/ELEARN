/* eslint-disable react/no-unescaped-entities */
function Library() {
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
        <h4>Insert Book</h4>
        <span>BOOK NAME</span>
        <input placeholder="Full Name" />
        <span>BOOK LINK</span>
        <input placeholder="Book Link" />
        <span>CATEGORY SELECTION</span>
        <input placeholder="Select Option" />
        <span>Description</span>
        <textarea style={{ height: "15vh" }} />

        <button>Submit</button>
      </div>
    </div>
  );
}

export default Library;

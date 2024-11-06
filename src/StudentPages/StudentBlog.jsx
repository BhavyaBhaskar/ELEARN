function StudentBlog() {
  let query;

  const library = {
    post1: {
      PostTitle: "The Programmatic Programmer",
      PostType: "QUIZ LINK",
      PostDescription: "https://example.com/",
    },
    post2: {
      PostTitle: "Engineering and the Mind's Eye",
      PostType: "VIDEO LECTURE",
      PostDescription: "https://example.com/",
    },
  };

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
        <i>Blog Communicaton</i>
      </h1>
      <table border="1" style={{ backgroundColor: "lightgrey", width: "80vw" }}>
        <thead>
          <tr>
            <th>Post Title</th>
            <th>Post Type</th>
            <th>Post Description</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(library).map((post, index) => (
            <tr key={index}>
              <td style={{ height: "10vh" }}>{post.PostTitle}</td>
              <td>{post.PostType}</td>
              <td>{post.PostDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentBlog;

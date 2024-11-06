/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function LibraryBook({ BookName, BookLink, BookCategory, Description }) {
  return (
    <li>
      <span>{BookName}</span>
      <span>{BookLink}</span>
      <span>{BookCategory}</span>
      <span>{Description}</span>
    </li>
  );
}

export default LibraryBook;

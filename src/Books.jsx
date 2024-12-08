// import React, { useEffect, useState } from "react";

// function Books() {
//   const [books, setBooks] = useState([]);
//   const [searchTerm, SetSearchTerm] = useState("gandhi");

//   useEffect(() => {
//     getBookData();
//   }, [searchTerm]);

//   async function getBookData() {
//     let booksdata = await fetch(
//       `https://openlibrary.org/search.json?title=gandhi${searchTerm}`
//     );
//     let bookjson = await booksdata.json();
//     setBooks(bookjson);
//     console.log(books);
//   }
//   return (
//     <div>
//       <h1>books</h1>
//       console.log(books)
//     </div>
//   );
// }
// export default Books;

// import React, { useEffect, useState } from "react";

// function Books() {
//   const [books, setBooks] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("gandhi");

//   useEffect(() => {
//     getBookData();
//   }, [searchTerm]);

//   async function getBookData() {
//     try {
//       let response = await fetch(
//         `https://openlibrary.org/search.json?title=${searchTerm}`
//       );
//       let bookjson = await response.json();
//       setBooks(bookjson.docs || []); // Update the state with the books data array
//       console.log(bookjson.docs); // Log the books data array
//     } catch (error) {
//       console.error("Error fetching books:", error);
//     }
//   }

//   return (
//     <div>
//       <h1>Books</h1>
//       <input
//         type="text"
//         onChange={(e) => {
//           setSearchTerm(e.target.value);
//         }}
//       />
//       <ul>
//         {books.map((book, index) => (
//           <li key={index}>{book.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Books;

import React, { useEffect, useState, useCallback } from "react";

function Books() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("gandhi");

  const getBookData = useCallback(async () => {
    // try {
      let response = await fetch(
        `https://openlibrary.org/search.json?title=${searchTerm}`
      );
      let bookjson = await response.json();
      setBooks(bookjson.docs || []); // Update the state with the books data array
      console.log(bookjson.docs); // Log the books data array
    // } catch (error) {
    //   console.error("Error fetching books:", error);
    // }
  }, [searchTerm]); // Dependency on searchTerm

  useEffect(() => {
    getBookData();
  }, [getBookData]);

  return (
    <div>
      <h1>Books</h1>
      <input
        type="text"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        name=""
        id=""
      />
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Books;

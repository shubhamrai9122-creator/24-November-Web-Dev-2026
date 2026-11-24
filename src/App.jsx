import { useState } from "react";
import { Link, Route, Routes } from "react-router";
import Navbar from "./components/Navbar.jsx";
import initialBooks from "./data/books.js";
import BookDetails from "./pages/BookDetails.jsx";
import Books from "./pages/Books.jsx";
import Home from "./pages/Home.jsx";
import Issued from "./pages/Issued.jsx";

function App() {
  const [books, setBooks] = useState(initialBooks);

  function issueBook(id) {
    setBooks((currentBooks) =>
      currentBooks.map((book) =>
        book.id === id && !book.isIssued && book.availableCopies > 0
          ? { ...book, isIssued: true, availableCopies: book.availableCopies - 1 }
          : book,
      ),
    );
  }

  function returnBook(id) {
    setBooks((currentBooks) =>
      currentBooks.map((book) =>
        book.id === id && book.isIssued
          ? { ...book, isIssued: false, availableCopies: book.availableCopies + 1 }
          : book,
      ),
    );
  }

  const issuedCount = books.filter((book) => book.isIssued).length;

  return (
    <div className="app-shell">
      <Navbar issuedCount={issuedCount} />
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route
          path="/books"
          element={<Books books={books} onIssue={issueBook} onReturn={returnBook} />}
        />
        <Route
          path="/books/:id"
          element={<BookDetails books={books} onIssue={issueBook} onReturn={returnBook} />}
        />
        <Route
          path="/issued"
          element={<Issued books={books} onIssue={issueBook} onReturn={returnBook} />}
        />
        <Route
          path="*"
          element={
            <main className="page-main">
              <div className="empty-state detail-empty">
                <span className="empty-icon" aria-hidden="true">⌕</span>
                <h1>That page isn't on our shelves.</h1>
                <p>Let's find something good to read instead.</p>
                <Link className="button button-dark" to="/books">Browse the collection</Link>
              </div>
            </main>
          }
        />
      </Routes>
      <footer className="site-footer">
        <Link className="footer-brand" to="/">bookroom</Link>
        <span>A little more room for reading.</span>
        <span>Made for readers, with care.</span>
      </footer>
    </div>
  );
}

export default App;

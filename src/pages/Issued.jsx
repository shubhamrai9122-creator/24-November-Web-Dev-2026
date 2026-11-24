import { Link } from "react-router";
import BookCard from "../components/BookCard.jsx";

function Issued({ books, onIssue, onReturn }) {
  const issuedBooks = books.filter((book) => book.isIssued);

  return (
    <main className="page-main">
      <section className="page-intro">
        <p className="eyebrow">YOUR READING LIST</p>
        <h1>Books out in<br /><em>good company.</em></h1>
        <p>Here are the books you have checked out from the library.</p>
      </section>
      <section className="collection-section" aria-labelledby="issued-title">
        <div className="collection-toolbar">
          <div>
            <h2 id="issued-title">Issued books</h2>
            <p className="result-count">
              {issuedBooks.length} {issuedBooks.length === 1 ? "book" : "books"} currently issued
            </p>
          </div>
        </div>
        {issuedBooks.length > 0 ? (
          <div className="books-grid">
            {issuedBooks.map((book) => (
              <BookCard key={book.id} book={book} onIssue={onIssue} onReturn={onReturn} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-icon" aria-hidden="true">↗</span>
            <h3>No books issued yet</h3>
            <p>Your next great read is waiting on the shelves.</p>
            <Link className="button button-dark" to="/books">Find a book</Link>
          </div>
        )}
      </section>
    </main>
  );
}

export default Issued;

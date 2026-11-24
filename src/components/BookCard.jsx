import { Link } from "react-router";

function BookCard({ book, onIssue, onReturn }) {
  const isAvailable = book.availableCopies > 0;

  return (
    <article className="book-card">
      <div className={`book-cover cover-${((book.id - 1) % 4) + 1}`}>
        <span className="cover-label">{book.genre}</span>
        <span className="cover-title">{book.title}</span>
        <span className="cover-author">{book.author}</span>
        <span className="cover-rule" />
        <span className="cover-brand">BOOKROOM LIBRARY</span>
      </div>
      <div className="book-card-content">
        <div className="book-card-heading">
          <div>
            <p className="eyebrow">{book.genre}</p>
            <h3>
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </h3>
            <p className="book-author">by {book.author}</p>
          </div>
          <span className={`status-badge ${isAvailable ? "status-available" : "status-unavailable"}`}>
            <span className="status-dot" />
            {isAvailable ? "Available" : "Not Available"}
          </span>
        </div>
        <div className="book-card-footer">
          <span className="copies-count">
            {book.availableCopies} of {book.totalCopies} copies
          </span>
          {book.isIssued ? (
            <button className="button button-return" onClick={() => onReturn(book.id)}>
              Return book
            </button>
          ) : isAvailable ? (
            <button className="button button-issue" onClick={() => onIssue(book.id)}>
              Issue book
            </button>
          ) : (
            <span className="unavailable-label">Not Available</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default BookCard;

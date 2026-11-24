import { Link, useParams } from "react-router";
import BookCard from "../components/BookCard.jsx";

function BookDetails({ books, onIssue, onReturn }) {
  const { id } = useParams();
  const book = books.find((item) => item.id === Number(id));

  if (!book) {
    return (
      <main className="page-main">
        <div className="empty-state detail-empty">
          <span className="empty-icon" aria-hidden="true">⌕</span>
          <h1>We couldn't find that book.</h1>
          <p>It may have moved off the shelf.</p>
          <Link className="button button-dark" to="/books">Back to books</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-main">
      <div className="breadcrumb">
        <Link to="/books">Books</Link><span aria-hidden="true">/</span><span>{book.title}</span>
      </div>
      <section className="detail-layout">
        <div className="detail-cover-wrap">
          <div className={`book-cover detail-cover cover-${((book.id - 1) % 4) + 1}`}>
            <span className="cover-label">{book.genre}</span>
            <span className="cover-title">{book.title}</span>
            <span className="cover-author">{book.author}</span>
            <span className="cover-rule" />
            <span className="cover-brand">BOOKROOM LIBRARY</span>
          </div>
        </div>
        <div className="detail-copy">
          <p className="eyebrow">{book.genre} · {book.year}</p>
          <h1>{book.title}</h1>
          <p className="detail-author">by {book.author}</p>
          <p className="detail-description">
            A thoughtful addition to the library collection. Check the details below and see if a
            copy is waiting for you.
          </p>
          <div className="detail-facts">
            <div><span>Published</span><strong>{book.year}</strong></div>
            <div><span>Pages</span><strong>{book.pages}</strong></div>
            <div><span>Total copies</span><strong>{book.totalCopies}</strong></div>
            <div><span>Available</span><strong>{book.availableCopies} copies</strong></div>
          </div>
          <div className="detail-action">
            <BookCard book={book} onIssue={onIssue} onReturn={onReturn} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default BookDetails;

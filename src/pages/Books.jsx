import { useState } from "react";
import BookCard from "../components/BookCard.jsx";

const genres = ["All", "Biography", "Fiction", "Technology", "Self-Help"];

function Books({ books, onIssue, onReturn }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const filteredBooks = books.filter((book) => {
    const matchesGenre = genre === "All" || book.genre === genre;
    const searchText = search.trim().toLowerCase();
    const matchesSearch =
      book.title.toLowerCase().includes(searchText) ||
      book.author.toLowerCase().includes(searchText);
    return matchesGenre && matchesSearch;
  });

  return (
    <main className="page-main">
      <section className="page-intro">
        <p className="eyebrow">THE COLLECTION</p>
        <h1>Books for every kind<br />of <em>curiosity.</em></h1>
        <p>Take a look around. Your next favorite might be closer than you think.</p>
      </section>

      <section className="collection-section" aria-labelledby="collection-title">
        <div className="collection-toolbar">
          <div>
            <h2 id="collection-title">Browse books</h2>
            <p className="result-count">
              Showing {filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"}
            </p>
          </div>
          <div className="filters">
            <label className="search-field">
              <span className="visually-hidden">Search by title or author</span>
              <span aria-hidden="true">⌕</span>
              <input
                type="search"
                placeholder="Search title or author"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </label>
            <label className="genre-select">
              <span className="visually-hidden">Filter by genre</span>
              <select value={genre} onChange={(event) => setGenre(event.target.value)}>
                {genres.map((item) => (
                  <option key={item} value={item}>
                    {item === "All" ? "All genres" : item}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {filteredBooks.length > 0 ? (
          <div className="books-grid">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} onIssue={onIssue} onReturn={onReturn} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-icon" aria-hidden="true">⌕</span>
            <h3>No books found</h3>
            <p>Try a different title, author, or genre.</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Books;

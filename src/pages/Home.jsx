import { Link } from "react-router";

function Home({ books }) {
  const issuedBooks = books.filter((book) => book.isIssued).length;
  const unavailableBooks = books.filter((book) => book.availableCopies === 0).length;

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">YOUR CAMPUS LIBRARY</p>
          <h1>A good book<br />is always <em>within reach.</em></h1>
          <p className="hero-description">
            Find your next read, see what is on the shelves, and keep track of the books you have
            borrowed.
          </p>
          <Link className="button button-dark hero-button" to="/books">
            Explore the collection <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="hero-art" aria-label="Illustration of books on a library shelf" role="img">
          <div className="sun-shape" />
          <div className="plant plant-one" />
          <div className="plant plant-two" />
          <div className="shelf-book shelf-book-one" />
          <div className="shelf-book shelf-book-two" />
          <div className="shelf-book shelf-book-three" />
          <div className="shelf-book shelf-book-four" />
          <div className="shelf-book shelf-book-five" />
          <div className="shelf-line" />
          <div className="shelf-shadow" />
          <span className="art-note">A little time<br />for yourself.</span>
        </div>
      </section>

      <section className="stats-section" aria-labelledby="stats-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">AT A GLANCE</p>
            <h2 id="stats-title">The library, today</h2>
          </div>
          <Link className="text-link" to="/books">
            View all books <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="stats-grid">
          <article className="stat-card stat-card-primary">
            <span className="stat-icon" aria-hidden="true">▤</span>
            <p className="stat-label">Books in collection</p>
            <p className="stat-value">{books.length}</p>
            <p className="stat-note">Titles ready to discover</p>
          </article>
          <article className="stat-card">
            <span className="stat-icon stat-icon-green" aria-hidden="true">↗</span>
            <p className="stat-label">Books issued</p>
            <p className="stat-value">{issuedBooks}</p>
            <p className="stat-note">Currently with readers</p>
          </article>
          <article className="stat-card">
            <span className="stat-icon stat-icon-amber" aria-hidden="true">⌁</span>
            <p className="stat-label">Not available</p>
            <p className="stat-value">{unavailableBooks}</p>
            <p className="stat-note">All copies are checked out</p>
          </article>
        </div>
      </section>

      <section className="home-note">
        <span className="note-icon" aria-hidden="true">✳</span>
        <p><strong>Find a new favorite.</strong> Browse by genre or search for a title or author.</p>
        <Link className="text-link" to="/books">Browse collection <span aria-hidden="true">→</span></Link>
      </section>
    </main>
  );
}

export default Home;

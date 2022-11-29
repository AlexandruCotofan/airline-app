import "./HomePage.css";

function HomePage() {
  return (
    <div id="home-page">
      <div id="home-page-title">
        <h1>Airline App</h1>
        <p>Truly, one of the apps of all time.</p>
      </div>
      <a id="search-btn" className="btn" href="/search">Search for flights</a>
    </div>
  );
}

export default HomePage;

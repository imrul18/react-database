import "./home.css";

function Home(props) {
  return (
    <div className="center">
      <h1>Logged In</h1>
      <div className="form">
        <div className="signup_link">
          <a href="/login">Logout</a>
        </div>
      </div>
    </div>
  );
}

export default Home;

//create a functional component of Home page
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link className="logoLink" to="/">
            sbbs.online
          </Link>
        </div>
        <h3 className="heading">
          The story of best young detective in the world
        </h3>
        <div className="headerImg"></div>
      </header>
      {/* create a section for news section */}
      <main className="main">
        <section className="news">
          <h2 className="newsHeading">News</h2>
          <div className="newsContainer">
            <div className="newsTitle">
              <h4 className="newsTitleHeading">Hello World</h4>
              <p className="newsTitleContent">
                Welcome to WordPress. This is your first post. Edit or delete
                it, then start writing!
              </p>
            </div>
            <div className="newsRight">
              <img
                className="newsRightImg"
                src={
                  "https://images.unsplash.com/photo-1497008386681-a7941f08011e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                }
                alt="newsImage"
              />
            </div>
          </div>
        </section>
      </main>
      {/* create a footer for footer section */}
      <footer className="footer">
        <div className="footerContainer">
          <div className="footerDiv">
            <h4 className="footerTitle">Archives</h4>
            <span>
              <Link className="footerSmallText">January 2022</Link>
            </span>
          </div>
          <div className="footerDiv">
            <h4 className="footerTitle">Categories</h4>
            <span>
              <Link className="footerSmallText">Uncategorized</Link>
            </span>
          </div>
          <p className="footerOwners">
            Copyright <span>&copy;</span> 2023
            <Link className="footerSmallText" to={"/"}>
              Sbbs.Online
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;

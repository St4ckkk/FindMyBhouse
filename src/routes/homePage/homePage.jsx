import SearchBar from "../../components/searchBar/searchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Discover great student housing options</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            laboriosam maiores aspernatur ipsam praesentium repellat nihil
            magnam, omnis illo dolor?
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>Option 1</h1>
              <h2>Description of option 1</h2>
            </div>
            <div className="box">
              <h1>Option 2</h1>
              <h2>Description of option 2</h2>
            </div>
            <div className="box">
              <h1>Option 3</h1>
              <h2>Description of option 3</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="./bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;

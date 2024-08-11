import "./index.css";
import op from "./res/op.jpg";
import naruto from "./res/naruto.jpg";
import bleach from "./res/bleach.jpg";
import { useState,useEffect } from "react";
import OpComp from "./card-components/OpComp";
import NarutoComp from "./card-components/NarutoComp";
import BleachComp from "./card-components/BleachComp";
import Showmore from "./Components/Showmore";

function App() {
  const [details, setDetails] = useState("0");
  const [animes, setAnimes] = useState([]);

  useEffect(()=>{
      fetch('http://localhost:3001/series')
       .then(res=>res.json())
       .then(data=>setAnimes(data))
       .catch(error=>console.error('Error fetching the database :' , error));
  },[setAnimes]);
  return (
    <div className="big-container">
      <h1>Big - 3 Animes :</h1>
      {details === "1" ? (
        <OpComp details={details} setDetails={setDetails} />
      ) : details === "2" ? (
        <NarutoComp details={details} setDetails={setDetails} />
      ) : details === "3" ? (
        <BleachComp details={details} setDetails={setDetails} />
      ) : (
        <div className="card-container">
          <div className="card">
            <img src={op} alt="one piece" className="op-img" />
            <div className="card-data">
              <h3>One Piece</h3>
              <h4>Rating : 9.5</h4>
              <p
                onClick={() => {
                  setDetails("1");
                }}
              >
                Show More
              </p>
            </div>
          </div>
          <div className="card">
            <img src={naruto} alt="naruto" className="op-img" />
            <div className="card-data">
              <h3>Naruto</h3>
              <h4>Rating : 9.4</h4>
              <p
                onClick={() => {
                  setDetails("2");
                }}
              >
                Show More
              </p>
            </div>
          </div>
          <div className="card">
            <img src={bleach} alt="bleach" className="op-img" />
            <div className="card-data">
              <h3>Bleach</h3>
              <h4>Rating : 9.1</h4>
              <p
                onClick={() => {
                  setDetails("3");
                }}
              >
                Show More
              </p>
            </div>
          </div>
        </div>
      )}
      <Showmore animes={animes}/>
    </div>
  );
}

export default App;

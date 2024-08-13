import { useState, useEffect } from "react";
import SearchedComp from "./SearchedComp";

const MoreCards = ({ animes, search }) => {
  const [name, setName] = useState([]);
  useEffect(() => {
    const newName = [];
    animes.forEach((anime) => {
      let name = anime.name;
      name = name.toLowerCase();
      name = name.replace(/[^a-zA-Z0-9 ]/g, "");
      let updatedName = name.split(" ").join("");
      newName.push(updatedName);
    });
    setName(newName);
  }, [setName]);

  return (
    <div className="ul-container">
      {search.length > 0 ? (
        <SearchedComp animes={animes} search={search} name={name} />
      ) : animes.length > 0 ? (
        <ul className="more-cards-container">
          {animes.map((anime, index) => (
            <li key={index}>
              <div className="card">
                <img src={anime.url} alt={anime.name} className="op-img" />
                <div className="card-data">
                  <h2>{anime.name}</h2>
                  <div className="sub-details">
                    <div className="card-genre">{anime.genre}</div>
                    <div className="card-side-details">
                      <div>rating : {anime.rating}</div>
                      <div>episodes : {anime.episodes}</div>
                    </div>
                  </div>
                  <div className="card-description">{anime.description}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No series data available.</p>
      )}
    </div>
  );
};

export default MoreCards;

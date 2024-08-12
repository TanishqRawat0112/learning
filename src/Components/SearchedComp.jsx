import { useState,useEffect } from "react";

const SearchedComp = ({animes,search,name}) => {
    const [searchAnime,setSearchAnime] = useState([]);

    function isPresent(name,search){
        let left=0,right=0;
        let n1=name.length,n2=search.length;
        while(left<n1 && right<n2){
            if(name[left]==search[right]){
                left++;
                right++;
            }
            else{
                left++;
            }
        }
        if(right==n2)return true;
        return false;

    }
    useEffect(() => {
      let index=0;
      let upsearch=search.toLowerCase();
      let newSearchAnime=[];
      name.forEach((n)=>{
        if(isPresent(n,upsearch)===true){
            newSearchAnime.push(animes[index]);   
        }
        index++;
      });
      setSearchAnime(newSearchAnime);
    }, [search]);

    console.log(searchAnime);
    
    return ( 
        <div>
            {searchAnime.length > 0 
            ?  (
                <ul className="more-cards-container">
                    {searchAnime.map((anime, index) => (
                    <li key={index}>
                        <div className="card">
                <img src={anime.url} alt={anime.name} className="op-img" />
                <div className="card-data">
                  <h2>{anime.name}</h2>
                  <div className="sub-details">
                    <div className="card-genre">
                        {anime.genre}
                    </div>
                    <div className="card-side-details">
                        <div>
                            rating : {anime.rating}
                        </div>
                        <div>
                            episodes : {anime.episodes}
                        </div>
                    </div>
                  </div>
                  <div>
                    {anime.description}
                  </div>
                </div>
              </div>
                    </li>
                    ))}
                </ul>
                ) : (
                <p>No series data available.</p>
            )
    }
        </div>
     );
}
 
export default SearchedComp;
import { useState,useEffect } from "react";

const GenreComp = ({genres,setGenres,selectedGenres,setSelectedGenres}) => {
    const changeSelection = (index) => {
        const changedGenre = genres.map((gen, i) =>
            i === index ? { ...gen, selected: !gen.selected } : gen
          );
        setGenres(changedGenre); 
    }
    
    return ( 
        <div >
            <ul className="genre-names">
                {genres.map((gen,index)=>(
                    <li key={index}  onClick={()=>{changeSelection(index)}} className={`${gen.selected ===false ? "unselected-genre" : "selected-genre"}`}>
                            {gen.name}
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default GenreComp;
import { useState,useEffect } from "react";

const GenreComp = ({genres,setGenres,selectedGenres,setSelectedGenres}) => {
    const changeSelection = async (index) => {
        const changedGenre = genres.map((gen, i) =>
            i === index 
            ? { ...gen, selected: !gen.selected } 
            : gen
          );
        await setGenres(changedGenre); 
    }
    // const updatedSelectedGenres=(index)=>{
    //     let tempselected=[Array(7).fill(null)];
    //     if(genres[index].selected===true){
    //         console.log(genres[index]);
    //         tempselected[index]=genres[index];
    //     }
    //     else{
    //         tempselected[index]=null;
    //     }
    //     setSelectedGenres(tempselected);
    // }
    
    return ( 
        <div >
            <ul className="genre-names">
                {genres.map((gen,index)=>(
                    <li key={index}  onClick={()=>{
                        changeSelection(index);
                        }} className={`${gen.selected ===false ? "unselected-genre" : "selected-genre"}`}>
                            {gen.name}
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default GenreComp;
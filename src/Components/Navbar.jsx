import logo from '../res/logo.png';
import { useState } from 'react';
const Navbar = ({setSearch}) => {
    const [searchedComp,setSearchedComp] = useState(false);
    const handleSearch = (e) => {
        const newSearch= e.target.value;
        setSearch(newSearch);
    }
    return ( 
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className='site-head'>
                <div>
                    Anime
                </div>
                <div>
                    INFO
                </div>
            </div>
            <div className="srch-container">
            <input type="text" placeholder="Search"  className="search" onChange={(e)=>{
                handleSearch(e);
            }}/>
            <button className="srch-btn" onClick={()=>setSearchedComp(true)}>Q</button>
            </div>
            <button className="hamburger" >
                E
            </button>
        </div>
     );
}
 
export default Navbar;
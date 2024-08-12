import logo from '../res/logo.png';
const Navbar = () => {
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
            <input type="text" placeholder="Search"  className="search"/>
            <button className="srch-btn">Q</button>
            </div>
            <button className="hamburger">
                E
            </button>
        </div>
     );
}
 
export default Navbar;
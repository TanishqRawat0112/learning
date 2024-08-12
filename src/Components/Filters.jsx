import close from '../res/close.png';

const Filters = ({showFilters,setShowFilters}) => {
    return ( 
        <div className="filter-container">
            <div className="top-container">
                <div className="filter-head">
                    FILTERS
                </div>
                <div className="close" onClick={()=>setShowFilters(!showFilters)}>
                    <img src={close} alt="Close"/>
                </div>
            </div>
            <div className="filter-list">
                <ul>
                    <li className='filter'>
                        Min Rating
                    </li>
                    <li className='filter'>
                        Max Episodes
                    </li>
                    <li className='filter'>
                        Genre
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Filters;
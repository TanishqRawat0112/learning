import close from '../res/close.png';

const Filters = ({showFilters,setShowFilters,filterRating,setFilterRating,filterEp,setFilterEp,setAppliedRating,setAppliedEp}) => {
    const handleChangeOnRating = (e) => {
        const newFilterValue=(e.target.value)/10;
        setFilterRating(newFilterValue);
    }
    const handleChangeOnEp = (e) => {
        const newFilterValue=parseInt((e.target.value)*375/100);
        setFilterEp(newFilterValue);
    }

    const handleReset = () => {
        setFilterEp(187);
        setFilterRating(5);
        setAppliedRating(0);
        setAppliedEp(375);
    }

    const applyChanges = () => {
        setAppliedRating(filterRating);
        setAppliedEp(filterEp);
    }

    return ( 
        <div className="filter-container">
            <div className="top-container">
                <div className="filter-head">
                    FILTERS
                </div>
                <div className="close" onClick={()=>{
                    setShowFilters(!showFilters);
                    }}>
                    <img src={close} alt="Close"/>
                </div>
            </div>
            <div className="filter-list">
                <ul>
                    <li className='filter'>
                        <div className='filter-name'>
                            Min Rating
                        </div>
                        <div className='filter-input'>
                            <input type="range" name="rating" className='slider'  onChange={(e)=>handleChangeOnRating(e)}/>
                        </div>
                        <div className="value">
                            {filterRating}
                        </div>
                    </li>
                    <li className='filter'>
                        <div className='filter-name'>
                            Max Episodes
                        </div>
                        <div className='filter-input'>
                            <input type="range" name="rating" className='slider' onChange={(e)=>handleChangeOnEp(e)}/>
                        </div>
                        <div className="value">
                            {filterEp}
                        </div>
                    </li>
                    <li className='filter'>
                        <div className='filter-name'>
                            Genre
                        </div>
                    </li>
                </ul>
            </div>
            <div className="filter-options">
                <div className='filter-reset' onClick={()=>{
                    handleReset();
                    setShowFilters(!showFilters)
                    }}>
                    RESET
                </div>
                <div className='filter-apply' onClick={()=>{
                    applyChanges();
                    setShowFilters(!showFilters);
                    }}>
                    APPLY
                </div>
            </div>
        </div>
     );
}
 
export default Filters;
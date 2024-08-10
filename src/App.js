import './index.css';
import op from './res/op.jpg';
import naruto from './res/naruto.jpg';
import bleach from './res/bleach.jpg';
import { useState } from 'react';
import OpComp from "./card-components/OpComp";
import NarutoComp from "./card-components/OpComp";
import BleachComp from "./card-components/OpComp";

function App() {
  const [details, setDetails] = useState(0);
  return (
    <div>
      <h1>
       Big - 3 Animes :
      </h1>
      {details==1 ? <OpComp details={details}/> : details==2 ? <NarutoComp details={details}/> : details==3 ? <BleachComp details={details}/> :
      <div className="card-container" >
        <div className="card">
          <img src={op} alt="one piece" className='op-img'/>
          <div className="card-data">
            <h3>One Piece</h3>
            <h4>Rating : 9.5</h4>
            <p onClick={()=>{
              setDetails(1);
            }}>
              Show More
            </p>
          </div>
        </div>
        <div className="card">
          <img src={naruto} alt="naruto" className='op-img'/>
          <div className="card-data">
            <h3>Naruto</h3>
            <h4>Rating : 9.4</h4>
            <p onClick={()=>{
              setDetails(2);
            }}>Show More</p>
          </div>
        </div>
        <div className="card">
          <img src={bleach} alt="bleach" className='op-img'/>
          <div className="card-data">
            <h3>Bleach</h3>
            <h4>Rating : 9.1</h4>
            <p onClick={()=>{
              setDetails(3);
            }}>Show More</p>
          </div>
        </div>
      </div>
      }
    </div>
  );
}

export default App;

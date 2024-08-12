import React from 'react'
import { useState } from 'react';
import MoreCards from './MoreCards';

export default function Showmore({animes}) {
    const [show,setShow] = useState(false);
    const [less,setLess] = useState(false);
  return (
    <>
        {show && <MoreCards animes={animes}/>}
        <button className='show-more' onClick={()=>{
            console.log('Show More button is clicked!!!');
            setShow(!show);
            setLess(!less);
        }}>
            {less ? "Show Less" : "Show More"}
        </button>
    </>
  )
}

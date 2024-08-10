import React from 'react'
import '../index.css';
import op from '../res/op.jpg';

export default function Cardcomp({details}) {
  return (
    <div className='detailed-container'>
        <div className='details'>
            <h1 className='op-head'>ONE - PIECE</h1>
            <img src={op} alt="one piece" />

        </div>
    </div>
  )
}

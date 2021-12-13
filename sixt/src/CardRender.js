import React from 'react';
import './App.css';

function CardRender(props) {
  return (
    <div className="card">
      <img src={props.imgSrc} alt=" " />
        <div className="description">
          <span>{props.name}</span> 
          <h4>{props.price} {props.currency}</h4>
        </div>
    </div>
  )

}

export default CardRender; 
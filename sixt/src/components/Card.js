import React from 'react';
import '../App.css';

function CardRender(props) {
    return (   
    <div key={props.index} className="card">
        <img className="carImage" src={props.imgSrc} alt=""/>
        <div key={props.index} className="description">
          <span>{props.name}</span> 
          <p>{props.price} {props.currency}/DAY</p>
        </div>
    </div>
  )
}

export default CardRender; 


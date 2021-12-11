import './App.css';
import GetData from './GetData';
import { useState } from 'react';
import { useEffect } from 'react';

function CardRender() {
  // const [namea, linka] = useState([]);
  let res = [];
  GetData().then(res => {
    console.log(res[0].name);
});
  return (
<div class="container">
    <div class="card">
    <img class="defImg" src="bg_img.png" />
        <div class="description">
          <span>dfds</span>
          <p>sdsdf</p>
        </div>
    </div>
</div>
  )
   }
    export default CardRender; 
      



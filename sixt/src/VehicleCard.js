import React from "react";
import GetData from "./GetData";
import App from "./App";

  async function RenderCard() {
    let a = await GetData()
    console.log('!', a[0])
    

    return (
      <li>
        <span>
        sdsdsdsds
        
        
        
        </span>
        <button>xsldkjslkjdklsdj</button>
      </li>
    )
    }
export default RenderCard;

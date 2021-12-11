import React from "react";
async function GetData() {
  let array =[];
  let response = await fetch('http://cdn.sixt.io/codingtask/offers.json')
  let data = await response.json()
  
    for (let i=0; i<data.offers.length; i++) {
    
     array.push({'name': data.offers[i].carGroupInfo.modelExample.name, 'price' : data.offers[0].prices.basePrice.amount.value, 'currency' : data.offers[i].prices.basePrice.amount.currency, 'img-url' : data.offers[i].carGroupInfo.modelExample.imageUrl});
    }   
  return array;
  }

export default GetData
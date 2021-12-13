import React, {useState, useEffect}   from 'react';
import './App.css';
import CardRender from './CardRender';
import getData from './getData';

function App() {
const [data, setData] = useState(null);
  
  useEffect(
    () => {
      getData().then((d)=> setData(d));
      
    },
    [],
  );
  console.log('data from use state', data?.offers[0].prices.basePrice.amount.value);
  
  return (
  
    <div className="container">
      <CardRender name={data?.offers[0].carGroupInfo.modelExample.name} imgSrc={data?.offers[0].carGroupInfo.modelExample.imageUrl}  price={data?.offers[0].prices.basePrice.amount.value} currency={data?.offers[0].prices.basePrice.amount.currency} />
    </div>
  );
    }
  

    export default App; 
      

    // carGroupInfo.modelExample.name
    // basePrice.amount.value
    // prices.basePrice.amount.currency, 
    // carGroupInfo.modelExample.imageUrl


  //   return (
  //     data.offers.map((offer) => {
  //       return (
      
  //     <CardRender name={offer.carGroupInfo.modelExample.name} currency={offer.v} img-url={offer.carGroupInfo.modelExample.imageUrl}/>
  //       )
  //     })
  //   ) 
  // }
    


  // <CardRender name={data?.offers[0].carGroupInfo.modelExample.name} />

  // return (
  //   <div className="container">

  //     <CardRender name={data?.offers[0].carGroupInfo.modelExample.name} />
  //   </div>
  // );


  // prices.basePrice.amount.value
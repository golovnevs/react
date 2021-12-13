import React, {useState, useEffect}   from 'react';
import '../App.css';
import CardRender from './Card';
// import getData from './getData';

function OfferList() {
    let [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('http://cdn.sixt.io/codingtask/offers.json')
        const res = await response.json()
        setData(res)
    }
    fetchData()
    console.log('data from use effect', data)
  },[])

  return (
       data.offers.map((offer) => {
           return (
 <CardRender name = {offer.carGroupInfo.modelExample.name} 
            imgSrc={offer.carGroupInfo.modelExample.imageUrl}  
            price={offer.prices.basePrice.amount.value} 
            currency={offer.prices.basePrice.amount.currency} 
      />
      )
       })
       );
    } 

//  <CardRender name={data?.offers[3].carGroupInfo.modelExample.name} 
//             imgSrc={data?.offers[3].carGroupInfo.modelExample.imageUrl} 

//             price={data?.offers[3].prices.basePrice.amount.value} 
//             currency={data?.offers[3].prices.basePrice.amount.currency} /> 
  
            
//   )
// }


export default OfferList;


// https://sixt-vehicle-group-info-images-prod.s3-eu-west-1.amazonaws.com/eb3c65f783b980c0929b5f4a20ad4f2640723126.jpeg
// {data?.offers[0].carGroupInfo.modelExample.imageUrl}  
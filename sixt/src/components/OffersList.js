import React, {useState, useEffect}   from 'react';
import '../App.css';
import CardRender from './Card';

function OfferList() {
    let [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('http://cdn.sixt.io/codingtask/offers.json')
        const res = await response.json()
        setData(res)
    }
    fetchData()
  },[])

  return (
    data ? ( 
       data.offers.map((offer, index) => {       
        return (
          <CardRender 
            key ={index}
            name = {offer.carGroupInfo.modelExample.name} 
            imgSrc={offer.carGroupInfo.modelExample.imageUrl}  
            price={offer.prices.basePrice.amount.value} 
            currency={offer.prices.basePrice.amount.currency} 
          />
        )
      })
    ) : 'Loading...'
  )
}
  
export default OfferList;
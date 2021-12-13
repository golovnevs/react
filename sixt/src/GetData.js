function getData() {
  console.log('hi!');
  return fetch('http://cdn.sixt.io/codingtask/offers.json')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
}

export default getData
import React from 'react';
import './App.css';
import PageHeader from './components/PageHeader';
import OffersList from './components/OffersList';

function App() {
  return (
    <div>
      <PageHeader />
      <div className="container">
        <OffersList />
      </div>
    </div>
  )
}

    export default App; 
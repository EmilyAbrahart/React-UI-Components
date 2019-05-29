import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => (
  <div className="appDiv">
    <HeaderContainer />
    <CardContainer link="https://www.reactjs.org" />
  </div>


);

export default App;

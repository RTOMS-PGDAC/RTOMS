import React from 'react';
import Logo from '../Assets/RTOMSimages/logo.webp';
const Header = () => {
  return (
    <header className="App-header">
      <div className="">
      <img src={Logo} className="logo" alt="Logo"/>

      </div>
      <div className="container">
        <h1>RTOMS</h1>
        </div>
    </header>
    
  );
}

export default Header;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <h1>This is RTOMS</h1>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
        <div id="header">
          <Header />
        </div>
      <nav>
        <ul>
          <li>About us</li>
          <li>Online Services</li>
          <li>Information Services</li>
          <li>External Links</li>
          <li>Contact Us</li>
          <li>Login</li>
        </ul>
      </nav>
      <main className="App-body">
        <div className="ads">Ads</div>
        <div className="services">
          <div className="card">Drivers/ Learners License</div>
          <div className="card">RTOMS</div>
          <div className="card">Online Test/ Appointment</div>
          <div className="card">Ads</div>
          <div className="card">Vehicle Registration</div>
        </div>
      </main>
        <div id="footer">
          <Footer />
        </div>
    </div>
  );
}

export default App;
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
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';


// import { Header, Footer, Navbar } from './Components/';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <div id="header">
        <Header />
      </div>
      <div id="navbar">
        <Navbar />
      </div>
      <main className="App-body">
        <div className="ads">Ads</div>
        <div className="container">


          {/* <div class="card">
            <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Apply Here</a>
              </div>
          </div> */}




          <div className="box">Drivers/ Learners License</div>
          <div className="box">RTOMS</div>
          <div className="box">Online Test/ Appointment</div>
          {/* <div className="box">Ads</div> */}
          <div className="box">Vehicle Registration</div>
        </div>
      </main>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
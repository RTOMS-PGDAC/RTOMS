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
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import learningLogo from './Assets/RTOMSimages/LL4.png';
import feepay from './Assets/RTOMSimages/feepay-icon2.png';
import ncl from './Assets/RTOMSimages/NCL1.png';

// import { Header, Footer, Navbar } from './Components/';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import MyCarousel from './Components/MyCarousel';

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

        <div id="MyCarousel">
          <MyCarousel />
        </div>

{/*         
          <div id="carouselExample" className="carousel slide vw-100 vh-50">
            <div className="carousel-inner" >
              <div className="carousel-item active">
                <img src="..." className="d-block vw-100% vh-50%" alt="First Slide" />
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block vw-100% vh-50%" alt="Second Slide" />
              </div>
              <div className="carousel-item">
                <img src="..." className="d-block vw-100% vh-50%" alt="Third Slide" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div> */}

        
        

        <div className="container">


          <div className="box">
            <img src={learningLogo} className="card-img-top" alt="learning logo" />
            <div className="card-body">
              <h5 className="card-title">Drivers/ Learners License</h5>
              <p className="card-text">You can apply here for drivers or learners License.</p>
              <a href="#" className="btn btn-primary">Apply Here</a>
            </div>
          </div>
          <div className="box">
            <img src={feepay} className="card-img-top" alt="learning logo" />
            <div className="card-body">
              <h5 className="card-title">Online Test/ Appointment</h5>
              <p className="card-text">You can apply here for Online Test/ Appointment.</p>
              <a href="#" className="btn btn-primary">Apply Here</a>
            </div>
          </div>
          <div className="box">
            <img src={ncl} className="card-img-top" alt="learning logo" />
            <div className="card-body">
              <h5 className="card-title">Vehicle Registration</h5>
              <p className="card-text">You can apply here for Vehicle Registration.</p>
              <a href="#" className="btn btn-primary">Apply Here</a>
            </div>
          </div>


          
        </div>
      </main>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
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

import { Link, Switch, Route } from 'react-router-dom';



// import { Header, Footer, Navbar } from './Components/';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import MyCarousel from './Components/MyCarousel';


import HpageCard from './HpageCard';
import DriversLicense from './DriversLicense';
import OnlineTest from './OnlineTest';
import VehicleRegistration from './VehicleRegistration';
import NotFound from "./NotFound";



function App() {
  return (
    // <div className="App">
    //   <div id="header">
    //     <Header />
    //   </div>
    //   <div id="navbar">
    //     <Navbar />
    //   </div>
    //   <main className="App-body">

    //     <div id="MyCarousel">
    //       <MyCarousel />
    //     </div>


    //     {/* <div className="container">
    //       <div className="box">
    //         <Link to="/drivers-license">
    //           <img src={learningLogo} className="card-img-top" alt="learning logo" />
    //         </Link>
    //         <div className="card-body">
    //           <h5 className="card-title">Drivers/ Learners License</h5>
    //           <p className="card-text">You can apply here for drivers or learners License.</p>
    //           <Link to="/drivers-license" className="btn btn-primary">
    //             Apply Here
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="box">
    //         <Link to="/online-test">
    //           <img src={feepay} className="card-img-top" alt="learning logo" />
    //         </Link>
    //         <div className="card-body">
    //           <h5 className="card-title">Online Test/ Appointment</h5>
    //           <p className="card-text">You can apply here for Online Test/ Appointment.</p>
    //           <Link to="/online-test" className="btn btn-primary">
    //             Apply Here
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="box">
    //         <Link to="/vehicle-registration">
    //           <img src={ncl} className="card-img-top" alt="learning logo" />
    //         </Link>
    //         <div className="card-body">
    //           <h5 className="card-title">Vehicle Registration</h5>
    //           <p className="card-text">You can apply here for Vehicle Registration.</p>
    //           <Link to="/vehicle-registration" className="btn btn-primary">
    //             Apply Here
    //           </Link>
    //         </div>
    //       </div>
    //     </div> */}


    //     <Switch>
    //       <Route path="/" exact component={HpageCard} />
    //       <Route path="/home" exact component={HpageCard} />
    //       <Route path="/drivers-license" component={DriversLicense} />
    //       <Route path="/online-test" component={OnlineTest} />
    //       <Route path="/vehicle-registration" component={VehicleRegistration} />
    //       <Route path="*" component={NotFound} exact/>

    //     </Switch>




    //     {/* <div className="container">
    //       <div className="box">
    //         <img src={learningLogo} className="card-img-top" alt="learning logo" />
    //         <div className="card-body">
    //           <h5 className="card-title">Drivers/ Learners License</h5>
    //           <p className="card-text">You can apply here for drivers or learners License.</p>
    //           <a href="#" className="btn btn-primary">Apply Here</a>
    //         </div>
    //       </div>
    //       <div className="box">
    //         <img src={feepay} className="card-img-top" alt="learning logo" />
    //         <div className="card-body">
    //           <h5 className="card-title">Online Test/ Appointment</h5>
    //           <p className="card-text">You can apply here for Online Test/ Appointment.</p>
    //           <a href="#" className="btn btn-primary">Apply Here</a>
    //         </div>
    //       </div>
    //       <div className="box">
    //         <img src={ncl} className="card-img-top" alt="learning logo" />
    //         <div className="card-body">
    //           <h5 className="card-title">Vehicle Registration</h5>
    //           <p className="card-text">You can apply here for Vehicle Registration.</p>
    //           <a href="#" className="btn btn-primary">Apply Here</a>
    //         </div>
    //       </div>
    //     </div> */}


    //   </main>
    //   <div id="footer">
    //     <Footer />
    //   </div>
    // </div>


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
        <Switch>
          <Route path="/" exact component={HpageCard} />
          <Route path="/home" exact component={HpageCard} />
          <Route path="/drivers-license" component={DriversLicense} />
          <Route path="/online-test" component={OnlineTest} />
          <Route path="/vehicle-registration" component={VehicleRegistration} />
          <Route path="*" component={NotFound} exact />
        </Switch>
      </main>
      <div id="footer" className="footer">
        <Footer />
      </div>
    </div>



  );
}

export default App;
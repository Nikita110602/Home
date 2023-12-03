import React from 'react';
import Navbar from './Navbar';
import "./app.css"
function App() {
  return (
    <>
      <Navbar/>
      <div className='hero'>
      <button>Welcome To Manage Wise</button>
        <h1>
        Empower your business with 
        </h1>
        <h1><span className='wd'>Strategic</span> insights </h1>
        <h3>Powerful management platform designed to streamline your business</h3>
        <h4>operations, boost productivity, and drive success</h4>
        <div class="button-container">
        <button>Get Started</button>
        <button>Watch Demo</button>
        <button>Made in Framer</button>
      </div>
      </div>
    </>
  );
}

export default App;

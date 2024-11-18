import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from '../components/Navbar'
import WeatherComponent from '../components/WeatherComponen'

const App = () => {
  return (    
    <div>
    <NavBar />
    <div style={{ padding: "20px" }}>
      <WeatherComponent />
    </div>
  </div>
);

};

export default App;

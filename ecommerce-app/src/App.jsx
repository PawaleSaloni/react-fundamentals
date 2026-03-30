import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './Login';
import Register from './Register';
import Product from './Product';

function App() {

  return (
    <div className= "App">
      <h2>Transflower Store</h2>
      <hr/>
      <Login></Login>
      <hr/>
      <Register></Register>
      <hr/>
      <Product></Product>
      </div>

  );
}

// Functions Component for Home, About, and Contact pages
function Home() {
  return(
    <div>
      <h2>Transflower Store</h2>
      <h3>Fresh Flowers from Transflower Farms</h3>
    </div>
  )
}

function About() {
  return(
    <div>
      <h2>About Us</h2>
      <h3>Transflower Agro Services</h3>
    </div>
  )
}

function Contact() {
  return(
    <div>
      <h2>Contact Us</h2>
      <h3>Transflowers Farm</h3>
      <p>For inquiries, please reach out to us at contact@transflowers.com</p>
    </div>
  )
}

export default App

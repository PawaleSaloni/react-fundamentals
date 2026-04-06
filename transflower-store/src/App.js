import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css'
import Login from './Login';
import Register from './Register';
import List from './List';
import Orders from './Orders';
import Order from './Order';


function App() {

  return (
    <div className= "App">
     <BasicRouting></BasicRouting>
      </div>

  );
}

// Functions Component for Home, About, and Contact pages
// This component will be used to demonstrate basic routing in React using react-router-dom
function BasicRouting() {
  return (
    <div>
      <h1>Transflower Store</h1>
      <Router>
         <Link to="/">Home</Link> |{" "}
        <Link to="/about">About Us</Link> |{" "}
        <Link to="/contact">Contact Us</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/orders">Orders</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/register">Register</Link>

        <hr/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<List />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return(
    <div>
      <div className="jumbotron text-center">
        <h1>Welcome to Transflower Store</h1>
        <p>Your one-stop shop for all your floral needs!</p>
        <p>Explore our wide range of products and services.</p>
      </div>

      <div className="container">

        <div className="row">

          <div className="col-sm-4">
            <p>Flowers</p>
            <p>Celebrate every moment using flowers</p>
          </div>

          <div className="col-sm-4">
            <p>Fruits</p>
            <p>Enjoy our fresh and organic fruits</p>
          </div>

        <div className="col-sm-4">
          <p>Vegetables</p>
          <p>Get your daily dose of healthy vegetables</p>
        </div>
      </div>
      </div>
    </div>
    )
  }

function About() {
  return(
    <div>
      <h2>About Us</h2>
      <p>Transflowers Farm is a family-owned business dedicated to providing high-quality flowers, fruits, and vegetables to our customers. We are committed to sustainable farming practices and strive to create a positive impact on our community and the environment.</p>
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

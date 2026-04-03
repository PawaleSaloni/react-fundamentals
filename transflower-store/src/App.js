import './App.css'
import Login from './Login';
import Register from './Register';
import Product from './Product';

function App() {

  return (
    <div className= "App">
      <Home></Home>
      <hr/>
      <Product></Product>

      </div>

  );
}

// Functions Component for Home, About, and Contact pages
function Home() {
  return(
    <div>
      <div className="jumbotron text-center">
        <h1>Welcome to Transflower Store</h1>
        <p>Your one-stop shop for all your floral needs!</p>
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
          <p>Increase immunity with our fresh vegetables</p>
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

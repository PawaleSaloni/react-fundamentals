import React from 'react'

// Class Component for Register page
class Register extends React.Component {
  render() {
    return (
      <div>
        <h2> New Customer Registration</h2>
        <form>
          <div className="form-group">
            <label for="firstName">First Name:</label>
            <input type="text" className="form-control" id="firstName"/>
          </div>
          <div className="form-group">
            <label for="lastName">Last Name:</label>
            <input type="text" className="form-control" id="lastName"/>
          </div>
          <div className="form-group">
            <label for="contactnumber">Contact Number:</label>
            <input type="text" className="form-control" id="contactnumber"/>
          </div>
          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" className="form-control" id="email"/>
          </div>
          <div className="form-group">
            <label for="password">Password:</label>
            <input type="password" className="form-control" id="password"/>
          </div>
          <button type="submit" className="btn btn-success">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
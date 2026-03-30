import React from 'react'

// Class Component for Register page
class Register extends React.Component {
  render() {
    return (
      <div>
        <h2>Register</h2>
        <form>
          <div>
            <label>Name:</label>
            <input type="text" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
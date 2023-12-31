import React from 'react'
import '../style/Registration.css'
import App from '../App'

export default function Registration() {
  return (
    <>
         <form action="/action_page.php">
          <h2>Registration</h2>
          <div className="mb-3 mt-3">
    <label htmlFor="text" className="form-label">UserName:</label>
    <input type="text" className="form-control" id="UserName" placeholder="Enter UserName" name="Registration"/>
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="username"/>
  </div>
  <div className='mb-3'>
  <label htmlFor="email" className="form-label">Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
  </div>

  <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember"/> Remember me
    </label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
     </form>
    </>
  )
}


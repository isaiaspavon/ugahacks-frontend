import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
 <div class="container">
    <div class="card">
      <h1 class="header-text">Create Your Account</h1>
      <p class="subtext">Join us to get started!</p>

      <div class="auth-buttons">
        <button class="auth-button">Sign up with Google</button>
        <button class="auth-button">Sign up with Apple</button>
      </div>  
        <div class="hr-container">
          <hr/>
          <span class="or-text">or</span>
          <hr/>
          </div>

      <div class="email-container">
        <label for="email" class="email-label">Email Address</label>
        <input type="email" id="email" class="email-input" placeholder="Enter your email"/>
      </div>

      <button class="continue-button">Continue</button>

      <div class="no-account">
        <span class="no-account-text">Already have an account?</span>
        <span class="create-one">Log in</span>
      </div>
    </div>
  </div>

  )
}

export default App

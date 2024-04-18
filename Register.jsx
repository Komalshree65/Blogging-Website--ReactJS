import "./register.css"
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm">
        <label >Username</label>
        <input className="registerInput" type="text" placeholder=" Your Username" />
        <label >Email</label>
        <input className="registerInput" type="text" placeholder=" Your Email" />
        <label >Password</label>
        <input className="registerInput" type="password" placeholder="  Your Password..." />
        <button className="registerButton">Register</button>
        </form>
        
        <button className="registerLoginButton"><Link to="/Login" class="link">Login</Link></button>
      
      
    </div>
  )
}

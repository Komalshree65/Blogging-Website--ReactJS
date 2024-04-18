import "./login.css"
import { Link } from "react-router-dom";
//import TopBar from "../../topBar/TopBar";

export default function Login() {
  return (
    <>
    
    <div className="login">
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
        <label >Email</label>
        <input className="loginInput" type="text" placeholder=" Your Email" />
        <label >Password</label>
        <input className="loginInput" type="password" placeholder=" Enter Your Password..." />
        <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link to="/Register" class="link">Register</Link></button>
      
      
    </div>
    </>
  )
}

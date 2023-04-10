import React from "react"
import { Link } from "react-router-dom"
import "./css/signup.css"
const Signin=()=>{
    return(
        <>
          <div className="sg_dot">
           <div className="sg_dot1"></div>
            <div className="sg_dot2"></div>
           </div>

            <div className="sg_cont">
            <h1>Sign in</h1>
            <Link to="#"><button className="sg_btn1 sg"><i class="fab fa-google"></i> Continue with Google</button></Link>
            <Link to="#"><button className="sg_btn1 sg"><i class="fab fa-facebook"></i> Continue with facebook</button></Link>
            <h4>or</h4>
           <input className="sg_inp sg" type="email" placeholder="Email" />
           <input className="sg_inp sg" type="password" placeholder="Password" />
           <div className="sg_btn2"><Link to="/dashboard"><button className="sg">Sign in</button></Link></div>
           <h4>Don't have an account? <Link to="/signup">Sign up</Link></h4> 
           <Link to="/forgotpw">Forgot password?</Link>         
           <Link to="/" className="sg_bh"><i class="fas fa-arrow-left"></i> Back to home</Link>
            </div>
        </>
    )
}
export default Signin
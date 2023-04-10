import React from "react"
import "./css/signup.css"
import {Link} from "react-router-dom"
const Forgotpw=()=>{
    return(
        <>
           <div className="sg_dot">
           <div className="sg_dot1"></div>
            <div className="sg_dot2"></div>
           </div>

            <div className="sg_cont">
           
            <h1>Forgotten Password?</h1>
            <br /> <br />
            <h4>Don't worry, simply enter your email in the field below, then we'll send you a link to reset your password shortly.</h4>          
           <br /> <br />

           <input className="sg_inp sg" type="email" placeholder="Email" />         
           <div className="sg_btn2"><Link to="#"><button className="sg">Send</button></Link></div>                    
           <Link to="/signin"  className="sg_bh"><i class="fas fa-arrow-left"></i> Back to Sign in</Link>
            </div>
        </>
    )
}
export default Forgotpw
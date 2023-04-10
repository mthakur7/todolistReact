import React from "react"
import "./css/signup.css"
import { Link } from "react-router-dom"

const Signup = () => {
    return (
        <>
            <div className="sg_dot">
                <div className="sg_dot1"></div>
                <div className="sg_dot2"></div>
            </div>

            <div className="sg_cont">
                <h1>Sign up</h1>
               <button className="sg_btn1 sg"><i class="fab fa-google"></i> Continue with Google</button>
               <button className="sg_btn1 sg"><i class="fab fa-facebook"></i> Continue with facebook</button>
                <h4>or</h4>
                <input className="sg_inp sg" type="email" placeholder="Email" />
                <input className="sg_inp sg" type="password" placeholder="Password" />
                <div className="sg_btn2"><Link to="#"><button className="sg">Sign up</button></Link></div>
                <h4>Already have an account? <Link to="/signin">Sign in</Link></h4>
                <Link to="/" className="sg_bh"><i class="fas fa-arrow-left"></i> Back to home</Link>
            </div>
        </>
    )
}
export default Signup
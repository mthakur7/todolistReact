import React from "react"
import "./css/fnf.css"
import { Link } from "react-router-dom"

const Signup = () => {
    return (
        <>
            <div className="fnf_dot">
                <div className="fnf_dot1"></div>
                <div className="fnf_dot2"></div>
              
            </div>

            <div className="fnf_cont">
                <h1>404 - Looks like you're lost.</h1>
                <h4>May be this page used to exist or may be you spelled something wrong.</h4>
                <h4>Chances are your spelled something wrong, so can you double check the url?</h4>             
                <div className="fnf_bh"><Link to="/"><button>Return home</button></Link></div>
                
            </div>
           <div className="fnf_dot_botm"> <div className="fnf_dot3"></div>
                <div className="fnf_dot4"></div></div>
        </>
    )
}
export default Signup
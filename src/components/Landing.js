import React from 'react'
import "./css/landing.css"
import {Link} from "react-router-dom"


const Landing = () => {
    return (
        <>
          <div className="land_head">
             
                  <div  className="tsk"><div className="hd_icon"><i className="fas fa-check"></i> </div>tsks.</div>
                  <Link to="#" className="feat">Features</Link>
                  <Link to="/signin" className="lg">Sign in</Link>
                  <Link to="/signup"><button className="hd_btn">Sign up</button></Link>
             
          </div>
          <div className="land_mid">
              <h1>Tsks, just Tasks</h1>
              <br />
              <h5>Keep track of the daily tasks in life and get that satisfaction upon completion.</h5>
                      
          </div>
          <div className="mid_btn">
          <Link to="/signup"><button className="mid1">Get Started</button></Link>
             <Link to="/learnmore"> <button className="mid2">Learn More</button></Link>
          </div>
<div className="dot1"></div>
<div className="dot2"></div>
<div className="dot3"></div>
<div className="dot4"></div>
        </>
    )
}

export default Landing
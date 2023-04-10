import React from "react"
import "./css/signup.css"
import "./css/learnmore.css"

import { Link } from "react-router-dom"

const Learnmore = () => {
    return (
        <>
            <div className="sg_dot">
                <div className="sg_dot1"></div>
                <div className="sg_dot2"></div>
            </div>

            <div className="sg_cont">
                <h1>Learn More</h1>
                <div className="lm_cont">
                    <div className="lm_items lm_items1">
                        <h2>Personal To-Do List</h2>
                        <p>This is the one-stop page for your employees. With its simple design, “Scedule” ensures that your team can hit the ground running in no time.</p>
                    </div>
                    <div className="lm_items lm_items2"></div>
                    <div className="lm_items lm_items3"></div>
                    <div className="lm_items lm_items4">
                        <h2>Achieve your goal</h2>
                        <p>“Scedule” is designed to help us become more aware of how we spend time in the process of doing those tasks and how productive that time is. It can help set some constraints on social media to reduce distraction and track the time we spend working on the todo items. </p>
                    </div>
                
                    <div className="lm_items lm_items5">
                        <h2>Collaborate and Share Information</h2>
                        <p>“Scedule” also allows users to access the entire message history and file repository for all tasks they are working on.

                       Share the newest developments with other team members. Let your project manager know how far along you are on your task. Raise issues, get help, and share files: all within a click or two away.</p>
                    </div>
                    <div className="lm_items lm_items6"></div>
                </div>

                <Link to="/" className="sg_bh"><i class="fas fa-arrow-left"></i> Back to home</Link>
            </div>
        </>
    )
}
export default Learnmore
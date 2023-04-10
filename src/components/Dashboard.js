import React, { useState } from "react"
import "./css/dashboard.css"
import Daily from "./Daily"
import Stat from "./Stat"
import {Link} from "react-router-dom"

// greeting
const time = new Date().getHours()
let greeting = "";
const user = "Manju"
if (time < 12)
	greeting = "Good morning";
else if ((time < 16) && (time >= 12))
	greeting = "Good afternoon";
else if(time>=16)
	greeting = "Good evening";



const Dashboard = () => {
	const [wid, setWid] = useState("300px")
	const change_sb = () => {
		setWid('0px');

	}

	return (
		<>
			<div className="nav">
				<button className="hambg" onClick={change_sb}><i className="fas fa-bars"></i></button>
				<div className="db_nolink"><i className="fab fa-flipboard"></i> Dashboard</div>
				<Link to="/collections" className="db_link"> <i className="fas fa-file-signature"></i> Collections</Link>
				<button className="nav_plus"><i className="fas fa-plus"></i></button>
				<button className="db_search_btn"><i className="fas fa-search"></i></button>
				<button className="db_notf_btn"><i className="far fa-bell"></i></button>
				<button className="db_profile_btn"><i className="far fa-user"></i></button>

			</div>
			<div className="db_cont" >
				<div className="db_sidebar" style={{ width: wid }}>
					<h2>Collections</h2>
					<ul>
						<li>fdf </li>
						<li>sdsd</li>
						<li>sdsd</li>
						<li>dssd</li>

					</ul>
				</div>

				<div className="db_mainbar">
					<div className="db_incont">
						<h2>Dashboard ...</h2><br /><br />
						<h1>{greeting},<br /> {user}</h1>
						<div className="db_mid_btn">
						<button className="db_daily_btn">Daily Overview</button>
						<button className="db_stat_btn">Statistics</button>
						</div>
						<div className="db_items">
							<div className="db_itemhead">School</div>
							<div className="db_itemmid">
								<ul>
									<li><i class="far fa-square"></i> task1</li>
									<li><i class="far fa-square"></i> task2</li>
								</ul></div><hr/>

								<div className="db_itembtm"><Link className="db_itembtm_link">Goto Collection <i class="fas fa-arrow-right"></i></Link></div>
							


						</div>
						
					</div>
				</div>

			</div>

			<Daily />
			<Stat />

		</>)
}
export default Dashboard
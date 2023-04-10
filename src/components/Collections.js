import React, { useState } from "react"
import "./css/dashboard.css"
import "./css/collections.css"

import { Link } from "react-router-dom"

const Collection = () => {
		let f=1;
		const [inp,setInp]=useState("");
		const [clcn,setClcn]=useState([]);
	const add_inp=(e)=>{
		setInp(e.target.value)
	}
		const add_clcn=()=>{
	setClcn((preval)=>{
		return([...preval,inp])
	})
	const btn=()=>{
		f=0;
	}
		}
	return (
		<>
			<div className="nav">
				<Link to="/dashboard" className="db_link"><i className="fab fa-flipboard"></i> Dashboard</Link>
				<div className="db_nolink"> <i className="fas fa-file-signature"></i> Collections</div>
				<button className="nav_plus"><i className="fas fa-plus"></i></button>
				<button className="db_search_btn"><i className="fas fa-search"></i></button>
				<button className="db_notf_btn"><i className="far fa-bell"></i></button>
				<button className="db_profile_btn"><i className="far fa-user"></i></button>

			</div>

			<div className="cl_cont">
				<h1>Collections ...</h1><br /><br />
				<div className="cl_btn">
					<button className="cl_fav_btn">Favourites</button>
					<button className="cl_allc_btn">All collections</button>
				</div>

				<div className="cl_incont">
					{/* {if(f===0)
						<input type="text" value={inp} onChange={add_inp}/>
						else
						<div className="cl_item">
							<div className="cl_itemcolor"></div>
							<div className="cl_itemtitle">
								<div className="cl_itemtitle1"><h2>School</h2>
								<h4>4/8 done</h4></div>
								<div className="cl_itemtitle2"></div>
							</div>						
							
						</div>
						}
						
					{clcn.map((value)=>{
						return(<li>{value}</li>)
					})} */}




					{/* <button className="cl_add" onClick={add_clcn}>+</button> */}
					{/* <button onClick={btn}>change</button> */}


				</div>



			</div>


		</>)
}
export default Collection
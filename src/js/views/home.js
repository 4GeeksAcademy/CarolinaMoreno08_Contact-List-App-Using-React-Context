import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";


import "../../styles/home.css";


export const Home = () => {
	const { store, actions } = useContext(Context);

	// function toDelete(indexToDelete){
	// 	console.log("eliminar",indexToDelete)
	// 	console.log(store.contacts.filter( (contacts, contactsIndex)=> contactsIndex != indexToDelete))

	// }
	// useEffect (()=>{
	// 	actions.loadSomeData()
	// },[])


	return (
		<div className="container">
			<div className="ml-auto">
				<Link to="/addcontact">
					<button className="btn btn-primary">Add new contact</button>
				</Link>
			</div>


			<ul className="list-group">
				{/* The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error. */}

				{store.contacts?.map((item) => {
					return (
							
							<div className="row list-group-item d-flex" >
								<div className="col-2" >
									<img src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" className="picture" />
								</div>
								<div className="col-8">
									{item.name}<br />
									<i className="fa-solid fa-location-dot" style={{ marginRight: "10px" }} onClick={() => actions.deleteContact(item.id)}></i>{item.address}<br />
									<i className="fa-solid fa-phone" style={{ marginRight: "10px" }}></i>{item.phone}<br />
									<i className="fa-solid fa-envelope" style={{ marginRight: "10px" }}></i>{item.email}<br />
								</div>

								
								<div className="col-2" style={{margin:"auto"}}>

									<Link to={"/editcontact/" + item.id}>
										<button className="buttonicon" style={{ marginRight: "20px", border: "none", backgroundColor: "white" }} ><i className="fa-solid fa-pen-to-square"></i></button>
									</Link>

									<button className="buttonicon" style={{ marginRight: "20px", border: "none", backgroundColor: "white" }} onClick={() => actions.deleteContact(item.id)}><i className="fa-solid fa-trash"></i></button>
								</div>
							</div>
							
						
					)
				})}

				{/* {store.contacts?.map((item) => {
					return (
						<li
							key={item.id}
							className="list-group-item d-flex"
						>
							<img src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" className="picture" />

							<div className="ContactInformation">
								{item.name}<br />
								<i className="fa-solid fa-location-dot" style={{ marginRight: "10px" }} onClick={() => actions.deleteContact(item.id)}></i>{item.address}<br />
								<i className="fa-solid fa-phone" style={{ marginRight: "10px" }}></i>{item.phone}<br />
								<i className="fa-solid fa-envelope" style={{ marginRight: "10px" }}></i>{item.email}<br />
							</div>

							<div className="buttonsicons">
								<Link to={"/editcontact/" + item.id}>
									<button className="buttonicon" style={{ marginRight: "20px", border: "none", backgroundColor: "white" }} ><i className="fa-solid fa-pen-to-square"></i></button>
								</Link>

								<button className="buttonicon" style={{ marginRight: "20px", border: "none", backgroundColor: "white" }} onClick={() => actions.deleteContact(item.id)}><i className="fa-solid fa-trash"></i></button>
							</div>

						</li>
					);
				})} */}
			</ul>

		</div>
	);
};

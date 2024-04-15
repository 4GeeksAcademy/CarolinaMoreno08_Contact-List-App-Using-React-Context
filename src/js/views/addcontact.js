import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/addcontact.css";

export const Addcontact = () => {

        const { store, actions } = useContext(Context);
        const [newData, setnewData] = useState ({
        name: "",
        phone: "",
        email: "",
        address: "",});
        
        const infoInput = (e) => {
            setnewData ({...newData,[e.target.name]: e.target.value});
        };

        const navigate = useNavigate();
        const save = (e) => {
            actions.postContactsToAgenda(newData); 
            navigate("/");
        }
             

        return (
            <div>
                <div className="container">
                <div className="tittle"><h1 className="text-center">Add a new contact</h1></div>
                        <div className="container">
                            <label>Full Name</label><br/>
                            <input type="text" onChange={infoInput} name="name" value={newData.name} placeholder="Full Name" /><br/>
                            <label>Email</label><br/>
                            <input type="text" onChange={infoInput} name="email" value={newData.email} placeholder="Enter email" /><br/>
                            <label>Phone</label><br/>
                            <input type="text" onChange={infoInput} name="phone" value={newData.phone} placeholder="Enter phone" /><br/>
                            <label>Address</label><br/>
                            <input type="text" onChange={infoInput} name="address" value={newData.address} placeholder="Enter address" /><br/>
                        </div>
                
                
                        <div className="savebutton2">
                            <button className="savebutton" onClick={save}>save</button>	
                        </div>
                        

                        <Link to="/">  
                            <span> or get back to contacts</span>
                        </Link> 
                </div>
            </div>  
        );
    };


    // onChange={saveChanges} 
    //             value ={inputValue}
    //             onClick={saveItems}


    // <button onClick={()=>actions.postContactsToAgenda(newData)}>save</button>	

import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/editcontact.css";

export const Editcontact = () => {

const params = useParams();
console.log(params)
    
        const { actions, store } = useContext(Context);
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
            actions.editContact(newData, params.theidcontact); 
            navigate("/");
        }

        const getContactToEdit = () => {
            // const newContactArray = store.contacts.filter ((contacto)=>contacto.id == params.theidcontact)
            const newContactFind = store.contacts.find ((contacto)=>contacto.id == params.theidcontact)
            setnewData (newContactFind)
        }

        useEffect(()=>{getContactToEdit()},[])
             

        return (
            <div>
                <div className="container">
                   <div className="tittle"><h1 className="text-center">Edit contact</h1></div>
                        <div className="container">
                            <label>Full Name</label>
                            <input type="text" onChange={infoInput} name="name" value={newData?.name} placeholder="Full Name" />  
                            <label>Email</label>
                            <input type="text" onChange={infoInput} name="email" value={newData?.email} placeholder="Enter email" /> 
                            <label>Phone</label>
                            <input type="text" onChange={infoInput} name="phone" value={newData?.phone} placeholder="Enter phone" /> 
                            <label>Address</label>
                            <input type="text" onChange={infoInput} name="address" value={newData?.address} placeholder="Enter address" />   
                        </div>
                
                
                    <div className="savebutton">
                        <button className="savebutton" onClick={save}>save</button>	
                    </div>

                    <Link to="/">  
                        <span> or get back to contacts</span>
                    </Link> 
                </div>
            </div>  
        );
    };

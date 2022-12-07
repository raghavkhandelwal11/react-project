import React from 'react';
import "../../App.css";
import { Link } from 'react-router-dom';
import {user} from "../../App";
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { logoutUser } from './Login';
import { logout } from '../../App';

const Profile = () => {
  const [name1, updatename1] = useState("user")
  let dt = useContext(user);
  console.log(dt);

  useEffect(() => {
    if(JSON.stringify(dt) != "" && dt != null){
      console.log(dt);
      updatename1(dt.name);
    }
  }
  , [dt]);

  
  const logout1 = async () => {
    if(JSON.stringify(dt) != "" && dt.notLogged == undefined) {
      
        await axios.post("/ur/logout", {
          user_id: dt._id.toString()
        }).then((res) => {
          if(res.data == "success") {
            updatename1("user");
          }
        }).catch((err) => {
          console.log(err);
        });
        
        await logout();
        console.log("logged out succesfully");
      
    }
  }
  


  return (
    <div style={{
      padding: "0 4%",
      width: "100vw",
      position: "relative",
      right: "8%",
      backgroundColor: "black",
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-between"
    }}>
        <div style={{width:"60%", textAlign: 'left', paddingTop: "5px",  fontWeight: "700"}}><Link to="/" style={{color: "white", fontSize: "1.2rem"}}>HOME</Link></div>
        <div style={{color: "white", paddingTop: "9px", fontWeight: "700"}}>{name1}</div>
        <div id="profile"><Link style={{color: "white"}} to="/login">Log In</Link></div>
        <div id="signup"><Link style={{color: "white"}} to="/signup">Sign Up</Link></div>
        <div><button style={{
          backgroundColor: "inherit",
          color: "white",
          border: "none",
          paddingTop: "9px",
          fontWeight: "700"

        }} onClick={logout1}>Log out</button></div>
    </div>
  )
}

export default Profile;


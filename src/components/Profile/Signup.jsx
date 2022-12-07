import React from 'react';
import Brand from '../blog-name/Brand';
import axios from 'axios';
import { useRef } from 'react';

const Login = () => {
  let name1 = useRef();
  let uName1 = useRef();
  let email1 = useRef();
  let password1 = useRef();

  const submit = (e) => {
    e.preventDefault();
    axios.post("/signup/register", {
      name: name1.current.value,
      user_name: uName1.current.value,
      email: email1.current.value,
      password: password1.current.value
    }).then((res) => {
      if(res.data == "user registered!");
          alert("new user registered!");
    }).catch((err) => {
      console.log(err);
    });
  }


  return (
    <div style={{
        padding: "10%",
    }}>
        <Brand/>
        <br /><br /><br /><br />
        <form style={{textAlign: "left"}} action="/">
            <label style={{border: "1px solid black", backgroundColor: "lightgray", padding: "2px 5px"}} htmlFor="">Name</label>
            <input type="text" name="" id="" ref={name1}/>
            <br /> <br />
            <label style={{border: "1px solid black", backgroundColor: "lightgray", padding: "2px 5px"}} htmlFor="">User Name</label>
            <input type="text" name="" id="" ref={uName1}/>
            <br /> <br />
            <label style={{border: "1px solid black", backgroundColor: "lightgray", padding: "2px 5px"}} htmlFor="">Email</label>
            <input type="email" name="" id="" ref={email1}/>
            <br /> <br />
            <label style={{border: "1px solid black", backgroundColor: "lightgray", padding: "2px 5px"}} htmlFor="">Password</label>
            <input type="password" name="" id="" ref={password1}/>
            <br /> <br />

            <input type="submit" onClick={submit} value="Sign Up" />
           
        </form>
    </div>
  )
}

export default Login;
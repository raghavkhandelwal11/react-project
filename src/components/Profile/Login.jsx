import React from 'react';
import Brand from '../blog-name/Brand';
import { useRef } from 'react';









const Login = (props) => {
  const email = useRef();
  const password = useRef();
  

 


  const submit2 = async (e) => {
    e.preventDefault();
    if(email.current.value != "" && password.current.value != "") {
     await props.submit(email.current.value, password.current.value);
    } else {
      alert("enter the email and password correctly!");
    }
 
  }


  
  return (
    <div style={{
        padding: "10%",

    }}>
        <Brand/>
        <br /><br /><br /><br />
        <form style={{textAlign: "left"}}  action="">
            <label style={{border: "1px solid black", backgroundColor: "lightgray", padding: "2px 5px"}} htmlFor="">Email</label>
            <input type="text" ref={email} name="" id="" />
            <br /> <br />
            <label style={{border: "1px solid black", backgroundColor: "lightgray", padding: "2px 5px"}} htmlFor="">Password</label>
            <input type="password" name="" ref={password} id="" />
            <br /> <br />

            <button  onClick={submit2}>Log In</button>
           
        </form>
    </div>
  )
}

export default Login;






import React from 'react';
import axios from 'axios';
import { useRef } from 'react';
import { useContext } from 'react';
import { user } from '../../App';




const Create = () => {
    const heading = useRef();
    const discription = useRef();
    const content = useRef();
    const date = useRef();
    const category = useRef();
    const img_url = useRef();
    const loggedUser = useContext(user);
  

    const submit = () => {

      if(JSON.stringify(loggedUser) != "" || loggedUser.notLogged != true) {
        
        axios.post("/add/post", {
            email: loggedUser.email,
            heading: heading.current.value,
            discription: discription.current.value,
            content: content.current.value,
            category: category.current.value,
            date: date.current.value,
            img_url: img_url.current.value

        }).then((res) => {
          alert(res.data);
        });
      } else {
        alert("error in reading loggedUser");
      }
    }
  return (
      
        <div style={{position: "relative", top: "200px", display: "flex", flexFlow: "column wrap", textAlign: "left"}}>
          <div style={{padding: "10px 2px"}}> <label htmlFor="">Heading*</label>
          <input type="text" name="heading" ref={heading} required/></div>
          <div style={{padding: "10px 2px"}}><label htmlFor="">Discription*</label>
          <input type="text" name="discription" ref={discription} required/></div>
          <div style={{padding: "10px 2px"}}><label htmlFor="">Content*</label>
          <textarea id="" name="content" ref={content} cols="30" rows="10"></textarea></div>
          <div style={{padding: "10px 2px"}}> <label htmlFor="">Date*</label>
          <input type="text" name="date" ref={date} required/></div>
          <div style={{padding: "10px 2px"}}> 
          <select name="category" id="" ref={category}>
              <option value="">Category</option>
              <option value="Bollywood">Bollywood</option>
              <option value="Technology">Technology</option>
              <option value="Hollywood">Hollywood</option>
              <option value="Fitness">Fitness</option>
              <option value="Food">Food</option>
          </select><span>*</span></div>
          <div style={{padding: "10px 2px"}}>
            <label htmlFor="">Ref Image URL</label>
            <input type="text" ref={img_url} name="img_url" />
          </div>
          <div style={{padding: "10px 2px"}}>
            <button onClick={submit}>Post</button>
          </div>  

      </div>

     
  )
}

export default Create;
import Brand from './components/blog-name/Brand';
import VerticalGallery from './components/vetical-gallery/VerticalGalllery';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Bollywood  from './components/nav/Bollywood';
import Technology from './components/nav/Technology';
import Hollywood from './components/nav/Hollywood';
import Fitness from './components/nav/Fitness';
import Food from './components/nav/Food';
import Home from './components/nav/Home';
import Post from './components/Post/Post';
import Sports from './components/nav/Sports';
import { createContext } from 'react';
import axios from 'axios';
import { useEffect, useState, Suspense, lazy } from 'react';
import Profile from "./components/Profile/Profile";
import Login from "./components/Profile/Login";
import Signup from "./components/Profile/Signup";
import Create from "./components/Profile/Create";
import { useNavigate } from 'react-router-dom';
import UserPost from "./components/Post/UserPost";



let d1 = [];
let d2 = [];
let d3 = [];
let user = {
  notLogged: true
};
let logout;
let userPosts;




function App() {
  const [content, updateContent] = useState([]);
  const [posts, updatePosts] = useState([]);
  const [images, updateImages] = useState([]);
  const [latestPosts, updateLatestPosts] = useState([]);
  const [lu, updateLu] = useState({
      notLogged: true
  });
  const navigate = useNavigate();
  d1 = createContext(content);
  d2 = createContext(posts);
  d3 = createContext(images);
  user = createContext(lu);
  userPosts = createContext(latestPosts);


  useEffect(() => {
   
    axios.get("/post/data")
    .then((res) => {
      updateContent(res.data);
    })
    .catch((err) => {console.log(err, "error while fetching getting content data")});


    axios.get("/post/items")
    .then((res) => {
      updatePosts(res.data);
      
      
    })
    .catch((err) => {console.log(err, "error while fetching getting post data")});


    axios.get("/images")
    .then((res) => {
      updateImages(res.data) 
        
    })
    .catch((err) => {console.log(err, "error while fetching getting image data")});


  }, []);



  useEffect(() => {
    if(lu != undefined && lu.email != undefined) {
      axios.post("/posts/get", {email: lu.email})
      .then((res) => {
        if(res.data != "request rejected") {
          updateLatestPosts(res.data);
          console.log(res.data);
        } else {
          alert(res.data);
        }
      })
    }
  }, [lu]);


  const submit = (e, p) => {
    
    axios.post("/user/login", {
      email: e,
      password: p
    }).then((res) => {
      if(res.data != "ENTER CORRECT PASSWORD") {
      updateLu(res.data);
      console.log(res.data);
      navigate("/");
      } else {
        alert(res.data);
      }
    } 
    );
  }

  logout = () => {
    if(JSON.stringify(user) != "") {
      updateLu({
        notLogged: true
      });
      updateLatestPosts([]);
    }
  }

  return (
    <div className="App">
      <Profile></Profile>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/bollywood" element={<Bollywood />}/>
          <Route path="/technology" element={<Technology />}/>
          <Route path="/hollywood" element={<Hollywood />}/>
          <Route path="/fitness" element={<Fitness />}/>
          <Route path="/food" element={<Food />}/>
          <Route path="/post/:num" element={<Post />}/>
          <Route path="/sports" element={<Sports />}/>
          <Route path="/login" element={<Login submit={submit} />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/create" element={<Create />}/>
          <Route path="/userpost" element={<UserPost />}/>
        </Routes>
          
    </div>
  );
}

export default App;

export {d1, d2, d3, user, logout, userPosts};


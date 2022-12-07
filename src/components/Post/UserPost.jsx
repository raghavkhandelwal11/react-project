import axios from "axios";

import { useState } from "react";

import { useParams } from "react-router-dom";

import PostPageItems from "./PostPageItems";

import { useEffect } from "react";

import { useContext } from "react";

import {user, userPosts} from "../../App";

const UserPost = (props) => {
    let [heading, updateHeading] = useState('');
    let [user_name, updateUser] = useState('');
    let [date, updateDate] = useState('');
    let [content, updateContent] = useState('');
    let [image_url, updateImage] = useState('');
    let arr = useContext(userPosts);
    let u = useContext(user)


    useEffect(() => {
        if(arr.length != 0) {
            updateHeading(arr[arr.length-1].heading);
            updateUser(u.user_name);
            updateDate(arr[arr.length-1].date);
            updateContent(arr[arr.length-1].content);
            console.log(arr[arr.length-1].user_name);
        
    
       
            updateImage(arr[arr.length-1].img_url)

        }
        
    }, [arr.length]);


    const autoScroll = () => {
        window.scrollTo(0, 0);
    }

    autoScroll();

    return(
        <div className="main-box">
            <div className="post">
                <div className="post-header">

                    <div id="post-brand-box"><span id="post-rotate">The</span>Siren</div>

                    <div><button id="get-started-button">Get Started</button></div>
                </div>

                <hr id="post-horizontal"/>

                <div className="post-content-box">
                    <h1 className="post-heading-1">{heading}</h1>

                    <div className="author-details">

                        <div>
                            <span className="profile-pic"></span>
                        <h4   className="post-user-name">{user_name}</h4>

                        <span className="post-date-1">{date}</span>
                        </div>

                        <div>
                            <span className="fix-post-button"><button className="fb-button"></button></span>

                            <span className="fix-post-button"><button className="tw-button"></button></span>

                            <span className="fix-post-button"><button className="in-button"></button></span>

                            <span className="fix-post-button"><button className="yt-button"></button></span>
                        </div>
                    
                    </div>

                    <div >
                        <img src={image_url} alt="" className="post-image-1"/>
                    </div>

                    <div className="post-paragraph">{content}</div>
                </div>




            </div>

        <div className="clap-share">
           <div><button>
           <span className="clap"></span> 
           <br />
           Clap
               </button></div>
           <div><button><span className="share"></span>
           <br />
           Share</button></div>
        </div>

        <div className="footer">
            <h3 className="footer-title">More from the Siren</h3>
            <br />
            <hr className="footer-hr-1"/>
            <div className="post-footer">

                <PostPageItems val={parseInt(20) + 1}></PostPageItems>
                <PostPageItems val={parseInt(20) + 2}></PostPageItems>
                <PostPageItems val={parseInt(20) + 3}></PostPageItems>

            </div>
        </div>

       
        </div>
    );
}


export default UserPost;
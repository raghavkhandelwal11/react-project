import axios from "axios";

import { useState } from "react";

import { useParams } from "react-router-dom";

import PostPageItems from "./PostPageItems";

import { useEffect } from "react";

import { useContext } from "react";

import {d1, d2, d3} from "../../App";

const Post = (props) => {
    let [heading, updateHeading] = useState('');
    let [user_name, updateUser] = useState('');
    let [date, updateDate] = useState('');
    let [content, updateContent] = useState('');
    let [image_url, updateImage] = useState('');
    let {num} = useParams();

    let data1 = useContext(d1);
    
    let data3 = useContext(d3);

    useEffect(() => {
        if(data1.length != 0 && data3.length != 0) {
            updateHeading(data1[num].heading);
            updateUser(data1[num].user_name);
            updateDate(data1[num].date);
            updateContent(data1[num].content);
            console.log(data1[num].user_name);
        
    
       
            updateImage(data3[num].download_url)

        }
        
    }, [num, data1, data3]);


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

                <PostPageItems val={parseInt(num) + 1}></PostPageItems>
                <PostPageItems val={parseInt(num) + 2}></PostPageItems>
                <PostPageItems val={parseInt(num) + 3}></PostPageItems>

            </div>
        </div>

       
        </div>
    );
}


export default Post;
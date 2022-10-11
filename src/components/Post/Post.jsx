import axios from "axios";

import { useState } from "react";

import { useParams } from "react-router-dom";

import PostPageItems from "./PostPageItems";

const Post = (props) => {
    let [heading, updateHeading] = useState('');
    let [user_name, updateUser] = useState('');
    let [date, updateDate] = useState('');
    let [content, updateContent] = useState('');
    let [image_url, updateImage] = useState('');
    let {num} = useParams();

    axios.get("/database/MOCK_DATA_TWO.json").then((res) => {
        updateHeading(res.data[num].heading);
        updateUser(res.data[num].user_name);
        updateDate(res.data[num].date);
        updateContent(res.data[num].content);
    }).catch((error) => {console.log(error);})

    axios.get("/database/Image_URL.json").then((res) => {
        updateImage(res.data[num].download_url)
    }).catch((err) => {console.log(err);});


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
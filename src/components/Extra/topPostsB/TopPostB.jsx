import PostItems from "../../TopPosts/PostItems"
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TopPostsB = (props) => {

    let [heading, updateContentHeading] = useState("");
    let [category, updateContentCategory] = useState("");
    let [date, updateContentDate] = useState("");
    let [id1 , updateContentId] = useState("");
    let [img_url, updateImage] = useState("");



    axios.get('./database/MOCK_DATA.json').then((res) => {
        updateContentHeading(res.data[props.start].Heading);
        let cat = res.data[props.start].category;
        if(cat == 1) {
            updateContentCategory("Tech");
        } else if(cat == 2) {
            updateContentCategory("Style");
        } else {
            updateContentCategory("Bollywood");
        }
        
        updateContentDate(res.data[props.start].date);
        updateContentId("l" + props.start);

    }).catch((error) => {
        console.log(error);
    })

    axios.get("/database/Image_URL.json").then((res1) => {
        updateImage(res1.data[props.start].download_url);
    }).catch((err) => {console.log(err);})

    

    return(
        <div id="top-posts-b">

                <Link to={`/post/${props.start}`}>
                    <div className="posts-heading">
                        <h2 className="posts-h2">Top Posts</h2>
                        <hr className="posts-hr" />

                    </div>

                    <div>
                        <div id="tp-img"><img src={img_url} alt="" /></div>
                        <div id="posts-content">
                            <h3 className="article-h3 ">{heading}</h3>

                            <p className="article-last"><span>{category} /</span> {date}</p>
                        </div>

                        <span className="fix-number">1</span>
                    </div>
                </Link>

                <div>
        <div id="post-flex">

            <PostItems val={props.items[0]} count={2}/>
            <PostItems val={props.items[1]} count={3}/>
            <PostItems val={props.items[2]} count={4}/>
        
        </div>
        </div>
    </div>
    );
}

export default TopPostsB;
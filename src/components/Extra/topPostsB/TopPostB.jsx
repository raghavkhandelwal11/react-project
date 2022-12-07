import PostItems from "../../TopPosts/PostItems"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {d1, d2, d3} from "../../../App";


const TopPostsB = (props) => {

    let [heading, updateContentHeading] = useState("");
    let [category, updateContentCategory] = useState("");
    let [date, updateContentDate] = useState("");
    let [id1 , updateContentId] = useState("");
    let [img_url, updateImage] = useState("");

    let data2 = useContext(d2);
    let data3 = useContext(d3);


    useEffect(() => {

        if(data2.length != 0 && data3.length != 0) {
        
            updateContentHeading(data2[props.start].Heading);
           
            
            updateContentCategory(props.cat);

            
            updateContentDate(data2[props.start].date);
            updateContentId("l" + props.start);
    
        
            
            updateImage(data3[23].download_url);

        }
           
    

    }, [props.start, data2, data3])


    return(
        <div id="top-posts-b">

                <Link to={`/post/${props.start}`}>
                    <div className="posts-heading">
                        <h2 className="posts-h2">Top Posts</h2>
                        <hr className="posts-hr" />

                    </div>

                    <div>
                        <div id="tp-img"><img id="tp-img" src={img_url} alt="" /></div>
                        <div id="posts-content">
                            <h3 className="article-h3 ">{heading}</h3>

                            <p className="article-last"><span>{category} /</span> {date}</p>
                        </div>

                        <span className="fix-number">1</span>
                    </div>
                </Link>

                <div>
        <div id="post-flex">

            <PostItems val={props.items[0]} count={2} cat={props.cat}/>
            <PostItems val={props.items[1]} count={3} cat={props.cat}/>
            <PostItems val={props.items[2]} count={4} cat={props.cat}/>
        
        </div>
        </div>
    </div>
    );
}

export default TopPostsB;
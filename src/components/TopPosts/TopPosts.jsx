import PostItems from "./PostItems";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {d1, d2, d3} from "../../App";


const TopPosts = (props) => {

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
            let cat = data2[props.start].category;
            if(cat == 1) {
                updateContentCategory("Tech");
            } else if(cat == 2) {
                updateContentCategory("Style");
            } else {
                updateContentCategory("Bollywood");
            }
            
            updateContentDate(data2[props.start].date);
            updateContentId("l" + props.start);
    
       
    
        
            updateImage(data3[22].download_url);
            
        }
        
    }, [props.start, data2, data3])



    

    return(
        <div id="top-posts">

               
                    <div className="posts-heading">
                        <h2 className="posts-h2">Top Posts</h2>
                        <hr className="posts-hr" />

                    </div>
                    <Link to={`/post/${22}`}>
                    <div>
                        <div ><img id="tp-img" src={img_url} alt="" /></div>
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

export default TopPosts;
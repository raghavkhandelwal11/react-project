
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {d1, userPosts} from "../../App";

 const UserArticle = (props) => {
    let [heading, updateContentHeading] = useState("");
    let [content, updateContent] = useState("");
    let [category, updateContentCategory] = useState("");
    let [date, updateContentDate] = useState("");
    let [id1 , updateContentId] = useState("");
    let [img_url, updateImage] = useState("");

    let arr = useContext(userPosts);


    useEffect(() => {

        if(arr.length != 0) {
        
            updateContentHeading(arr[arr.length-1].heading);
            updateContent(arr[arr.length-1].discription);
            updateContentDate(arr[arr.length-1].date);
            updateImage(arr[arr.length-1].img_url);
            updateContentCategory(arr[arr.length-1].category)

        }
        
    
    }, [arr.length])

    

    if(content.length > 130) {
        updateContent(content.substring(0, 130));
    }



    return(
        <div className="article-flex-item" id={id1}>
            <Link to="/userpost">
                <hr className="extend"/>
                <div className="article-image"><img src={img_url} alt="error: not able to load" /></div>
                <h3 className="article-h3">{heading}</h3>
                <p className="article-p">{content}</p>
                <p className="article-last"><span>{category} /</span>{date}</p>
            </Link>
            
        </div>
    );

}

export default UserArticle;


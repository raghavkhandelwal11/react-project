
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {d1, d2, d3} from "../../App";

 const PostItem = (props) => {
    let [heading, updateContentHeading] = useState("");
    let [category, updateContentCategory] = useState("");
    let [date, updateContentDate] = useState("");
    let [id1 , updateContentId] = useState("");
    let [img_url, updateImage] = useState("");

    let data2 = useContext(d2);
    let data3 = useContext(d3);


    let selectIndex = (ind) => {
        let ind1 = parseInt(ind)
        if(ind1 > 105) {
            return 100;
        }

        return ind1 + 7;
    }



    useState(() => {

            if(data2.length != 0 && data3.length != 0) {
            updateContentHeading(data2[props.val].Heading);
            
            
            updateContentCategory(props.cat);
            
            
            updateContentDate(data2[props.val].date);
            updateContentId("l" + props.val);
    
        
    
    
        
            updateImage(data3[selectIndex(props.val)].download_url);
       
        }

    }, [props.val, data2, data3])
   

    return(
        <div className="post-flex-item" id={id1}>
            <Link to={`/post/${selectIndex(props.val)}`}>
            <hr className="post-extend"/>
            <div className="post-image"><img src={img_url} alt="" /></div>
            <h3 className="post-h3">{heading}</h3>
            <p className="post-last"><span>{category} /</span> {date}</p>
            <span className="fix-number-post">{props.count}</span>
            </Link>
        </div>
    );

}

export default PostItem;


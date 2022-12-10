
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {d1, d2, d3} from "../../App";

 const ArticleItem = (props) => {
    let [heading, updateContentHeading] = useState("");
    let [content, updateContent] = useState("");
    let [category, updateContentCategory] = useState("");
    let [date, updateContentDate] = useState("");
    let [id1 , updateContentId] = useState("");
    let [img_url, updateImage] = useState("");

    let data2 = useContext(d2);
    let data3 = useContext(d3);


    useEffect(() => {

            if(data2.length != 0 && data3.length != 0) {
        
            updateContentHeading(data2[props.val].Heading);
            updateContent(data2[props.val].content);
    
           
            updateContentCategory(props.cat);
           
            
            updateContentDate(data2[props.val].date);
            updateContentId("l" + props.val);
    
        
    
        
            updateImage(data3[selectIndex(props.val)].download_url);

        }
        
    
    }, [props.val, data2, data3])

    
    let selectIndex = (ind) => {
        let ind1 = parseInt(ind)
        if( ind1 > 100) {
            return 100;
        }

        return  ind1 + 4;
    }

    if(content!= undefined && content.length > 130) {
        updateContent(content.substring(0, 130));
    }



    return(
        <div className="article-flex-item" id={id1}>
            <Link to={`/post/${selectIndex(props.val)}`}>
                <hr className="extend"/>
                <div className="article-image"><img src={img_url} alt="error: not able to load" /></div>
                <h3 className="article-h3">{heading}</h3>
                <p className="article-p">{content}</p>
                <p className="article-last"><span>{category} /</span>{date}</p>
            </Link>
            
        </div>
    );

}

export default ArticleItem;


import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {d1, d2, d3} from "../../App";

const PostPageItems = (props) => {
    let num = props.val;
    let [heading, updateContentHeading] = useState("");
    let [content, updateContent] = useState('');
    let [category, updateContentCategory] = useState("");
    let [date, updateContentDate] = useState("");
    let [image_url, updateImage] = useState('');

    let data2 = useContext(d2);
    let data3 = useContext(d3);
    
    if(num > 105) {
        num = 110;
    }


    useEffect( () =>  {
        if(data2.length != 0 && data3.length != 0) {
       
            updateContentHeading(data2[num].Heading);
            updateContent(data2[num].content);
            let cat = data2[num].category;
            if(cat == 1) {
                updateContentCategory("Tech");
            } else if(cat == 2) {
                updateContentCategory("Style");
            } else {
                updateContentCategory("Bollywood");
            }
            
            updateContentDate(data2[num].date);
           
    
    
        
            updateImage(data3[num].download_url);

        }
       
    
    }, [num, data2, data3])

    return(
        <div className="footer-flex-item extra-hr">
            <Link to={`/post/${num}`}>
                <div><img className="footer-image" src={image_url} alt="" /></div>
                <h3 className="latest-h3">{heading}</h3>
                <p className="footer-p">{content}</p>
                <p className="latest-last"><span>{category} /</span> {date}</p>
            </Link>
        </div>
    );

}

export default PostPageItems;
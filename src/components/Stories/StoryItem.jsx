import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {d1, d2, d3} from "../../App";

const StoryItem = (props) => {
    let [heading, updateContentHeading] = useState("");
    let [content, updateContent] = useState('');
    let [category, updateContentCategory] = useState("");
    let [date, updateContentDate] = useState("");

    let data2 = useContext(d2);



    useEffect(() => {

        if(data2.length != 0) {
       
            updateContentHeading(data2[props.val].Heading);
            updateContent(data2[props.val].Heading);
            let cat = data2[props.val].category;
            if(cat == 1) {
                updateContentCategory("Tech");
            } else if(cat == 2) {
                updateContentCategory("Style");
            } else {
                updateContentCategory("Bollywood");
            }
            
            updateContentDate(data2[props.val].date);
       
        }
        


    }, [props.val, data2])

    

    return(
        <div className="latest-flex-item extra-hr">
            <Link to={`/post/${props.val}`}>
                <h3 className="latest-h3">{heading}</h3>
                <p className="latest-p">{content}</p>
                <p className="latest-last"><span>{category} /</span> {date}</p>
            </Link>
        </div>
    );

}

export default StoryItem;
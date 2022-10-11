import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StoryItem = (props) => {
    let [heading, updateContentHeading] = useState("");
    let [content, updateContent] = useState('');
    let [category, updateContentCategory] = useState("");
    let [date, updateContentDate] = useState("");
    

    axios.get('./database/MOCK_DATA.json').then((res) => {
        updateContentHeading(res.data[props.val].Heading);
        updateContent(res.data[props.val].Heading);
        let cat = res.data[props.val].category;
        if(cat == 1) {
            updateContentCategory("Tech");
        } else if(cat == 2) {
            updateContentCategory("Style");
        } else {
            updateContentCategory("Bollywood");
        }
        
        updateContentDate(res.data[props.val].date);
       

    }).catch((error) => {
        console.log(error);
    })



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
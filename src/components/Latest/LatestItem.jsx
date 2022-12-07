import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {d1, d2, d3} from "../../App";

 const LatestItem = (props) => {
    let [heading, updateContentHeading] = useState("");
    let [context, updateContent] = useState("");
    let [category, updateContentCategory] = useState("");
    let [date, updateContentDate] = useState("");
    let [id1 , updateContentId] = useState("");
    let [img_url, updateImage] = useState("");

    let data1 = useContext(d2);
    let data2 = useContext(d3);


    let selectIndex = (ind) => {
        let ind1 = parseInt(ind)
        if(ind1 > 105) {
            return 100;
        }

        return ind1 + 7;
    }


    useEffect(() => {

        if(data1.length != 0 && data2.length != 0) {

            updateContentHeading(data1[props.val].Heading);
            updateContent(data1[props.val].content);

            let cat = data1[props.val].category;
            if(cat == 1) {
                updateContentCategory("Tech");
            } else if(cat == 2) {
                updateContentCategory("Style");
            } else {
                updateContentCategory("Bollywood");
            }
            
            updateContentDate(data1[props.val].date);
            updateContentId("l" + props.val);


        
            updateImage(data2[selectIndex(props.val)].download_url);
        

        }
        
        
    }, [props.val, data1, data2]);

    
    return(
        <div className="latest-flex-item" id={id1}>
            <Link to={`/post/${selectIndex(props.val)}`}>
            <div className="latest-image"><img src={img_url} alt="" /></div>
            <h3 className="latest-h3">{heading}</h3>
            <p className="latest-p">{context}</p>
            <p className="latest-last"><span>{category} /</span> {date}</p>
            </Link>
        </div>
    );

}

export default LatestItem;


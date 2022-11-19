import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

 const LatestItem = (props) => {
    let [heading, updateContentHeading] = useState("");
    let [context, updateContent] = useState("");
    let [category, updateContentCategory] = useState("");
    let [date, updateContentDate] = useState("");
    let [id1 , updateContentId] = useState("");
    let [img_url, updateImage] = useState("");


    let selectIndex = (ind) => {
        let ind1 = parseInt(ind)
        if(ind1 > 105) {
            return 100;
        }

        return ind1 + 7;
    }


    useEffect(() => {
        axios.get('/post/items').then((res) => {
        updateContentHeading(res.data[props.val].Heading);
        updateContent(res.data[props.val].content);

        let cat = res.data[props.val].category;
        if(cat == 1) {
            updateContentCategory("Tech");
        } else if(cat == 2) {
            updateContentCategory("Style");
        } else {
            updateContentCategory("Bollywood");
        }
        
        updateContentDate(res.data[props.val].date);
        updateContentId("l" + props.val);

    }).catch((error) => {
        console.log(error);
    })


    axios.get("/images").then((res1) => {
        updateImage(res1.data[selectIndex(props.val)].download_url);
    }).catch((err) => {console.log(err);})

    }, [props.val]);

    
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


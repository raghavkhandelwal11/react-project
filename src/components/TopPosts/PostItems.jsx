
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

 const PostItem = (props) => {
    let [heading, updateContentHeading] = useState("");
    let [category, updateContentCategory] = useState("");
    let [date, updateContentDate] = useState("");
    let [id1 , updateContentId] = useState("");
    let [img_url, updateImage] = useState("");



    axios.get('./database/MOCK_DATA.json').then((res) => {
        updateContentHeading(res.data[props.val].Heading);
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


    axios.get("/database/Image_URL.json").then((res1) => {
        updateImage(res1.data[selectIndex(props.val)].download_url);
    }).catch((err) => {console.log(err);})

    let selectIndex = (ind) => {
        let ind1 = parseInt(ind)
        if(ind1 > 105) {
            return 100;
        }

        return ind1 + 7;
    }




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


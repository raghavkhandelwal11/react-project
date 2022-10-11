
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

 const ArticleItem = (props) => {
    let [heading, updateContentHeading] = useState("");
    let [content, updateContent] = useState("");
    let [category, updateContentCategory] = useState("");
    let [date, updateContentDate] = useState("");
    let [id1 , updateContentId] = useState("");
    let [img_url, updateImage] = useState("");



    axios.get('./database/MOCK_DATA.json').then((res) => {
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

    axios.get("/database/Image_URL.json").then((res1) => {
        updateImage(res1.data[selectIndex(props.val)].download_url);
    }).catch((err) => {console.log(err);})

    let selectIndex = (ind) => {
        let ind1 = parseInt(ind)
        if( ind1 > 100) {
            return 100;
        }

        return  ind1 + 4;
    }

    if(content.length > 130) {
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


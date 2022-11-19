import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostPageItems = (props) => {
    let num = props.val;
    let [heading, updateContentHeading] = useState("");
    let [content, updateContent] = useState('');
    let [category, updateContentCategory] = useState("");
    let [date, updateContentDate] = useState("");
    let [image_url, updateImage] = useState('');
    
    if(num > 105) {
        num = 110;
    }


    useEffect( () =>  {
        axios.get('/post/items').then((res) => {   // /database/MOCK_DATA.json
            updateContentHeading(res.data[num].Heading);
            updateContent(res.data[num].content);
            let cat = res.data[num].category;
            if(cat == 1) {
                updateContentCategory("Tech");
            } else if(cat == 2) {
                updateContentCategory("Style");
            } else {
                updateContentCategory("Bollywood");
            }
            
            updateContentDate(res.data[num].date);
           
    
        }).catch((error) => {
            console.log(error);
        })
    
        axios.get("/images").then((res1) => { ///database/Image_URL.json
            updateImage(res1.data[num].download_url);
        }).catch((err) => {console.log(err);})
    
    }, [num])

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
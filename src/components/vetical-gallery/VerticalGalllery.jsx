import '../../App.css';
import { Link } from 'react-router-dom';

const VerticalGallery = (props) => {
    return (
        <div id="vertical-gallery">
            <div id="vertical-gallery-1">
                <Link to={`/post/${2}`}>
                    <p id="vg1-1">{props.content.content1}</p>
                    <p id="vg1-2">{props.dates.date1}</p>
                </Link>

            </div>

            <div id="vertical-gallery-2">
                <Link to={`/post/${3}`}>
                    <p id="vg2-1">{props.content.content2}</p>
                    <p id="vg2-2">{props.dates.date2}</p>
                </Link>
            </div>

            <div id="vertical-gallery-3">
                <Link to={`/post/${4}`}>
                    <p id="vg3-1">{props.content.content3}</p>
                    <p id="vg3-2">{props.dates.date3}</p>
                </Link>
            </div>
        </div>
    );
}

export default VerticalGallery;
import '../../App.css';
import img1 from '../resources/img1.jpeg';
import img2 from '../resources/img2.jpeg';

const VerticalGallery = (props) => {
    return (
        <div id="vertical-gallery">
            <div id="vertical-gallery-1">
                <p id="vg1-1">{props.content.content1}</p>
                <p id="vg1-2">{props.dates.date1}</p>

            </div>

            <div id="vertical-gallery-2">
                <p id="vg2-1">{props.content.content2}</p>
                <p id="vg2-2">{props.dates.date2}</p>
            </div>

            <div id="vertical-gallery-3">
                <p id="vg3-1">{props.content.content3}</p>
                <p id="vg3-2">{props.dates.date3}</p>
            </div>
        </div>
    );
}

export default VerticalGallery;
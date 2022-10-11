import { Link } from "react-router-dom";

const MobileVerticalGallery = (props) => {
    return(
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <div id="vertical-gallery-1">
                    <Link to={`/post/${2}`}>
                        <p id="vg1-1">{props.content.content1}</p>
                        <p id="vg1-2">{props.dates.date1}</p>
                    </Link>

                    </div>
                    </div>
                    <div className="carousel-item">
                    <div id="vertical-gallery-2">
                    <Link to={`/post/${3}`}>
                        <p id="vg1-1">{props.content.content2}</p>
                        <p id="vg1-2">{props.dates.date2}</p>
                    </Link>

                    </div>
                    </div>
                    <div className="carousel-item">
                    <div id="vertical-gallery-3">
                    <Link to={`/post/${4}`}>
                        <p id="vg1-1">{props.content.content3}</p>
                        <p id="vg1-2">{props.dates.date3}</p>
                    </Link>

                    </div>
                    </div>
                </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    );
        
}

export default MobileVerticalGallery;
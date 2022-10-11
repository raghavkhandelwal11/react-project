import "../Extra/Extra.css"
import { Link } from 'react-router-dom';
import Brand from '../blog-name/Brand';
import Article from '../Article/Article';
import Advertisementb from '../Extra/Advertisementb';
import TopPostsB from "../Extra/topPostsB/TopPostB";
import Carousel from '../Carousel/Carousel';
import Stories from '../Stories/Stories';
import StoriesContext from "../contexts/StoriesContext";

const Technology = (props) => {
    let num = 40, s = 39;
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><Brand /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#"><Link to="/">Home</Link></a>
                        </li>
                        <li className="nav-item">
                        <Link to="/bollywood">Bollywood</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/technology">Technology</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/hollywood">Hollywood</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/fitness">Fitness</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/food">Food</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>


            <div className='head-before'>
                <Brand />
                <div id="nav">
                    <Link to="/">Home</Link>
                    <Link to="/bollywood">Bollywood</Link>
                    <Link to="/technology">Technology</Link>
                    <Link to="/hollywood">Hollywood</Link>
                    <Link to="/fitness">Fitness</Link>
                    <Link to="/food">Food</Link>
                    
                </div>
            </div>
            <hr />


            <Article heading="Tech Articles" topArticles={[11, 12, 13]}/>

            <Advertisementb />

            <TopPostsB start={s} items={[87, 88, 89]}/>


            <StoriesContext.Provider value={num}>
                <Stories />
            </StoriesContext.Provider>
            <hr/>
        </div>
    )
}

export default Technology;
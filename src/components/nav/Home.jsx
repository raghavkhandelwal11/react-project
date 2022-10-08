import Brand from '../blog-name/Brand';

import VerticalGallery from '../vetical-gallery/VerticalGalllery';

import Latest from '../Latest/Latest';

import { Link } from 'react-router-dom';

import Article from "../Article/Article";

import Advertisement from '../Advertisement/Advertisement';

import TopPosts from '../TopPosts/TopPosts';

import Carousel from '../Carousel/Carousel';

import Stories from '../Stories/Stories';

const Home = (props) => {
    return (
        <div>
           <Brand />
            <div id="nav">
                <Link to="/">Home</Link>
                <Link to="bollywood">Bollywood</Link>
                <Link to="technology">Technology</Link>
                <Link to="hollywood">Hollywood</Link>
                <Link to="fitness">Fitness</Link>
                <Link to="food">Food</Link>
                
            </div>
            <hr/>
        <VerticalGallery content={{content1: "Title of vertical gallery", content2: "The sound cloud you loved is doomed", content3: "The sound cloud you loved is doomed"}}
        dates={{date1: "August 21 2017", date2: "August 25 2017", date3: "August 25 2017"}}
            />

        <Latest />  
         
        <Article />

        <Advertisement />

        <TopPosts />

        <Carousel />

        <Stories />


        </div>
    )
}

export default Home;
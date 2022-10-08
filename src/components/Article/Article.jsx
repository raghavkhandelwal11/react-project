import LoadMore from "./LoadMore";
import { useState } from "react";

const Article = () => {
    let [show, enableMore] = useState(false);


    let handleLoadMore = () => {
        if(!show) {
            enableMore(true);
        }

        else {
            enableMore(false);
        }
    }


    let displayMore = (bool) => {
        if(bool) {
            return <LoadMore />;
        }
    }

    let toggler = () => {
        if(show == true) {
            return "show less";
        }
        else {
            return "load more";
        }
    }

    
    return(
<div id="latest">
        <div className="section-heading">
            <h2 className="section-h2">Latest Articles</h2>
            <hr className="section-hr" />

        </div>
        <div id="article-flex">
            <div className="article-flex-item">
                <hr className="extend"/>
                <div className="article-image"></div>
                <h3 className="article-h3">Catch waves with an adventure guide</h3>
                <p className="article-p">Gujrat is vastly underrated and it's a mystery to us why the region isn't more well-known as tourist destination. It has a plethora of temples and places</p>
                <p className="article-last"><span>Travel /</span> August 21  2023</p>
            </div>

            <div className="article-flex-item">
                <hr className="extend"/>
                <div className="article-image"></div>
                <h3 className="article-h3">Catch waves with an adventure guide</h3>
                <p className="article-p">Gujrat is vastly underrated and it's a mystery to us why the region isn't more well-known as tourist destination. It has a plethora of temples and places</p>
                <p className="article-last"><span>Travel /</span> August 21  2023</p>
            </div>

            <div className="article-flex-item">
                <hr className="extend"/>
                <div className="article-image"></div>
                <h3 className="article-h3">Catch waves with an adventure guide</h3>
                <p className="article-p">Gujrat is vastly underrated and it's a mystery to us why the region isn't more well-known as tourist destination. It has a plethora of temples and places</p>
                <p className="article-last"><span>Travel /</span> August 21  2023</p>
            </div>
            {displayMore(show)}
            
        </div>

        <button id="button-load-more" onClick={handleLoadMore}><span class="material-symbols-outlined"> arrow_downward </span>{toggler()}</button>
    </div>
    );
}

export default Article;
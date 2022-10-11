import LoadMore from "./LoadMore";
import { useState } from "react";
import ArticleItem from "./ArticleItem";
import AltPageHeading from "../Extra/AltPageHeading";

const Article = (props) => {
    let [show, enableMore] = useState(false);
    
    let handleLoadMore = () => {
        if(!show) {
            enableMore(true);
        }else {
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
        <AltPageHeading heading={props.heading} />
        <div id="article-flex">

            <ArticleItem val={props.topArticles[0]} ></ArticleItem>
            <ArticleItem val={props.topArticles[1]}></ArticleItem>
            <ArticleItem val={props.topArticles[2]}></ArticleItem>

            {displayMore(show)}
            
        </div>

        <button id="button-load-more" onClick={handleLoadMore}><span class="material-symbols-outlined"> arrow_downward </span>{toggler()}</button>
    </div>
    );
}

export default Article;
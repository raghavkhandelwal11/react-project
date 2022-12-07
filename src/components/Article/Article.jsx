import LoadMore from "./LoadMore";
import { useState, useEffect, useContext } from "react";
import ArticleItem from "./ArticleItem";
import AltPageHeading from "../Extra/AltPageHeading";
import { userPosts } from "../../App";
import UserArticle from "../Article/UserArticle";


const Article = (props) => {
    let [show, enableMore] = useState(false);
    let list  = useContext(userPosts);

   
    
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

    const choose = (list) => {
        if(list.length > 0 && props.trigger) {
            return(
                <UserArticle></UserArticle>
            );
        } else {
            return(
                <ArticleItem val={props.topArticles[0]} cat={props.cat}></ArticleItem>
            );
        }
    }

    
    return(
<div id="latest">
        <AltPageHeading heading={props.heading} />
        <div id="article-flex">

            {choose(list)}
            <ArticleItem val={props.topArticles[1]} cat={props.cat}></ArticleItem>
            <ArticleItem val={props.topArticles[2]} cat={props.cat}></ArticleItem>

            {displayMore(show)}
            
        </div>

        <button id="button-load-more" onClick={handleLoadMore}><span class="material-symbols-outlined"> arrow_downward </span>{toggler()}</button>
    </div>
    );
}

export default Article;
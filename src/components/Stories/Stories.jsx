import { useState } from "react";
import StoryItems from "./StoryItems";
import React, { useContext } from "react";
import StoriesContext from "../contexts/StoriesContext";

const Stories = () => {
    const num = useContext(StoriesContext);
    let flag = false;
    let [count, updateCount] = useState(num);
    

    const increaseCount = () => {
        if(count >= 10) {
        updateCount(count - 3);
        }

        else return;
    }


    const handleView = () => {
        increaseCount();
    }


    return(
        <div id="latest" className="stories">
        <div className="section-heading">
            <h2 className="section-h2">Latest Stories</h2>
            <hr  id ="story-hr-1" className="section-hr" />
            <br />

        <hr className="stories-hr-head"/>

        </div>
        <div id="latest-flex" className="set">

        <StoryItems  c={count}></StoryItems>

        </div>
        <br />
        <hr />
        <button id="view-more" onClick={handleView}>View more <span class="material-symbols-outlined">
east
</span></button>
    </div>

    );
}

export default Stories;
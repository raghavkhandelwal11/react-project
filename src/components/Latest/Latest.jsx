// import LatestContext from "../contexts/LatestContext";
import LatestItem from "./LatestItem";
import { useState } from "react";

const Latest = () => {
    return(

    <div id="latest">
        <div className="section-heading">
            <h2 className="section-h2">The Latest</h2>
            <hr className="section-hr" />

        </div>
        
            <div id="latest-flex">
                <LatestItem val={62}/>
                <LatestItem val={5}/>
                <LatestItem val={22}/>
            </div>
 
        
    </div>

    );

}

export default Latest;
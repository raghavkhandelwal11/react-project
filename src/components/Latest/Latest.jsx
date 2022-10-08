import LatestContext from "../contexts/LatestContext";
import LatestItem from "./LatestItem";
import { useState } from "react";

const Latest = () => {
    let [count, updateCount] = useState(0);

    const handleCount = () => {
        updateCount(count + 1);
    }

    return(

    <div id="latest">
        <div className="section-heading">
            <h2 className="section-h2">The Latest</h2>
            <hr className="section-hr" />

        </div>
        <LatestContext.Provider value={count}>
            <div id="latest-flex">
                <LatestItem method={handleCount}/>
                {/* <div className="latest-flex-item">
                    <div className="latest-image"></div>
                    <h3 className="latest-h3">Joshua Tree Overnight Adventure</h3>
                    <p className="latest-p">Gujrat is vastly underrated and it's a mystery to us why the region isn't more well-known as tourist destination. It has a plethora of temples and places</p>
                    <p className="latest-last"><span>Travel /</span> August 21  2023</p>
                </div> */}


                <div className="latest-flex-item">
                <div className="latest-image"></div>
                    <h3 className="latest-h3">Joshua Tree Overnight Adventure</h3>
                    <p className="latest-p">Gujrat is vastly underrated and it's a mystery to us why the region isn't more well-known as tourist destination. It has a plethora of temples and places</p>
                    <p className="latest-last"><span>Travel /</span> August 21  2023</p>
                </div>

                <div className="latest-flex-item">
                <div className="latest-image"></div>
                    <h3 className="latest-h3">Joshua Tree Overnight Adventure</h3>
                    <p className="latest-p">Gujrat is vastly underrated and it's a mystery to us why the region isn't more well-known as tourist destination. It has a plethora of temples and places</p>
                    <p className="latest-last"><span>Travel /</span> August 21  2023</p>
                </div>
            </div>
        </LatestContext.Provider>
        
    </div>

    );

}

export default Latest;
import { useState } from "react";
import PostPageItem from "./PostPageItems";

const Stories = () => {
    
    return(
        <div>
        <div id="latest-flex">

        <PostPageItem val={56}></PostPageItem>
        <PostPageItem val={57}></PostPageItem>
        <PostPageItem val={58}></PostPageItem>

        </div>
        <br />
        <hr />
        <button onClick={handleView}>View more</button>
    </div>

    );
}

export default Stories;
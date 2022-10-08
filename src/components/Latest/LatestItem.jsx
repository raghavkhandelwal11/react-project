

const LatestItem = (props) => {
    let [image, heading, p1, p2] = props.data;
    return(
        <div className="latest-flex-item">
                <div className="latest-image"></div>
                <h3 className="latest-h3">Joshua Tree Overnight Adventure</h3>
                <p className="latest-p">Gujrat is vastly underrated and it's a mystery to us why the region isn't more well-known as tourist destination. It has a plethora of temples and places</p>
                <p className="latest-last"><span>Travel /</span> August 21  2023</p>
        </div>
    );
}

export default LatestItem;
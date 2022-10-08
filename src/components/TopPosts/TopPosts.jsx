
const TopPosts = () => {
    return(
        <div id="top-posts">

                <div className="posts-heading">
                    <h2 className="posts-h2">Top Posts</h2>
                    <hr className="posts-hr" />

                </div>

                    <div>
                        <div id="tp-img"></div>
                        <div id="posts-content">
                            <h3 className="article-h3 ">Catch waves with adventure guide</h3>

                            <p className="article-last"><span>Travel /</span> August 21  2023</p>
                        </div>

                        <span className="fix-number">1</span>
                    </div>

                <div>
        <div id="post-flex">
            <div className="post-flex-item">
                <hr className="post-extend"/>
                <div className="post-image"></div>
                <h3 className="post-h3">Catch waves with an adventure guide</h3>
                <p className="post-last"><span>Travel /</span> August 21  2023</p>
                <span className="fix-number-post">2</span>
            </div>

            <div className="post-flex-item">
                <hr className="post-extend"/>
                <div className="post-image"></div>
                <h3 className="post-h3">Catch waves with an adventure guide</h3>
                <p className="post-last"><span>Travel /</span> August 21  2023</p>
                <span className="fix-number-post">3</span>
            </div>

            <div className="post-flex-item">
                <hr className="post-extend"/>
                <div className="post-image"></div>
                <h3 className="post-h3">Catch waves with an adventure guide</h3>
                <p className="post-last"><span>Travel /</span> August 21  2023</p>
                <span className="fix-number-post">4</span>
            </div>
        </div>
        </div>
    </div>
    );
}

export default TopPosts;
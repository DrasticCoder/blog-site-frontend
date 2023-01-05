import React from 'react';

const FeaturedArticles = () => {
  return (
    <section className="featured-articles section section-header-offset">

        <div className="featured-articles-container container d-grid">

            <div className="featured-content d-grid">

                <div className="headline-banner">
                    <h3 className="headline fancy-border">
                        <span className="place-items-center">Breaking news</span>
                    </h3>
                    <span className="headline-description">Apple announces a new partnership...</span>
                </div>

                <a href="./post.html" className="article featured-article featured-article-1">
                    <img src="https://i.ibb.co/DbWdfp2/featured-1.jpg" alt="" className="article-image"/>
                    <span className="article-category">Technology</span>

                    <div className="article-data-container">

                        <div className="article-data">
                            <span>Dec 5th 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>8 Min read</span>
                        </div>

                        <h3 className="title article-title">Is VR the future?</h3>

                    </div>
                </a>

                <a href="./post.html" className="article featured-article featured-article-2">
                    <img src="https://i.ibb.co/DbWdfp2/featured-1.jpg" alt="" className="article-image"/>
                    <span className="article-category">Food</span>

                    <div className="article-data-container">

                        <div className="article-data">
                            <span>Dec 6th 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>4 Min read</span>
                        </div>

                        <h3 className="title article-title">Fine dining 101</h3>

                    </div>
                </a>

                <a href="./post.html" className="article featured-article featured-article-3">
                    <img src="https://i.ibb.co/DbWdfp2/featured-1.jpg" alt="" className="article-image"/>
                    <span className="article-category">Health</span>

                    <div className="article-data-container">

                        <div className="article-data">
                            <span>Dec 5th 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>5 Min read</span>
                        </div>

                        <h3 className="title article-title">Natural fat burner</h3>  

                    </div>
                </a>

            </div>
            
            <div className="sidebar d-grid">

                <h3 className="title featured-content-title">Trending news</h3>

                <a href="#" className="trending-news-box">
                    <div className="trending-news-img-box">
                        <span className="trending-number place-items-center">01</span>
                        <img src="https://i.ibb.co/DbWdfp2/featured-1.jpg" alt="" className="article-image"/>
                    </div>

                    <div className="trending-news-data">

                        <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                        </div>

                        <h3 className="title article-title">Sample article title</h3>

                    </div>
                </a>

                <a href="#" className="trending-news-box">
                    <div className="trending-news-img-box">
                        <span className="trending-number place-items-center">02</span>
                        <img src="https://i.ibb.co/DbWdfp2/featured-1.jpg" alt="" className="article-image"/>
                    </div>

                    <div className="trending-news-data">

                        <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                        </div>

                        <h3 className="title article-title">Sample article title</h3>

                    </div>
                </a>

                <a href="#" className="trending-news-box">
                    <div className="trending-news-img-box">
                        <span className="trending-number place-items-center">03</span>
                        <img src="https://i.ibb.co/DbWdfp2/featured-1.jpg" alt="" className="article-image"/>
                    </div>

                    <div className="trending-news-data">

                        <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                        </div>

                        <h3 className="title article-title">Sample article title</h3>

                    </div>
                </a>

                <a href="#" className="trending-news-box">
                    <div className="trending-news-img-box">
                        <span className="trending-number place-items-center">04</span>
                        <img src="https://i.ibb.co/DbWdfp2/featured-1.jpg" alt="" className="article-image"/>
                    </div>

                    <div className="trending-news-data">

                        <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                        </div>

                        <h3 className="title article-title">Sample article title</h3>

                    </div>
                </a>

                <a href="#" className="trending-news-box">
                    <div className="trending-news-img-box">
                        <span className="trending-number place-items-center">05</span>
                        <img src="https://i.ibb.co/DbWdfp2/featured-1.jpg" alt="" className="article-image"/>
                    </div>

                    <div className="trending-news-data">

                        <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                        </div>

                        <h3 className="title article-title">Sample article title</h3>

                    </div>
                </a>

            </div>

        </div>

    </section>
  )
}

export default FeaturedArticles
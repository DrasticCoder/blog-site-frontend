import React from 'react';

const QuickRead = () => {
  return (
    <section className="quick-read section">

    <div className="container">

        <h2 className="title section-title" data-name="Quick read">Quick read</h2>
        {/* Slider main container  */}
        <div className="swiper">
            {/* Additional  wrapper  */}
            <div className="swiper-wrapper">
                {/* Slides  */}
                <a href="#" className="article swiper-slide">
                    <img src="https://i.ibb.co/pfPfB6R/quick-read-4.jpg" alt="" className="article-image"/>

                    <div className="article-data-container">
                        <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                        </div>
                        <h3 className="title article-title">Sample article title</h3>
                    </div>
                </a>
                {/* Slides  */}
                <a href="#" className="article swiper-slide">
                    <img src="" alt="https://i.ibb.co/DbWdfp2/featured-1.jpg" className="article-image"/>

                    <div className="article-data-container">
                        <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                        </div>
                        <h3 className="title article-title">Sample article title</h3>
                    </div>
                </a>
                {/* Slides  */}
                <a href="#" className="article swiper-slide">
                    <img src="https://i.ibb.co/pfPfB6R/quick-read-4.jpg" alt="" className="article-image"/>

                    <div className="article-data-container">
                        <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                        </div>
                        <h3 className="title article-title">Sample article title</h3>
                    </div>
                </a>
                {/* Slides  */}
                <a href="#" className="article swiper-slide">
                    <img src="https://i.ibb.co/DbWdfp2/featured-1.jpg" alt="" className="article-image"/>

                    <div className="article-data-container">
                        <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                        </div>
                        <h3 className="title article-title">Sample article title</h3>
                    </div>
                </a>
                 {/* Slides  */}
                <a href="#" className="article swiper-slide">
                    <img src="https://i.ibb.co/pfPfB6R/quick-read-4.jpg" alt="" className="article-image"/>

                    <div className="article-data-container">
                        <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                        </div>
                        <h3 className="title article-title">Sample article title</h3>
                    </div>
                </a>
                {/* Slides  */}
                <a href="#" className="article swiper-slide">
                    <img src="https://i.ibb.co/DbWdfp2/featured-1.jpg" alt="" className="article-image"/>

                    <div className="article-data-container">
                        <div className="article-data">
                            <span>23 Dec 2021</span>
                            <span className="article-data-spacer"></span>
                            <span>3 Min read</span>
                        </div>
                        <h3 className="title article-title">Sample article title</h3>
                    </div>
                </a>
            </div>
             {/* Navigation buttons  */}
            <div className="swiper-button-prev swiper-controls"></div>
            <div className="swiper-button-next swiper-controls"></div>
            {/* Pagination  */}
            <div className="swiper-pagination"></div>
        </div>

    </div>

</section>
    )
}

export default QuickRead
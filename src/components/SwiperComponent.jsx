import React from 'react'

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation,Autoplay, Pagination } from 'swiper';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const SwiperComponent = () => {

    const swiper = useSwiper()
  return (
    <>
      <section className="quick-read section">

<div className="container">

    <h2 className="title section-title" data-name="Quick read">Quick read</h2>
    {/* Slider main container  */}
    <div className="swiper">
        {/* Additional  wrapper  */}
        <Swiper className="swiper-wrapper"
           modules={[Navigation,Autoplay,Pagination]}
           spaceBetween={50}
           slidesPerView={1}
           autoplay
           loop
           breakpoints={{
        //         // 700px and up shoes 2 slides
                700: {
                  slidesPerView: 2
                },
                // 1200px and up shoes 3 slides
                1200: {
                    slidesPerView: 3
                }
         
           }}
           navigation = {{nextEl : '.swiper-button-next',prevEl:'.swiper-button-prev'}}
           pagination={{ el:'.swiper-pagination',clickable: true }}
           scrollbar={{ draggable: true }}
        //    onSwiper={(swiper) => console.log(swiper)}
        //    onSlideChange={() => console.log('slide change')}
            >
    
        <SwiperSlide href="#" className="article swiper-slide">
                <img src="https://i.ibb.co/pfPfB6R/quick-read-4.jpg" alt="" className="article-image"/>

                <div className="article-data-container">
                    <div className="article-data">
                        <span>23 Dec 2021</span>
                        <span className="article-data-spacer"></span>
                        <span>3 Min read</span>
                    </div>
                    <h3 className="title article-title">Sample article title</h3>
                </div>
            </SwiperSlide>
    
        <SwiperSlide href="#" className="article swiper-slide">
                <img src="https://i.ibb.co/DbWdfp2/featured-1.jpg" alt="" className="article-image"/>

                <div className="article-data-container">
                    <div className="article-data">
                        <span>23 Dec 2021</span>
                        <span className="article-data-spacer"></span>
                        <span>3 Min read</span>
                    </div>
                    <h3 className="title article-title">Sample article title</h3>
                </div>
            </SwiperSlide>
    
        <SwiperSlide href="#" className="article swiper-slide">
                <img src="https://i.ibb.co/pfPfB6R/quick-read-4.jpg" alt="" className="article-image"/>

                <div className="article-data-container">
                    <div className="article-data">
                        <span>23 Dec 2021</span>
                        <span className="article-data-spacer"></span>
                        <span>3 Min read</span>
                    </div>
                    <h3 className="title article-title">Sample article title</h3>
                </div>
            </SwiperSlide>
    
        <SwiperSlide href="#" className="article swiper-slide">
                <img src="https://i.ibb.co/DbWdfp2/featured-1.jpg" alt="" className="article-image"/>

                <div className="article-data-container">
                    <div className="article-data">
                        <span>23 Dec 2021</span>
                        <span className="article-data-spacer"></span>
                        <span>3 Min read</span>
                    </div>
                    <h3 className="title article-title">Sample article title</h3>
                </div>
            </SwiperSlide>
         
           
        </Swiper>
         {/* Navigation buttons  */}
        <div  className="swiper-button-prev swiper-controls"></div>
        <div  className="swiper-button-next swiper-controls"></div>
        {/* Pagination  */}
        <div className="swiper-pagination">...</div>
    </div>

</div>

</section>
    </>
  )
}

export default SwiperComponent
import React from 'react'

const PopularTags = () => {
  return (
    <section className="popular-tags section">

        <div className="container">

            <h2 className="title section-title" data-name="Popular tags">Popular tags</h2>

            <div className="popular-tags-container d-grid">

                <a href="#" className="article">
                    <span className="tag-name">#Travel</span>
                    <img src="https://i.ibb.co/DbWdfp2/featured-1.jpg" alt="" className="article-image"/>
                </a>

                <a href="#" className="article">
                    <span className="tag-name">#Food</span>
                    <img src="https://i.ibb.co/DbWdfp2/featured-1.jpg" alt="" className="article-image"/>
                </a>

                <a href="#" className="article">
                    <span className="tag-name">#Technology</span>
                    <img src="https://i.ibb.co/DbWdfp2/featured-1.jpg" alt="" className="article-image"/>
                </a>

                <a href="#" className="article">
                    <span className="tag-name">#Health</span>
                    <img src="https://i.ibb.co/DbWdfp2/featured-1.jpg" alt="" className="article-image"/>
                </a>

                <a href="#" className="article">
                    <span className="tag-name">#Nature</span>
                    <img src="https://i.ibb.co/DbWdfp2/featured-1.jpg" alt="" className="article-image"/>
                </a>

                <a href="#" className="article">
                    <span className="tag-name">#Fitness</span>
                    <img src="https://i.ibb.co/DbWdfp2/featured-1.jpg" alt="" className="article-image"/>
                </a>

            </div>

        </div>
    </section>
  )
}

export default PopularTags
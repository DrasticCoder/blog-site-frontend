import React from "react";

import { useNavigate } from "react-router-dom";

const BlogCard = ({title,image,content,date,id}) => {
   
    const navigate = useNavigate();

  return (
            <div className="article d-grid"  onClick={()=>navigate(`/blog/${id}`)}>
                <div className="older-posts-article-image-wrapper">
                    <img src={image} alt="" className="article-image"/>
                </div>

                <div className="article-data-container">

                    <div className="article-data">
                        <span>{date}</span>
                        <span className="article-data-spacer"></span>
                        <span>3 Min read</span>
                    </div>

                    <h3 className="title article-title">{title}</h3>
                    <p className="article-description">{content.slice(0,100) + ' ... '}</p>

                </div>
            </div>
    )
};

export default BlogCard;

import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Axios from 'axios';

const Post = () => {

    const [content,setContent] = useState();
    
    const {id} = useParams();

    useEffect(() => {
      const url = `http://localhost:9000/blog/${id}`;

      Axios.get(url)
        .then(res=>{setContent(res.data);
        console.log(res.data)});

        
    }, [])
    
  return ( content && 
    <section className="blog-post section-header-offset">
        <div className="blog-post-container container">
            <div className="blog-post-data">
                <h3 className="title blog-post-title">{content.title}</h3>
                <div className="article-data">
                    <span>{moment(content.createdAt).format("MMM Do YY")}</span>
                    <span className="article-data-spacer"></span>
                    <span>4 Min read</span>
                </div>
                <img src={content.image} alt=""/>
            </div>

            <div className="container">
                
                {/* <blockquote className="quote">
                    <p><span><i className="ri-double-quotes-l"></i></span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia voluptates, laboriosam voluptatum quos non consequuntur nesciunt necessitatibus tempora quod inventore corporis rem nihil itaque, at provident minus aliquam veritatis. Labore?  <span><i className="ri-double-quotes-r"></i></span></p>
                </blockquote> */}

                <div>{content.content}</div>
             
                <div className="author d-grid">
                    <div className="author-image-box">
                        <img src="https://i.ibb.co/DbWdfp2/featured-1.jpg" alt="" className="article-image"/>
                    </div>
                    <div className="author-about">
                        <h3 className="author-name">{content.author.name}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quis repellat rerum, possimus cumque dolor repellendus eligendi atque explicabo exercitationem id.</p>
                        <ul className="list social-media">
                            <li className="list-item">
                                <a href={`mailto:${content.author.email}`} className="list-link"><i className="ri-mail-line"></i></a>
                            </li>
                            <li className="list-item">
                                <a href="#" className="list-link"><i className="ri-facebook-circle-line"></i></a>
                            </li>
                            <li className="list-item">
                                <a href="#" className="list-link"><i className="ri-twitter-line"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Post
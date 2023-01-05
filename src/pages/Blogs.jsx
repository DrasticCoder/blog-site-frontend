import React, { useEffect, useState } from "react";
import Axios from "axios";

import moment from "moment";

import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState();
  const [sortBy,setSortBy] = useState('desc');

  const [toggleFilter, setToggleFilter] = useState(false);

  useEffect(async () => {
    const url = `http://localhost:9000/blogs/search?page=${currentPage}`;

    Axios.get(url)
      .then((res) => {
        setData(res.data.blogs);
        setPages(res.data.totalPages);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const url = `http://localhost:9000/blogs/search?order=${sortBy}&page=${currentPage}`;

    Axios.get(url).then((res) => setData(res.data.blogs));
  }, [currentPage,sortBy]);

  return (
    <>
      <section className="section first-section">
        <div className="container">
          <h2 className="title section-title" data-name="Blogs">
            Blogs
          </h2>

          <div className="filter">
            <i
              class={toggleFilter ? "ri-close-line" : "ri-equalizer-line"}
              onClick={() => setToggleFilter(!toggleFilter)}
            ></i>

            <div className={toggleFilter ? "filter-wrapper" : "hidden"}>
              <h2 className="title">Filter</h2>

              <p>sort by</p>
              <div className="checkbox">
                latest
                <label class="switch">
                  <input type="checkbox" onChange={()=>setSortBy(sortBy==='asc' ? 'desc': 'asc')}/>
                  <span class="slider"></span>
                </label>
                oldest
              </div>

              {/* <p>category</p> */}
            </div>
          </div>

          <section className="older-posts section ">
            <div className="container">
              <div className="older-posts-grid-wrapper d-grid">
                {data &&
                  data.map((element) => {
                    return (
                      <BlogCard
                        key={element._id}
                        id={element._id}
                        title={element.title}
                        content={element.content}
                        image={element.image}
                        date={moment(element.createdAt).format("MMM Do YY")}
                      />
                    );
                  })}
              </div>
            </div>
          </section>

          <div className="pagination-wrapper">
            <div class="pagination">
              {currentPage != 1 && (
                <a key={0} onClick={() => setCurrentPage(currentPage - 1)}>
                  &laquo;
                </a>
              )}

              {[...Array(pages).keys()].map((i) => {
                i++;
                return (
                  <a
                    key={i}
                    className={currentPage == i ? "active" : ""}
                    onClick={(e) => setCurrentPage(e.target.innerText)}
                  >
                    {i}
                  </a>
                );
              })}

              {currentPage != pages && (
                <a key={1000} onClick={() => setCurrentPage(currentPage + 1)}>
                  &raquo;
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;

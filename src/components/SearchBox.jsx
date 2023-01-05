import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Axios from "axios";

const SearchBox = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => {
    if(input!=""){
        console.log(input);
        searchFunc(input);
      }
    }, 650);

    const searchFunc = (value) => {
      const url = `http://localhost:9000/search/data?input=${value}`;

      Axios.get(url).then((res) => setData(res.data));
    };

    return () => clearTimeout(timeout);
  }, [input]);

  const handleKeys = (e) => {
    if (e.key === "Escape") {
      navigate("/");
    }
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={(e) => handleKeys(e)}
      className="search-form-container container activated"
      id="search-form-container"
    >
      <div className="form-container-inner">
        <form action="" className="form">
          <input
            className="form-input"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            placeholder="What are you looking for?"
          />
          <button
            className="btn form-btn"
            type="submit"
            onClick={(e) => e.preventDefault()}
          >
            <i className="ri-search-line"></i>
          </button>
        </form>

        {input && data ? (
          <ul>
            {
              data.map(element => {
                return(
                  <li>
                    {element.name || element.title}
                  </li>
                )
              })
            }
          </ul>
        ) : (
          <span className="form-note">Or press ESC to close.</span>
        )}
      </div>

      <NavLink exact to="/">
        <button
          className="btn form-close-btn place-items-center"
          id="form-close-btn"
        >
          <i className="ri-close-line"></i>
        </button>
      </NavLink>
    </div>
  );
};

export default SearchBox;

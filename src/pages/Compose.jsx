import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Compose = () => {
  const [inputs, setInputs] = useState({});
  const [data, setData] = useState();

  const [toggleCategory, setToggleCategory] = useState(false);

  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const formData = new FormData();
  const token = JSON.parse(localStorage.getItem("token"));

  const handleSubmit = async (e) => {
    e.preventDefault();

    formData.append("file", data);
    formData.append("title", inputs.title);
    formData.append("content", inputs.content);

    const url = "http://localhost:9000/compose";
    console.log(...formData);
    Axios.post(url, formData, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => alert(res.data.message))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <section className="compose-section section">
        <div className="compose-wrapper container">
          <h2
            className="title section-title"
            id="main-title"
            data-name="Compose"
          >
            Compose
          </h2>
          <div className="form-container">
            <form
              onSubmit={handleSubmit}
              className="form d-grid"
              method="POST"
              encType="multipart/form-data"
            >
              <span className="input-label">Title</span>
              <input
                type="text"
                name="title"
                onChange={handleChanges}
                className="compose-inputs"
                required
              />
              <span className="input-label">category</span>
              <input
                list="categories"
                className="compose-inputs"
                name="category"
              />
              <datalist id="categories">
                <option value="Travel" />
                <option value="Food" />
                <option value="Technology" />
                <option value="Health" />
                <option value="Nature" />
                <option value="Fitness" />
              </datalist>
              <span className="input-label">Image</span>
              <input
                type="file"
                accept="image/*"
                name="file"
                onChange={(e) => setData(e.target.files[0])}
                required
                className="compose-inputs file-input"
                id="file"
              />
              <span className="input-label">Content</span>
              <textarea
                name="content"
                id="content"
                className="compose-inputs content-area"
                cols="30"
                rows="30"
                onChange={handleChanges}
                required
              ></textarea>
              <button type="submit" className="compose-inputs compose-btn ">
                Publish
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Compose;

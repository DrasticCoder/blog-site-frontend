import React, { useState } from "react";
import Axios from "axios";
import { NavLink , useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:9000/user/login";

    Axios.post(url, inputs)
      .then((res) =>{ 
          alert(res.data.message);
          console.log(res.data.token)
          localStorage.setItem('token',JSON.stringify(res.data.token));
          navigate('/blogs');
      })
      .catch((err) => alert(err.response.data.message));
  };

  return (
    <>
      <section className="login-section section">
        <div className="login-wrapper container" id="login-container">
          <h2
            className="title section-title"
            id="main-title"
            data-name="Log In"
          >
            Log In!
          </h2>
          <div className="form-container">
            <form onSubmit={handleSubmit} className="form d-grid">
              <span className="input-label">Email address</span>
              <input
                type="email"
                name="email"
                className="login-inputs"
                onChange={handleChanges}
                required
              />
              <span className="input-label">Password</span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="login-inputs"
                onChange={handleChanges}
                required
              />
              <div className="show-password d-grid">
                <div >
                <input
                  type="checkbox"
                  onChange={() => setShowPassword(!showPassword)}
                  name="show-password"
                  id="show-password"
                /> show password
                </div>
                <div>
                  <NavLink to="/forgetpass">
                    forget password
                  </NavLink>
                </div>
              </div>
              <button type="submit" className="login-inputs login-btn">
                <p>Log In</p>
              </button>
            </form>
            <p className="text-center modal-message">
              Don't have an account?
              <NavLink exact to="/register">
                <span>Register</span>
              </NavLink>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

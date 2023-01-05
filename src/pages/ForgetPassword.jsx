import React, {useState} from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";

const ForgetPassword = () => {

    const [inputs,setInputs] = useState({});

    const handleChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputs(values => ({... values , [name]: value}))
    }

    const handleSubmit = async ( e ) => {
        alert('Please check your mail to setup new password')

        const url = 'http://localhost:9000/user/forget/password';
        await Axios.post(url,inputs)
    }

  return (
    <>
      <section className="login-section section">
        <div className="login-wrapper container" id="login-container">
          <h2 className="title section-title" id="main-title" data-name="Reset">
            Password
          </h2>
          <div className="form-container">
            <form onSubmit={handleSubmit} className="form d-grid">
                <span className="input-label">Email address</span>
                <input type="email" name="email" className="login-inputs" onChange={handleChanges} required />
                <button type="submit" className="login-inputs login-btn ">Send E-mail</button>
            </form>

              <p className="text-center modal-message">Go back to 
            <NavLink exact to="/login">
               <span>
                  login page
               </span>
            </NavLink>
               </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgetPassword;


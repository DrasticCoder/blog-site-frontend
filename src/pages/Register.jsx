import React, {useState} from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";

const Register = () => {

    const [inputs,setInputs] = useState({});

    const handleChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputs(values => ({... values , [name]: value}))
    }

    const handleSubmit = async ( e ) => {
        e.preventDefault();
        alert('Please check your mail to setup password')

        const url = 'http://localhost:9000/user/register';
        await Axios.post(url,inputs).then(res=>{
          if(res.data.message){
            alert(res.data.message)
          }
        })
    }


  return (
    <>
      <section className="login-section section">
        <div className="login-wrapper container" id="login-container">
          <h2 className="title section-title" id="main-title" data-name="Sign Up!">
            Sign Up!
          </h2>
          <div className="form-container">
            <form onSubmit={handleSubmit} className="form d-grid">
                <span className="input-label">Full name</span>
                <input type="text" name="name" onChange={handleChanges} className="login-inputs" required />
                <span className="input-label">Email address</span>
                <input type="email" name="email" className="login-inputs" onChange={handleChanges} required />
                <button type="submit" className="login-inputs login-btn ">Sign Up</button>
            </form>

              <p className="text-center modal-message">Already have an account? 
            <NavLink exact to="/login">
               <span>
                  Log In
               </span>
            </NavLink>
               </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;


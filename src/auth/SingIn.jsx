import React, { useState } from "react";
import "./SignUp.scss";
import signupImage from "../assets/svg/register.svg";
import { Link } from "react-router-dom";
import axios from "axios";
const API = "https://api.escuelajs.co/api/v1/users"

function SingIn() {

  const [user,setUser] = useState({
    email:"",
    password:"",
  })

  const handleChanch =(e)=>{

    const {name,value} = e.target
    console.log({[name]:value})
    setUser({...user,[name]:value})

  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {   

      const res = await axios.post(API,user)
      console.log(res)

      
      
    } catch (error) {
      alert("ne pravilniy login ili parol")
      
    }

  }
  return (

    <section>
      <div className="singup-container">
        <div className="signup-image">
          <img src={signupImage} alt="" />
        </div>
        <form onSubmit={handleSubmit} className="register">
          <div className="register-text">
            <h1>Create an account</h1>
            <p>Enter your details below</p>
          </div>
          <div className="input-content">  
          <div className="inputs">

            <input onChange={handleChanch} value={user.email} name="email" placeholder="Email or Phone Number" type="email" />

            <input onChange={handleChanch} value={user.password} name="password" placeholder="Password" type="password" />
          </div>
          <div className="buttons">
            <button type="submit">Create Account</button>
            <div className="tegister-text-content">
              <p>Already have account?</p>
              <Link>Login</Link>
            </div>
          </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SingIn;
 

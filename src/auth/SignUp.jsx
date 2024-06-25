import React, { useState } from "react";
import "./SignUp.scss";
import signupImage from "../assets/svg/register.svg";
import { Link } from "react-router-dom";
import axios from "axios";
const API = "https://api.escuelajs.co/api/v1/users"

function SignUp() {

  const [user,setUser] = useState({
    name:"",
    email:"",
    password:"",
    avatar:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
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
      console.log(error,"is handlesubmit")
      
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
           
            <input onChange={handleChanch} value={user.name} name="name" placeholder="Name" type="text" />

            <input onChange={handleChanch} value={user.email} name="email" placeholder="Email or Phone Number" type="email" />

            <input onChange={handleChanch} value={user.password} name="password" placeholder="Password" type="password" />
          </div>
          <div className="buttons">
            <button type="submit">Create Account</button>
            <button type="text">Sign up with Google</button>
            <div className="tegister-text-content">
              <p>Already have account?</p>
              <Link to="/singin">Login</Link>
            </div>

          </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SignUp;

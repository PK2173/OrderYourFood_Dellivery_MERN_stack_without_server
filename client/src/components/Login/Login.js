import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import img1 from "../../assets/rocket.png";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";

export default function Login() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const update = useGlobalContext()

  const submit = () => {
    let data = {
      email: email,
      password: Password,
    };
    axios
      .post("http://localhost:8000/user/login", data)
      .then((result) => {
        if (result.data === "somthing went wrong" || result.data.token === "") {
          alert("somthing went wrong. Kindly check you data or register");
          navigate("/singup");
        } else {
          localStorage.setItem("SetData", result.data.token);
          update.setvalidater(update.validater+1)
          alert("login successfully");
          navigate("/OrderYourFood_Dellivery_MERN_stack_without_server");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("somthing went wrong. Kindly check you data or register");
        navigate("/OrderYourFood_Dellivery_MERN_stack_without_server");
      });
  };

  return (
    <div className="login">
      <form className="loginform">
        <h1>Login</h1>

        <div className="email">
          <label>
            <span className="tagname"> Email:</span>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>

        <div className="Password">
          <label>
            <span className="tagname"> Password:</span>
            <input type="text" onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>

        <button className="loginbutton" type="button" onClick={submit}>
          Submit
        </button>
      </form>
      <div className="loginimage">
        <img src={img1} alt="description" />
      </div>
    </div>
  );
}

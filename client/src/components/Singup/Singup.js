import React, { useState } from "react";
import "./singup.css";
import axios from "axios";
import img1 from "../../assets/rocket.png";
import { useNavigate } from "react-router-dom";

export default function Singup() {
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [phoneNo, setphoneNo] = useState("");
  const navigate = useNavigate();

  const submit = () => {
    let data = {
      username: `${name} ${last}`,
      email: email,
      password: Password,
      phoneNo: phoneNo,
    };
    axios
      .post("http://localhost:8000/user/register", data)
      .then((result) => {
        alert("Registration sucessfully");
        navigate("/Login");
      })
      .catch((err) => {
        alert(JSON.stringify(err));
        navigate("/");
      });
  };

  return (
    <div className="Singup">
      <form className="Singupform">
        <h1>Sing Up</h1>
        <div className="fName">
          <label>
            <span className="tagname">First Name:</span>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </label>
        </div>

        <div className="LName">
          <label>
            <span className="tagname">Last Name:</span>
            <input type="text" onChange={(e) => setLast(e.target.value)} />
          </label>
        </div>

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

        <div className="phoneNo">
          <label>
            <span className="tagname">Phone No:</span>
            <input type="text" onChange={(e) => setphoneNo(e.target.value)} />
          </label>
        </div>

        <button className="singupbutton" type="button" onClick={submit}>
          Submit
        </button>
      </form>
      <div className="singupimage">
        <img src={img1} alt="thi is image" />
      </div>
    </div>
  );
}

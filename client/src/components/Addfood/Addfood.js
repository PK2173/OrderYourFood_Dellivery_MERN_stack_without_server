import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addfood.css";

export default function Addfood() {
  const [foodName, setfoodName] = useState("");
  const [foodinfo, setfoodinfo] = useState("");
  const [lode, setlode] = useState(true);
  const [image, setimage] = useState("");
  const navigate = useNavigate();

  const submit = () => {
    setlode(false);
    const formdata = new FormData();
    formdata.append("image", image);
    formdata.append("foodtype", sessionStorage.getItem("foodtype"));
    formdata.append("foodName", foodName);
    formdata.append("foodinfo", foodinfo);
    axios
      .post("http://localhost:8000/food", formdata, {
        headers: {
          seingtoken: localStorage.getItem("SetData"),
        },
      })
      .then((result) => {
        if (result.data === "inserted") {
          setlode(true);
          alert("Food inserted sucessfully");
          navigate("../");
        } else {
          setlode(true);
          alert("Somthing Went Wrong");
          navigate("/OrderYourFood_Dellivery_MERN_stack_without_server");
        }
      })
      .catch((err) => {
        setlode(false);
        alert(JSON.stringify(err));
        // navigate("/OrderYourFood_Dellivery_MERN_stack_without_server");
      });
  };
  return (
    <div className="food">
      <form className="foodform">
        {lode ? (
          <>
            <h1>Insert Food For</h1>
            <h1>{sessionStorage.getItem("foodtype")}</h1>
            <div className="foodName">
              <label>
                <span className="tagname">Food Name:</span>
                <input
                  type="text"
                  onChange={(e) => setfoodName(e.target.value)}
                />
              </label>
            </div>

            <div className="FoodInfo">
              <label>
                <span className="tagname"> Food Info:</span>
                <input
                  type="text"
                  onChange={(e) => setfoodinfo(e.target.value)}
                />
              </label>
            </div>

            <div className="phFoodImage">
              <label>
                <span className="tagname">Food Image:</span>
                <input
                  type="file"
                  name="file"
                  onChange={(event) => {
                    setimage(event.target.files[0]);
                  }}
                />
              </label>
            </div>
            <button className="foodbutton" type="button" onClick={submit}>
              Submit
            </button>
          </>
        ) : (
          <h1>Loading ... </h1>
        )}
      </form>
    </div>
  );
}

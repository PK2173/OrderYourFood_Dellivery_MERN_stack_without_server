import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Order() {
  let data = JSON.parse(sessionStorage.getItem("orderid"));
  const [foodName, setfoodName] = useState("");
  const [foodinfo, setfoodinfo] = useState("");
  const [lode, setlode] = useState(true);
  const [image, setimage] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <div className="food">
        <form className="foodform">
          {lode ? (
            <>
              <h1>Place your order</h1>
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
                  <span className="tagname"> Enter Your Delivery Address:</span>
                  <input
                    type="text"
                    onChange={(e) => setfoodinfo(e.target.value)}
                  />
                </label>
              </div>

              <div className="FoodInfo">
                <label>
                  <span className="tagname"> Enter Your Delivery Address:</span>
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
              <button className="foodbutton" type="button" >
                Submit
              </button>
            </>
          ) : (
            <h1>Loading ... </h1>
          )}
        </form>
      </div>
    </div>
  );
}

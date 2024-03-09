import "./dynamiccorner.css";
import video from "../../assets/dilivery.mp4";
import logo from "../../assets/logo.png";
import foodheader from "../../assets/foodheader.png";
import { useGlobalContext } from "../Context/Context";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import foodinfo from "../../assets/foodinfo";

export default function Dynamiccorner() {
  const data = useGlobalContext();
  const navigator = useNavigate();
  const typeoffood = sessionStorage.getItem("foodtype");
  const [dataerray, setdataerray] = useState([]);
  const orderpage = (id)=>{
    if (sessionStorage.getItem("orderid")) {
      sessionStorage.removeItem("orderid");
      sessionStorage.setItem("orderid", JSON.stringify(id));
      navigator("/OrderYourFood_Dellivery_MERN_stack_without_server/order");
    } else {
      sessionStorage.setItem("orderid", JSON.stringify(id));
      navigator("/OrderYourFood_Dellivery_MERN_stack_without_server/order");
    }
  }
  useEffect(() => {
    axios
      .get(`http://localhost:8000/food/foodinfo/${typeoffood}`)
      .then((result) => {
        setdataerray(result.data);
      })
      .catch((err) => {
        setdataerray(foodinfo.filter(x=> x.foodtype===typeoffood));
        console.log(err);
      });
  }, [typeoffood]);
  const addmoore = () => {
    if (localStorage.getItem("SetData")) {
      navigator("../addfood");
    } else {
      navigator("../login ");
    }
  };
  return (
    <div className="Dynamiccorner">
      <div className="foodheader">
        <img src={foodheader} alt="foodheader" />
        <h2>Order for {typeoffood}</h2>
      </div>

      <div className="maincontainer">
        <div className="sidebar">
          <div className="uppervideo">
            <video src={video} loop muted autoPlay></video>
          </div>
          <div className="userinfo">
            <h2> Hi {data.virifi.username}</h2>
            <div className="pickup">
              <span>
                Are you a time traveler? Because I absolutely see you in my
                future.
              </span>
            </div>

            <div className="createrbutton">
              <button
                type="button"
                onClick={() => {
                  addmoore();
                }}
              >
                Add More Food
              </button>
            </div>
          </div>
        </div>

        <div className="itemcontainer">
          {dataerray.map((e) => {
            const {imageURL, foodName, foodinfo , price } = e;
            return (
              <div className="items" onClick={()=>{orderpage(e)}}>
                <div className="itemsimgae">
                  <img src={imageURL} alt={foodName} />
                </div>
                <div className="iteminfo">
                  <div className="headline">
                    <h3>{foodName} </h3>
                    <span>{foodinfo}</span>
                    <h3>Price :- {price}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="foodbottem">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

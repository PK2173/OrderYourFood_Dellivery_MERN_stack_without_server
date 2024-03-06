import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { useGlobalContext } from "../Context/Context";
import logo from "../../assets/logo.png";

export default function Header() {
  const native = useNavigate();
  const foodtype = (typefood) => {
    if (sessionStorage.getItem("foodtype")) {
      sessionStorage.removeItem("foodtype");
      sessionStorage.setItem("foodtype", typefood);
      native("./addfood");
    } else {
      sessionStorage.setItem("foodtype", typefood);
      native("./addfood");
    }
  };
  const logout = () => {
    if (localStorage.getItem("SetData")) {
      localStorage.removeItem("SetData");
      data.setvirifi({ ...data.virifi, username: "" });
    }
  };
  const data = useGlobalContext();
  return (
    <div className="header">
      <div className="headercontainer">
        <div className="icone">
          <img src={logo} alt="logo" />
        </div>
        <div className="headerlable">
          <ul>
            <li>
              <Link to="./"> Home</Link>
            </li>
            <li>
              <Link to="./">Menu</Link>
              <ul className="dropdown">
                <li>
                  <Link
                    to="./addfood"
                    onClick={() => {
                      foodtype("Snackes");
                    }}
                  >
                    Add Food For Snackes
                  </Link>
                </li>
                <li>
                  <Link
                    to="./addfood"
                    onClick={() => {
                      foodtype("Southindianfood");
                    }}
                  >
                    Add Food For Southindianfood
                  </Link>
                </li>
                <li>
                  <Link
                    to="./addfood"
                    onClick={() => {
                      foodtype("BreakFast");
                    }}
                  >
                    Add Food For BreakFast
                  </Link>
                </li>
                <li>
                  <Link
                    to="./addfood"
                    onClick={() => {
                      foodtype("Lunck");
                    }}
                  >
                    Add Food For Lunck
                  </Link>
                </li>
                <li>
                  <Link
                    to="./addfood"
                    onClick={() => {
                      foodtype("Dinner");
                    }}
                  >
                    Add Food For Dinner
                  </Link>
                </li>
              </ul>
            </li>
            {data.virifi.username ? (
              <>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      logout();
                    }}
                  >
                    {" "}
                    Logout
                  </Link>
                </li>
                <li>
                  <h2>{data.virifi.username}</h2>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="./singup"> Singup</Link>
                </li>
                <li>
                  <Link to="./login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

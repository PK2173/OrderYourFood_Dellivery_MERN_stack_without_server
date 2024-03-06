import "./home.css";
import logo from "../../assets/logo.png";
import snackes from "../../assets/snacks.jpeg";
import southindian from "../../assets/1food.jpg";
import breakfast from "../../assets/breakfast.jpeg";
import lunch from "../../assets/lunk.jpg";
import dinner from "../../assets/dinner.jpeg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const native = useNavigate();
  const foodtype = (typefood) => {
    if (sessionStorage.getItem("foodtype")) {
      sessionStorage.removeItem("foodtype");
      sessionStorage.setItem("foodtype", typefood);
      native("./corner");
    } else {
      sessionStorage.setItem("foodtype", typefood);
      native("./corner");
    }
  };

  return (
    <div className="homecontainer">
      <div
        onClick={() => {
          foodtype("Snackes");
        }}
        className="foodcontainer"
      >
        <div className="infosnackes">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="infocontainer">
            <h2>Snacks</h2>
            <span>
              A snack is a small portion of food generally eaten between meals.
              Snacks come in a variety of forms including packaged snack foods
              and other processed foods, as well as items made from fresh
              ingredients at home.
            </span>
          </div>
        </div>
        <div className="snackesimage">
          <img src={snackes} alt="snackesimage" /> 
        </div>
      </div>
      <div
        onClick={() => {
          foodtype("Southindianfood");
        }}
        className="foodcontainer southindianfood"
      >
        <div className="snackesimage">
          <img src={southindian} alt="SouthIndian" />
        </div>
        <div className="infosnackes">
          <div className="infocontainer">
            <h2>South Indian</h2>
            <span>
              South Indian cuisine is one of the most popular native cuisines of
              India. It is primarily a combination of the food of the five
              states of Andhra Pradesh, Karnataka, Telangana, Tamil Nadu and
              Kerala, and the union territories of Pondicherry, Lakshadweep and
              Andaman and Nicobar Islands. The cuisines all use spices unique to
              the region and the cuisines majorly differ in the level of
              spiciness.
            </span>
          </div>
        </div>
      </div>

      <div
        onClick={() => {
          foodtype("BreakFast");
        }}
        className="foodcontainer breackfast"
      >
        <div className="infosnackes">
          <div className="infocontainer">
            <h2>Breakfast</h2>
            <span>
              Breakfast is good for you because it keeps you going through the
              day. It helps your mind think and concentrate. Breakfast is good
              nutrition for your soul. Breakfast is like filling your car with
              gas in the morning. To me, breakfast is the most important part of
              the day.
            </span>
          </div>
        </div>
        <div className="snackesimage" dinner>
          <img src={breakfast} alt="breakfastimage" />
        </div>
      </div>

      <div
        onClick={() => {
          foodtype("Lunck");
        }}
        className="foodcontainer lunckfood"
      >
        <div className="snackesimage">
          <img src={lunch} alt="lunchimage" />
        </div>
        <div className="infosnackes">
          <div className="infocontainer">
            <h2>Lunch</h2>
            <span>
              Lunch is an essential meal of the day. I carry my lunch box every
              day to school as home-cooked food is the best source for
              replenishing energy in school during the daytime. Most of my
              classmates also bring their lunch from home while some of them buy
              food at the school canteen.
            </span>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          foodtype("Dinner");
        }}
        className="foodcontainer dinnerfood"
      >
        <div className="infosnackes">
          <div className="infocontainer">
            <h2>Dinner</h2>
            <span>
              Dinner usually refers to what is in many Western cultures the
              largest and most formal meal of the day. Historically, the largest
              meal used to be eaten around midday, and called dinner.Especially
              among the elite, it gradually migrated to later in the day over
              the 16th to 19th centuries. The word has different meanings
              depending on culture, and may mean a meal of any size eaten at any
              time of day.
            </span>
          </div>
        </div>
        <div className="snackesimage">
          <img src={dinner} alt="dinnerimage" />
        </div>
      </div>
    </div>
  );
}

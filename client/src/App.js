import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Singup from "./components/Singup/Singup";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Dynamiccorner from "./components/Dynamiccorner/Dynamiccorner";
import Addfood from "./components/Addfood/Addfood";
import Order from "./components/Order/Order";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
        <Route path="/OrderYourFood_Dellivery_MERN_stack_without_server" exact Component={Home} />
        <Route path="/OrderYourFood_Dellivery_MERN_stack_without_server/addfood" exact Component={Addfood} />
        <Route path="/OrderYourFood_Dellivery_MERN_stack_without_server/corner" exact Component={Dynamiccorner} />
        <Route path="/OrderYourFood_Dellivery_MERN_stack_without_server/singup" exact Component={Singup}/>
        <Route path="/OrderYourFood_Dellivery_MERN_stack_without_server/login" exact Component={Login}/>
        <Route path="/OrderYourFood_Dellivery_MERN_stack_without_server/order" exact Component={Order}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
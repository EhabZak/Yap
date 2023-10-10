import restaurants from "../../assets/restaurants.png"
import shopping from "../../assets/shopping.png"
import nightLife from "../../assets/nightlife.png"
import activeLife from "../../assets/activelife.png"
import spa from "../../assets/spa.png"
import automotive from "../../assets/auto.png"
import home from "../../assets/home.png"
import './categories.css'
import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

const showAlert = () => {
    window.alert("Coming Soon");
  };
let categories = (
    <div id="outer-category-container" >
        <ul id="categories-bar-container">

            <NavLink exact to="/restaurants">
            <li >
                <div className="image-container" >
                    <img src={restaurants} alt="restaurants" ></img>
                </div>
            </li>
            </NavLink>

            <NavLink exact to="/shopping">
            <li >
                <div className="image-container">
                    <img src={shopping} alt="shopping" ></img>
                </div>
            </li>
            </NavLink>

            <NavLink exact to="/nightlife">
            <li >
                <div className="image-container">
                    <img src={nightLife} alt="nightlife" ></img>
                </div>
            </li>
            </NavLink>

            <NavLink exact to="/activelife">
            <li >
                <div className="image-container">
                    <img src={activeLife} alt="active life" ></img>
                </div>
            </li>
            </NavLink>

            <NavLink exact to="/spa">
            <li >
                <div className="image-container">
                    <img src={spa} alt="spa" ></img>
                </div>
            </li>
            </NavLink>

            <NavLink exact to="/automotive">
            <li >
                <div className="image-container">
                    <img src={automotive} alt="automotive" ></img>
                </div>
            </li>
            </NavLink>

            <NavLink exact to="/homeservices">
            <li >
                <div className="image-container">
                    <img src={home} alt="home services" ></img>
                </div>
            </li>
            </NavLink>

        </ul>
    </div>
)

export default categories

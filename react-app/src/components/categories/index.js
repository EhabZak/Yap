import restaurants from "../../assets/restaurants.png"
import shopping from "../../assets/shopping.png"
import nightLife from "../../assets/nightlife.png"
import activeLife from "../../assets/activelife.png"
import spa from "../../assets/spa.png"
import automotive from "../../assets/auto.png"
import home from "../../assets/home.png"
import './categories.css'

const showAlert = () => {
    window.alert("Coming Soon");
  };
let categories = (
    <div id="outer-category-container" >
        <ul id="categories-bar-container">
            <li onClick={showAlert} >
                <div className="image-container" >
                    <img src={restaurants} alt="restaurants" ></img>
                </div>
                {/* <p>Deals</p> */}
            </li>
            <li onClick={showAlert}>
                <div className="image-container">
                    <img src={shopping} alt="shopping" ></img>
                </div>
                {/* <p>Grocery</p> */}
            </li>
            <li onClick={showAlert}>
                <div className="image-container">
                    <img src={nightLife} alt="nightlife" ></img>
                </div>
                {/* <p>Convenience</p> */}
            </li>
            <li onClick={showAlert}>
                <div className="image-container">
                    <img src={activeLife} alt="active life" ></img>
                </div>
                {/* <p>Pizza</p> */}
            </li>
            <li onClick={showAlert}>
                <div className="image-container">
                    <img src={spa} alt="spa" ></img>
                </div>
                {/* <p>Alcohol</p> */}
            </li>
            <li onClick={showAlert}>
                <div className="image-container">
                    <img src={automotive} alt="automotive" ></img>
                </div>
                {/* <p>Pharmacy</p> */}
            </li>
            <li onClick={showAlert}>
                <div className="image-container">
                    <img src={home} alt="home services" ></img>
                </div>
                {/* <p>Baby</p> */}
            </li>

        </ul>
    </div>
)

export default categories

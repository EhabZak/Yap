import { useHistory } from "react-router";
import "./ListingTile.css";

//!
import StarIcon from "../StarIcon";

const ListingTile = ({ listing }) => {
  const {
    id,
    address,
    city,
    state,
    name,
    category,
    description,
    price,
    open_hours,
    close_hours,
    avg_rating,
    image_url,
    num_reviews,
  } = listing;

  const history = useHistory();

  const handleClick = () => {
    history.push(`/listings/${listing.id}`);
  };

  return (
    <div className="one-listings-container" key={id} onClick={handleClick}>
      <div className="listing-image">
        <img
          className="preview-image"
          src={image_url}
          alt={name}
          title={name}
          style={{ objectFit: "cover" }}
        ></img>
      </div>
      <div className="name-address-rating">
<<<<<<< HEAD
        <h3 id="address-span">{name} </h3>
=======
        <p id="name-span">{name} </p>
>>>>>>> fixing-bugs





<<<<<<< HEAD
        <p id="review-in-block">
        <i className="fa-solid fa-star" id='review-rating-star'></i>
          {avg_rating} ({num_reviews} reviews)</p>
        <div className="category-style">
          <p>{category} </p> <div> {price === 3 ? "$$$" : price === 2 ? "$$" : "$"}</div>
        </div>
        <p>Open until {close_hours} PM</p>
        {/* <p>{address} </p> */}
=======
        <div id="review-in-block"> <i className="fa-solid fa-star" id='review-rating-star'></i><div id="rating">{avg_rating}</div> <div>({num_reviews} reviews)</div></div>
        <div >
          <div id="category-container">
          <p id="category-item">{category}</p><p> {price === 3 ? "$$$" : price === 2 ? "$$" : "$"}</p>
          </div>
        </div>
        <p>Open until {close_hours} PM</p>
        
>>>>>>> fixing-bugs
      </div>
    </div>
  );
};

export default ListingTile;

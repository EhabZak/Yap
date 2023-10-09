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
        
        <i className="fa-solid fa-star" id='review-rating-star'></i>
        <i class="fa-solid fa-square-star"></i>


        <p id="review-in-block">{avg_rating} (I need to add the number of reviews)</p>
        <div>
          <p>{category}</p><span> {price === 3 ? "$$$" : price === 2 ? "$$" : "$"}</span>
        </div>
        <p>Open until {close_hours} PM</p>
        <p id="address-span">{name} </p>
        <p>{address} </p>
      </div>
    </div>
  );
};

export default ListingTile;

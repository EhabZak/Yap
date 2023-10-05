import { useHistory } from "react-router";
import "./ListingTile.css";

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
    <div className="all-listings-container" key={id} onClick={handleClick}>
      <div className="listing-image">
        <img
          className="preview-image"
          src={image_url}
          alt={name}
          title={name}
          style={{objectFit: "cover"}}
        ></img>
      </div>
      <div className="name-address-rating">
      <p id="address-span">{name} ({address}) </p><span id="review-in-block">{avg_rating}</span>
      </div>
    </div>
  );
};

export default ListingTile;

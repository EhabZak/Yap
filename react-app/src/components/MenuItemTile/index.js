import { useHistory } from "react-router";
import OpenModalButton from "../OpenModalButton";
import { DeleteMenuItemModal } from "./DeleteMenuItemModal";
import { useSelector } from "react-redux";
import "./MenuItemTile.css";

const MenuItemTile = ({ menuItem, listingId }) => {
  const { id, name, price, calories, imageUrl } = menuItem;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/menuitems/${id}`);
  };
  const handleUpdateItemClick = (listingId) => {
    // history.push(`/listings/${listingId}/edit`);
    history.push(`/menuitems/${menuItem.id}/edit`);
  };

  const listing = useSelector((state) => state.listing.singleListing);

  const currentUser = useSelector((state) => state.session.user);

  return (
    <div id="menu-item-container">
      <div className="menu-item-tile-container" key={id} onClick={handleClick}>
        <img
          className="menu-item-tile-image"
          src={imageUrl}
          alt={name}
          title={name}
        ></img>
        <div className="menu-item-tile-info">
          <div className="menu-item-small-name">{name}</div>
          <div className="menu-item-small-info">
            ${price}
            {calories && (
              <>
                <span style={{ fontWeight: "bold" }}> &#183;</span>{" "}
                <span style={{ color: "grey" }}>{calories} Cal.</span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="menu-item-tile-delete-button">
        {currentUser && listing.owner_id === currentUser.id && (
          <div>
          <button
                className="manage-listings-update-button"
                onClick={() => handleUpdateItemClick(listing.id)}
              >
                Update
              </button>



          <OpenModalButton
            buttonText="Delete"
            modalComponent={<DeleteMenuItemModal menuItemId={menuItem.id} />}
          />
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItemTile;

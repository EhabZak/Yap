import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkGetUserListings } from "../../store/listings";
import ListingTile from "../ListingTile";
import { DeleteListingModal } from "./DeleteListingModal";
import OpenModalButton from "../OpenModalButton";
import "./ManageListings.css";

export const ManageListings = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user);
  const listings = useSelector((state) => state.listing.allListings);

  const listingsList = Object.values(listings);

  useEffect(() => {
    dispatch(thunkGetUserListings());
  }, [dispatch]);

  if (!user) return null;

  const handleClick = () => {
    history.push("/listings/new");
  };

  const handleUpdateClick = (listingId) => {
    history.push(`/listings/${listingId}/edit`);
  };

  return (
    <div >
      <div className="manage-container">
        <h1>Manage Listings</h1>
        {/* {listingsList && listingsList.length <= 0 ? ( */}
          <button
            className="manage-listings-create-btn"
            onClick={handleClick}
          >
            Create a New Listing
          </button>
        {/* ) : (
          ""
        )} */}
      </div >
      <div id="main-manage-container" >
      <div className="listing-details-container">
        {listingsList.map((listing) => (
          <div key={listing.id}>
            <ListingTile manage={true} listing={listing} />
            <div className="buttons-container">
              <button
                className="manage-listings-update-button"
                onClick={() => handleUpdateClick(listing.id)}
              >
                Update
              </button>

              <OpenModalButton id="delete-button"
                className="delete-button"
                buttonText="Delete"
                modalComponent={
                  <DeleteListingModal listingId={listing.id} />
                }
              />
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

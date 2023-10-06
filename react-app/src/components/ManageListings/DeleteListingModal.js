import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkDeleteListing } from "../../store/listings";
import './DeleteListing.css'
export const DeleteListingModal = ({ listingId }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleClick = (e) => {
    e.preventDefault();

    return dispatch(thunkDeleteListing(listingId)).then(closeModal);
  };

  return (
    <div className="delete-modal-content">
      <div className="delete-listing-container">
        <h3>Confirm Delete</h3>
        <p>
          Are you sure you want to remove this listing from the listings?
        </p>
        <div className="yes-no-container">

          <button className="yes-button" type="button" onClick={handleClick}>
            Yes (Delete listing)
          </button>
          <button className="no-button" type="button" onClick={closeModal}>
            No (Keep listing)
          </button>

        </div>
      </div>
    </div>
  );
};

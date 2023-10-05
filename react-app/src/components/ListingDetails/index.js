import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { thunkGetListingInfo } from "../../store/listings";
// import { thunkGetListingReviews } from "../../store/reviews";

// import { ListingReviews } from "../ReviewsById";
import { useHistory } from "react-router";
//// import { setUser, thunkGetUserInfo } from "../../store/session";
import "./ListingDetails.css";

export const ListingDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { listingId } = useParams();

  const currentUser = useSelector((state) => state.session.user);
//   const reviews = useSelector((state) => state.reviews.allReviews)

//   const reviewsList = Object.values(reviews)

//   console.log("ListingDetails reviewsList: ", reviewsList)
//!  one listing
  const oneListing = useSelector(
    (state) => state.listing.singleListing
  );
  ////// const reviews = useSelector((state) => state.reviews.allReviews)

  //// const reviewsList = Object.values(reviews)

  console.log("oneListing: ", oneListing)

  useEffect(() => {
    dispatch(thunkGetListingInfo(listingId));
    // dispatch(thunkGetListingReviews(listingId));
    // add to the dependancy array reviewsList.length
  }, [dispatch, listingId, ]);

//   const handleClick = () => {
//     // tbd
//     history.push(`/listings/${listingId}/createmenuitem`);
//   };

  if (!oneListing.id) return null;

//   const {
//     Owner,
//     address,
//     city,
//     state,
//     name,
//     avg_rating,
//     num_reviews,
//     type,
//     description,
//     price,
//     open_hours,
//     close_hours,
//     image_url,
//   } = oneListing;

  return (
    <div className="view-listing-details">
      <img
        className="listing-image"
        src={oneListing.image_url}
        alt={oneListing.name}
        title={oneListing.name}
      ></img>

      <div className="listing-non-image-content">
        <div className="listing-info">
          <div className="listing-info-left-col">
            <p className="listing-header">
              {oneListing.name} ({oneListing.address})
            </p>
            <p className="listing-subheader">
              <i className="fa-solid fa-star"></i>
              {/* {oneListing.avg_rating} ({oneListing.num_reviews}{" "} ratings ) */}
              · {oneListing.type} ·{" "}
              {oneListing.price === 3 ? "$$$" : oneListing.price === 2 ? "$$" : "$"}
            </p>
            <p className="listing-hours">
              Hours: {oneListing.open_hours} - {oneListing.close_hours}
            </p>
            <p className="listing-hours">
                <h2>About the Business</h2>
               {oneListing.description}
            </p>
          </div>
          <div className="listing-info-right-col">
            {/* <div>
              {currentUser && oneListing.owner_id === currentUser.id && (
                <button
                  className="create-listing-button"
                //   onClick={handleClick}
                >
                  Create New Listing
                </button>
              )}
            </div> */}
          </div>
        </div>

        {/* <div className="listing-menu-items-grid">
          <MenuItems listingId={listingId} />
        </div> */}

        <div className="listing-details-reviews">
          <div className="listing-reviews-headers">
            <h1>Reviews</h1>
            <p>Hear from people who love this spot</p>
          </div>
          <div className="listing-reviews-component">
            {/* <ListingReviews listingId={listingId} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { thunkGetListingInfo } from "../../store/listings";
import { thunkGetListingReviews } from "../../store/reviews";

import { ListingReviews } from "../ReviewsById";
import { useHistory } from "react-router";
//// import { setUser, thunkGetUserInfo } from "../../store/session";
import "./ListingDetails.css";

export const ListingDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { listingId } = useParams();

  const currentUser = useSelector((state) => state.session.user);
  const reviews = useSelector((state) => state.reviews.allReviews)

  const reviewsList = Object.values(reviews)

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
    dispatch(thunkGetListingReviews(listingId));
    // add to the dependancy array reviewsList.length
  }, [dispatch, listingId, reviewsList.length]);

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
  //     category,
  //     description,
  //     price,
  //     open_hours,
  //     close_hours,
  //     image_url,
  //   } = oneListing;

  return (
    <div className="view-listing-details">

      <div id="picture-banner">

        <div className="listing-header">
          <h1>{oneListing.name}</h1>
        <p className="listing-subheader">
          <i className="fa-solid fa-star"></i>
          {oneListing.avg_rating > 0 ? <span>{oneListing.avg_rating.toFixed(1)}</span> : <span>New</span>}
          {/* {oneListing.avg_rating} */}
          {/* ({oneListing.num_reviews}{" "} ratings ) */}
           {oneListing.avg_rating > 0? <span> ({oneListing.num_reviews } ratings)</span> : <span></span>}

        </p>
        <p>{oneListing.price === 3 ? "$$$" : oneListing.price === 2 ? "$$" : "$"}· {oneListing.category} </p>
        <p>Hours: {oneListing.open_hours}  - {oneListing.close_hours}</p>
        </div>

        <img
          className="listing-image"
          src={oneListing.image_url}
          alt={oneListing.name}
          title={oneListing.name}
        ></img>
      </div>
      <div className="listing-non-image-content">

          <div className="listing-info-left-col">
            <div className="listing-hours">
              <h2>Location and Hours</h2>
              <p>{oneListing.address}, {oneListing.city}, {oneListing.state} </p>
              <p>Hours: {oneListing.open_hours}  - {oneListing.close_hours}</p>
            </div>

            <div className="listing-hours">
              <h2>About the Business</h2>
              {oneListing.description}
            </div>
          </div>


        <div className="listing-details-reviews">
          <div className="listing-reviews-headers">

            <h2>Recommended Reviews</h2>
          </div>
          <div className="listing-reviews-component">
            <ListingReviews listingId={listingId} />
          </div>
        </div>
      </div>
    </div>
  );
};

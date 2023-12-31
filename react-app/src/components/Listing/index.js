import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetListings } from "../../store/listings";
import ListingTile from "../ListingTile";
import "./all-listings.css";
import categories from "../categories";

export const Listings = () => {
  const dispatch = useDispatch();

  const getListings = useSelector(
    (state) => state.listing.allListings
  );

  const listings = Object.values(getListings);

  useEffect(() => {
    dispatch(thunkGetListings());
  }, [dispatch]);

  if (!listings.length) return null;

  const showAlert = () => {
    window.alert("Coming Soon");
  };

  return (
    <>
    {categories}


<h2 id="listing-heading">View All Listings Here</h2>
      <div id="main-body-container">
        <div className="listing-details-container" id="listings-main">
          {listings.map((listing) => (
            <ListingTile key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </>
  );
};

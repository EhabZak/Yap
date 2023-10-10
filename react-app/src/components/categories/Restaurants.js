import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { thunkGetListings } from "../../store/listings";
import ListingTile from "../ListingTile";
import "./categories.css";
import categories from "../categories";

export const RestaurantsListings = () => {
  const dispatch = useDispatch();

  const getListings = useSelector(
    (state) => state.listing.allListings
  );

  const allListings = Object.values(getListings);

  const listings = allListings.filter((listing)=> listing.category === "restaurant")
  console.log( "listings ============>>>>>>>>",   listings)

  useEffect(() => {
    dispatch(thunkGetListings());
  }, [dispatch]);

  if (!listings.length) return null;



  return (
    <>



        <h2>Best Restaurants near You</h2>
      <div id="main-body-container">

        <div className="category-details-container" id="listings-main">
          {listings.map((listing) => (
            <ListingTile key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </>
  );
};

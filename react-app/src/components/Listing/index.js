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

      {/* <hr id="cat-hr"></hr>
      <div id="middle-header-container">
        <div style={{display: "flex", flexDirection:"column", width: "250px"}}>
          <h1 style={{textAlign:'left', margin: "40px 0 0 0"}}>all listings</h1>
          <p style={{fontSize:"10px", color: "rgb(100,100,100)", marginLeft: "3px"}}>Search for a favorite listing</p>
        </div>

      </div> */}
      <div id="main-body-container">
        {/* <div id="listings-sidebar">
          <h1>All Stores</h1>
          <a onClick={showAlert}>Sort</a>
          <a onClick={showAlert}>From Uber Eats</a>
          <a onClick={showAlert}>Price Range</a>
          <a onClick={showAlert}>Max Delivery Fee</a>
          <a onClick={showAlert}>Dietary</a>
        </div> */}

        <div className="listing-details-container" id="listings-main">
          {listings.map((listing) => (
            <ListingTile key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </>
  );
};

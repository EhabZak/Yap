import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkGetListingInfo } from "../../store/listings";
import { UpdateListing } from "./UpdateListing";

export const GetListingToUpdate = () => {
  const dispatch = useDispatch();
  const { listingId } = useParams();
  const oneListing = useSelector((state) => state.listing.singleListing);
console.log( "oneListing" , oneListing)
  useEffect(() => {
    dispatch(thunkGetListingInfo(listingId));
  }, [listingId, dispatch]);

  if (!oneListing.id) return null;

  return (
    <>
      <UpdateListing
        formType="UpdateListing"
        listing={oneListing}
      />
    </>
  );
};

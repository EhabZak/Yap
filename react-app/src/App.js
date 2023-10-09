import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import { Listings } from "./components/Listing";
import { ListingDetails } from "./components/ListingDetails";
import { CreateListing } from "./components/Listing/CreateListing";
import { GetListingToUpdate } from "./components/Listing/GetListingToUpdate";
import { ManageListings } from "./components/ManageListings";
import { ManageReviews } from "./components/ManageReviews";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <Listings />
          </Route>
          <Route exact path="/listings/new">
            <CreateListing/>
          </Route>
          <Route exact path="/listings/current">
            <ManageListings />
          </Route>
          <Route exact path="/reviews/current">
            <ManageReviews />
          </Route>
          <Route exact path="/listings/:listingId/edit">
            <GetListingToUpdate/>
          </Route>
          <Route exact path="/listings/:listingId">
            <ListingDetails />
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;

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
import { RestaurantsListings } from "./components/categories/Restaurants";
import { ShoppingListings } from "./components/categories/shopping";
import { NightLifeListings } from "./components/categories/nightLife";
import { ActiveLifeListings } from "./components/categories/activeLife";
import { SpaListings } from "./components/categories/spa";
import { AutomotiveListings } from "./components/categories/automotive";
import { HomeServicesListings } from "./components/categories/homeServices";
import { UpdateAccount } from "./components/ManageAccount/UpdateAccount";
//!  menu item////////////////////////
// we need routes for update , create but for menu item detail there is no need
import { MenuItemDetails } from "./components/MenuItemDetails";
import { CreateMenuItem } from "./components/MenuItems/CreateMenuItem";
import { GetMenuItemToUpdate } from "./components/MenuItems/GetMenuItemToUpdate";

//! //////////////////////////////////

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
          <Route exact path="/account/current">
            <UpdateAccount />
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

          <Route exact path="/listings/:listingId/createmenuitem">
            {/* <Navigation isLoaded={isLoaded} searchType={'none'}/> */}
            <CreateMenuItem />
            </Route>

          <Route exact path="/menuitems/:menuItemId/edit">
            {/* <Navigation isLoaded={isLoaded} searchType={'none'}/> */}
            <GetMenuItemToUpdate/>
          </Route>

          <Route exact path="/listings/:listingId">
            <ListingDetails />
          </Route>
          <Route exact path="/restaurants">
            <RestaurantsListings />
          </Route>
          <Route exact path="/shopping">
            <ShoppingListings />
          </Route>
          <Route exact path="/nightlife">
            <NightLifeListings />
          </Route>
          <Route exact path="/activelife">
            <ActiveLifeListings />
          </Route>
          <Route exact path="/spa">
            <SpaListings />
          </Route>
          <Route exact path="/automotive">
            <AutomotiveListings />
          </Route>
          <Route exact path="/homeservices">
            <HomeServicesListings />
          </Route>
          <Route exact path="/menuitems/:menuItemId">
            <MenuItemDetails />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;

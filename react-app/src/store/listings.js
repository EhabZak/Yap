import { csrfFetch } from "./csrf";

// TYPE CONSTANTS

const GET_LISTINGS = "listings/getListings";
const GET_LISTING = "listings/getListing";
const CREATE_LISTING = "listings/createListing";
const UPDATE_LISTING = "listings/updateListing";
const DELETE_LISTING = "listings/deleteListing";

// ACTION CREATORS

const getListings = (listings) => {
  return {
    type: GET_LISTINGS,
    listings,
  };
};

const getListing = (listing) => {
  return {
    type: GET_LISTING,
    listing,
  };
};

const createListing = (listing) => {
  return {
    type: CREATE_LISTING,
    listing,
  };
};

const updateListing = (listing) => {
  return {
    type: UPDATE_LISTING,
    listing,
  };
};

const deleteListing = (listingId) => {
  return {
    type: DELETE_LISTING,
    listingId,
  };
};

//! THUNK ACTION CREATORS

export const thunkGetListings = () => async (dispatch) => {
  const res = await csrfFetch("/api/listings");

  if (res.ok) {
    const listings = await res.json();
    dispatch(getListings(listings));
    return res;
  } else {
    const errors = await res.json();
    return errors;
  }
};

export const thunkGetListingInfo = (listingId) => async (dispatch) => {
  const res = await csrfFetch(`/api/listings/${listingId}`);

  if (res.ok) {
    const listing = await res.json();
    dispatch(getListing(listing));
    return res;
  } else {
    const errors = await res.json();
    return errors;
  }
};

export const thunkCreateListing = (listing, user) => async (dispatch) => {
  try {
    const res = await csrfFetch("/api/listings/", {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(listing),
      body: listing
    });

    const data = await res.json();
    console.log("data ======*******", data)
    return data;


  }catch (error) {
    const errors = await error.json();
      console.log("errors ======*******" , errors)
      throw errors;

  }





  // const res = await csrfFetch("/api/listings/", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(listing),
  // });

  // if (res.ok) {
  //   const data = await res.json();
  //   console.log("data ======*******" , data)
  //   return data;
  // } else {
  //   const errors = await res.json();
  //   console.log("errors ======*******" , errors)
  //   return errors;
  // }
};

export const thunkGetUserListings = () => async (dispatch) => {
  const res = await csrfFetch("/api/listings/current");

  if (res.ok) {
    const listings = await res.json();
    dispatch(getListings(listings));
    return res;
  } else {
    const errors = await res.json();
    return errors;
  }
};

export const thunkUpdateListing =
  (listing, listingId) => async (dispatch) => {
    const res = await csrfFetch(`/api/listings/${listingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(listing),
    });

    if (res.ok) {
      const data = await res.json();
      dispatch(updateListing(data));
      return data;
    } else {
      const errors = await res.json();
      return errors;
    }
  };

export const thunkDeleteListing = (listingId) => async (dispatch) => {
  const res = await csrfFetch(`/api/listings/${listingId}`, {
    method: "DELETE",
  });

  dispatch(deleteListing(listingId));
  return res;
};

//! REDUCERS
const initialState = { allListings: {}, singleListing: {} };

const listingsReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case GET_LISTINGS:
      newState = { ...state, allListings: {} };
      action.listings.listings.forEach((listing) => {
        newState.allListings[listing.id] = listing;
      });
      return newState;

    case GET_LISTING:
      newState = { ...state, singleListing: {} };
      newState.singleListing = action.listing;
      return newState;

    case CREATE_LISTING:
      newState = {
        ...state,
        allListings: { ...state.allListings },
        singleListing: { ...action.listing },
      };
      newState.allListings[action.listing.id] = action.listing;
      return newState;

    case UPDATE_LISTING:
      // newState = {
      //   ...state,
      //   allListings: {},
      //   singleListing: { ...state.singleListing },
      // };
      // newState.singleListing = {
      //   ...newState.singleListing,
      //   ...action.listing,
      // };
      newState = {
        ...state,
        singleListing: {
          ...state.singleListing,
          [action.listing.id]: action.listing,
        }
      };
      return newState;

    case DELETE_LISTING:
      newState = {
        ...state,
        allListings: { ...state.allListings },
        singleListing: {},
      };
      delete newState.allListings[action.listingId];
      return newState;

    default:
      return state;
  }
};

export default listingsReducer;

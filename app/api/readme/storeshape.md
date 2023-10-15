
This project utilizes Redux for managing state. The utilized store shape for managing state is represented below.

## Overall Shape: {session, listings, reviews, bookings}

```js
store = {
  session: {},

  listings: {
    allListings: {
      [listingId]: {
        listingData,
      },
    },
    singleListing: {
      listingData,
      Owner: {
        ownerData,
      },
    },
  },

  reviews: {
    listing: {
      [reviewId]: {
        reviewData,
        User: {
          userData,
        },
      },
    },
    user: {
      [reviewId]: {
        reviewData,
        User: {
          userData,
        },
        Listing: {
          listingData,
        },
      },
    },
  },

  

};
```

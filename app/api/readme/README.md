## USER AUTHENTICATION/AUTHORIZATION

### All endpoints that require authentication

All endpoints that require a current user to be logged in.

* Request: endpoints that require authentication
* Error Response: Require authentication
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Authentication required!"
    }
    ```

### All endpoints that require proper authorization

All endpoints that require authentication and the current user does not have the
correct role(s) or permission(s).

* Request: endpoints that require proper authorization
* Error Response: Require proper authorization
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "FORBIDDEN"
    }
    ```

### Get the Current User

Returns the information about the current user that is logged in.

* Require Authentication: false
* Request
  <!--!!START SILENT -->
  * Method: GET
  * URL: /api/users/current
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

* Successful Response when there is a logged in user
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "user": {
        "id": 2,
        "email": "bobbie@aa.io",
        "username": "bobbie"
      }
    }
    ```

* Successful Response when there is no logged in user
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "user": "No user logged in!"
    }
    ```

### Log In a User

Logs in a current user with valid credentials and returns the current user's
information.

* Require Authentication: false
* Request
  <!--!!START SILENT -->
  * Method: POST
  * URL: /api/auth/login
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "email": "bobbiee@aa.io",
      "password": "password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "user": {
        "id": 3,
        "email": "bobbie@aa.io",
        "username": "bobbie"
      }
    }
    ```

* Error response: Invalid credentials
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "errors": [
        "email": "Email provided not found",
        "password": "Password was incorrect"
      ]
    }
    ```

## LISTINGS

### Get all listings

Returns all the listings.

* Require Authentication: false
* Request
  <!--!!START SILENT -->
  * Method: GET
  * URL: /api/listings/
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "listings": [
        {
            "address": "22 Peace Plz Ste 400",
            "avg_rating": 4.5,
            "category": "shopping",
            "city": "San Francisco",
            "close_hours": "6:00",
            "created_at": "Wed, 04 Oct 2023 21:01:34 GMT",
            "description": "Daiso Japan, is a renowned international retail brand offering an extensive range of affordable, high-quality products, from household goods to lifestyle items, providing customers with value and variety",
            "id": 4,
            "image_url": "https://s3-media0.fl.yelpcdn.com/bphoto/RO20NATp5RoHgorVhSWqqw/o.jpg",
            "name": "Daiso Japan",
            "num_reviews": 2,
            "open_hours": "10:00",
            "owner_id": 3,
            "price": 2,
            "state": "California",
            "updated_at": "Wed, 04 Oct 2023 21:01:34 GMT"
        }
      ]
    }
    ```

### Get all listings owned by the Current User

Returns all the listings owned (created) by the current user.

* Require Authentication: true
* Request
  <!--!!START SILENT -->
  * Method: GET
  * URL: /api/listings/current
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "listings": [
        {
            "address": "865 Market St",
            "avg_rating": 3.5,
            "category": "shopping",
            "city": "San Francisco",
            "close_hours": "6:00",
            "created_at": "Wed, 04 Oct 2023 21:01:34 GMT",
            "description": "Located just two blocks from famed Union Square, Westfield San Francisco Centre has emerged as one of the most enticing downtown retail venues in the United States.",
            "id": 5,
            "image_url": "https://s3-media0.fl.yelpcdn.com/bphoto/Uh0L1l4LDTRu4Zv8op506w/o.jpg",
            "name": "Westfield San Francisco Centre",
            "num_reviews": 2,
            "open_hours": "10:00",
            "owner_id": 2,
            "price": 2,
            "state": "California",
            "updated_at": "Wed, 04 Oct 2023 21:01:34 GMT"
        }
      ]
    }
    ```

### Get details of a listing from an id

Returns the details of a spot specified by its id.

* Require Authentication: false
* Request
  <!--!!START SILENT -->
  * Method: GET
  * URL: /api/listings/:listingId
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
      {
    "address": "22 Peace Plz Ste 400",
    "avg_rating": 4.5,
    "category": "shopping",
    "city": "San Francisco",
    "close_hours": "6:00",
    "created_at": "Wed, 04 Oct 2023 21:01:34 GMT",
    "description": "Daiso Japan, is a renowned international retail brand offering an extensive range of affordable, high-quality products, from household goods to lifestyle items, providing customers with value and variety",
    "id": 4,
    "image_url": "https://s3-media0.fl.yelpcdn.com/bphoto/RO20NATp5RoHgorVhSWqqw/o.jpg",
    "name": "Daiso Japan",
    "num_reviews": 2,
    "open_hours": "10:00",
    "owner_id": 3,
    "price": 2,
    "state": "California",
    "updated_at": "Wed, 04 Oct 2023 21:01:34 GMT"
      }

    ```

* Error response: Couldn't find a Spot with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Listing not found!"
    }
    ```

### Create a Listing

Creates and returns a new spot.

* Require Authentication: true
* Request
  <!--!!START SILENT -->
  * Method: POST
  * URL: /api/listings/
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
    "address": "1234 Main",
    "city": "San Francisco",
    "state": "California",
    "name": "Shoreline Park",
    "category": "active life",
    "description": "very cool place to hang out, greate for walking,biking , windsurfing, and just enjoying the view",
    "price": 1,
    "open_hours": "12:00",
    "close_hours": "2:00",
    "image_url": "https://s3-media0.fl.yelpcdn.com/bphoto/4cNKyETiGwCGfoTzWBtL2Q/o.jpg"
    }
    ```

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
    "address": "1234 Main",
    "category": "active life",
    "city": "San Francisco",
    "close_hours": "2:00",
    "created_at": "Sun, 15 Oct 2023 00:00:00 GMT",
    "description": "very cool place to hang out, greate for walking,biking , windsurfing, and just enjoying the view",
    "id": 25,
    "image_url": "https://s3-media0.fl.yelpcdn.com/bphoto/4cNKyETiGwCGfoTzWBtL2Q/o.jpg",
    "name": "Shoreline Park",
    "open_hours": "12:00",
    "owner_id": 3,
    "price": 1,
    "state": "California",
    "updated_at": "Sun, 15 Oct 2023 00:00:00 GMT"
  }
    ```

* Error Response: Body validation error
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "errors": {
        "address": [
          "This field is required.",
        ],
        "city": [
          "This field is required."
        ],
        "close_hours": [
          "Opening hours must have at least 4 characters!"
        ],
        "state": [
          "This field is required."
        ],
        "name": [
          "This field is required."
        ],
        "open_hours": [
          "Opening hours must have at least 4 characters!"
        ],
        "category": [
          "This field is required."
        ],
        "description": [
          "This field is required."
        ],
        "price": [
          "This field is required."
        ],
        "image_url": [
          "This field is required."
        ]
      }
    }
    ```

### Edit a Listing

Updates and returns an existing listing.

* Require Authentication: true
* Require proper authorization: Listing must belong to the current user
* Request
  <!--!!START SILENT -->
  * Method: PUT
  * URL: /api/listings/:listingId
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
    "address": "2222 Main",
    "city": "San Francisco",
    "state": "California",
    "name": "Shoreline Park",
    "category": "active life",
    "description": "very cool place to hang out, greate for walking,biking , windsurfing, and just enjoying the view",
    "price": 1,
    "open_hours": "12:00",
    "close_hours": "2:00",
    "image_url": "https://s3-media0.fl.yelpcdn.com/bphoto/4cNKyETiGwCGfoTzWBtL2Q/o.jpg"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
    "address": "2222 Main",
    "category": "active life",
    "city": "San Francisco",
    "close_hours": "2:00",
    "created_at": "Sun, 15 Oct 2023 00:00:00 GMT",
    "description": "very cool place to hang out, greate for walking,biking , windsurfing, and just enjoying the view",
    "id": 25,
    "image_url": "https://s3-media0.fl.yelpcdn.com/bphoto/4cNKyETiGwCGfoTzWBtL2Q/o.jpg",
    "name": "Shoreline Park",
    "open_hours": "12:00",
    "owner_id": 3,
    "price": 1,
    "state": "California",
    "updated_at": "Sun, 15 Oct 2023 13:30:09 GMT"
    }
    ```

* Error Response: Body validation error
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "errors": {
        "address": [
          "This field is required.",
        ],
        "city": [
          "This field is required."
        ],
        "close_hours": [
          "Opening hours must have at least 4 characters!"
        ],
        "state": [
          "This field is required."
        ],
        "name": [
          "This field is required."
        ],
        "open_hours": [
          "Opening hours must have at least 4 characters!"
        ],
        "category": [
          "This field is required."
        ],
        "description": [
          "This field is required."
        ],
        "price": [
          "This field is required."
        ],
        "image_url": [
          "This field is required."
        ]
      }
    }
    ```

### Delete a Listing

Deletes an existing listing.

* Require Authentication: true
* Require proper authorization: Spot must belong to the current user
* Request
  <!--!!START SILENT -->
  * Method: DELETE
  * URL: /api/listings/:listingId
  <!--!!END -->
  <!--!!ADD -->
  <!-- * Method: ? -->
  <!-- * URL: ? -->
  <!--!!END_ADD -->
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Delete successful!"
    }
    ```


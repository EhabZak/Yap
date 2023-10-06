import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkCreateListing } from "../../store/listings";
import './CreateListing.css'

export const CreateListing = ({ user }) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [open_hours, setOpenHours] = useState("");
  const [close_hours, setCloseHours] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [backendErrors, setBackendErrors] = useState({});

  const history = useHistory();
  const dispatch = useDispatch();

  // console.log('user ==========>>>>>' , user) //! owner_id is not coming from this front end it is added in backend in listing_routes.py in create route.

  useEffect(() => {
    const errors = {};

    if (!address) errors.address = "Address is required";
    if (address.length > 49 || address.length < 2) errors.address = "address must be less than 50 characters";
    if (!city) errors.city = "City is required";
    if (city.length > 29 || city.length < 2) errors.city = "City must be less than 30 characters";
    if (!state) errors.state = "State is required";
    if (state.length > 29 || state.length < 2) errors.state = "State must be less than 30 characters";
    if (!name || name.length < 2)
      if (!name) errors.name = "Name is required";
    if (name.length > 29) errors.name = "Name must be less than 30 characters";
    if (!category) errors.category = "category is required";
    if (description.length < 30 || description.length > 250) errors.description = "Description must be more than 30 characters and less than 250";
    if (!description) errors.description = "description is required";
    if (!price || price < 1) errors.price = "Price is required";
    if (!open_hours) errors.open_hours = "Open hours is required";
    if (!close_hours) errors.close_hours = "Close hours is required";
    if (!image_url) errors.image_url = "Preview image is required";
    if (
      image_url &&
      !image_url.endsWith("jpg") &&
      !image_url.endsWith("jpeg") &&
      !image_url.endsWith("png")
    )
      errors.image_url = "Image URL must end in .png, .jpg, or .jpeg";

    setErrors(errors);
  }, [
    address,
    city,
    state,
    name,
    category,
    description,
    price,
    open_hours,
    close_hours,
    image_url,

  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitted(true);
    // setErrors({})

    const newListing = {
      address,
      city,
      state,
      name,
      category,
      description,
      price,
      open_hours,
      close_hours,
      image_url,
    };
    // console.log("errors =======>>>>>>>>>>>", errors )
    if (!Object.values(errors).length) {
      try {
        const addListing = await dispatch(
          thunkCreateListing(newListing, user)
        );
        if (addListing && !addListing.errors) {

          history.push(`/listings/${addListing.id}`);
        }
      } catch (error) {

        if (error.errors) {
          // const combinedErrors = { ...errors, errors: error.errors };
          // console.log("combinedErrors ==========>>>", combinedErrors)
          console.log("addListing.errors ++++++++++++++>>>", error.errors)
          setBackendErrors(error.errors);
        }

      }
    }

    // if (!Object.values(errors).length) {
    //   const addListing = await dispatch(
    //     thunkCreateListing(newListing, user)
    //   );

    //   const combinedErrors = { ...errors, Errors: addListing.errors }; //! very important step to add backend and front end errors
    //   console.log("combinedErrors ==========>>>", combinedErrors)
    //   console.log("addListing.errors ++++++++++++++>>>", addListing.errors)
    //   if (addListing.errors) {
    //     setErrors(combinedErrors);
    //   } else {
    //     history.push(`/listings/${addListing.id}`);
    //   }
    // }
    setIsSubmitting(false);
  };

  return (
    <div className="create-listing-form-container">
      <form onSubmit={handleSubmit} id='form-container'>
        <h2>Create a New Listing</h2>
        <div className="location-container">
          <h3>Get Started</h3>

          <div className="form-div-container">
            <div className="address-container label-container">
              <label>Store Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Store Address"
              />
              {errors.address && submitted && (
                <p className="on-submit-errors">{errors.address}</p>
              )}
              {backendErrors.address && submitted && (
                <p className="backend-errors">{backendErrors.address}</p>
              )}
            </div>
          </div>

          {/* <div className="form-div-container"> */}
          <div className="city-container label-container" >
            <label>City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />
            {errors.city && submitted && (
              <p className="on-submit-errors">{errors.city}</p>
            )}
            {backendErrors.city && submitted && (
                <p className="backend-errors">{backendErrors.city}</p>
              )}
          </div>

          <div className="state-container label-container">
            <label>State</label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="State"
            />
            {errors.state && submitted && (
              <p className="on-submit-errors">{errors.state}</p>
            )}
            {backendErrors.state && submitted && (
                <p className="backend-errors">{backendErrors.state}</p>
              )}
          </div>
          {/* </div> */}
        </div>

        <div className="form-div-container">
          <div className="name-container label-container">
            <label>Listing Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Listing Name"
            />
            {errors.name && submitted && (
              <p className="on-submit-errors">{errors.name}</p>
            )}
            {backendErrors.name && submitted && (
                <p className="backend-errors">{backendErrors.name}</p>
              )}
          </div>
        </div>
        <div className="form-div-container">
          <div className="description-container label-container">
            <label>Listing Description</label>
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Listing Description"
            />
            {errors.description && submitted && (
              <p className="on-submit-errors">{errors.description}</p>
            )}
            {backendErrors.description && submitted && (
                <p className="backend-errors">{backendErrors.description}</p>
              )}
          </div>
        </div>

        <div className="form-div-container">
          <div className="category-container label-container">
            <label>Listing Category</label>
            <select onChange={(e) => setCategory(e.target.value)}>
              <option value="0">Select Category</option>
              <option value="listing">Listing</option>
              <option value="shopping">Shopping</option>
              <option value="nightlife">Nightlife</option>
              <option value="active life">Active Life</option>
              <option value="Spa">Beauty & Spa</option>
              <option value="automotive">Automotive</option>
              <option value="home services">Home services</option>
              <option value="Other">Other</option>
            </select>
            {errors.category && submitted && (
              <p className="on-submit-errors">{errors.category}</p>
            )}
          </div>
        </div>

        <div className="form-div-container">
          <div className="price-container label-container">
            <label>Listing Price</label>
            <select onChange={(e) => setPrice(e.target.value)}>
              <option value="0">Select Expensiveness</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
            </select>
            {errors.price && submitted && (
              <p className="on-submit-errors">{errors.price}</p>
            )}
          </div>
        </div>

        <div className="form-div-container">
          <div className="store-open-hours-container label-container">
            <label>Listing Open Hours</label>
            <select onChange={(e) => setOpenHours(e.target.value)}>
              <option value="0">Select Open Hours</option>
              <option value="1:00">1:00</option>
              <option value="1:30">1:30</option>
              <option value="2:00">2:00</option>
              <option value="2:30">2:30</option>
              <option value="3:00">3:00</option>
              <option value="3:30">3:30</option>
              <option value="4:00">4:00</option>
              <option value="4:30">4:30</option>
              <option value="5:00">5:00</option>
              <option value="5:30">5:30</option>
              <option value="6:00">6:00</option>
              <option value="6:30">6:30</option>
              <option value="7:00">7:00</option>
              <option value="7:30">7:30</option>
              <option value="8:00">8:00</option>
              <option value="8:30">8:30</option>
              <option value="9:00">9:00</option>
              <option value="9:30">9:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
            </select>
            {errors.open_hours && submitted && (
              <p className="on-submit-errors">{errors.open_hours}</p>
            )}
          </div>
          <div className="store-close-hours-container label-container">
            <label>Listing Close Hours</label>
            <select onChange={(e) => setCloseHours(e.target.value)}>
              <option value="0">Select Close Hours</option>
              <option value="1:00">1:00</option>
              <option value="1:30">1:30</option>
              <option value="2:00">2:00</option>
              <option value="2:30">2:30</option>
              <option value="3:00">3:00</option>
              <option value="3:30">3:30</option>
              <option value="4:00">4:00</option>
              <option value="4:30">4:30</option>
              <option value="5:00">5:00</option>
              <option value="5:30">5:30</option>
              <option value="6:00">6:00</option>
              <option value="6:30">6:30</option>
              <option value="7:00">7:00</option>
              <option value="7:30">7:30</option>
              <option value="8:00">8:00</option>
              <option value="8:30">8:30</option>
              <option value="9:00">9:00</option>
              <option value="9:30">9:30</option>
              <option value="10:00">10:00</option>
              <option value="10:30">10:30</option>
              <option value="11:00">11:00</option>
              <option value="11:30">11:30</option>
              <option value="12:00">12:00</option>
              <option value="12:30">12:30</option>
            </select>
            {errors.close_hours && submitted && (
              <p className="on-submit-errors">{errors.close_hours}</p>
            )}
          </div>
        </div>

        <div className="images-container">
          <h3>Liven up your listing with photos</h3>
          <p>Submit a link to at least one photo to publish your listing.</p>
          <div className="image-url-container label-container">
            <input
              type="url"
              value={image_url}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Preview Image URL"
            />
            {errors.image_url && submitted && (
              <p className="on-submit-errors">{errors.image_url}</p>
            )}
          </div>
        </div>

        <div className="button-container">
          <button
            className="create-listing-button"
            type="submit"
            disabled={
              !(
                address ||
                city ||
                state ||
                name ||
                category ||
                description ||
                price ||
                open_hours ||
                close_hours ||
                image_url
              )
            }
          >
            Create Listing
          </button>
        </div>
      </form>
    </div>
  );
};

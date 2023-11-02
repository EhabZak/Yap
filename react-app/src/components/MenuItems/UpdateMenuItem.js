import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { thunkUpdateMenuItem } from "../../store//menuItems";
import './CreateMenuItem.css'

export const UpdateMenuItem = ({menuItem}) => {
  const [name, setName] = useState(menuItem?.name);
  const [size, setSize] = useState(menuItem?.size);
  const [calories, setCalories] = useState(menuItem?.calories);
  const [price, setPrice] = useState(menuItem?.price);
  const [description, setDescription] = useState(menuItem?.description);
  const [imageUrl, setImageUrl] = useState(menuItem?.imageUrl);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const history = useHistory();
  const dispatch = useDispatch();

//   const { restaurantId } = useParams(); we don't have it in update

useEffect(() => {
    setName(menuItem.name);
    setSize(menuItem.size)
    setCalories(menuItem.calories);
    setPrice(menuItem.price);
    setDescription(menuItem.description);
    setImageUrl(menuItem.imageUrl);
  }, [dispatch, menuItem]);

  useEffect(() => {
    const errors = {};

    if (!name) errors.name = "Name is required";
    if (!name || name.length < 2)
      errors.name = "Name needs to be 2 or more characters";
    if (name.length > 29) errors.name = "Name must be less than 30 characters";
    if (size.length > 20) errors.size = "Size must be less than 20 characters";
    if (calories < 0) errors.calories = "Calories must be zero or greater";
    if (!price || price < 0) errors.price = "Valid price is required";
    if (!imageUrl) errors.imageUrl = "Preview image is required";

    setErrors(errors);
  }, [name, size, calories, price, description, imageUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitted(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("size", size);
    formData.append("calories", calories);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("imageUrl", imageUrl);

    if (!Object.values(errors).length) {
      const updateMenuItem = await dispatch(
        thunkUpdateMenuItem(formData, menuItem.id)
      );

      const combinedErrors = { ...errors, Errors: updateMenuItem.errors };

      if (updateMenuItem.errors) {
        setErrors(combinedErrors);
      } else {
        //! you need to update this after you prepare the detail item page
        // history.push(`/menuitems/${updateMenuItem.id}`);
        history.push(`/`);
      }
    }
    setIsSubmitting(false);
  };

  return (
    <div className="create-menu-item-form-container">
      <h1>Update Menu Item</h1>
      <form onSubmit={handleSubmit} className="create-form2-container">

        <div className="name-container">
          <div className="name-container create-label-container">
            <label>Item Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              // placeholder="Item Name"
              required={true}
            />
            {errors.name && submitted && (
              <p className="on-submit-errors">{errors.name}</p>
            )}
          </div>
        </div>

        <div className="size-container">
          <div className="size-container create-label-container" >
            <label>Size</label>
            <input
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              // placeholder="Size"
            />
            {errors.size && submitted && (
              <p className="on-submit-errors">{errors.size}</p>
            )}
          </div>
        </div>

        <div className="calories-container">
          <div className="calories-container create-label-container">
            <label>Calories</label>
            <input
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              // placeholder="Calories"
            />
            {errors.calories && submitted && (
              <p className="on-submit-errors">{errors.calories}</p>
            )}
          </div>
        </div>

        <div className="price-container">
          <div className="price-container create-label-container">
            <label>Item Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              // placeholder="Item Price"
              required={true}
            />
            {errors.price && submitted && (
              <p className="on-submit-errors">{errors.price}</p>
            )}
          </div>
        </div>

        <div className="description-container">
          <div className="description-container create-label-container">
            <label>Item Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add a description for your item."
            />
            {errors.description && submitted && (
              <p className="on-submit-errors">{errors.description}</p>
            )}
          </div>
        </div>

        <div className="images-container ">
          <p>Submit a link to one photo to create your menu item.</p>
          <div className="image-url-container">
            <input id="image-input"
              type="file"
                accept="image/*"
                onChange={(e) => setImageUrl(e.target.files[0])}
              placeholder="Preview Image URL"
              required={true}
            />
            {errors.imageUrl && submitted && (
              <p className="on-submit-errors">{errors.imageUrl}</p>
            )}
          </div>
        </div>

        <div className="item-button-container">
          <button
            className="create-menu-item-button"
            type="submit"
            disabled={
              !(
                name ||
                price ||
                imageUrl
              )
            }
          >
            Create Menu Item
          </button>
        </div>
      </form>
    </div>
  );
};

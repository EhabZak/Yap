import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkDeleteMenuItem } from "../../store/menuItems";
import "./DeleteMenuItem.css"
export const DeleteMenuItemModal = ({ menuItemId }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleClick = (e) => {
    e.preventDefault();

    return dispatch(thunkDeleteMenuItem(menuItemId)).then(closeModal);
  };

  return (
    <div className="delete-modal-content2">
      <div className="delete-menu_item-container">
        <h3>Confirm Delete</h3>
        <p>
          Are you sure you want to remove this menu item from the listing?
        </p>
        <div className="yes-no-container2">
          <button className="yes-button" type="button" onClick={handleClick}>
            Yes (Delete menu item)
          </button>
          <button className="no-button" type="button" onClick={closeModal}>
            No (Keep menu item)
          </button>
        </div>
      </div>
    </div>
  );
};

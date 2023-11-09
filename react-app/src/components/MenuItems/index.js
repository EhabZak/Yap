import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkGetMenuItems } from "../../store/menuItems";
import MenuItemTile from "../MenuItemTile";
import "./MenuItems.css";

export const MenuItems = ({ listingId }) => {
  const dispatch = useDispatch();

  const getMenuItems = useSelector((state) => state.menuItems.allMenuItems);
  const menuItems = Object.values(getMenuItems);

  useEffect(() => {
    dispatch(thunkGetMenuItems(listingId));
  }, [dispatch]);

  if (!menuItems.length) return null;

  return (
    <>
    {menuItems.length >0 ? <h2>Menu Items</h2> : null}
      <div className="menu-item-grid-settings">
        {menuItems.map((menuItem) => (
          <MenuItemTile key={menuItem.id} menuItem={menuItem} />
        ))}
      </div>
    </>
  );
};

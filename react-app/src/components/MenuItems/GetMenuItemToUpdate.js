import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkGetMenuItemInfo } from "../../store/menuItems";
import { UpdateMenuItem } from "./UpdateMenuItem";

export const GetMenuItemToUpdate = () => {
  const dispatch = useDispatch();
  const { menuItemId } = useParams();
  //! the issue is here ///////////////////////////////////////////////////////////////////////////////////////////////
  const oneMenuItem = useSelector((state) => state.menuItems.singleMenuItem);
console.log( "oneMenuItem ====>" , oneMenuItem)

useEffect(() => {
    dispatch(thunkGetMenuItemInfo(menuItemId));
  }, [menuItemId, dispatch]);

  if (!oneMenuItem.id) return null;
console.log("oneMenuItem.id ================>>" ,oneMenuItem.id)
  return (
    <>
      <UpdateMenuItem
        formType="UpdateMenuItem"
        menuItem={oneMenuItem}
      />
    </>
  );
};

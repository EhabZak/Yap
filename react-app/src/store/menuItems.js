//! TYPE CONSTANTS

const GET_MENU_ITEMS = "menuItems/getMenuItems";
const GET_MENU_ITEM = "menuItems/getMenuItem";
const DELETE_MENU_ITEM = "menuItems/deleteMenuItem";
const UPDATE_MENU_ITEM = "menuItems/updateMenuItem";

//! ACTION CREATORS

const getMenuItems = (menuItems) => {
  return {
    type: GET_MENU_ITEMS,
    menuItems,
  };
};

const getMenuItem = (menuItem) => {
  return {
    type: GET_MENU_ITEM,
    menuItem,
  };
};

const deleteMenuItem = (menuItemId) => {
  return {
    type: DELETE_MENU_ITEM,
    menuItemId,
  };
};

const updateMenuItem = (menuItem) => {
    return {
      type: UPDATE_MENU_ITEM,
      menuItem,
    };
  };

//! THUNK ACTION CREATORS

export const thunkGetMenuItems = (listingId) => async (dispatch) => {
  const res = await fetch(`/api/listings/${listingId}/menuitems`);
  if (res.ok) {
    const menuItems = await res.json();
    dispatch(getMenuItems(menuItems));
    return res;
  } else {
    const errors = await res.json();
    return errors;
  }
};

export const thunkGetMenuItemInfo = (menuItemId) => async (dispatch) => {
  const res = await fetch(`/api/menuitems/${menuItemId}`);

  if (res.ok) {
    const menuItem = await res.json();
    dispatch(getMenuItem(menuItem));
    return res;
  } else {
    const errors = await res.json();
    return errors;
  }
};

export const thunkCreateMenuItem =
  (menuItem, listingId) => async (dispatch) => {
    const res = await fetch(`/api/listings/${listingId}/createmenuitem`, {
      method: "POST",
      body: menuItem,
    });

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      const errors = await res.json();
      return errors;
    }
  };

export const thunkDeleteMenuItem = (menuItemId) => async (dispatch) => {
  const res = await fetch(`/api/menuitems/${menuItemId}`, {
    method: "DELETE",
  });

  dispatch(deleteMenuItem(menuItemId));
  return res;
};

//! ///////////////////////////////////////////////

export const thunkUpdateMenuItem =
  (menuItem, menuItemId) => async (dispatch) => {
    const res = await fetch(`/api/menuItems/${menuItemId}`, {
      method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(listing),
      body: menuItem,
    });

    if (res.ok) {
      const data = await res.json();
      dispatch(updateMenuItem(data));
      return data;
    } else {
      const errors = await res.json();
      return errors;
    }
  };


//!  /////////////////////////////////////////////

//! REDUCERS

const initialState = { allMenuItems: {}, singleMenuItem: {} };

const menuItemsReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case GET_MENU_ITEMS:
      newState = { ...state, allMenuItems: {} };
      action.menuItems.forEach((menuItem) => {
        newState.allMenuItems[menuItem.id] = menuItem;
      });
      return newState;

    case GET_MENU_ITEM:
      newState = { ...state, singleMenuItem: {} };
      newState.singleMenuItem = action.menuItem;
      return newState;

    case UPDATE_MENU_ITEM:
      newState = {
        ...state,
        singleMenuItem: {
          ...state.singleMenuItem,
          [action.menuItem.id]: action.menuItem,
          }
      };
      return newState;


    case DELETE_MENU_ITEM:
      newState = {
        ...state,
        allMenuItems: { ...state.allMenuItems },
        singleMenuItem: {},
      };
      delete newState.allMenuItems[action.menuItemId];
      return newState;

    default:
      return state;
  }
};

export default menuItemsReducer;

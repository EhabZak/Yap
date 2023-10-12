import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { NavLink, useHistory } from "react-router-dom";
import './Navigation.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser as soldCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <div id="main-menu-container">
      <button className="user-button-container" onClick={openMenu} >
        <FontAwesomeIcon icon={soldCircleUser} />
      </button>

      <ul className={ulClassName} ref={ulRef} id="menu-drop-down">
        {user ? (
          <>
            <div id="auser-name-container">
              <div id="hello-container">
                <div className="menu-logo"><FontAwesomeIcon icon={faUser} /></div>
                <li> Hello, {user.username}</li>

              </div>
              {/* <li>{user.email}</li> */}
            </div>
            {user ? (

              <div className="create-container">
                <div className="menu-logo"> <FontAwesomeIcon icon={faPlus} /></div>
                <div> <NavLink className="create-new-listing menu-navLinks" to="/listings/new">
                  Add a Business
                </NavLink> </div>
              </div>
            ) : (
              ""
            )}
            <div className="create-container">
              <div className="menu-logo">< FontAwesomeIcon icon={faGear} /></div>
              <div><NavLink
                exact
                to="/listings/current"
                className="manage-listings-current menu-navLinks"
                onClick={closeMenu}
              >
                Manage Business
              </NavLink></div>
            </div>

            <div className="create-container">
              <div className="menu-logo">< FontAwesomeIcon icon={faGear} /></div>
              <NavLink
                exact
                to="/reviews/current"
                className="manage-reviews-current menu-navLinks"
                onClick={closeMenu}
              >
                Manage Reviews
              </NavLink>
            </div>
            <li id="logout-container">
              <div className="menu-logo"><FontAwesomeIcon icon={faArrowRightFromBracket} /></div>
              <button id="log-out-button" onClick={handleLogout}>Log Out</button>
            </li>


          </>

        ) : (
          <ul id="main-sign-up-container">
            <i className="sign-up-container">
              <span className="fa-solid fa-arrow-right-to-bracket"></span>
              <OpenModalButton
                buttonText="Log In"
                // onItemClick={closeMenu}
                modalComponent={<LoginFormModal />}
                onClose={() => setShowMenu(false)}

              />
            </i>

            <i className="sign-up-container">
              <i className="fa-solid fa-user-plus"></i>
              <OpenModalButton
                buttonText="Sign Up"
                onItemClick={closeMenu}
                modalComponent={<SignupFormModal />}
                onClose={() => setShowMenu(false)}
              />
            </i>
          </ul>
        )}
      </ul>
    </div>
  );
}

export default ProfileButton;

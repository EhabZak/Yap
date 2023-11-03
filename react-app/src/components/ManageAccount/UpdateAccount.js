import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { updateAccount } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import { DeleteAccountModal } from "./DeleteAccountModal";
import "./Account.css";

export const UpdateAccount = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState(sessionUser.email || "");
  const [username, setUsername] = useState(sessionUser.username || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (!sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const data = await dispatch(
        updateAccount(username, email, password, sessionUser.id)
      );
      if (data.errors && data) {
        setErrors(data.errors);
      } else {
        history.push("/");
        alert("Successfully updated account!");
      }
    } else {
      setErrors([
        "Confirm Password field must be the same as the Password field",
      ]);
    }
  };

  return (
    <div className="update-account-form-container">
      <h2>Update Account</h2>
      <form onSubmit={handleSubmit}>
        <ul className="errors-container">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>

        <div className="account-input-container">
          <div className="update-item-container">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="email"
            />
          </div>
          <div className="update-item-container">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="user name"
            />
          </div>
          <div id="passwords-container">
          <div >
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="enter password"
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="confirm password"
            />
          </div>
          </div>

        </div>
        <div className="update-button-container">
          <button className="open-update-button" type="submit">
            Update
          </button>
        </div>
      </form>
      <div className="delete-account-container">
      <OpenModalButton
        className="delete-account-button "
        buttonText="Delete Account"
        modalComponent={<DeleteAccountModal />}
      />
</div>
    </div>
  );
};

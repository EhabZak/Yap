import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
//!
  const [showMenu, setShowMenu] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
        closeModal()
    }
  };
//! ///////////////////////////////////////////
  const handleDemoButtonClick = (e) => {
    e.preventDefault();
    const demoEmail = "demo@aa.io";
    const demoPassword = "password";
    setShowMenu(false);
    dispatch(login(demoEmail, demoPassword))
    .then(closeModal)
  };
//! ////////////////////////////////////////
  return (
    <div className="login-Modal">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit} id='form-log-in'>
        <ul id="errors-container">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div id="login-labels-container">
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" id="login-button">Log In</button>

        <div id="demo-user-container">
          <button
            className="buttons"
            id="demo-user-button"
            onClick={handleDemoButtonClick}

          >
            Demo User
          </button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default LoginFormModal;

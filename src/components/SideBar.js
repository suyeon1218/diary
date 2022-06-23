import React from "react";
import { Link } from "react-router-dom";
import { authService } from "fbsetting";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const onLogOut = () => {
    authService.signOut();
    navigate('/');
  }
  return (
    <>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/diary">
          <li>Diary</li>
        </Link>

        <Link to="/to-do-list">
          <li>To Do List</li>
        </Link>

        <Link to="/profile">
          <li>Profile</li>
        </Link>

        <li onClick={onLogOut}>Logout</li>
      </ul>
    </>
  );
}

export default SideBar;
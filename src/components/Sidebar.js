import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from "react-router-dom";

export default props => {
  return (
    <Menu right>
      <Link
            to="/register"
            className="text-left ml-5 my-6 p-2 flex hover:bg-grey "
          >
            <span class="material-icons mx-2">person_add</span>
            Register
          </Link>
          <Link
            to="/"
            className="text-left ml-5  my-6 p-2 flex hover:bg-grey "
          >
            <span class="material-icons mx-2">fingerprint</span>
            Login
          </Link>
          <Link
            to=""
            className="text-left ml-5 my-6 p-2 flex hover:bg-grey "
          >
            <span class="material-icons mx-2">lock_open</span>
            Forget Password
          </Link>
    </Menu>
  );
};
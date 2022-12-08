import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  // const { collapseSidebar } = useProSidebar();
  // let navToggler = () => {
  //   let menu = document.querySelector(".sidebar");
  //   menu.classList.toggle("hidden");
  // };
  return (
      <div  className="Navbar-container">
        <div className="Navbar flex flex-row text-grey nav-desktop">
          <div className="logo basis-1/3  mt-16 uppercase">Adsaro</div>
          <div className="right_nav basis-2/3 uppercase place-content-end mr-24 mt-10 flex max-md:hidden">
            <Link to="/register" className="mx-5 my-6 p-2 flex hover:bg-slate-300 hover:text-grey ">
              <span class="material-icons mx-2">person_add</span>
              Register
            </Link>
            <Link to="/" className="mx-5 my-6 p-2 flex hover:bg-slate-300 hover:text-grey ">
              <span class="material-icons mx-2">fingerprint</span>
              Login
            </Link>
            <Link to="" className="mx-5 my-6 p-2 flex hover:bg-slate-300 hover:text-grey ">
              <span class="material-icons mx-2">lock_open</span>
              Forget Password
            </Link>
          </div>
        </div>

       </div>
  );
};

export default Navbar;

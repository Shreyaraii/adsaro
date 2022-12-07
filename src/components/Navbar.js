import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    let navToggler = () => {
        let menu = document.querySelector(".menus");
        menu.classList.toggle("hidden");
      };


    return (  
        <div className="Navbar-container">


                <div className="Navbar flex flex-row text-white nav-desktop">
                    <div className="logo basis-1/3  mt-16 ">Login Page</div>
                    <div className="right_nav basis-2/3 uppercase place-content-end mr-24 mt-10 flex flex-wrap">
                        <Link to="/register" className="mx-5 my-6 p-2 flex hover:bg-grey ">
                            <span class="material-icons mx-2">
                            person_add
                            </span>
                            Register
                            </Link>
                        <Link to="/" className="mx-5 my-6 p-2 flex hover:bg-grey">
                            <span class="material-icons mx-2">
                            fingerprint
                            </span>
                            Login</Link>
                        <Link to="" className="mx-5 my-6 p-2 flex hover:bg-grey ">
                        <span class="material-icons mx-2">
                            lock_open
                            </span>
                            Forget Password</Link>
                    </div>
                </div>


        <div className="Navbar flex text-white nav-mobile">
            <div className="logo basis-1/3  mt-16 ">Login Page</div>
            
            <div className="right_nav basis-2/3 uppercase place-content-end mr-24  flex flex-wrap">
            <span
                class="material-icons my-8 ml-5  text-white"
                onClick={navToggler}
                >
                menu
              </span> 
            </div>

            <div className="menus">
                <Link to="/register" className="ml-40 mr-32 y-6 p-2 flex hover:bg-grey max-sm:ml-20">
                    <span class="material-icons mx-2">
                    person_add
                    </span>
                    Register
                    </Link>
                <Link to="/" className="ml-40 mr-32 my-6 p-2 flex hover:bg-grey max-sm:ml-20">
                    <span class="material-icons mx-2">
                    fingerprint
                    </span>
                    Login</Link>
                <Link to="" className="ml-40 mr-32 my-6 p-2 flex hover:bg-grey max-sm:ml-20">
                <span class="material-icons mx-2">
                    lock_open
                    </span>
                    Forget Password</Link>
            
                </div>
        </div>
        </div>
        

        
    );
}
 
export default Navbar;
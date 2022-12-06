import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        
        <div className="Navbar flex flex-row text-white">
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
    );
}
 
export default Navbar;
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import logo from "../img/adsaro-logo.png";

const RegisterPage = () => {
  return (
    <div className="register_page">
      <div className="bg-overlay bg-background">
        <div className="signup_box pt-40 ">
          <div className="signup_form bg-white mx-auto text-slate-700 rounded-2xl border-primary">
            <p className="text-xl mb-2 pt-4">Signup</p>
            <hr className="mx-4" />

            <form className="pt-4 " action="">
              {/* Account type */}
              <div className="pt-4 ">
              <p className="text-left ml-5">Account Type</p>
                <select id="account" >
                  <option value="" selected disabled>
                    Choose account type
                  </option>
                  <option value="Advertiser">Advertiser</option>
                  <option value="Publisher">Publisher</option>
                </select>
              </div>
              {/* Firstname */}
              <div className="pt-3 pb-3">
                <p className="text-left ml-5">First Name</p>

                <input
                  className="my-2"
                  type="fname"
                  name="fname"
                  id="fname"
                  class="form-control"
                  data-rule-required="true"
                  value=""
                  autofocus="autofocus"
                />
              </div>
              {/* LastName */}
              <div className="pt-3 pb-3">
                <p className="text-left ml-5">Last Name</p>
                <input
                  className="my-2"
                  type="lname"
                  name="lname"
                  id="lname"
                  class="form-control"
                  data-rule-required="true"
                  value=""
                  autofocus="autofocus"
                />
              </div>
              {/* email */}
              <div className="pt-3 pb-3">
                <p className="text-left ml-5">Email Address</p>
                <input
                  className="my-2"
                  type="email"
                  name="email"
                  id="email"
                  class="form-control"
                  data-rule-required="true"
                  value=""
                  autofocus="autofocus"
                />
              </div>
              {/* Username */}
              <div className="pt-3 pb-3">
                <p className="text-left ml-5">User Name</p>
                <input
                  className="my-2"
                  type="uname"
                  name="uname"
                  id="uname"
                  class="form-control"
                  data-rule-required="true"
                  value=""
                  autofocus="autofocus"
                />
              </div>
              {/* Password */}
              <div className="pt-3 pb-3">
                <p className="text-left ml-5">Password</p>
                <input
                  className=""
                  type="password"
                  name="upassword"
                  id="upassword"
                  class="form-control"
                  data-rule-required="true"
                  value=""
                  autofocus="autofocus"
                />
              </div>
              {/* Confirm Password */}
              <div className="pt-3 pb-3">
                <p className="text-left ml-5">Confirm Password</p>
                <input
                  className=""
                  type="confirmpassword"
                  name="comfirmpassword"
                  id="confirmpassword"
                  class="form-control"
                  data-rule-required="true"
                  value=""
                  autofocus="autofocus"
                />
              </div>
              {/* Skype */}
              <div className="pt-3 pb-3">
                <p className="text-left ml-5">Skype or other ID</p>
                <input
                  className="my-2"
                  type="skype"
                  name="skype"
                  id="skype"
                  class="form-control"
                  data-rule-required="true"
                  value=""
                  autofocus="autofocus"
                />
              </div>
              <div>
                <div>
                  <button className="text-primary underline text-xs text-right">
                  <Link to="/forgetPassword" >Forgot Password?</Link>
                  </button>
                </div>
                <button className="text-white bg-primary uppercase my-5 px-6 py-2 rounded">
                  Submit
                </button>
              </div>
              <div>
                <button className="text-primary text-xs my-2 px-6 py-2 rounded">
                  <Link to="/" >Already have an account? <span className="underline">Sign in</span></Link>
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RegisterPage;

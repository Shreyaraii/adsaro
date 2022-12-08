import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const LoginPage = () => {
  return (

    <div className="login_page">
      <div className="bg-overlay bg-background">
        <div className="login_box pt-16 mb-16">
          
          <div className="login_form  bg-white mx-auto text-slate-700 rounded-2xl border-primary shadow-md">
            <p className="text-xl mb-2 pt-4 font-main">Login</p>
            <hr  className="mx-4"/>
            <form className="pt-4" action="">
              {/* Username */}
              <div className="pt-2 pb-3">
                <p className="text-left ml-5">Username</p>
                <input
                  type="email"
                  name="uemail"
                  id="uemail "
                  class="form-control bg-background"
                  data-rule-required="true"
                  value=""
                  autofocus="autofocus"
                />
              </div>

              {/* Password */}
              <div className="py-3">
              <p className="text-left ml-5">Password</p>
                <input
                  className=""
                  type="password"
                  name="upassword"
                  id="upassword"
                  class="form-control bg-background"
                  data-rule-required="true"
                  value=""
                  autofocus="autofocus"
                />
              </div>

              <div>
                <button className="text-primary underline text-xs text-right">
                <Link to="/forgetPassword" >Forgot Password?</Link>
                </button>
              </div>
              {/* Login Buttton */}
              <div>
                <button className="text-white bg-primary uppercase my-5 px-6 py-2 rounded">
                  Sign in
                </button>
              </div>

              {/* register button */}
              <div>
                <button className="text-primary text-xs my-2 px-6 py-2 rounded">
                  <Link to="/register" >Don't have an account? <span className="underline">Register</span> </Link> 
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

export default LoginPage;

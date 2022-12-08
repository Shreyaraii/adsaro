import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
    return ( 
        <div className="forgetPassword_page ">
        <div className="bg-overlay bg-background">
          <div className="forgetPassword_box pt-40 mb-16">
            
            <div className="forgetPassword_form  bg-white mx-auto text-slate-700 rounded-2xl border-primary shadow-md">
              <p className="text-xl mb-2 pt-4 font-main">Forgot Password</p>
              <hr  className="mx-4"/>
              <form className="pt-4" action="">
                {/* Email*/}
                <div className="pt-2 pb-3">
                  <p className="text-left ml-5 mb-2">Enter Email Address</p>
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
  

                {/* forgetPassword Buttton */}
                <div>
                  <button className="text-white bg-primary uppercase my-5 px-6 py-2 rounded">
                    Submit
                  </button>
                </div>
{/* 
                <div>
                <button className="text-primary text-xs my-2 px-6 py-2">
                  <Link to="/" ><span className="underline mx-3">Sign in</span></Link>
                  <Link to="/register" ><span className="underline mx-3">Register</span></Link>
                </button>
              </div> */}
  
                
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </div>
     );
}
 
export default ForgetPassword;
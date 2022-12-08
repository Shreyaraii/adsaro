import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const LoginPage = () => {
  return (

    <div className="login_page">
      <div className="bg-overlay">
      <Sidebar/>

        <Navbar />
        
        <div className="login_box mt-8 mb-16">
          
          <div className="login_form  bg-white mx-auto text-slate-700 rounded-2xl border-primary">
            <p className="text-xl mb-2 pt-4 font-main">Login</p>
            <hr  className="mx-4"/>
            <form className="pt-4" action="">
              {/* Username */}
              <div className="pt-2 pb-3">
                <p className="text-left ml-5">Username</p>
                <input
                  type="email"
                  name="uemail"
                  id="uemail"
                  class="form-control"
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
                  class="form-control"
                  data-rule-required="true"
                  value=""
                  autofocus="autofocus"
                />
              </div>

              {/* Login Buttton */}
              <div>
                <button className="text-white bg-primary uppercase my-5 px-6 py-2 rounded">
                  Sign me in
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

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import logo from "../img/logo.png";

const LoginPage = () => {
    return ( 
        <div className="login_page">
            <div className="bg-overlay">
                <Navbar />

                {/* Login form */}
                <div className="login_box mt-10 mb-16">
        <div className="login-logo  text-white mx-auto rounded items-center py-10 ">
            <div className="logo-name  flex place-content-center pb-3">
                <img className="w-8" src={logo} alt="" />
                <p className="font-extrabold mx-2">Adsaro</p>
            </div>
        </div>
        <div className="login_form  bg-white mx-auto text-slate-700 rounded">  
        < form className="pt-24" action="">

            {/* Username */}
                    < div className="pt-8 pb-3 flex ml-4">
                    <span class="material-icons mx-2">
                    person
                    </span>
                        <input className="my-2" type="email" name="uemail" id="uemail" placeholder="User name" class="form-control" data-rule-required="true" value="" autofocus="autofocus" />      
                    </div>
                    

                    {/* Password */}
                    <div className="py-3 flex ml-4">
                        
                    <span class="material-icons mx-2">
                        lock
                        </span>
                    <input className="" type="password" name="upassword" id="upassword" placeholder="Password" class="form-control" data-rule-required="true" value="" autofocus="autofocus" />  
                    </div>
                      
                      {/* Login Buttton */}
                    <div>
                    <button className="text-pink-600 uppercase my-5">Sign me in</button>   
                    </div>
                    </form>
        </div>
        </div>
               <Footer />
            </div>
               
        </div>
     );
}
 
export default LoginPage;
import logo from "../img/logo.png";

const SignupBox = () => {
    return ( 
        <div className="signup_box my-5">
        <div className="signup-logo text-white mx-auto rounded items-center py-10 ">
            <div className="logo-name  flex place-content-center pb-3">
                <img className="w-8" src={logo} alt="" />
                <p className="font-extrabold mx-2">Adsaro</p>
            </div>
            <p className="uppercase">Sign up</p>
        </div>
        <div className="signup_form h-80 w-96 bg-white mx-auto text-slate-500 rounded">  
        < form className="pt-24" action="">
                    <div className="pt-8 pb-3">
                    <span class="material-icons mx-2">
                    supervisor_account
                    </span>
                    {/* <input className="my-2" type="email" name="uemail" id="uemail" placeholder="User name" class="form-control" data-rule-required="true" value="" autofocus="autofocus" />   */}
                    <select id="account">
                    <option value="" selected disabled>Please select your account type</option>
                    <option value="Advertiser">Advertiser</option>
                    <option value="Publisher">Publisher</option>
                    </select>
      
                    </div>

                    <div className="py-3">
                    <span class="material-icons mx-2">
                    account_circle
                    </span>
                    <input className="my-2" type="fname" name="fname" id="fname" placeholder="Enter your first name" class="form-control" data-rule-required="true" value="" autofocus="autofocus" />        
                    </div>

                    <div className="py-3">
                    <span class="material-icons mx-2">
                    supervised_user_circle
                    </span>
                    <input className="my-2" type="lname" name="lname" id="lname" placeholder="Enter your last name" class="form-control" data-rule-required="true" value="" autofocus="autofocus" />        
                    </div>

                    <div className="py-3">
                    <span class="material-icons mx-2">
                    email
                    </span>
                    <input className="my-2" type="email" name="email" id="email" placeholder="Email address" class="form-control" data-rule-required="true" value="" autofocus="autofocus" />        
                    </div>

                    <div className="py-3">
                    <span class="material-icons mx-2">
                    person
                    </span>
                    <input className="my-2" type="uname" name="uname" id="uname" placeholder="Enter your User name for Login" class="form-control" data-rule-required="true" value="" autofocus="autofocus" />        
                    </div>
                    
                    <div className="py-3">
                    <span class="material-icons mx-2">
                    lock
                    </span>
                    <input className="" type="password" name="upassword" id="upassword" placeholder="Password" class="form-control" data-rule-required="true" value="" autofocus="autofocus" />  
                    </div>

                    <div className="py-3">
                    <span class="material-icons mx-2">
                    lock_reset
                    </span>
                    <input className="" type="confirmpassword" name="comfirmpassword" id="confirmpassword" placeholder="Password" class="form-control" data-rule-required="true" value="" autofocus="autofocus" />  
                    </div>
                    
                    <div className="py-3">
                    <span class="material-icons mx-2">
                    language
                    </span>
                    <input className="my-2" type="skype" name="skype" id="skype" placeholder="Skype or Other IM" class="form-control" data-rule-required="true" value="" autofocus="autofocus" />        
                    </div>
                    <div>
                    <button className="text-pink-600 uppercase my-5">Submit</button>   
                    </div>
                    </form>
        </div>
        </div>
     );
}
 
export default SignupBox;
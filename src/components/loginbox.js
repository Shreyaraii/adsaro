import logo from "../img/logo.png";
const LoginBox = () => {
    return ( 
        <div className="login_box my-5">
        <div className="login-logo  text-white mx-auto rounded items-center py-10 ">
            <div className="logo-name  flex place-content-center pb-3">
                <img className="w-8" src={logo} alt="" />
                <p className="font-extrabold mx-2">Adsaro</p>
            </div>
        </div>
        <div className="login_form  bg-white mx-auto text-slate-500 rounded">  
        < form className="pt-24" action="">
                    <div className="pt-8 pb-3">
                    <span class="material-icons mx-2">
                    person
                    </span>
                    <input className="my-2" type="email" name="uemail" id="uemail" placeholder="User name" class="form-control" data-rule-required="true" value="" autofocus="autofocus" />        
                    </div>
                    
                    <div className="py-3">
                    <span class="material-icons mx-2">
                    lock
                    </span>
                    <input className="" type="password" name="upassword" id="upassword" placeholder="Password" class="form-control" data-rule-required="true" value="" autofocus="autofocus" />  
                    </div>
                      
                    <div>
                    <button className="text-pink-600 uppercase my-5">Sign me in</button>   
                    </div>
                    </form>
        </div>
        </div>
        
     );
}
 
export default LoginBox;
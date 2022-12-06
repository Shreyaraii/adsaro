import Footer from "./components/footer";
import LoginBox from "./components/loginbox";
import Navbar from "./components/navbar";


const LoginPage = () => {
    return ( 
        <div className="login_page">
            <div className="bg-overlay">
                <Navbar />
               <LoginBox />
               <Footer />
            </div>
               
        </div>
     );
}
 
export default LoginPage;
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import SignupBox from "./components/signupbox";

const RegisterPage = () => {
    return ( 
        <div className="register_page">
            <div className="bg-overlay">
                <Navbar/>
                <SignupBox />
               <Footer />
            </div>
        </div>
     );
}
 
export default RegisterPage;
const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-nav flex mt-28 max-md:flex-cols">
                <div className="left-footer basis-2/3 ml-24">
                <ul className="uppercase text-white flex flex-wrap">
                    <li className="mx-4 px-2 py-3"><a href="">Home</a></li>
                    <li className="mx-4 px-2 py-3"><a href="">Contact</a></li>
                    <li className="mx-4 px-2 py-3"><a href="">Terms and Condition</a></li>
                    <li className="mx-4 px-2 py-3"><a href="">Privacy & cookies policy</a></li>
                </ul>
                </div>
                <div className="right-footer basis-1/3 place-content-end mx-4 px-2 py-3 text-slate-300">
                    <p>
            © Adsaro.net
            </p>
                </div>
                
            </div>
        </div>
     );
}
 
export default Footer;
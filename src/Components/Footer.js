import React from "react";
import Logo from "./Images/flight_black_24dp 3.png"
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <section className="footer-first">
        <div className="row w-100">
            <div className="footer-first-div1 col-lg-6 text-center">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <h3>Artic Travels</h3>
                <p>Book your trip in minutes, get full <br /> control for much longer.</p>
                <div class="social">
                    <FaFacebookF className="col-lg-4"/>
                    <FaInstagram className="col-lg-4"/>
                    <FaTwitter className="col-lg-4"/>
                </div>
            </div>

            <div className="footer-first-div2 text-center col-lg-6 pt-4">
                <div className="row">
                    <div id="div1" className="col-lg-4 col-sm-4">
                        <h4>COMPANY</h4>
                        <div className="pt-2">
                            <p>About</p>
                            <p> Careers</p>
                            <p>Mobile</p>
                        </div>
                        
                    </div>

                    <div id="div2" className="col-lg-4 col-sm-4">
                        <h4>CONTACT</h4>
                        <div className="pt-2">
                            <p>FAQ</p>
                            <p>Press</p>
                            <p>Affiliates</p>
                        </div>
                    
                    </div>

                    <div id="div3" className="col-lg-4 col-sm-4">
                        <h4>MORE</h4>
                        <div className="pt-2">
                            <p>Airlines</p>
                            <p> Airfees</p>
                            <p>Lowfare Tips</p>
                        </div> 
                    </div>
                </div>
                
            </div>
        </div>
      </section>

      <section className="footer-second pt-5 ">
        <div className="row w-100 text-center">
            <h5 className="col-lg-6">© 2022 Arctic Travels - All right reserved.</h5>
            <div className="footer-second-div1 col-lg-6 row">
                <p className="col-lg-6">Privacy Policy</p>
                <p  className="col-lg-6">Terms of Use</p>
            </div>
          </div>
         
      </section>
    </div>
  );
};

export default Footer;

import React from "react";
import {Button} from 'react-bootstrap'
import {Link} from "react-router-dom";
import '../App.css';





export const scrollToTop =()=> {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function Footer() {


    return (
        <div className="foot">
            <div className="column">
                <Link to="/jump_start" className="pages" onClick={()=>scrollToTop()}>
                    <img src="https://dgm.s3.us-east-2.amazonaws.com/battery.png" width="230" height="191" alt=""/>
                </Link>
                <Link to="/lock_out" className="pages" onClick={()=>scrollToTop()}>
                    <img src="https://dgm.s3.us-east-2.amazonaws.com/car-key.png" width="230" height="191" alt=""/>
                </Link>
                <Link to="/tire_service" className="pages" onClick={()=>scrollToTop()}>
                    <img src="https://dgm.s3.us-east-2.amazonaws.com/flat-tire.png" width="230" height="191" alt=""/>
                </Link>
                <Link to="/gas_delivery" className="pages" onClick={()=>scrollToTop()}>
                    <img src="https://dgm.s3.us-east-2.amazonaws.com/gasoline.png" width="230" height="191" alt=""/>
                </Link>
            </div>
            <div className="cont2">
                <h1 className="all-price">All Services 50$</h1>
            </div>

            <footer className="bg-dark pt-5">
                <div className="pt-5 bg-darker">
                    <div className="container text-md-center">

                        <div className="mb-4">
                            <img src="https://dgm.s3.us-east-2.amazonaws.com/visa.png" width="60" height="40" alt="" className=" mb-2"/>
                            <img src="https://dgm.s3.us-east-2.amazonaws.com/mastercard.svg" width="80" height="40" alt="" className=" mb-2"/>
                            <img src="https://dgm.s3.us-east-2.amazonaws.com/discover.svg" width="80" height="40" alt="" className=" mb-2"/>
                            <img src="https://dgm.s3.us-east-2.amazonaws.com/american-express.svg" width="80" height="40" alt="american" className=" mb-2"/>
                        </div>

                        <div>
                            <img src="https://dgm.s3.us-east-2.amazonaws.com/Logotip.png" width="380" height="220" alt="" className=" mb-2" />
                        </div>
                        <Link to="/booking">
                        <Button variant="danger" className="booking mb-4" onClick={()=>scrollToTop()}>BOOK NOW</Button>
                        </Link>

                        <div>
                            <a href="tel:312-966-5464" className="btn-danger btn button">312-966-5464   </a>
                        </div>

                        <hr className="hr-light pb-4 mb-3"/>

                        <div
                            className="pb-4 font-size-xs text-light opacity-50 text-center text-md-center">
                            © All rights reserved. Made by{" "}
                            <a
                                className="text-light"
                                href="https://skynet.org.kz"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SkyNet
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;



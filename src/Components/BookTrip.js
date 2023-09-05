import React from 'react';
import "./artic.css";
import { VscLocation, VscChevronDown } from "react-icons/vsc";
import { MdPersonOutline } from "react-icons/md";
import {AiOutlineCalendar} from "react-icons/ai";
import { IoIosAirplane } from "react-icons/io";
import Nike from "./Images/Group.png";
import ApplePay from "./Images/apple-pay-logo-svgrepo-com 1.png";
import Star from "./Images/silver-star-1-logo-svgrepo-com 1.png";
import Intrax from "./Images/intrax-logo-svgrepo-com 1.png";
import MasterCard from "./Images/mastercard-2-logo-svgrepo-com 1 (1).png";


function BookTrip() {
    return (
        <div className='booktrip-container'>
            <div className='booktrip-first-container px-5 py-4'>
                <div className="row">
                    <div className='col-lg-10 row'>
                        <section className=" col-lg justify-content-center text-center ">
                            <h3> <VscLocation id="icon-1" /> Location </h3> <br />
                            <p> Iceland <VscChevronDown id="icon-5" /></p>
                        </section>

                        <section className=" col-lg justify-content-center text-center ">
                            <h3> <MdPersonOutline id="icon-2" /> Persons </h3> <br />
                            <p> 4 Persons <VscChevronDown id="icon-5" /></p>
                        </section>

                        <section className=" col-lg justify-content-center text-center">
                            <h3> <AiOutlineCalendar id="icon-3" /> Check In </h3> <br />
                            <p> 12 January 2022 <VscChevronDown id="icon-5" /></p>
                        </section>

                        <section className=" col-lg justify-content-center text-center ">
                            <h3> <AiOutlineCalendar id="icon-4" /> Check Out</h3> <br />
                            <p> 18 January 2022 <VscChevronDown id="icon-5" /></p>
                        </section>
                    </div>

                   <div className='col-lg-2 text-center'>
                       <button className='py-3 w-100'>BooKTrip <IoIosAirplane /></button>
                   </div>
                   
                </div>
               
            </div>

            <div className='booktrip-second-container'>
                <img src={Nike} alt="" />
                <img src={ApplePay} alt="" />
                <img src={Star} alt="" />
                <img src={Intrax} alt="" />
                <img src={MasterCard} alt="" />
            </div>
        </div>
    );
}

export default BookTrip

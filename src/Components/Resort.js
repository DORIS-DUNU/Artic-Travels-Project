import React from "react";

const Resort = () => {
  return (
    <section className="resort-container">
      <h3>
        The best resorts to chill <br /> and relax
      </h3>
      <div className="resort-img-container row d-flex justify-content-around align-content-between">
        <div id="resort-img1" className="col-lg-6 col-sm-12 "></div>
        <div id="resort-img2"  className="col-lg-6 col-sm-12 ">
          <h4>Winter landscape Chalet</h4>
          <p>Cambodia</p>
          <button>Book Now</button>
        </div>
        <div id="resort-img3"  className="col-lg-6 col-sm-12 pt-5 "></div>
        <div id="resort-img4"  className="col-lg-6 col-sm-12 "></div>
      </div>
    </section>
  );
};

export default Resort;

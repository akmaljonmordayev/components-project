import React from "react";
import "./section1.css";
import img from "/public/bgimg.png";
import phones from "/public/phones.png";
function Section1() {
  return (
    <div>
      <section className="section1">
      <img src={img} alt="" />
      <h3>Food app</h3>
      <h1>Why stay hungry when 
      you can order form Bella Onojie</h1>
      <p className="p2">
      Download the bella onoje’s food app now on
      </p>
      <div className="button">
      <button>Play store</button>
      <button>App store</button>
      </div>
      </section>
      <div className="imges">
        <img src={phones} alt="" />
      </div>
    </div>
  );
}

export default Section1;

import React from "react";
  import "./section2.css";
import img from "/public/image.png";

function Section2() {
  return (
    <>
      <section>
      <div className="container">
        <div className="parent">
        <div className="kirish">
        <div className="div"></div>
        <h2 className="h2">How the app works</h2>
        </div>
        <div className="section-parents">
        <div className="section-left">
        <img src={img} alt="" />
        </div>
        <div className="section-right">
        <p className="text1">Create an account</p>
        <h2 className="text2">Create/login to an existing account to get started</h2>
        <p className="text3">An account is created with your email and a desired password</p>
        </div>
        </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default Section2;

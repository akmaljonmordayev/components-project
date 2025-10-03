import "./section3.css";
import image from "../../../assets/&.png";
function Section3() {
  return (
    <div className="box1">
      <img className="img" src={image} alt="" />
     <div className="box2">
       <h3 className="h3">Checkout</h3>
      <h1 className="h1">When you done check out and get it delivered.</h1>
      <p className="p">
        When you done check out and get it delivered with ease.
      </p>
     </div>
    </div>
  );
}

export default Section3;

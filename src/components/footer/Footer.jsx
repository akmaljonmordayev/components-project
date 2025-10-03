import "./footer.css";
import logo from "/public/logo.png"
import instagram from "/public/instagram.png"
import facebook from "/public/facebook.png"
import twitter from "/public/twitter.png"
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer">
            <img className="img" src={logo} alt="" />
            <div className="icon">
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
            </div>
            <p>Copywright 2020 Bella Onojie.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

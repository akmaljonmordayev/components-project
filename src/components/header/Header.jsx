import "./header.css"
import logo from "/public/logo.png"
function Header() {
  return (

    <>
      <div className="container">
        <header>

          <div class="logo">
            <img src={logo} alt="" />
          </div>
          <nav>
            <ul>
              <li><a href="#" class="active">Home</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Faq</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </header>
      </div >
    </>

  

  );
}

export default Header;

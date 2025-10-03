import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Section1 from "./components/main/section1/Section1";
import Section2 from "./components/main/section2/Section2";
import Section3 from "./components/main/section3/Section3";
import Section4 from "./components/main/section4/Section4";
import Section5 from "./components/main/section5/Section5";
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  return (
    <>
      <Header />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </main>
      <Footer />
    </>
  );
}

export default App;

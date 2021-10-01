import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Capabilities from "./components/Capabilities";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hire from "./components/Hire";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Portfolio />
      <Capabilities />
      <Testimonials />
      <Hire />
      <Footer />
    </div>
  );
}

export default App;

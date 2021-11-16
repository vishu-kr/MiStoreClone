import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";
import Slider from "./components/Slider.js";
import data from "./data/data.json";
import Offers from "./components/Offers.js";
import Heading from "./components/Heading.js";
import StarProduct from "./components/StarProduct.js";
// import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
// import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos.js";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";
import NavOptions from "./components/NavOptions.js";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />

      {/* <NavOptions
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home}
        audio={data.audio}
        accessories={data.accessories}
      /> */}

      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCT" />
      <StarProduct starProduct={data.starProduct} />

      <Heading text="PRODUCT REVIEWS" />

      <ProductReviews productReviews={data.productReviews} />

      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />

      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;

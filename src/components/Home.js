import Contact from "./Contact";
import Details from "./Details";
import Faq from "./Faq";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Lessons from "./Lessons";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Lessons />
      <Details />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

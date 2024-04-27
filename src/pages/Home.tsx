import Header from "../components/static/Header";
import Hero from "../components/Hero";
import Ranking from "../components/Ranking";
import CardData from "../components/CardData";
import Plans from "../components/Plans";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import Footer from "../components/static/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Ranking />
      <CardData />
      <Plans />
      <Testimonial />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;

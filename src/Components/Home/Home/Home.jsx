import useTitle from "../../../Hooks/Titile";
import Info from "../../Info/Info";
import ToyTabs from "../../ToysTabs/ToyTabs";
import Banner from "../Banner";
import BestSell from "../BestSell/BestSell";
import Gallery from "../Gallery/Gallery";
import Slider from "../Slider/Slider";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <div className="mt-20">
        <ToyTabs></ToyTabs>
      </div>

      <div>
        <BestSell></BestSell>
      </div>
      <div className="mb-10 w-1/2 ml-28  lg:ml-64 ">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Home;

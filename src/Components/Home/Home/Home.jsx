import useTitle from "../../../Hooks/Titile";
import Info from "../../Info/Info";
import ToyTabs from "../../ToysTabs/ToyTabs";
import Banner from "../Banner";
import BestSell from "../BestSell/BestSell";
import Gallery from "../Gallery/Gallery";

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
    </div>
  );
};

export default Home;

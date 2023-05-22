import Info from "../../Info/Info";
import ToyTabs from "../../ToysTabs/ToyTabs";
import Banner from "../Banner";
import BestSell from "../BestSell/BestSell";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <div className="mt-20">
        <ToyTabs></ToyTabs>
      </div>
      <div>
        <Info></Info>
      </div>
      <div>
        <BestSell></BestSell>
      </div>
    </div>
  );
};

export default Home;

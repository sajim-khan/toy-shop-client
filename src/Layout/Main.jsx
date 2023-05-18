import { Outlet } from "react-router-dom";
import Footer from "../Components/SharedComponents/Footer/Footer";
import Header from "../Components/SharedComponents/Header/Header";


const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

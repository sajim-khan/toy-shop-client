import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { userContext } from "../../AuthProvider/AuthProvider";
import ToyDetails from "../ToyTabsDetails/ToyDetails";
const ToyTabs = () => {
  const [categories, setCategories] = useState([]);
  const [selectedToy, setSelectedToy] = useState(null);

  const { user } = useContext(userContext);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const openModal = (toy) => {
    setSelectedToy(toy);
  };

  //

  const closeModal = () => {
    setSelectedToy(null);
  };

  return (
    <div>
      <>
        <h1 className="text-4xl font-bold text-center my-10 text-cyan-600" data-aos="zoom-in">
          Shop By Category
        </h1>
        <Tabs>
          <TabList className="  rounded-lg w-1/2 mx-auto text-indigo-600 font-bold">
            {categories.map((category, index) => (
              <Tab key={index}>{category.CategoryName}</Tab>
            ))}
          </TabList>

          {categories.map((category, index) => (
            <TabPanel key={index}>
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="grid grid-cols-1 md:grid-cols-2 gap-4 w-11/12 mx-auto"
              >
                {category.toys.map((toy, subIndex) => (
                  <div
                    key={subIndex}
                    className=" p-4 shadow-md border  border-indigo-600"
                  >
                    <div>
                      <div className="lg:flex rounded-3xl">
                        {/* Image */}
                        <div className="lg:w-1/2 ">
                          <figure>
                            <img
                              src={toy.picture}
                              alt={toy.name}
                              className=" w-full h-72 mx-auto   p-4 "
                            />
                          </figure>
                        </div>

                        {/* Text */}
                        <div className="lg:w-1/2 p-6">
                          <div className="card-body">
                            <h3 className="text-lg font-bold">
                              Name : {toy.name}
                            </h3>
                            <div className=" items-center mb-2">
                              <span className="text-yellow-500 ">
                                {toy.rating} <i className="fas fa-star"></i>
                              </span>
                              <span className="text-gray-600">
                                ({toy.rating})
                              </span>
                            </div>

                            <p className="text-gray-600 ">
                              {" "}
                              Price : ${toy.price}
                            </p>

                            <button
                              onClick={() => openModal(toy)}
                              className="bg-indigo-500 btn-sm  text-white   rounded"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </>

      <div>
        {selectedToy && (
          <div className="fixed inset-0  flex items-center justify-center">
            <ToyDetails toy={selectedToy} closeModal={closeModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ToyTabs;

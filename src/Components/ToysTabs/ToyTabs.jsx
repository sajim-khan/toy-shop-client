import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ToyTabs = () => {
  //  const [data, setData]=useState([])
  //   useEffectt(()=>{
  //     fetch('')
  //     .then(res=>res.json())
  //     .then(data=>setData(data))
  //   },[])

  const data = [
    {
      name: "speed car",
    },
    {
      name: "super car",
    },
    {
      name: "Police car",
    },
    {
      name: "sports bike",
    },
  ];

  return (
    <div>
      <>
        <Tabs className="p-24 text-center">
          <TabList>
            {data?.map((viewData) => (
              <>
                <Tab key={viewData._id}>{viewData.name}</Tab>
              </>
            ))}
          </TabList>
          <TabPanel>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
                <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                  <div className="relative">
                    <img
                      className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                  </div>
                  <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                    <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                      Name:
                    </h5>
                    <p className="mb-5 text-gray-700">Ratings:</p>
                    <p className="mb-5 text-gray-700">Price:</p>
                  </div>
                </div>
                <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                  <div className="relative">
                    <img
                      className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                  </div>
                  <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                    <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                      Name:
                    </h5>
                    <p className="mb-5 text-gray-700">Ratings:</p>
                    <p className="mb-5 text-gray-700">Price:</p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
                <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                  <div className="relative">
                    <img
                      className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                  </div>
                  <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                    <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                      Name:
                    </h5>
                    <p className="mb-5 text-gray-700">Ratings:</p>
                    <p className="mb-5 text-gray-700">Price:</p>
                  </div>
                </div>
                <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                  <div className="relative">
                    <img
                      className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                  </div>
                  <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                    <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                      Name:
                    </h5>
                    <p className="mb-5 text-gray-700">Ratings:</p>
                    <p className="mb-5 text-gray-700">Price:</p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
                <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                  <div className="relative">
                    <img
                      className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                  </div>
                  <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                    <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                      Name:
                    </h5>
                    <p className="mb-5 text-gray-700">Ratings:</p>
                    <p className="mb-5 text-gray-700">Price:</p>
                  </div>
                </div>
                <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                  <div className="relative">
                    <img
                      className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                  </div>
                  <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                    <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                      Name:
                    </h5>
                    <p className="mb-5 text-gray-700">Ratings:</p>
                    <p className="mb-5 text-gray-700">Price:</p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
                <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                  <div className="relative">
                    <img
                      className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                  </div>
                  <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                    <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                      Name:
                    </h5>
                    <p className="mb-5 text-gray-700">Ratings:</p>
                    <p className="mb-5 text-gray-700">Price:</p>
                  </div>
                </div>
                <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                  <div className="relative">
                    <img
                      className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                      src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                  </div>
                  <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                    <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                      Name:
                    </h5>
                    <p className="mb-5 text-gray-700">Ratings:</p>
                    <p className="mb-5 text-gray-700">Price:</p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </>
    </div>
  );
};

export default ToyTabs;

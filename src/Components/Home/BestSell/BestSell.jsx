import React from "react";

const BestSell = () => {

  return (
    <div className="pb-16">
      <div className="bg-gray-100 flex flex-col justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-24 sm:pb-52">
        <div className="2xl:container 2xl:mx-auto flex flex-col justify-center items-center sm:pb-12 lg:pb-0 space-y-4 px-4 md:px-6 2xl:px-0">
          <div>
            <p className="text-3xl lg:text-4xl font-semibold leading-9 text-center text-gray-800">
              Best Selling Products
            </p>
          </div>
          <div>
            <p className="text-base leading-normal sm:leading-none text-center text-gray-600">
              Explore products that are bought most frequently by people
            </p>
          </div>
        </div>
      </div>
      <div className="-mt-16 sm:-mt-48 lg:-mt-32 xl:-mt-40 2xl:container 2xl:mx-auto flex justify-center items-center space-y-4 px-4 md:px-6 2xl:px-0 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-between gap-x-6 gap-y-5">
          <div className="flex flex-col justify-center items-start p-2 bg-white">
            <div className="relative">
              <img
                className="hidden lg:block w-48 h-44 "
                src="https://i5.walmartimages.ca/images/Large/570/452/6000198570452.jpg"
                alt="Jaguar"
              />
              <img
                className="lg:hidden w-48 h-44"
                src="https://i5.walmartimages.ca/images/Large/570/452/6000198570452.jpg"
                alt="Jaguar"
              />

              <div className="flex justify-between mt-4">
                <div>
                  <p className="text-lg font-medium leading-none text-gray-800">
                    Jaguar
                  </p>
                </div>
                <div>
                  <p className="text-lg leading-none text-right text-gray-600">
                    $12.45
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start p-2 bg-white">
            <div className="relative">
              <img
                className="lg:block hidden w-48 h-44"
                src="https://www.toyexpress.in/Admin/ItemImages/ae105976542945f7807b0a474ad56c58.jpg"
                alt="R15"
              />
              <img
                className="lg:hidden w-48 h-44"
                src="https://assetscdn1.paytm.com/images/catalog/product/K/KI/KIDOH-BABY-BABYOH-B185384B9649443/1597661389386_10.jpg?imwidth=320&impolicy=hq"
                alt="R15"
              />

              <div className="flex justify-between mt-4">
                <div>
                  <p className="text-lg font-medium leading-none text-gray-800">
                    R15
                  </p>
                </div>
                <div>
                  <p className="text-lg leading-none text-right text-gray-600">
                    $7.65
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start p-2 bg-white">
            <div className="relative">
              <img
                className="hidden lg:block w-48 h-44"
                src="https://images-cdn.ubuy.co.in/63c9c29b021a5430cf4f8c13-rastar-audi-rc-car-1-14-audi-r8.jpg"
                alt="Audi"
              />
              <img
                className="lg:hidden w-48 h-44"
                src="https://images-cdn.ubuy.co.in/63c9c29b021a5430cf4f8c13-rastar-audi-rc-car-1-14-audi-r8.jpg"
                alt="Audi"
              />

              <div className="flex justify-between mt-4">
                <div>
                  <p className="text-lg font-medium leading-none text-gray-800">
                    Audi
                  </p>
                </div>
                <div>
                  <p className="text-lg leading-none text-right text-gray-600">
                    $9.50
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start p-2 bg-white">
            <div className="relative">
              <img
                className="hidden lg:block w-48 h-44"
                src="https://m.media-amazon.com/images/I/71dZ0il0V+L._AC_SL1500_.jpg"
                alt="Police Car"
              />
              <img
                className="lg:hidden w-48 h-44"
                src="https://m.media-amazon.com/images/I/71dZ0il0V+L._AC_SL1500_.jpg"
                alt="Police Car"
              />

              <div className="flex justify-between mt-4">
                <div>
                  <p className="text-lg font-medium leading-none text-gray-800">
                    Police Car
                  </p>
                </div>
                <div>
                  <p className="text-lg leading-none text-right text-gray-600">
                    $7.50
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSell;



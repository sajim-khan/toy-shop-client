import React from "react";

const Slider = () => {
  return (
    <div>
      <h1
        className="text-4xl font-bold text-center mb-5 text-blue-700"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        Toy Slider
      </h1>
      <div className="carousel w-full h-96 items-center" data-aos="flip-right">
        <h1>Toy Slider</h1>
        <div
          id="slide1"
          className="carousel-item relative w-full"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img
            className="w-full h-96 "
            src="https://www.bdstall.com/asset/product-image/giant_182838.jpg"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images-cdn.ubuy.co.in/633ae8d50a6c736aea7b8dfa-ubuy-online-shopping.jpg"
            className="w-full h-80"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/products/438x531/10265112a.webp"
            className="w-full h-96"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

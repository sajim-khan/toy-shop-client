import logo from "../../../assets/TOY-MARKET-PIC.jpg";

const Gallery = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-5">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content ">
          <img src={logo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

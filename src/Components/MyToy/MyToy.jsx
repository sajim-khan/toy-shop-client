import img from "../../assets/TOY-MARKET-PIC.jpg";

const MyToy = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-5">
      <div className="card card-side bg-base-100 shadow-xl ">
        <figure>
          <img src={img} alt="Image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl ">
        <figure>
          <img src={img} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl ">
        <figure>
          <img src={img} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToy;

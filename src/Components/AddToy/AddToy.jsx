import { useContext } from "react";
import { userContext } from "../../AuthProvider/AuthProvider";

const AddToy = () => {


const { user } = useContext(userContext)

const handleBookService = (event) => {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value;
  const date = form.date.value;
  const email = user?.email;
  const booking = {
    customerName: name,
    email,
    img,
    date,
    service: title,
    service_id: _id,
    price: price,
  };

  console.log(booking);

  fetch("https://car-doctor-server-smoky.vercel.app/bookings", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(booking),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.insertedId) {
        alert("service book successfully");
      }
    });
};

  return (
    <div className="p-32">
      <h1 className="text-center mb-10 text-4xl font-bold">Add a Toy</h1>
      <form onSubmit={handleBookService}>
        {/* first row */}
        <div className="flex gap-7 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* 2nd row */}
        <div className="flex gap-7 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Sub-Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="sub-category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* 3rd row */}
        <div className="flex gap-7 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="available"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* 4th row */}
        <div className="flex gap-7 mb-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Toy"
          className="btn btn-block btn-primary"
        />
      </form>
    </div>
  );
};

export default AddToy;

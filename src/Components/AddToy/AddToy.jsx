import { useContext } from "react";
import { userContext } from "../../AuthProvider/AuthProvider";

import useTitle from "../../Hooks/Titile";

const AddToy = () => {
  const { user } = useContext(userContext);
  useTitle("Add toy");

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const seller_name = form.seller_name.value;
    const category = form.category.value;
    const sub_category = form.sub_category.value;
    const available = form.available.value;
    const ratings = form.ratings.value;
    const details = form.details.value;
    const email = user?.email;

    const photo = form.photo.value;
    const addToy = {
      customerName: name,
      price,
      category,
      sub_category,
      available,
      email,
      details,
      photo,
      seller_name,
      ratings,
    };

    console.log(addToy);

    fetch("https://toy-marketplace-server-five.vercel.app/addtoys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Add a toy successfully");
        }
      });
  };

  return (
    <div className="p-32">
      <h1 className="text-center mb-10 text-4xl font-bold">Add a Toy</h1>
      <form onSubmit={handleAddToy}>
        {/* first row */}
        <div className="flex gap-7 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Toy Name</span>
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
                name="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* seller email */}
        <div className="flex gap-7 mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="seller name"
                name="seller_name"
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
                name="category"
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
                name="sub_category"
                placeholder="sub_category"
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
                name="available"
                placeholder="available"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Ratings</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="ratings"
                placeholder="ratings"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="flex gap-7 mb-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="photo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* ratings */}
        <div className="flex gap-7 mb-4">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* 4th row */}

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

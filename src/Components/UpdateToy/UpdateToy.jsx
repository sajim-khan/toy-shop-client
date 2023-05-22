import { useContext } from "react";
import { userContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../Hooks/Titile";

const UpdateToy = () => {
useTitle("Update toy");

  const { user } = useContext(userContext);

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const category = form.category.value;
    const sub_category = form.sub_category.value;
    const available = form.available.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateToy = {
      customerName: name,
      price,
      category,
      sub_category,
      available,
      details,
      photo,
    };

    console.log(updateToy);

    fetch("https://car-doctor-server-smoky.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Update a toy successfully");
        }
      });
  };

  return (
    <div className="p-32">
      <h1 className="text-center mb-10 text-4xl font-bold">Update a Toy</h1>
      <form onSubmit={handleUpdateToy}>
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
                name="price"
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
        <input
          type="submit"
          value="Add Toy"
          className="btn btn-block btn-primary"
        />
      </form>
    </div>
  );
};

export default UpdateToy;


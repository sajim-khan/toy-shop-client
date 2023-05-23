import { useParams } from "react-router-dom";
import useTitle from "../../Hooks/Titile";
import { useEffect, useState } from "react";

const UpdateToy = () => {
  useTitle("Update toy");

  const { id } = useParams();
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/updateData/?_id=${id}`)
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const price = form.price.value;
    const available = form.available.value;
    const details = form.details.value;
    const updateToy = {
      price,
      available,
      details,
    };

    console.log(updateToy);

    // Perform the update request using fetch or any other library
    // Replace the URL and add necessary headers and options
    // fetch("https://car-doctor-server-smoky.vercel.app/bookings", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(updateToy),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       alert("Update a toy successfully");
    //     }
    //   });
  };

  return (
    <div className="p-32">
      <h1 className="text-center mb-10 text-4xl font-bold">Update a Toy</h1>

      {toys.map((toy) => (
        <form key={toy._id} onSubmit={handleUpdateToy}>
          {/* first row */}
          <div className="flex gap-7 mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="price"
                  name="price"
                  defaultValue={toy.price}
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
                  defaultValue={toy.available}
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
                  defaultValue={toy.details}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Toy"
            className="btn btn-block btn-primary"
          />
        </form>
      ))}
    </div>
  );
};

export default UpdateToy;

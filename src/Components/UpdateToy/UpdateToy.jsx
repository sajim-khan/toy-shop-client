import { useParams } from "react-router-dom";
import useTitle from "../../Hooks/Titile";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

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

  const handleUpdateToy = (event, id) => {
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

   fetch(`http://localhost:5000/addtoys/${id}`, {
     method: "PATCH",
     headers: {
       "content-type": "application/json",
     },
     body: JSON.stringify(toys),
   })
     .then((res) => res.json())
     .then((data) => {
       console.log(data);
       if (data.modifiedCount > 0) {
         Swal.fire({
           position: "top-end",
           icon: "success",
           title: "Your Toy has been Updated",
           showConfirmButton: false,
           timer: 1500,
         });
         // Update state
         const remaining = toys.filter((updateToy) => updateToy._id !== id);
         const updated = toys.find((updateToy) => updateToy._id === id);
         updated.status = "confirm";
         const newToys = [updated, ...remaining];
         setToys(newToys);
       }
     });
  };


  return (
    <div className="p-32">
      <h1 className="text-center mb-10 text-4xl font-bold">Update a Toy</h1>

      {toys.map((toy) => (
        <form key={toy._id} onSubmit={() => handleUpdateToy(toy._id)}>
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

import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/Titile";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../../AuthProvider/AuthProvider";

const MyToy = () => {
  useTitle("My toy");
  const [mytoys, setMyToys] = useState([]);
  const { user } = useContext(userContext);

  console.log(mytoys);

  useEffect(() => {
    fetch(`http://localhost:5000/addtoys/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);

  const handleRemoveToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be delted this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addtoys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Toy Deleted Successfully!",
                "success"
              );
              const remaining = mytoys.filter((dt) => dt._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };


const handleUpdateToy =id => {

}

  return (
    <div>
      <h2 className="text-5xl mt-10 text-center">All toys:</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>
                {mytoys &&
                  mytoys.map((data, index) => (
                    <>
                      <tr>
                        <th>{index + 1}</th>
                        <th>
                          <img
                            className="w-16 h-16 rounded-full"
                            src={data.image}
                            alt=""
                          />
                        </th>
                        <th>{data.toyName}</th>
                        <th>{data.sellerEmail}</th>
                        <th>{data.category}</th>
                        <th>${data.price}</th>
                        <th>{data.quantity}</th>
                        <th>{data.rating}</th>
                        <th>
                          <label
                            onClick={handleUpdateToy(data._id)}
                            htmlFor="my-modal-6"
                            className="py-1 px-5 rounded-full bg-[#024E92] text-white cursor-pointer"
                          >
                            Update
                          </label>
                        </th>
                        <th>
                          <button
                            onClick={handleRemoveToy(data._id)}
                            className="py-1 px-5 text-white rounded-full bg-rose-600"
                          >
                            Delete
                          </button>
                        </th>
                      </tr>
                    </>
                  ))}{" "}
                Name
              </th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Ratings</th>
            </tr>
          </thead>
          <tbody>
            {mytoys &&
              mytoys.map((data, index) => (
                <>
                  <tr>
                    <th>{index + 1}</th>
                    <th>
                      <img
                        className="w-16 h-16 rounded-full"
                        src={data.image}
                        alt=""
                      />
                    </th>
                    <th>{data.customerName}</th>
                    <th>{data.email}</th>
                    <th>{data.category}</th>
                    <th>${data.price}</th>
                    <th>{data.available}</th>
                    <th>{data.ratings}</th>
                    <th>
                      <label
                        onClick={() => handleUpdateData(data._id)}
                        htmlFor="my-modal-6"
                        className="py-1 px-5 rounded-full bg-[#024E92] text-white cursor-pointer"
                      >
                        Update
                      </label>
                    </th>
                    <th>
                      <button
                        onClick={() => handleRemoveToy(data._id)}
                        className="py-1 px-5 text-white rounded-full bg-rose-600"
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;

// customerName: name,
// price,
// category,
// sub_category,
// available,
// email,
// details,
// photo,
// seller_name,
// ratings,

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
    fetch(
      `https://toy-marketplace-server-five.vercel.app/addtoys/email/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);

  const handleRemoveToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-marketplace-server-five.vercel.app/addtoys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Toy Deleted Successfully!", "success");
              const remaining = mytoys.filter((dt) => dt._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-5xl mt-10 text-center mb-10">My toys</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Ratings</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mytoys &&
              mytoys.map((data, index) => (
                <tr key={data._id}>
                  <td>
                    <img
                      className="w-16 h-16 rounded-full"
                      src={data.photo}
                      alt=""
                    />
                  </td>
                  <td>{data.customerName}</td>
                  <td>{data.seller_name}</td>
                  <td>{data.email}</td>
                  <td>{data.available}</td>
                  <td>${data.price}</td>
                  <td>{data.ratings}</td>
                  <td>
                    <Link
                      to={`/update/${data._id}`}
                      // onClick={() => handleUpdateToy(data._id)}
                      htmlFor="my-modal-6"
                      className="py-1 px-5 rounded-full bg-[#024E92] text-white cursor-pointer"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleRemoveToy(data._id)}
                      className="py-1 px-5 text-white rounded-full bg-rose-600 ml-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;

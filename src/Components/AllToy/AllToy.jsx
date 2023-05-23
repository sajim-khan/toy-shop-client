import { useEffect, useState } from "react";
import useTitle from "../../Hooks/Titile";
import { Link } from "react-router-dom";
import ToyDetails from "../ToyDetails/ToyDetails";

const AllToy = () => {
  useTitle("All Toy");
  const [addtoys, setToys] = useState([]);
  const [selectedToy, setSelectedToy] = useState(null);

  console.log(addtoys);
  useEffect(() => {
    fetch("http://localhost:5000/addtoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const openModal = (toy) => {
    setSelectedToy(toy);
  };

  const closeModal = () => {
    setSelectedToy(null);
  };

  return (
    <div>
      <h2 className="text-5xl mt-10 text-center">All toys:</h2>
      <div className=" px-20 py-10 overflow-x-auto w-full">
        <table className="table w-full p-20">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">Image</th>
              <th className="text-center">Seller Name</th>
              <th className="text-center">Sub-Category</th>
              <th className="text-center">Price</th>
              <th className="text-center">Available</th>
              <th className="text-center">Details</th>
              <th></th>
            </tr>
          </thead>
          {addtoys.map((toy) => (
            <tbody toy={toy}>
              <td className="w-20">
                <img src={toy.photo} alt="" />
              </td>
              <td className="text-center">sajim</td>
              <td>{toy.customerName}</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                {" "}
                <button onClick={() => openModal(toy)}>
                  View Details{" "}
                </button>{" "}
              </td>
            </tbody>
          ))}
        </table>
      </div>
      {selectedToy && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <ToyDetails toy={selectedToy} closeModal={closeModal} />
        </div>
      )}
    </div>
  );
};

export default AllToy;

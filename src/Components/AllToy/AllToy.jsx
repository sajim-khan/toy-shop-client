import { useEffect, useState } from "react";
import useTitle from "../../Hooks/Titile";
import { Link } from "react-router-dom";
import SingleToyDetails from "../Home/SingleToyDetails/SingleToyDetails";

const AllToy = () => {
  useTitle("All Toy");
  const [addtoys, setToys] = useState([]);
  const [selectedToy, setSelectedToy] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(addtoys);
  useEffect(() => {
    fetch("https://toy-marketplace-server-five.vercel.app/addtoys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const openModal = (toy) => {
    setSelectedToy(toy);
  };

  const closeModal = () => {
    setSelectedToy(null);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredToys = addtoys.filter((toy) =>
    toy.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-4 flex justify-end">
        <input
          type="text"
          placeholder="Search by toy name"
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-300 rounded-md w-64"
        />
        <button
          className="ml-2 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
          onClick={() => setSearchTerm("")}
        >
          Clear
        </button>
      </div>
      <h2 className="text-5xl mt-10 text-center">All toys:</h2>
      <div className=" px-20 py-10 overflow-x-auto w-full">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center">Image</th>
              <th className="text-center">Seller Name</th>
              <th className="text-center">Sub-Category</th>
              <th className="text-center">Price</th>
              <th className="text-center">Available</th>
              <th className="text-end">Details</th>
              <th></th>
            </tr>
          </thead>
          {filteredToys.map((toy) => (
            <tbody toy={toy}>
              <td className="w-20">
                <img src={toy.photo} alt="" />
              </td>
              <td className="text-center">sajim</td>
              <td className="text-center">{toy.customerName}</td>
              <td className="text-center">{toy.price}</td>
              <td className="text-center">{toy.available}</td>
              <td className="text-center"></td>
              <td>
                <button onClick={() => openModal(toy)}>View Details</button>
              </td>
            </tbody>
          ))}
        </table>
        {selectedToy && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
            <SingleToyDetails toy={selectedToy} closeModal={closeModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllToy;

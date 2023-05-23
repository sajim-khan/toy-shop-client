import { useEffect, useState } from "react";
import useTitle from "../../Hooks/Titile";
import { Link } from "react-router-dom";

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
                <Link to={`/details/${toy._id}`}>
                  <button onClick={() => openModal(toy)}>View Details</button>
                </Link>
              </td>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllToy;

import useTitle from "../../Hooks/Titile";

const AllToy = () => {
useTitle("All Toy");
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
            <tbody>
              <td className="w-20">
                <img
                  src="https://www.toyexpress.in/Admin/ItemImages/ae105976542945f7807b0a474ad56c58.jpg"
                  alt=""
                />
              </td>
              <td className="text-center">sajim</td>
              <td>Audi</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllToy;
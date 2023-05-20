
const AllToy = () => {
    return (
      <div>
        <h2 className="text-5xl mb-5 text-center">
          All toys: 
        </h2>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="text-end pr-28 text-2xl">Name</th>
                <th className="text-center text-2xl">Sub-Category</th>
                <th className="text-center text-2xl">Price</th>
                <th className="text-center text-2xl">Available</th>
                <th className="text-center text-2xl">Details</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllToy;
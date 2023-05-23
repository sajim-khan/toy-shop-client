import { Link } from "react-router-dom";
import useTitle from "../../Hooks/Titile";
import img from "../../assets/TOY-MARKET-PIC.jpg";
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-5">
      {mytoys.map((toy) => (
        <div
          toy={toy}
          key={toy._id}
          className="card card-side bg-base-100 shadow-xl "
        >
          <figure>
            <img src={toy.photo} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <Link to="/update"> Update </Link>
              </button>
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyToy;

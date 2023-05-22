import { Link } from "react-router-dom";
import logo from '../../../assets/font-design-word-toy-shop-with-many-toys_1308-42318.avif'
import { useContext } from "react";
import { userContext } from "../../../AuthProvider/AuthProvider";

const Header = () => {

 const { user, logOut } = useContext(userContext);

 const handleLogOut = () => {
   logOut()
     .then(() => {})
     .catch((error) => console.log(error));
 };


  return (
    <div className="navbar bg-base-200 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/alltoy">All Toys</Link>
            </li>
            <li>
              <Link to="/update">Update a Toy</Link>
            </li>

            <li>
              <Link to="/blog">Blogs</Link>
            </li>
            {user?.email ? (
              <>
                <li>
                  <Link to="/mytoy">My Toys</Link>
                </li>
                <li>
                  <Link to="/addtoy">Add a Toys</Link>
                </li>
                <li>
                  <Link to="/update">Update a Toy</Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>Log out</button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>{" "}
              </li>
            )}
          </ul>
        </div>
        <Link to="/">
          <img className="w-36 h-16 rounded-2xl" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal font-bold ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/alltoy">All Toys</Link>
          </li>

          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          {user?.email ? (
            <>
              <li>
                <Link to="/mytoy">My Toys</Link>
              </li>
              <li>
                <Link to="/addtoy">Add a Toys</Link>
              </li>
              <li>
                <Link to="/update">Update a Toy</Link>
              </li>
              <li>
                <button onClick={handleLogOut}>Log out</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>{" "}
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default Header;

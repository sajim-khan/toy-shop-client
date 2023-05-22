import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { userContext } from "../AuthProvider/AuthProvider";

const PrivetRouter = ({ children }) => {
  const { user, loading } = useContext(userContext);
  const location = useLocation();

  if (loading) {
    return (
      <>
        <progress className="progress w-96"></progress>
      </>
    );
  }

  if (user) {
    return children;
  }

  return (
    <Navigate to="/login" state={{ form: location }} replace>
      {" "}
    </Navigate>
  );
};

export default PrivetRouter;

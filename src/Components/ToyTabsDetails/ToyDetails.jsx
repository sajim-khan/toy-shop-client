import React from "react";

const ToyDetails = ({ toy, closeModal }) => {
  const {
    description,
    email,
    name,
    pictureUrl,
    price,
    quantity,
    rating,
    sellerName,
    subCategorym,
  } = toy;
  return (
    <div className="bg-indigo-600">
      <img className="1/2" src={pictureUrl} alt="" />
      <h1> Name {name} </h1>

      <button
        onClick={closeModal}
        type="button"
        class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
      >
        Close
      </button>
    </div>
  );
};

export default ToyDetails;

import React from "react";

const Card = (props) => {
  console.log("props", props);
  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-gray-600 font-bold">Here {props.title}</h2>
        <p className="text-gray-600">in p{props.description}</p>
      </div>
    </>
  );
};

export default Card;

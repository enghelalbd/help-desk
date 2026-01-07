// Card.jsx
import React from "react";

const Card = ({ issue }) => {
  return (
    <div className="shadow-md rounded-md cursor-pointer p-4 my-4">
      <div>
        <img
          src={issue.userImg}
          alt={issue.requestedBy}
          className="h-[40px] w-[40px] rounded-full object-cover"
        />
      </div>

      <div className="flex justify-between items-center mt-2">
        <h2 className="font-bold text-2xl">{issue.subject}</h2>

        <p className="font-semibold py-1 px-2 shadow rounded-md">
          {issue.priority}
        </p>

        <p className="text-slate-500 mx-4">Status: {issue.status}</p>
      </div>

      <p className="text-xl text-slate-700 mt-3">{issue.description}</p>
    </div>
  );
};

export default Card;

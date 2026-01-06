import React, { use } from "react";
import Toggel_btn from "./Toggel_btn";
import Container from "./Container";
import { useState } from "react";
import CountBox from "./CountBox";

const IssuesManagement = ({ fetchPromise }) => {
  const [togglestatus, setTogglestatus] = useState("all");
  const initialData = use(fetchPromise);
  console.log(initialData);

  return (
    <div>
      <CountBox></CountBox>

      <Toggel_btn
        togglestatus={togglestatus}
        setTogglestatus={setTogglestatus}
      />
      {/* Cards */}
      <Container>
        <div className="grid grid-cols-3 gap-3">
          {initialData.map((issue) => {
            return (
              <div
                className="shadow-md rounded-md cursor-pointer p-4 my-4"
                key={issue.ticketId}
              >
                <div>
                  {" "}
                  <img
                    src={issue.userImg}
                    alt="issue.requestedBy"
                    className="h-[30px] w-[50px] rounded-full"
                  />
                </div>
                <div className="flex justify-between">
                  <h2 className="font-bold text-3xl"> {issue.subject}</h2>
                  <span>{issue.priority} </span>
                  <span className="text-slate-500 mx-4">
                    {" "}
                    Status: {issue.status}
                  </span>
                </div>
                <br />
                <h2 className="text-3xl text-slate-700">
                  {" "}
                  {issue.description}
                </h2>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default IssuesManagement;

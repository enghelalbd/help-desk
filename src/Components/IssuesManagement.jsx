import React, { use } from "react";
import Toggel_btn from "./Toggel_btn";
import Container from "./Container";
import { useState } from "react";
import CountBox from "./CountBox";
import Card from "./Card";

const IssuesManagement = ({ fetchPromise }) => {
  const initialData = use(fetchPromise);
  const [data, setData] = useState(initialData);
  const [togglestatus, setTogglestatus] = useState("all");
  // console.log(togglestatus);
  const filteredData =
    togglestatus == "all"
      ? data
      : data.filter((element) => element.status == togglestatus);
  console.log(filteredData);

  return (
    <div>
      <CountBox data={data}></CountBox>

      <Toggel_btn
        togglestatus={togglestatus}
        setTogglestatus={setTogglestatus}
      />
      {/* Cards */}
      <Container>
        {/* {filteredData.length ==0 ? <h2>No issues found</h2>} */}
        {filteredData.length === 0 && <h2>No issues found</h2>}

        <div className="grid grid-cols-3 gap-3">
          {filteredData.map((issue) => (
            <Card
              key={issue.ticketId}
              issue={issue}
              data={data}
              setData={setData}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default IssuesManagement;

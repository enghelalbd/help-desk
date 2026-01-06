import React, { use } from "react";
import Toggel_btn from "./Toggel_btn";
import Container from "./Container";
import { useState } from "react";
import CountBox from "./CountBox";

const IssuesManagement = ({ fetchPromise }) => {
  const [togglestatus, setTogglestatus] = useState("all");
  const initialData = use(fetchPromise);

  return (
    <div>
      <CountBox></CountBox>

      {/* {initialData.map((issue)=>{return<h2> My issue</h2>;}} */}

      {initialData.map((helal) => {
        console.log(helal);
        return <h2 key={helal.id}>{helal.category}</h2>;
      })}
      <Toggel_btn
        togglestatus={togglestatus}
        setTogglestatus={setTogglestatus}
      />
    </div>
  );
};

export default IssuesManagement;

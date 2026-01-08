import React from "react";
import Container from "./Container";

const CountBox = ({ data }) => {
  // console.log(data);
  const pendingData = data.filter((element) => element.status == "Pending");
  const submitteddata = data.filter((element) => element.status == "Submitted");
  const revieweddata = data.filter((element) => element.status == "Reviewed");
  // console.log({ pendingData, submitteddata, revieweddata });
  return (
    <div>
      <Container>
        <div className="grid grid-cols-3 my-[80px] h-[250px] text-white">
          <div className="rounded-md  p-4 text-amber-3000 bg-purple-500 m-4 h-[150px] items-center justify-center flex flex-col">
            <h2 className="font-bold text-[35px]"> Pending </h2>
            <p className="font-semibold text-[22px]"> {pendingData.length}</p>
          </div>
          <div className="rounded-md  p-4 text-amber-3000 bg-red-500 m-4 h-[150px] justify-center items-center flex flex-col">
            <h2 className="font-bold text-[35px]"> Submitted </h2>
            <p className="font-semibold text-[22px]"> {submitteddata.length}</p>
          </div>
          <div className="rounded-md  p-4 text-amber-3000 bg-purple-500 m-4 h-[150px] justify-center items-center flex flex-col">
            <h2 className="font-bold text-[35px]">Reviewed </h2>
            <p className="font-semibold text-[22px]"> {revieweddata.length}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CountBox;

import React from "react";
import Container from "./Container";

const Toggel_btn = ({ togglestatus, setTogglestatus }) => {
  // console.log(togglestatus);
  return (
    <div>
      <Container>
        <div className="text-right gap-10 mb-5 text-amber-300">
          <button
            className={` toggle-button rounded-l-xl  ${
              togglestatus == "all" && "!bg-amber-500 text-white"
            }`}
            onClick={() => setTogglestatus("all")}
          >
            All
          </button>

          <button
            className={` toggle-button   ${
              togglestatus == "Pending" && "!bg-amber-500 text-white"
            }`}
            onClick={() => setTogglestatus("Pending")}
          >
            {" "}
            Pending{" "}
          </button>
          <button
            className={` toggle-button   ${
              togglestatus == "Submitted" && "!bg-amber-500 text-white"
            }`}
            onClick={() => setTogglestatus("Submitted")}
          >
            {" "}
            Submitted{" "}
          </button>
          <button
            className="toggle-button "
            onClick={() => setTogglestatus("Reviewed")}
          >
            {" "}
            Reviewed{" "}
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Toggel_btn;

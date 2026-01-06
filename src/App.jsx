import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Container from "./Components/Container";
import { useState } from "react";
import Toggel_btn from "./Components/Toggel_btn";

const App = () => {
  const [togglestatus, setTogglestatus] = useState("all");
  console.log(togglestatus);

  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-red-500">Main Section</h2>
      <Container>
        <div className="grid grid-cols-3 my-[80px] h-[250px] text-white">
          <div className="rounded-md  p-4 text-amber-3000 bg-purple-500 m-4 h-[150px] items-center justify-center flex flex-col">
            <h2 className="font-bold text-[35px]"> Pending </h2>
            <p className="font-semibold text-[22px]"> 0</p>
          </div>
          <div className="rounded-md  p-4 text-amber-3000 bg-red-500 m-4 h-[150px] justify-center items-center flex flex-col">
            <h2 className="font-bold text-[35px]"> Submitted </h2>
            <p className="font-semibold text-[22px]"> 0</p>
          </div>
          <div className="rounded-md  p-4 text-amber-3000 bg-purple-500 m-4 h-[150px] justify-center items-center flex flex-col">
            <h2 className="font-bold text-[35px]">Reviewed </h2>
            <p className="font-semibold text-[22px]"> 0</p>
          </div>
        </div>
      </Container>

      <Toggel_btn
        togglestatus={togglestatus}
        setTogglestatus={setTogglestatus}
      />

      {/* Toggle Button */}

      <Footer></Footer>
    </div>
  );
};

export default App;

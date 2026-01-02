import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Container from "./Components/Container";

const App = () => {
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

      {/* Toggle Button */}

      <Container>
        <div className="text-right gap-10 mb-5">
          <button className="bg-purple-100 text-red-500 px-5 py-1 mb-1 font-bold text-xl rounded-l-xl">
            {" "}
            All{" "}
          </button>
          <button className="bg-purple-100 text-red-500 px-5 py-1 mb-1 font-bold text-xl">
            {" "}
            Pending{" "}
          </button>
          <button className="bg-purple-100 text-red-500 px-5 py-1 mb-1 font-bold text-xl">
            {" "}
            Submitted{" "}
          </button>
          <button className="bg-purple-100 text-red-500 px-5 py-1 mb-1 font-bold text-xl rounded-r-xl">
            {" "}
            Reviewed{" "}
          </button>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default App;

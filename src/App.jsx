import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-red-500">Main Section</h2>

      <div className="grid grid-cols-3">
        <div
          className="rounded-md
 p-4 text-amber-3000 bg-purple-500 m-4 h-[150px]"
        >
          <h2 className="font-bold text-[35px]"> Pending </h2>
          <p className="font-semibold text-[22px]"> 0</p>
        </div>
        <div
          className="rounded-md
 p-4 text-amber-3000 bg-red-500 m-4 h-[150px]"
        >
          Hello from App component
        </div>
        <div
          className="rounded-md
 p-4 text-amber-3000 bg-purple-500 m-4 h-[150px]"
        >
          Hello from App component
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;

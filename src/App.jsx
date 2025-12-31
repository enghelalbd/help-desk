import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-red-500">Main Section</h2>
      <Footer></Footer>
    </div>
  );
};

export default App;

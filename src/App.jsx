import React, { Suspense } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import IssuesManagement from "./Components/issuesManagement";
import Loading from "./Components/Loading";

const fetchIssues = async () => {
  const result = await fetch("/data.json");
  return result.json();
};

const App = () => {
  const fetchPromise = fetchIssues();

  return (
    <div>
      <Navbar></Navbar>
      <Suspense fallback={<Loading></Loading>}>
        <IssuesManagement fetchPromise={fetchPromise} />
      </Suspense>

      <Footer></Footer>
    </div>
  );
};

export default App;

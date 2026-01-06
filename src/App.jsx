import React, { Suspense } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import IssuesManagement from "./Components/issuesManagement";

const fetchIssues = async () => {
  const result = await fetch("/data.json");
  return result.json();
};

const App = () => {
  const fetchPromise = fetchIssues();

  return (
    <div>
      <Navbar></Navbar>
      <Suspense fallback={<h2> I am loading </h2>}>
        <IssuesManagement fetchPromise={fetchPromise} />
      </Suspense>

      <Footer></Footer>
    </div>
  );
};

export default App;

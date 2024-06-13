import React from "react";
import Nav from "./components/Nav";
import HostpitalBed from "./components/HostpitalBed";

function App() {
  return (
    <div id="rootContainer" className="flex justify-center bg-image">
      <div id="appContainer" className="max-w-[1440px] w-[100vw] bg-image">
        <div className="xl:inline-block hidden">
          <Nav />
        </div>
        <HostpitalBed />
      </div>
    </div>
  );
}

export default App;

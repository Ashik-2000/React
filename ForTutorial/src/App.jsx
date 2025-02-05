import React from "react";
import CLocklist from "./components/ClockLIst"

function App() {
  const array = [1, 2, 3];
  return (
    <div>
      <CLocklist quantity={array} />
    </div>
  );
}

export default App;
